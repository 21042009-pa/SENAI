from machine import Pin
from utime import sleep

pir = Pin(15, Pin.IN)

sleep(
    0)

while True:
    leitura = pir.value()
    if leitura ==1:
        print("presença detectada")
    else:
        print("nada detectado")
    
    sleep(0.5)