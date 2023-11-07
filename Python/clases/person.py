class Person:
    def __init__(self, name, age, birthdate):
        self.name = name
        self.age = age
        self.birthdate = birthdate

    def __repr__(self) -> str:
        return (
            "Name: %s" % self.name
            + "Age: %s" % self.age
            + "Birthdate %s" % self.birthdate
        )
