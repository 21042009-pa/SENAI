from machine import Pin, PWM, ADC
from utime import sleep

led_red = PWM(Pin(17))
led_green = Pin(18,Pin.OUT)
led_blue = Pin(19,Pin.OUT)

led_red.duty_u16(0)

led_red.freq(1000)

pot = ADC(28)

while True:
    led_green.value(0)
    led_blue.value(0)
    
    lei_pot = pot.read_u16()
    
    led_red.duty_u16(lei_pot) #o valor do potenciometro vai definir a intensidade do led.
    
    print('Valor da Leitura do Potenciômetro:', lei_pot)
    sleep(0.5)
    