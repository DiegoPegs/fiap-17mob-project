var main = {
    onStart : () => { },
    initialize: function(){
        var page = window.location.href
        this.initializeFirebase();
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
                if (page.indexOf('index') !== -1) {
                    window.location = 'home.html';            
                }

                if (page.indexOf('perfil') !== -1) {
                    document.getElementById('nome').textContent = `Nome: ${this.localUser.displayName}`
                    document.getElementById('email').textContent = `Email: ${this.localUser.email}`
                }
                               
                
            } else {
                if (page.indexOf('cadastro') == -1 && page.indexOf('index') == -1) {
                    window.location = 'index.html';            
                }
                console.log('nao deu pra fazer login')
            }
            this.onStart();
        });
        
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