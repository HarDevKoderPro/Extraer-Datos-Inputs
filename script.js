setTimeout(() => {
  
  ("use strict");

  // -----------------------------------------------------------------
  // REFERENCIAS DEL DOM
  // -----------------------------------------------------------------
  const getEl = (id) => document.getElementById(id);
  const inputNombre = getEl('inputNombre');
  const inputApellido = getEl('inputApellido');
  const inputEdad = getEl('inputEdad');
  const btnMostrarDatos = getEl('btnMostrarDatos');
  const spanResultados = getEl('spanResultados');

  // -----------------------------------------------------------------
  // FUNCIONES
  // -----------------------------------------------------------------
  // Extrae los valores de los inputs y los guarda en un objeto JSON
  const extraerDatosInputs = () => {
    let datosUsuario = {
      nombre: inputNombre.value,
      apellido: inputApellido.value,
      edad: inputEdad.value,
    };

    return datosUsuario;
  };


  // -----------------------------------------------------------------
  // PROGRAMA PRINCIPAL
  // -----------------------------------------------------------------
  btnMostrarDatos.addEventListener('click', ()=>{
    let datosExtraidos = extraerDatosInputs();
    spanResultados.innerText = `
    Nombre: ${datosExtraidos.nombre}
    Apellido: ${datosExtraidos.apellido}
    Edad: ${datosExtraidos.edad}`

  })


}, 50);