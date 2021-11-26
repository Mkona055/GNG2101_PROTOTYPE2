
$(document).ready(function(){
    $('.alert').hide();

    
    const firebaseConfig = {
        apiKey: "AIzaSyApFU1kqgr5jdIIPW97J--RZKjbSQVyNi4",
        authDomain: "push-notification-system-41aeb.firebaseapp.com",
        databaseURL: "https://push-notification-system-41aeb-default-rtdb.firebaseio.com",
        projectId: "push-notification-system-41aeb",
        storageBucket: "push-notification-system-41aeb.appspot.com",
        messagingSenderId: "272206384016",
        appId: "1:272206384016:web:7795d8e3f6b78d3b54c115",
        measurementId: "G-X877W8JBRL"
    };
        
    firebase.initializeApp(firebaseConfig);
    
    // make auth and firestore references
    const auth = firebase.auth();
    const db = firebase.firestore();

    // update firestore settings
    db.settings({ timestampsInSnapshots: true });

    const loginForm = document.querySelector('#formLogin');
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // get user info
            const email = loginForm['email'].value;
            const password = loginForm['loginPassword'].value;

            // sign up the user
            auth.signInWithEmailAndPassword(email, password)
            .then(cred => {
                window.location.href = "/dashboard.html";

            })
            .catch(err => {
                $('.alert').show();
            });
        });
   
  


});
