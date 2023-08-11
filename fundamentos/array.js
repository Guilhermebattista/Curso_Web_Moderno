// array é uma forma de agrupar múltiplos valores e apenas uma estrutura.
// em js o array não tem tamanho fixo, por ser fracamente tipado.
// array é definido por []

const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);

valores[4] = 10;
console.log(valores);

console.log(valores.length); // saber quantos elementos existe no array.

valores.push(null, "teste");// adicionar array.

delete valores[0]; // excluir 
console.log(valores)