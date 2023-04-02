
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCwDtiQstoly_feDRk-VNbOgzptxD2FVc",
  authDomain: "chat-2dc61.firebaseapp.com",
  projectId: "chat-2dc61",
  storageBucket: "chat-2dc61.appspot.com",
  messagingSenderId: "295201430301",
  appId: "1:295201430301:web:f2a9108dfa83e47ca8dff4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app)



















// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";


// const firebaseConfig = {
//   apiKey: "AIzaSyA1VV0rufgmLcdzuhi47Tu1A-E_BeAQgzA",
//   authDomain: "chat-2cdde.firebaseapp.com",
//   projectId: "chat-2cdde",
//   storageBucket: "chat-2cdde.appspot.com",
//   messagingSenderId: "757313848482",
//   appId: "1:757313848482:web:24578cc74552faa60c43fb"
// };



// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth();
// export const storage = getStorage();
// export const db = getFirestore()