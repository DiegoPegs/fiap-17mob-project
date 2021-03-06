
var app = {
    // Application Constructor
    initialize: function() {
        
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);

        document.getElementById('btnVoltar').addEventListener('click', ()=>{
            window.location = 'home.html'
        })

        var storage = window.localStorage
        var person = JSON.parse(storage.getItem("people"))
        storage.removeItem("people")
        document.getElementById("nome").innerText = person.name
        document.getElementById("altura").innerText = `Altura: ${person.height}`
        document.getElementById("olhos").innerText = `Olhos: ${person.eye_color}`
        
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