let valores = [5, 18, 22, 9, 4, 7]

console.log(valores)

//for(let pos=0; pos < valores.length; pos++ ) {
 //   console.log (`O valor ${pos} tem o resultado ${valores[pos]}`) }

 for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
 }