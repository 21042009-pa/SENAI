from machine import Pin, ADC, PWM
from utime import sleep

potenciometro = ADC(28)
led_pwm = PWM(Pin(16))
led_comum = Pin(17, Pin.OUT)

led_pwm.freq(1000)

while True:
    valor = potenciometro.read_u16()
    porcentagem = int((valor * 100) / 65535)
   
    led_pwm.duty_u16(valor)
    
    if porcentagem > 50:
        led_comum.value(1)
    else:
        led_comum.value(0)
   
    print(f"{porcentagem}%")
    sleep(0.5)