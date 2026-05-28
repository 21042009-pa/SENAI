# main.py — Código principal do Pico 2W
# ─────────────────────────────────────────────────────────────────
# Este arquivo é executado automaticamente quando o Pico liga.
# Ele conecta no WiFi, conecta no broker MQTT e fica publicando
# uma mensagem de texto a cada 3 segundos.
#
# É o exemplo mais simples possível de comunicação IoT completa.
# Para adicionar sensores, substitua a variável 'mensagem' pelos dados lidos.

from config import *              # importa todas as variáveis do config.py
from wifi_connect import conectar_wifi
from umqtt.simple import MQTTClient  # biblioteca MQTT nativa do MicroPython
from utime import sleep

# ── 1. Conexão WiFi ───────────────────────────────────────────────
# Se não conectar, não tem sentido tentar o MQTT
if not conectar_wifi(WIFI_SSID, WIFI_PASS):
    print("[MAIN] Sem WiFi. Reinicie o dispositivo.")

else:
    # ── 2. Cliente MQTT ───────────────────────────────────────────
    # Cria o objeto com as configurações do config.py
    # Ainda não conectou — só preparou as configurações
    cliente = MQTTClient(CLIENT_ID, BROKER_IP, port=BROKER_PORT)

    try:
        # Conecta ao broker — é aqui que o Pico "aperta a mão" com o Mosquitto
        cliente.connect()
        print(f"[MQTT] Conectado ao broker: {BROKER_IP}")
        print(f"[MQTT] Publicando em: {TOPIC_PUB}")

        # ── 3. Loop principal ─────────────────────────────────────
from machine import Pin, PWM
from utime import sleep_us, sleep
import dht
import time

# ============================================
# Sensores
# ============================================

sensor_dht = dht.DHT22(Pin(14))

sensor_pir = Pin(15, Pin.IN)

trigger = Pin(22, Pin.OUT)
echo = Pin(21, Pin.IN)

# ============================================
# Atuadores
# ============================================

led = Pin(17, Pin.OUT)

buzzer = PWM(Pin(16))

# ============================================
# Configurações
# ============================================

TEMPERATURA_LIMITE = 26
DISTANCIA_LIMITE = 50

# ============================================
# Função ultrassônica
# ============================================

def medir_distancia():

    trigger.off()
    sleep_us(2)

    trigger.on()
    sleep_us(10)
    trigger.off()

    timeout = 30000

    inicio_espera = time.ticks_us()

    while echo.value() == 0:

        if time.ticks_diff(time.ticks_us(), inicio_espera) > timeout:
            return None

    inicio = time.ticks_us()

    while echo.value() == 1:

        if time.ticks_diff(time.ticks_us(), inicio) > timeout:
            return None

    fim = time.ticks_us()

    duracao = time.ticks_diff(fim, inicio)

    distancia = (duracao * 0.0343) / 2

    return distancia

# ============================================
# Loop principal
# ============================================

while True:

    try:

        sensor_dht.measure()
        temperatura = sensor_dht.temperature()

        pir = sensor_pir.value()

        distancia = medir_distancia()

        if distancia is None:
            print("Erro no ultrassônico")
            sleep(1)
            continue

        # ====================================
        # Lógica
        # ====================================

        if (
            pir == 1
            and distancia <= DISTANCIA_LIMITE
            and temperatura >= TEMPERATURA_LIMITE
        ):

            led.on()

            buzzer.freq(1000)      # frequência do som
            buzzer.duty_u16(30000) # volume/intensidade

            sistema = 1

        else:

            led.off()

            buzzer.duty_u16(0)

            sistema = 0

        # ====================================
        # Dashboard
        # ====================================

        print("temperatura:", temperatura, "°C")
        cliente.publish(TOPIC_PUB, temperatura.encode())
        print("pir:", pir)
        cliente.publish(TOPIC_PUB, pir.encode())
        print("distancia:", round(distancia, 2), "cm")
        cliente.publish(TOPIC_PUB, distancia.encode())
        print("sistema:", sistema)
        cliente.publish(TOPIC_PUB, sistema.encode())

        print("-----------------------")

    except Exception as erro:

        print("Erro:", erro)

    sleep(2)

    except Exception as e:
        # Captura qualquer erro (broker caiu, WiFi oscilou, etc.)
        print(f"[ERRO] {e}")
        print("[MQTT] Verifique o broker e a conexão WiFi.")

    finally:
        # finally executa SEMPRE — mesmo se der erro no try
        # Garante que a conexão é encerrada corretamente no broker
        try:
            cliente.disconnect()
            print("[MQTT] Desconectado.")
        except:
            pass