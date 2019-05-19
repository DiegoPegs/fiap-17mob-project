var main = {
    onStart : () => { },
    initialize: function(){

        this.initializeFirebase();
        if (window.location.href.indexOf('index') !== -1) {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    this.userLoged = user;
    
                    this.localUser = {
                        email: user.email,
                        uid: user.uid,
                        displayName: user.displayName,
                        photoUrl: user.photoURL
                    };
    
                    console.log(`LocalUser: ${this.localUser}`);
                    window.location = 'home.html';
                                   
                    
                } else {
                    console.log('nao deu pra fazer login')
                }
                this.onStart();
            });
            
        }
    },
    userLoged: {},
    
    initializeFirebase: function(){
        var firebaseConfig = {
            apiKey: "AIzaSyARiaqoOVG63WEW3QDkIdgclWpjtx5ocSQ",
            authDomain: "cordova-f1598.firebaseapp.com",
            databaseURL: "https://cordova-f1598.firebaseio.com",
            projectId: "cordova-f1598",
            storageBucket: "cordova-f1598.appspot.com",
            messagingSenderId: "828844205557",
            appId: "1:828844205557:web:1516c9300a83287b"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
        
        
    }
};

main.initialize();