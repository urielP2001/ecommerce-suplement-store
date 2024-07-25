import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from "firebase/app"


const firebaseConfig = {
  apiKey: "AIzaSyANbW5u8nSB-CRYNkBoEk76xynjQz8G9mo",
  authDomain: "ecommerce-suplement-store.firebaseapp.com",
  projectId: "ecommerce-suplement-store",
  storageBucket: "ecommerce-suplement-store.appspot.com",
  messagingSenderId: "768455755646",
  appId: "1:768455755646:web:8c38568c80c4bcdc6e152f"
};


const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(  /* Esta función se utiliza para renderizar el contenido especificado dentro de la raíz creada. 
                                                                En esta linea se indica a react sobre que componente del DOM debe renderizar la aplicacion (root). */
  <React.StrictMode>                                          {/* Es un componente que ayuda a detectar problemas potenciales en la aplicación. */}
    <App />                                                    
  </React.StrictMode>
)
