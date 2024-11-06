//cria a variavel input que recebe o valor digitado no prompt do html
const input = prompt();
//cria a variavel value transforma em inteiro o valor do input
const value = parseInt(input);
//cria a variavel "array", instância o objeto do tipo Array recebendo como parâmetro o inteiro de "value", o fill retorna a lista com todos os valores modificados para null
const array = new Array(value).fill(null);
//cria a variavel "value", instância o objeto do tipo Array recebendo como parâmetro o inteiro de "value", o fill retorna a lista com todos os valores modificados para null e tenta e itera 
let values = new Array(value)
  .fill(null)
  .map((currentValue, index) => index + 1);

console.log(values)