//cria uma variavel que recebe uma lista de inteiros
const numbers = [1,2,3,4,5];
//declaração de uma lista que itera sobre a lista "numbers" usando map com a variavel de iteração denomindada de "x" e
//retorna o dobro de cada valor da iteração, retornando uma lista dos valores multiplicados por 2
const output = numbers.map((x)=>{
  return x * 2;  
});
//mostra no console do browser a lista "output"
console.log(output);
