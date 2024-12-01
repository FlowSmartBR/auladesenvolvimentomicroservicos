function somar(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Os argumentos devem ser letras.");
  }
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

module.exports = { somar, subtrair };
