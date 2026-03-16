from machine import Pin
from utime import sleep

pull_down = Pin(19, Pin.IN)

while True:
    estado_botao = pull_down.value()
    
    if estado_botao == 1:
        print("1 - pressionado (high)")
    else:
        print("0 - não pressionado (low)")
    sleep(1)