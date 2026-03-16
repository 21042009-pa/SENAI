from machine import Pin, ADC, PWM
from utime import sleep

pot = ADC(28)
led = PWM(Pin(16))
led.freq(1000)

led.duty_u16(0) #iniciando o led desligado

while True:
    lei_pot = pot.read_u16()
    
    led.duty_u16(lei_pot) #o valor do potenciometro vai definir a intensidade do led.
    
    print('Valor da Leitura do Potenciômetro:', lei_pot)
    sleep(0.5)