# name = input("Indique su nombre:")
# print("Hola " + name)
# complejo = complex(2.0, 2.0)
# print(complejo*complejo)

# Strings
palabra: str = "Hola"

# Enteros
entero: int = 5

# Para ir de 2 en 2
for i in range(0, 20, 2):
    print(i)

# boolean True/False
buleano: bool = True
print(buleano)

diccionario = {
    "nombre": "Christian",
    "edad": 28,
}

diccionario["nombre"] = "Miguel"
print(diccionario)
dato = diccionario.popitem()
print(dato)
print(diccionario)

prime_numbers:int = [2, 3, 5, 17]
lista_byte_array = bytearray(prime_numbers)

#Para saber el tipo
print(type(prime_numbers[0]))


