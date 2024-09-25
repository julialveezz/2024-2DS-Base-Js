// Funções

let x = 'nada'

console.log(x)

x = 'oi'
imprimeTexto(x)
console.log(x)

console.log(x)

// Declarar uma função
// estrutura nomeDaFunção (parâmetros) { funcionalidades }
function imprimeTexto(){
    console.log(texto)
}

imprimeTexto('Sou estudante de Front-end')
imprimeTexto('Olá mundo')

function soma() {
    return 2+2
}

imprimeTexto(soma())
//console.log(soma())

// Função com dois parâmetros
function somaDeNumeros(numero01, numero02){
    return numero1 + numero2
}

imprimeTexto(somaDeNumeros(10, 8))

function divisaoDeNumeros(numero1, numero2){
    return numero1 / numero2
}

imprimeTexto(divisaoDeNumeros(10, 2))
imprimeTexto(divisaoDeNumeros (2, 10))

// Ordem de parâmetros

function apresentacao(nome, idade){
    return `Meu nome é ${nome} e tenho ${idade} anos.`
}

imprimeTexto(apresentacao('Julia', 15))
imprimeTexto(apresentacao(15, 'Julia')) // A ordem dos parâmetros é importante

//parâmetro inicial, para que a função começe com um parâmetro pré-definido
function multiplicacao(n1 = 1, n2 = 1){
    return n1 * n2
}

imprimeTexto(multiplicacao(2, 5))