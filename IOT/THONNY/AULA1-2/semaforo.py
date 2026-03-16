from machine import Pin
from utime import sleep

ledVermelho = Pin(16, Pin.OUT)
ledAmarelo = Pin(17, Pin.OUT)
ledVerde = Pin(18, Pin.OUT)

ledVermelho.value(0)
ledAmarelo.value(0)
ledVerde.value(0)

while(True):
while True:
    #Semáforo ABRIU
    ledVerde.value(1)
    ledAmarelo.value(0)
    ledVermelho.value(0)
    sleep(3)
   
    #Semáforo ATENÇÃO
    ledVerde.value(0)
    ledAmarelo.value(1)
    ledVermelho.value(0)
    sleep(1)
   
    #Semáforo FECHADO
    ledVerde.value(0)
    ledAmarelo.value(0)
    ledVermelho.value(1)
    sleep(2)