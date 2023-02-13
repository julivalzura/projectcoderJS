const objectFromEntries = (entries) =>
  [...entries].reduce((obj, [key, val]) => ({ ...obj, [key]: val }), {});

const formToObject = (form) => objectFromEntries(new FormData(form).entries());

const valores = {
  USD: 375,
  ARS: 1,
  BRL: 70,
};

const convert = (importe, desde, hacia) =>
  (valores[desde] / valores[hacia]) * importe;

const output = document.getElementById("output");

document.getElementById("conversor").addEventListener("submit", (event) => {
  event.preventDefault();

  const { importe, desde, hacia } = formToObject(event.target);
  const result = convert(importe, desde, hacia);

  output.textContent = `${importe} ${desde} = ${result.toFixed(2)} ${hacia}`;
});
