//Boton login: cargar usuario y contraseña
const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button')

button.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value
    }
    console.log(data)
})

//Login: abrir y cerrar ventana flotante
function abrirLogin(){
  document.getElementById("ventana").style.display="block";
}

function cerrarLogin(){
  document.getElementById("ventana").style.display="none";
}

//Informacion de contacto: abrir y cerrar ventana flotante
function abrir(){
  document.getElementById("ventanaFlotante").style.display="block";
}

function cerrar(){
  document.getElementById("ventanaFlotante").style.display="none";
}

//Acerca de: modificar texto
function cambiar_parrafo(){
    document.getElementById("edit-acercade").style.display="block";
    let texto = document.getElementById("text-acercade").innerText;
    console.log(texto);
  };
  
  function myFunction2(valor){
    document.getElementById("text-acercade").innerText=valor;
  };
  
  function logMessage(message){
    console.log(message + "<br>");
  }
  
  let textarea=document.getElementById("edit-acercade")
  textarea.addEventListener('keyup', (e) => {
    logMessage('key "${e.key}"  released [event: keyup]');
    if (e.key=="Enter"){
      document.getElementById("edit-acercade").style.display='none';
    }
  });

  /* esta linea va arriba, despues de "acerca de": <input type="file" id=""file1 onchange="showFile(this)"> </input>

  // esto es para que aparezca el botón para adjuntar archivos y va en script

  function showFile(input) {
  let file = input.files[0];
  alert('File name: ${file.name}');
  alert('last modified: ${file.lastModified}');

  let reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function() {
    console.log(reader.result);
    document.getElementById("text-acercade").innerText=reader.result;
  };
  reader.onerror = function(){
    console.log(reader.error);
  };
} */