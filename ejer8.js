const usuarios = [
 { nombre: "Ana", activo: true },
 { nombre: "Markel", activo: false },
 { nombre: "Ainhoa", activo: true }
];

let activosYordenados = usuarios.filter
(persona => persona.activo)
.map(persona => persona.nombre)
.sort();

console.log(activosYordenados);