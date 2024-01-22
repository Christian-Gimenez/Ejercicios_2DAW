lista = ["orange", "apple", "banana", "grape", "melon"]
lista2 = [1, 2, 4, 3, 11, 3]
sublista = lista[1:3]  # Coge desde el 1 hasta el 3
palabra: str = "hola que tal"

# También funciona con strings
subpalabra = palabra[1:3]  # [desdeIncluido:hastaNoIncluido)
print(sublista)
print(subpalabra)

# Darle la vuelta
lista.reverse()
print(lista)

# sort alfabeticamente
lista.sort()
print(lista)

# Añadir una lista como elemento de la lista
# lista.append(lista2) #['apple', 'banana', 'grape', 'melon', 'orange', [1, 2, 4, 3, 11]]
# print(lista)

# Inserta en la posicion 0 el numero 3.14
lista2.insert(0, 3.14)
print(lista2)

# Inserta en el ultimo
lista2.insert(len(lista2), 99)
print(lista2)

# Mostrar el ultimo
print(lista2[len(lista2) - 1])

# Reemplazar el ultimo
lista2[len(lista2) - 1] = 13
print(lista2)

# Como concat: une dos arrays
lista.extend(lista2)

# Copia una lista, porque poniendo el '=' es por Referencia
lista3 = lista2.copy()

# Cuenta cuantas veces aparece un elemento en una lista
num = lista2.count(3)

# Elimina el elemento indicado (el 1º que encuentra)
lista.remove("apple")
print(lista)

# Eliminar todos los apple
while True:
    if lista.count("apple") > 0:
        lista.remove("apple")
        continue
    else:
        break

# for
for x in lista:
    print(x)

# de 0 a 100 los pares
for i in range(0, 100, 2):
    print(i)

# de 1 a 5, de uno en uno
for i in range(1, 5):
    print(i)