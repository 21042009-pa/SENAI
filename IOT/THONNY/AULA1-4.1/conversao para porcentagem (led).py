from machine import Pin, PWM
from utime import sleep

led = PWM(Pin(14))
led.freq(1000)
leitura= 60000
porcentagem = leitura/g5535 * 100
print("o valor em porcentagem e de {porcentagem:.2f}% %")

#while True:
#    def converte_porcentagem (leitura):
#        porcentagem = leitura / 65535 * 100
        
#        converte_porcentagem(leitura)