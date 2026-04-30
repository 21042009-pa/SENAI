from machine import Pin, ADC, PWM
from utime import sleep

ldr = ADC(26)
led = PWM(Pin(16))
led.freq(1000)

while True:
    leitura_luz = ldr.read_u16()
    print(leitura_luz)
    if leitura_luz > 3000:
        led.value(1)
    else:
        led.value(0)

    sleep(0.5)
    
    