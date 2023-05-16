let registros = [];

function validarCorreo(correo) {
  // Expresión para validar formato del correo
  const regexCorreo = /^\S+@\S+\.\S+$/;
  return regexCorreo.test(correo);
}

function registrar() {
  const nombre = document.getElementById("nombreID").value;
  const usuario = document.getElementById("usuarioID").value;
  const correo = document.getElementById("correoID").value;
  const contrasenia = document.getElementById("contraseniaID").value;
  const validarContrasenia = document.getElementById("validarContraniaID").value;
  const fechaNacimiento = document.getElementById("fechaNacimientoID").value;

  // Validar que los campos no estan vacíos
  if (nombre === "" || usuario === "" || correo === "" || contrasenia === "" || validarContrasenia === "" || fechaNacimiento === "") {
    alert("Por favor, complete todos los campos.");
    return;
  }

  // Validar que la contraseña sea igual
  if (contrasenia !== validarContrasenia) {
    alert("Las contraseñas no coinciden.");
    return;
  }

  // Validar que el formato del corroe
  if (!validarCorreo(correo)) {
    alert("Ingrese un correo válido.");
    return;
  }

  // Crear un objeto con los datos del registro
  const registro = {
    nombre: nombre,
    usuario: usuario,
    correo: correo,
    contrasenia: contrasenia,
    fechaNacimiento: fechaNacimiento
  };

  // Agregar el registro a la matriz
  registros.push(registro);

  // Limpiar los campos
  document.getElementById("nombreID").value = "";
  document.getElementById("usuarioID").value = "";
  document.getElementById("correoID").value = "";
  document.getElementById("contraseniaID").value = "";
  document.getElementById("validarContraniaID").value = "";
  document.getElementById("fechaNacimientoID").value = "";

  console.log(registros);
}

document.getElementById("buttonRegistrar").addEventListener("click", registrar);