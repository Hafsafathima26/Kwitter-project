const firebaseConfig = {
      apiKey: "AIzaSyDueEedZAmHugBog6EBqY7G95HiMwLHQyo",
      authDomain: "kwitter-3919e.firebaseapp.com",
      databaseURL: "https://kwitter-3919e-default-rtdb.firebaseio.com",
      projectId: "kwitter-3919e",
      storageBucket: "kwitter-3919e.appspot.com",
      messagingSenderId: "497776147923",
      appId: "1:497776147923:web:5cdc7078b660024e198326"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   user_name=localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="Welcome " + user_name +"!";

   function add_room(){
         room_name=document.getElementById("room_name").value;
         firebase.database().ref("/").child(room_name).update({
               purpose:"adding room name"
         });
         localStorage.setItem("room_name",room_name);
         window.location="kwitter_page.html";
   }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      console.log("room name-" + Room_names);
      row="<div class='room_name' id="+Room_names+ "onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
