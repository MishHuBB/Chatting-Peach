
 firebaseConfig = {
      apiKey: "AIzaSyACEiDMMN71hwFJHGrNVHpIrFRDl_eJzuE",
      authDomain: "chatting-peach.firebaseapp.com",
      databaseURL: "https://chatting-peach-default-rtdb.firebaseio.com",
      projectId: "chatting-peach",
      storageBucket: "chatting-peach.appspot.com",
      messagingSenderId: "744437490073",
      appId: "1:744437490073:web:e2ac532b1603d664b53308"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout() {

}

function addRoom(){
      

}


