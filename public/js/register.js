
$(document).ready(function(){
    
    
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
    
    
    
    $("#subBtn").on("click", function(){
        $('#formCreateAcc').addClass('was-validated');
    });



    const signupForm = document.querySelector('#formCreateAcc');
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // get user info
            const email = signupForm['email'].value;
            const password = signupForm['accPassword'].value;

            // sign up the user
            auth.createUserWithEmailAndPassword(email, password).then(cred => {
                formSubmit(cred.user.uid);
                window.location.href = "/dashboard.html";

            });
        });
   
  
  function formSubmit(uid) {

    let regNumber = document.querySelector('#regNumber').value;;
    let firstName = document.querySelector('#firstName').value;
    let lastName = document.querySelector('#lastName').value;
    let phoneNumber = document.querySelector("#phoneNumber").value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#accPassword').value;

    const usersDb = db.collection('users'); 
    const user = usersDb.doc(uid); 

    user.set({
        "regNumber": regNumber,
        "firstName": firstName,
        "lastName": lastName,
        "phoneNumber": phoneNumber,
      });

    }


});
