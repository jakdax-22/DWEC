let regex = /.*[\?\,\.].*/;
console.log(regex.test("Toge un atajo?"));
console.log(regex.test("tajando llego, antes"));
console.log(regex.test("tajando llego. antes"));
console.log(regex.test("tajando llego antes"));
