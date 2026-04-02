from machine import Pin
from utime import sleep

red = Pin(17, Pin.OUT)
yellow = Pin(18, Pin.OUT)
green = Pin(16, Pin.OUT)

bt1 = Pin(14,Pin.IN, Pin.PULL_DOWN)
bt2 = Pin(15,Pin.IN, Pin.PULL_UP)

leitura= 60000
porcentagem = leitura/5535 * 100
ultimo_estado = 0
ultimo_estado_consumo = 0


while True:
    if bt1.value() == 1 and ultimo_estado == 0:
        print("carregador conectado")
        for porcentagem in range (0, 105, 5):
            if porcentagem < 20:
                green.value(0)
                yellow.value(0)
                red.value(1)
                print("bateria fraca, o nivel da bateria é:",porcentagem)
                sleep(0.5)
            elif porcentagem >= 20 and porcentagem <= 80:
                red.value(0)
                yellow.value(1)
                print("bateria media, o nivel da bateria é:",porcentagem)
                sleep(0.5)
            elif porcentagem >79:
                yellow.value(0)
                green.value(1)
                print("bateria cheia,o nivel da bateria é:",porcentagem)
                sleep(0.5)
            else:
                print("valor invalido")
            ultimo_estado = 1
    elif bt1.value() ==1 and ultimo_estado == 1:
        sleep(0.5)
        print('carregador desconectado')
        green.value(0)
        red.value(0)
        yellow.value(0)
        ultimo_estado = 0
        
    if bt2.value() == 0 and ultimo_estado_consumo == 0:
        print("Motor Ligado - Consumindo Bateria")
        ultimo_estado_consumo = 1
        for porcentagem in range (105, 0, 5):
            if porcentagem < 20:
                green.value(0)
                yellow.value(0)
                red.value(1)
                print("bateria fraca, o nivel da bateria é:", porcentagem)
                sleep(0.5)
            elif porcentagem >= 20 and porcentagem <= 80:
                red.value(0)
                yellow.value(1)
                print("bateria media, o nivel da bateria é:",porcentagem)
                sleep(0.5)
            elif porcentagem >79:
                yellow.value(0)
                green.value(1)
                print("bateria cheiao, nivel da bateria é:",porcentagem)
                sleep(0.5)
            else:
                print("valor invalido")
          
    
    elif bt2.value() == 0 and ultimo_estado_consumo == 1:
        sleep(0.5)
        print('Motor Desligado')
        green.value(0)
        red.value(0)
        yellow.value(0)
        
        ultimo_estado_consumo = bt2.value()