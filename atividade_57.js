const celsius_fahrenheit =  (temperatura_celsius) =>{

   let temperatura_fahrenheit = temperatura_celsius * 1.8 + 32;
   
return temperatura_fahrenheit;
;

}


let temperatura_fahrenheit = celsius_fahrenheit(12);

console.log(temperatura_celsius + "°C equivalem a " + temperatura_fahrenheit + "°F");
