function compras (trabalho1, trabalho2){
const comprarSorvete = trabalho1 || trabalho2     // '||' termo OU
const comprartv50 = trabalho1 && trabalho2  // '&&' termo E
const comprartv32 = trabalho1 != trabalho2 // '!=' modo de usar o ou exclusivo
const manterSaudavel = !comprarSorvete
return {comprarSorvete, comprartv50, comprartv32, manterSaudavel}//Maneira tcnólogica de criar objetos.
}
console.log(compras(false, false))
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
