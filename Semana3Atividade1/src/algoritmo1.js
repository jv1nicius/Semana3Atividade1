//criação de um array chamado de "numeros"
const numeros = [1,2,3,4,5];
//criação de uma função denominada "calcularDobro" que recebe um numero e retorna o dobro
let calcularDobro = (numero) => numero*2;
//cria uma variavel denominada "numerosDobro" que recebe uma lista do metodo map que itera sobre o 
//array "numeros" e chama a função calcularDobro a cada iteração passando como parâmetro o item iterado
const numerosDobro = numeros.map((numero)=>calcularDobro(numero));
//mostra no console do browser os numeros calculados ao dobro
console.log(numerosDobro);
