//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAC-Lyul8heFG4qS3VTcVspnk0QmbKKYmc",
    authDomain: "let-s-chat-56824.firebaseapp.com",
    databaseURL: "https://let-s-chat-56824-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-56824",
    storageBucket: "let-s-chat-56824.appspot.com",
    messagingSenderId: "946188709203",
    appId: "1:946188709203:web:466233f80f5606a5d085a6",}

 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 user_name = localStorage.getItem("user_name")
 
 function add_room() {
       Room_name = document.getElementById("room_name").value
       firebase.database().ref("/").child(Room_name).update({
             purpose: "adding room name"
       })
       localStorage.setItem("room_name", Room_name)
 
       window.location ="kwitter_page.html"
 }
 function getData() {
       firebase.database().ref("/").on('value', function (snapshot) {
             document.getElementById("output").innerHTML = "";
             snapshot.forEach(function (childSnapshot) {
                   childKey = childSnapshot.key;
                   Room_names = childKey;
                   //Start code
              console.log("room_name",Room_name)
              row="<div class=room_name id="+Room_names+" onclick=RedirectToRoom(this.id)>#"+Room_names+"</div><hr>"
              document.getElementById("output").innerHTML+=row
                   //End code
             });
       });
 }
 getData();
 
 function RedirectToRoom(name){
       console.log(name)
       localStorage.setItem("room_name",name)
       window.location="kwitter_page.html"
 }
 function logout(){
       localStorage.removeItem("user_name")
       localStorage.removeItem("room_name")
       window.location="index.html"
 }
 
 