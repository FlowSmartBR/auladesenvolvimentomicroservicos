const { somar, subtrair } = require("../src/calculadora");

describe("Funções do Jogo", () => {
  test("Deve reconhecer erro do jogador", () => {
    expect(somar(2, 3)).toBe(5);
  });

  test("Deve lançar erro se argumentos não forem letras", () => {
    expect(() => somar(2, "a")).toThrow("Os argumentos devem ser letras.");
  });

  test("Deve desenhar o boneco", () => {
    expect(subtrair(5, 3)).toBe(2);
  });
});
