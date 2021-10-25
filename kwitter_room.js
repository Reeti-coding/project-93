// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCO9CYpFj-h-TBNF_S-3hmzDehnI5DUCN0",
    authDomain: "project-93-5e684.firebaseapp.com",
    databaseURL: "https://project-93-5e684-default-rtdb.firebaseio.com",
    projectId: "project-93-5e684",
    storageBucket: "project-93-5e684.appspot.com",
    messagingSenderId: "145288326910",
    appId: "1:145288326910:web:3fbe0f26dc130a77853faf"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  
  function addroom() {
    room_name = document.getElementById("room_name").value;

   localStorage.setItem("Roomname",room_name);

   window.location = "kwitter_room.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
Room_names = childKey;
//Start code

//End code
});});}
getData();

