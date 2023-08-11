let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

console.log("Os verdadeiros...");
console.log(!!3); //!! usado para definir se é true ou false.
console.log(!!-1);
console.log(!!" ");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);

console.log("Os false");
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!undefined);

console.log("Para finalizar...");
console.log(!!("" || null || 0 || " "));

let nome = "Guilherme";
console.log(nome || "Desconhecido");
// termo || é usado como "ou" para uma determinada função.