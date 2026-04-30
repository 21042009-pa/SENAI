from machine import Pin, ADC, PWM
from utime import sleep

ldr = ADC(26)
led_red = PWM(Pin(16))
led_blue = PWM(Pin(17))
led_green = PWM(Pin(15))
led.freq(1000)

while True:
    leitura_luz = ldr.read_u16()
    print(leitura_luz)
    if leitura_luz > 5000 :
        led_green.value(1)
        led_red.value(0)
        led_blue.value(0)
        
    if leitura_luz >3000 and <5000:
        led_green.value(0)
        led_red.value(0)
        led_blue.value(1)
    else:
        led_green.value(0)
        led_red.value(1)
        led_blue.value(0)
        
    sleep(0.5)
    
    