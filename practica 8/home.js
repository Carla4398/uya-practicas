 // Initialize Firebase
  var firebaseConfig = {
    apiKey: "AIzaSyDMteMtPJgh97u8HznGWXf4gA_Uj9h9rAA",
    authDomain: "sipc-59433.firebaseapp.com",
    databaseURL: "https://sipc-59433.firebaseio.com",
    projectId: "sipc-59433",
    storageBucket: "sipc-59433.appspot.com",
    messagingSenderId: "605100980873",
    appId: "1:605100980873:web:b8861402f150d840f0e458",
    measurementId: "G-GYXY9ELHE8"
  };
     firebase.initializeApp(firebaseConfig);

//Referencia a coleeccion de mensajes
var messagesRef = firebase.database().ref('messages');
//Escuchar al form

document.getElementById('contactForm').addEventListener('submit',submitForm);
//mandar
function submitForm(e) {
  /* para que no lo envie al propio html */
  e.preventDefault();
  
  //Coger los valores
  var message = getInputval('message');
  var name = getInputval('name');
  var email = getInputval('email');
  var tipo = getInputval('tipo');
  //guardarlos
  saveMessage(tipo, name, email, message);
  
  //Mostrar que se envío
   document.getElementById("alert").style.display = "block";
  //Esconderlo despues en ms
  setTimeout(function(){ document.getElementById("alert").style.display = "none";},5000);
  //Vaciar el form
   document.getElementById('contactForm').reset();
}

//Funcion para coger los valores del form

function getInputval(id) {
  return document.getElementById(id).value;
}

//Función para guardar los mensajes en firebase
//Recive las variables del form que quieras
function saveMessage(tipo, name, email, message) {
  var newMessageRef = messagesRef.push();
  //Campo y valor se le al firebase con set
  newMessageRef.set({
    tipo:tipo,
    name:name,
    email:email,
    message:message
  });
}