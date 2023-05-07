const cars = ['Saab', 'Volvo', 'BMW']

msg = "Declaring a constant array does NOT make the elements unchangeable:"

cars[0] = 'Toyota'
cars.push('Audi')

console.log(msg)
console.log(cars)
