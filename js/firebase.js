const firebaseConfig = {
    apiKey: "AIzaSyDaY0Yhz5qXm84TbraRK-vLt0DILBWQL60",
    authDomain: "instargram-79676.firebaseapp.com",
    projectId: "instargram-79676",
    storageBucket: "instargram-79676.appspot.com",
    messagingSenderId: "791801761552",
    appId: "1:791801761552:web:3a11014358da1ae1e85f95",
    measurementId: "G-258V9BJ5WM"
  };
  
  
  firebase.initializeApp(firebaseConfig);

var provider = new firebase.auth.GoogleAuthProvider();
async function loginGoogle(){
   const response = await firebase.auth().signInWithPopup(provider);
   const user = {
    fullName : response.user.displayName,
    email : response.user.email,
    avatar : response.user.photoURL.replaceAll("=s96-c","")
   };
   console.log(user);
   window.location.href = "/index.html"
}