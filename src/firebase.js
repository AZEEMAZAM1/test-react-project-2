// firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBvLbR0c-XGe-HPsUFfH5ivXh38_vPUHv8",
    authDomain: "react2-1f247.firebaseapp.com",
    projectId: "react2-1f247",
    storageBucket: "react2-1f247.firebasestorage.app",
    messagingSenderId: "805055856540",
    appId: "1:805055856540:web:7c14c4ad5ef5ff63ca9259",
    measurementId: "G-57XKQ9VVJW"
  
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
