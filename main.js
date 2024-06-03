
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, collection, setDoc, addDoc, onSnapshot,query,where,} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

const firebaseConfig = {

    apiKey: "AIzaSyB-6EDx_3wYhVL0Qlu0zfIRNCHmOkn2RRE",
  
    authDomain: "prueba1-90ba1.firebaseapp.com",
  
    projectId: "prueba1-90ba1",
  
    storageBucket: "prueba1-90ba1.appspot.com",
  
    messagingSenderId: "547664203299",
  
    appId: "1:547664203299:web:adbf4be7163cdf06db2b96"
  
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
 
window.agregar = function agregar(platillo){
    
addDoc(collection(db, "platillos"),platillo);
}

// leer datos

window.leerDatos = async function leerDatos(categoria){
console.log(categoria);
    var listaRegistros = document.getElementById('listaRegistros');
    listaRegistros.innerHTML = "";
    var q = query(collection(db, "platillos"), where("categoria", "==", categoria));
    
    var querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
  listaRegistros.innerHTML +=
    '<tr>' +
        '<td>' + doc.data().categoria + '</td>' +
        '<td>' + doc.data().nombre + '</td>' +
        '<td>' + doc.data().descripcion + '</td>' +
        '<td>' + doc.data().precio + '</td>' +
        '<td>' + doc.data().ingredientes + '</td>' + 
        '<td><i class="fa-solid fa-pen btneditar"></i></td>' + 
        '<td><i class="fa-solid fa-trash btneliminar"></i></td>' +
    '</tr>';
});
    
}







