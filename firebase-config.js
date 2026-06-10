import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCHuiriR43mVWwOb7u92TdmbCoQU-weLYQ",
  authDomain: "dashboard-6d4fc.firebaseapp.com",
  databaseURL: "https://dashboard-6d4fc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dashboard-6d4fc",
  storageBucket: "dashboard-6d4fc.firebasestorage.app",
  messagingSenderId: "415408574366",
  appId: "1:415408574366:web:c6b1304b555d5c386e508f"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
