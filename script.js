const restaurantesPorCiudad = {
  "bogota": [
    { nombre: "Restaurante: Ushin Japanese & Grill", direccion: "Dirección: Calle 24a # 57 - 60 Piso 14 Hotel Grand Haytt" },
    { nombre: "Restaurante: Los Galenos", direccion: "Dirección: Cra. 23 # 93 -23, Localidad de Chapinero" },
    { nombre: "Restaurante:Santa Fe Cafe & Restaurante", direccion: "Dirección: Calle 26B 4 No. 4-30" },
  ],
  "medellin": [
    { nombre: "Restaurante: Cala Roca", direccion: "Dirección: Carrera 34 5g 62" },
    { nombre: "Restaurante: Madurando", direccion: "Dirección: Cl. 10 #30-210 C.C. Vizcaya" },
    { nombre: "Restaurante: Della Nonna Mall del Este", direccion: "Dirección: Carrera 25 # 3-45, Local 193"},
  ],
  "cartagena": [
    { nombre: "Restaurante: Pezetarian", direccion: "Dirección: Carrera 7 #36-19"},
    { nombre: "Restaurante: Persepolis Gastrobar", direccion: "Dirección: Carrera 2 9 161 Bocagrande Av. San Martín "},
    { nombre: "Restaurante: Mama's Pizza", direccion: "Dirección: Calle Del Tablon #7-35"},
  ],
  
};
//se pone una constante con el valor al cual se va a acceder despues dependiendo de cual ciudad se nombre


function buscarRestaurantes() {
  const ciudad = document.getElementById("ciudad").value;
  const restaurantes = restaurantesPorCiudad[ciudad];
  const resultadosDiv = document.getElementById("resultados");
// Función para buscar y mostrar los restaurantes por ciudad

  resultadosDiv.innerHTML = ""; 
  // Limpiar resultados anteriores

  if (restaurantes) {
    const listaRestaurantes = document.createElement("ul");

    for (let i = 0; i < 4 && i < restaurantes.length; i++) {
      const restaurante = restaurantes[i];
      const restauranteItem = document.createElement("li");
      restauranteItem.textContent = `${restaurante.nombre} - ${restaurante.direccion}`;
      listaRestaurantes.appendChild(restauranteItem);
    }
    //la estuctura con la que se agregara el resuldado de los restaurantes + el nombre

    resultadosDiv.appendChild(listaRestaurantes);
  } else {
    resultadosDiv.textContent = `No se encontraron restaurantes en esa ciudad.`;
  }
  //lo que se mostrará en caso de que se use una ciudad en la que no se encuentran rstaurantes, al ser un documento de opsion esto no pasara pero es mejor tener un valor por defaul en caso de que por algún error en el código
}
