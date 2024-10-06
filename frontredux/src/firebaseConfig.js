import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// Initialize Firebase
const app = initializeApp ({
 apiKey: "AIzaSyDn5hoo_CAg73jPzvQJXElGBSzZTwE90sU",
 authDomain: "locationvoiture-cafda.firebaseapp.com",
 projectId: "locationvoiture-cafda",
 storageBucket: "locationvoiture-cafda.appspot.com",
 messagingSenderId: "661798730298",
 appId: "1:661798730298:web:de7c09955570bfd3fa5303"
});

// Firebase storage reference
const storage = getStorage(app);
export default storage; 