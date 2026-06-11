/**
 * Muestra en pantalla los números del 1 al 100, sustituyendo los múltiplos de 3
 * por la palabra “fizz”, los múltiplos de 5 por “buzz” y los múltiplos de ambos,
 * es decir, los múltiplos de 3 y 5 (o de 15), por la palabra “fizzbuzz”.
 * +info: https://javguerra.github.io/2022-04-22-fizzbuzz/
 * @author Javier Guerra
 */

const START = 1;
const END = 100; // START > END

const result = [];

for (let i = START; i <= END; i++) {
  let value = '';

  if (i % 3 === 0) value += 'fizz';
  if (i % 5 === 0) value += 'buzz';

  result.push(value || i);
} // end for

console.log(result.join(', '));
