"use strict";

//Date -> Clase estática
/*Trabaja con fechas y horas que se miden en milisegundos desde la media noche
del 01 de enero de 1970 en formato UTC (Unix epoch). Un día tiene 86.400.000 milisegundos

El rango del objeto Date va desde -100.000.000 días hasta 100.000.000
días respecto al 1 de enero de 1970 UTF


new Date();
new Date(milisegundos)
new Date(cadenaFecha)
new Date(añoNum, mesNum, diaNum, horNum, minNum, segNum, milsNum);

añoNum = Normal
mesNum = del 0 al 11
diaNum = Normal

horaA = new Date();
horaB = new Date();
diferenciaMilisegundos = hHay los mismos pero añadiendo UTCoraB - horaA;

//Metodos
Date.now() La fecha actual (ms)
Date.parse() Transforma de string a Date
Date.UTC() Que fecha es con respecto

getDate() Devuelve el dia del mes de la fecha especificada segun la hora local
getDay() Devuelve el dia de la semana de la fecha especificada segun la hora local (0=domingo... 6=sabado)
getFullYear() Devuelve el año de la fecha especificada segun la hora local
getHours() Devuelve la hora
getMilliseconds()
getMinutes()
getSeconds()
getTimezoneOffset()
getTime()
Hay los mismos pero añadiendo UTC

setDate() Establece el dia del objeto Date segun la hora local
setFullYear()
setHours()
setMilliseconds()
setMinutes()
setMounth()
setSeconds()
setYear()
Hay los mismos pero añadiendo UTC

Normalmente hay que hacer un get, hacer una operacion y luego ponerlo en un set al obj Date

Metodos convertir a cadena
toLocaleString()
setUTCDate()
toLocaleDateString()
toLocaleTimeString()
toSource()
toString()
toUTCString()
valueOf()

Para saber realmente si la fecha es inglesa o española usamos estos metodos
fecha.toJSON() //Saca lo mismo pero en plan fecha:"cadena"
fecha.toISOString()

//Sacaron esta Api para representar internacionalmente las fechas
new Intl.DateTimeFormat(locales)
Pero las funcionalidades las ha absorbido el toLocaleString()


*/

