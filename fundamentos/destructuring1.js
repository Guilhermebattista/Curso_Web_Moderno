const pessoa = {
nome: "Guilherme Batista",
idade: 21,
    endereco: {
    logradouro: "Rua de sofia",
    numero: 28,
    bairro: "Duque de Caixias",
    cidade: "Betim",
    estado: "Minas Gerais"


    }
} 
const {nome, idade} = pessoa
console.log(nome, idade)

const { endereco: {logradouro, numero}} = pessoa
console.log(logradouro, numero)

console.log(pessoa)