function zeroArray(m, n) {
    let newArray = [];
    let row = [];
    for(let i = 0; i < m; i++) {
        // adicione o m-th linha dentr do newArray
        for(let j = 0; j < n ; j++) {
            row.push(1, 3);
        }
        newArray.push(row);
        console.log(row);
        console.log(newArray);
    }
    return newArray;
}
let matrix = zeroArray(3, 1);












// let a = 14;

// let b = 1;

// let c = a + b

// let d = c;

// const msg = 'o numero é: '

// function parImpar() {
//     if(c%2 == 0) {
//         return 'par'
//     } else {
//         return 'impar'
//     }

// } 

// function maiorMenor() {
//     if (d >= 18 && d < 30){
//         return 'tome vacina'
//     }
//     else if (d > 30) {
//         return 'Aguarde'
//     }

//    else {
//     return 'Não obrigatório'

//    }
// }




// console.log(msg + parImpar(c))
// console.log(`Sua idade é ${d} ` + maiorMenor())
    