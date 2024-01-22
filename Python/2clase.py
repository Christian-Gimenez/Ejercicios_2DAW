# Funciones
def  calculate_max(num1:int, num2:int) -> int:
    return num1 + num2;

def num_max(num1, num2, num3):
    if num1 >= num2 and num1 >= num3:
        return num1
    elif num2 >= num1 and num2 >= num3:
        return num2
    return num3


# Ternario
a, b = 10, 20
min = a if a < b else b
print(min)

print(type(calculate_max(3, 2)))