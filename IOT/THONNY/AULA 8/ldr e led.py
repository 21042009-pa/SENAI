from machine import Pin, ADC, PWM
from utime import sleep

ldr = ADC(26)
led = PWM(Pin(16))
led.freq(1000)

while True:
    leitura_luz = ldr.read_u16()
    print(leitura_luz)
    brilho_invertido = 65535 - leitura_luz
    led.duty_u16(brilho_invertido)
    sleep(0.5)
    
    