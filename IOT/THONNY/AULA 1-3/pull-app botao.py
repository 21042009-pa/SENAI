from machine import Pin
from utime import sleep

pull_down = Pin(19, Pin.IN)

while True:
    estado_botao = pull_down.value()
    
    if estado_botao == 0:
        print("0 - não pressionado (high)")
    else:
        print("1 - pressionado (low)")
    sleep(1)