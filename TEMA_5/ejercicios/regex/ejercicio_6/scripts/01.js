let regex = /(perro|perra|tigre|tigresa)/;
console.log(regex.test("hola perro a"));
console.log(regex.test("perra"));
console.log(regex.test("hola tigre a"));
console.log(regex.test("hol tigresa"));
console.log(regex.test("pero la de Parra,"));
console.log(regex.test("p1rra tenía una parra"));
