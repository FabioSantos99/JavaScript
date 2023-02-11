let amigo = {nome: 'Maria',
sexo: 'F',
salario: 2400,
ganhar(p=0){
    console.log('Ganhou')
    this.salario += p

}}
amigo.ganhar(157)
console.log(`${amigo.nome} do sexo ${amigo.sexo} ganha ${amigo.salario}`)