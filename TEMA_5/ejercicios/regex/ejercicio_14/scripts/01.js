let regex = /\bcasa\b.*\bmoto\b|\bmoto\b.*\bcasa\b/;
console.log(regex.test("Fui a casa en moto"));
console.log(regex.test("Se estropeó la moto antes de llegar a casa"));

