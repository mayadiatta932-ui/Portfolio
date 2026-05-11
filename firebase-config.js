// firebase-config.js
// Importation des modules Firebase nécessaires
import { initializeApp }
    from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore }
    from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
 
// Ta configuration personnelle (récupérée à l'étape 5)
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqO8HnPdrnmgA7n3KHsYXNacfVYSILY80",
  authDomain: "porfolio-17884.firebaseapp.com",
  projectId: "porfolio-17884",
  storageBucket: "porfolio-17884.firebasestorage.app",
  messagingSenderId: "19773226645",
  appId: "1:19773226645:web:7685df63490b20c3d0e59c",
  measurementId: "G-SGWJDJC3PF"
};
 
// Initialiser Firebase
const app = initializeApp(firebaseConfig);
 
// Récupérer une référence à la base Firestore
export const db = getFirestore(app);

