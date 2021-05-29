const esPalindromo = (texto) => {
  texto = texto.toLowerCase();
  texto = texto.replace(/[.,:;()_?¿!¡-\s]/g, "");
  texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const textoInvertido = texto.split("").reverse().join("");

  return textoInvertido === texto;
};

const frase1 = "Dábale arroz? a la, zorra el abad";
const frase2 = "cosa que no es un palíndromo";
console.log(esPalindromo(frase1));
console.log(esPalindromo(frase2));
