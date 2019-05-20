
var app = {
    // Application Constructor
    initialize: function() {
        
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);

        document.getElementById('btnEntrar').addEventListener('click', ()=>{
            let email = document.getElementById('email').value;
            let password = document.getElementById('password').value;
            firebase.auth().signInWithEmailAndPassword(email, password).then(usuario => {
                console.log(`usuario: ${usuario}`)
                window.location = 'home.js'
            }).catch(function(error) {
                console.log('Erro no login' + error)
              });
        })

        
        
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        // var parentElement = document.getElementById(id);
        // var listeningElement = parentElement.querySelector('.listening');
        // var receivedElement = parentElement.querySelector('.received');

        // listeningElement.setAttribute('style', 'display:none;');
        // receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();