# Importamos del fichero la clase
from employee import Employee

emp1 = Employee("Javi", 28, "25/07/1995", 25000)
print(__name__) #Imprime el nombre de donde estamos
print(Employee.__module__) #Imprime el modulo donde esta la clase
print(emp1)

# Imprimir la do cumentación de la clase
#print(Employee.__doc__)
#emp1 = Employee("Javi", 25000)
## print(emp1)
#
## Metodo para saber si tiene el atributo name -> True
#print(hasattr(emp1, "name"))
#
## Metodo para agregar una nueva propiedad
#setattr(emp1, "age", 89)
## Metodo para acceder al valor de la propiedad
#print(getattr(emp1, "age"))
#
## Metodo para eliminar una propiedad
#delattr(emp1, "age")
