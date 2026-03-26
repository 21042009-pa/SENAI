from machine import Pin, ADC
from utime import sleep

led =  Pin(18, Pin.OUT)
pot = ADC(27)

while True:
    estado_pot = pot.read_u16()
    led.toggle()
    sleep(65535/ estado_pot * 0.1)
    sleep(0.2)