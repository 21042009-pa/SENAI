from machine import Pin, PWM
from utime import sleep

led = PWM(Pin(15))
led.freq(1000)
led.duty_u16(0)


while True:
    for i in range (0, 65535, 3000):
        led.duty_u16(i)
        sleep (0.2)
    for j in range (65535, 0, -3000):
        led.duty_u16(j)
        sleep (0.2)
    
