var firebaseConfig = {
    apiKey: "AIzaSyAW7HIML37V73G0O87y_g4SkbG49PLVFyw",
    authDomain: "hangout-ba5a8.firebaseapp.com",
    databaseURL: "https://hangout-ba5a8-default-rtdb.firebaseio.com",
    projectId: "hangout-ba5a8",
    storageBucket: "hangout-ba5a8.appspot.com",
    messagingSenderId: "1006775892981",
    appId: "1:1006775892981:web:208479f75a20825c92bebc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addRoom()
  {
      room_name = document.getElementById("room_name").value;

      localStorage.setItem("room_name" , room_name);

      firebase.database().ref("/").child(room_name).update({
         purporse : "adding room"
     });

  }