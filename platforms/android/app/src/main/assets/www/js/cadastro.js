
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);

        document.getElementById('btnLogin').addEventListener('click', ()=>{
            window.location = 'index.html'
        })

        document.getElementById('btnRegistrar').addEventListener('click', ()=>{
            let email = document.getElementById('email').value;
            let password = document.getElementById('password').value;
            firebase.auth().createUserWithEmailAndPassword(email, password).then(user => {
                console.log(user)
                window.location = 'home.html'
            }).catch(function(error) {
                console.log(`erro no create`)
              });

        })

    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
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