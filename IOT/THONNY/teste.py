from machine import Pin, PWM
from utime import sleep, ticks_us, ticks_diff
from dht import DHT22

LED = Pin(14, Pin.OUT)

buzzer = PWM(Pin(15))
#buzzer = Pin(15, Pin.OUT)
buzzer.freq(1000)

trig = Pin(22, Pin.OUT) 
echo = Pin(21, Pin.IN) 

pir = Pin(2, Pin.IN)

dht = DHT22(Pin(1))


while True:
    trig.low()
    sleep(0.002)
    trig.high()
    sleep(0.00001)
    trig.low()
    while echo.value() == 0:
        start = ticks_us()
    while echo.value() == 1:
        end = ticks_us()
    duracao = ticks_diff(end, start)
    distancia = (duracao * 0.0343) / 2

    dht.measure()
    temp = dht.temperature()

    if temp >= 26 and distancia <= 100 and pir.value() ==1 :
        print("Temperatura: {}°C".format(temp))
        print(f"Distância: {distancia:.2f} cm")
        print("Presença detectada")
        LED.value(1)
        buzzer.duty_u16(62000)
        sleep(0.5)
    else:
        print("Temperatura: {}°C".format(temp))
        print(f"Distância: {distancia:.2f} cm")
        print("Nenhuma presença detectada")
        LED.value(0)
        buzzer.duty_u16(0)
        sleep(0.5)

    
    sleep(2)

