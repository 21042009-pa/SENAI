// script.js — Lógica do Dashboard
// ─────────────────────────────────────────────────────────────────

// ── Configuração ──────────────────────────────────────────────────
// Mantemos a porta 9001 que é o padrão do WebSockets no Mosquitto
const BROKER = "ws://10.132.112.4:9001"; 

// Tópico de sensores e tópico de comandos
const TOPICO_SENSORES = "senai/grupo3/sensores"; 
const TOPICO_COMANDOS = "senai/grupo3/comandos";

// ClientID único para este browser
const CLIENT_ID = "dashboard_" + Math.random().toString(16).slice(2, 8);

// ── Elementos do HTML que vamos atualizar ────────────────────────
const temperatura = document.querySelector("#temperatura");
const presenca = document.querySelector("#presenca");
const led = document.querySelector("#led");
const buzzer = document.querySelector("#buzzer");
const botaoModo = document.querySelector("#botaoModo");
const modoEconomicoTexto = document.querySelector("#modoEconomico");

// ── Funções auxiliares ────────────────────────────────────────────

// Adiciona log no console do navegador
function adicionarLog(texto, cor = "gray") {
  const hora = new Date().toLocaleTimeString("pt-BR");
  console.log(`%c[${hora}] ${texto}`, `color: ${cor}`);
}

// ── Conexão MQTT ──────────────────────────────────────────────────
adicionarLog(`Conectando em ${BROKER}...`);
const cliente = mqtt.connect(BROKER, {
  clientId: CLIENT_ID,
  clean: true,
});

// Evento: disparado quando a conexão com o broker é estabelecida
cliente.on("connect", () => {
  adicionarLog("Conectado com sucesso!", "green");

  // Assina o tópico para começar a receber mensagens do Pico
  cliente.subscribe(TOPICO_SENSORES, (err) => {
    if (!err) {
      adicionarLog(`Assinando: "${TOPICO_SENSORES}"`);
    }
  });
});

// Evento: disparado toda vez que uma mensagem chega no tópico assinado
cliente.on("message", (topico, payload) => {
  const mensagem = payload.toString();
  adicionarLog(`[${topico}] ${mensagem}`, "orange");

  let temperatura_valor, pir_valor, distancia_valor, sistema_valor;

  try {
    // Tenta interpretar o JSON enviado pelo Python
    const dados = JSON.parse(mensagem);
    temperatura_valor = dados.temperatura;
    pir_valor = dados.pir;
    distancia_valor = dados.distancia;
    sistema_valor = dados.sistema;

  } catch (e) {
    // Fallback caso não seja JSON
    const partes = mensagem.split(",");
    temperatura_valor = partes[0];
    pir_valor = partes[1];
    distancia_valor = partes[2];
    sistema_valor = partes[3];
  }

  // ── Atualização do HTML ──
  
  if (temperatura) {
    temperatura.textContent = temperatura_valor + " °C";
  }

  // Lógica corrigida: distância <= 50
  if (presenca) {
    if (pir_valor == 1 && distancia_valor <= 50) {
      presenca.textContent = "Detectada";
    } else {
      presenca.textContent = "Não detectada";
    }
  }

  if (led && buzzer) {
    if (sistema_valor == 1) {
      led.textContent = "Led: Ligado";
      buzzer.textContent = "Buzzer: Ligado"; 
    } else {
      led.textContent = "Led: Desligado";
      buzzer.textContent = "Buzzer: Desligado"; 
    }
  }
});

// Evento: disparado quando ocorre um erro de conexão
cliente.on("error", (err) => {
  adicionarLog(`ERRO: ${err.message}`, "red");
});

// Evento: disparado quando a conexão é encerrada
cliente.on("close", () => {
  adicionarLog("Conexão encerrada.", "red");
});

// ── Controle do Botão (Enviar comandos para o Pico) ──────────────
let sistemaLigado = true; // Começa como 'true' acompanhando o Python

if (botaoModo) {
  botaoModo.addEventListener("click", () => {
    sistemaLigado = !sistemaLigado; // Inverte o estado
    
    if (sistemaLigado) {
      botaoModo.textContent = "Desativar Economia";
      modoEconomicoTexto.textContent = "Ativado";
      cliente.publish(TOPICO_COMANDOS, "ON");
      adicionarLog("Comando enviado: ON", "blue");
    } else {
      botaoModo.textContent = "Ativar Economia";
      modoEconomicoTexto.textContent = "Desativado";
      cliente.publish(TOPICO_COMANDOS, "OFF");
      adicionarLog("Comando enviado: OFF", "blue");
    }
  });
}