from person import Person

class Employee(Person):
    """
    Docu del método: Metodo de ejemplo Employee
    Se accede con Employee.__doc__
    """

    # Variable estática de la clase
    emp_count = 0

    # self es como this, y hay que llamarlo siempre en los metodos de la clase
    def __init__(self, name, age, birthdate, _salary):
        # Propiedades dentro del constructor
        super().__init__(name, age, birthdate)
        self._salary = _salary  # Empezar con _ Si queremos que sean privados
        Employee.emp_count += 1

    def display_count(self):
        print("Total employee %d" % Employee.emp_count)

    # Como un toString
    def __repr__(self) -> str:
        """
        Docu del metodo, se accede: Employee.__repr__.__doc__
        Es como el toString de Java
        """
        # Viene a ser el toString de Java
        return " " + super().__repr__() + " Salary: %d" % self._salary

    def displayEmployee(self):
        print("Name :", self.name, ", Salary: ", self._salary)
