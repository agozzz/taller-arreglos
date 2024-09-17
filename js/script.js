// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  array.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
  // Escribe tu solución aquí

  // Filtrar los elementos de tipo extraño:
  // Uso del método filter que se usa para crear un nuevo array con todos los elementos que cumplan una condición específica. 
  // Uso de typeof para decirle que solo seleccione los elementos que sean de tipo string. 
  // (El operador typeof se utiliza para obtener el tipo de dato de una variable o expresión. Devuelve una cadena que representa el tipo de dato.)
  const soloStrings = strangeArray.filter(element => typeof element === 'string'); 
  console.log(soloStrings);

  // Ordenar alfabéticamente:
  // Uso del método sort para organizar las cadenas en orden alfabético.
  // toLowerCase se usa dentro de sort para asegurar que la comparación sea insensible a mayúsculas/minúsculas.
  // localeCompare es utilizado para comparar cadenas según las reglas de localización, lo que es útil para manejar correctamente el orden alfabético en diferentes idiomas y configuraciones regionales.
  const soloStringsOrdenados = soloStrings.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  
  console.log(soloStringsOrdenados);
  // Sugerencia de cómo mostrar el array => showList(strangeArray);
  showList(soloStringsOrdenados);
});