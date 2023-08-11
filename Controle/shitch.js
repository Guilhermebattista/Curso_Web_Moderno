const imprimirResultado = function (nota){
    switch (Math.floor(nota)) { //math.floor usado para arredondar para baixo
        case 10:
        case 9:
        console.log('Quadro de honra')
        break // usado para executar apenas aquele case depois sair
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
        console.log('Recuperação')
        break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
            default: // mesmo que o else (outro).
                console.log('Nota Inválida')
    }
}
imprimirResultado(10)
imprimirResultado(9)
imprimirResultado(8)
imprimirResultado(7)
imprimirResultado(6)
imprimirResultado(3)
imprimirResultado(6,7)
imprimirResultado(8,9)
imprimirResultado(9.7)
imprimirResultado(-1)
imprimirResultado('')