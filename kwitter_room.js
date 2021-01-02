//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAq4GrFDftbq9QymDAO0eLp01nuSxwqyQ0",
      authDomain: "social-media-b9943.firebaseapp.com",
      databaseURL: "https://social-media-b9943-default-rtdb.firebaseio.com",
      projectId: "social-media-b9943",
      storageBucket: "social-media-b9943.appspot.com",
      messagingSenderId: "143858475204",
      appId: "1:143858475204:web:84c7f10095918dfd0ca991"
    };
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
      console.log(namw)
      localStorage.setItem("room_name",name)
      window.location="kwitter_page.html"
}
function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html"
}
