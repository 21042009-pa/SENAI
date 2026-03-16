from machine import Pin, ADC
from utime import sleep

pot = ADC(28)

while True:
    leitura = pot.read_u16()
    print("valor leitura potenciomentro", leitura)
    sleep(1)