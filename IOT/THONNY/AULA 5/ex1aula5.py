from machine import Pin
from utime import sleep
#familia dht
from dht import DHT22

sensor = DHT22(Pin(15))

while True:
    #diz ao sensor que ele iniciára/solicitará uma leitura (umidade ou temperatura)
    sensor.measure()
    
    #leitura da temperatura
    temperatura = sensor.temperature()
    
    print(f" a temperatura é: {temperatura}")
    sleep(2)