alert('Hello World!')

let a = prompt('Digite um número')
let b = prompt('Digite outro número')
let soma = Number(a) + Number(b)
alert(`A soma de ${a} e ${b} é igual a ${soma}`)

let valor = prompt('Digite um valor')

if (!isNaN(valor)) {
  alert('É um número')
} else {
  alert('Não é um número')
}

let userInput = prompt('Digite um valor:')

if (typeof userInput === 'string' && isNaN(userInput)) {
  alert('É uma string')
} else {
  alert('Não é uma string')
}

let boolean = prompt('Digite um valor:')

if (boolean === 'true') {
  alert('É verdadeiro')
} else {
  alert('É falso')
}

let Num = prompt('Digite um número')
let Num2 = prompt('Digite outro número')
let sub = Number(Num) - Number(Num2)
alert(`A subtração de ${Num} - ${Num2} é igual a ${sub}`)

let add = prompt('Digite um número')
let add2 = prompt('Digite outro número')
let mult = Number(add) * Number(add2)
alert(`A multiplicação de ${add} * ${add2} é igual a ${mult}`)

let div = prompt('Digite um número')
let div2 = prompt('Digite outro número')
let res = Number(div) / Number(div2)
alert(`A divisão de ${div} / ${div2} é igual a ${res}`)

let numero = prompt('Digite um número:')

if (isNaN(numero)) {
  alert('Não é um número válido')
} else if (numero % 2 === 0) {
  alert('É um número par')
} else {
  alert('Não é um número par')
}

let numero2 = prompt('Digite um número:')

if (isNaN(numero2)) {
  alert('Não é um número válido')
} else if (numero2 % 2 !== 0) {
  alert('É um número ímpar')
} else {
  alert('Não é um número ímpar')
}
