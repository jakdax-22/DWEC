let regex = /\bp[a-zA-Z]r+.*a$\b/;
console.log(regex.test("Parra tenía una parra"));
console.log(regex.test("pero la perra de Parra"));
console.log(regex.test("p1rra tenía una parra"));
