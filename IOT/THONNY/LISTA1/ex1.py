from machine import Pin
from utime import sleep

botao = Pin(4, Pin.IN, Pin.PULL_DOWN)
led = Pin(16, Pin.OUT)

while True:
    if botao.value() == 0:
        led.value(0)
    else:
        led.value(1)