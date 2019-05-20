
var app = {
    // Application Constructor
    initialize: function() {
        
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false); 

        document.getElementById('btnVoltar').addEventListener('click', ()=>{
            window.location = 'home.html'
        })

        var userNow = firebase.auth().currentUser;
            
        userNow.updateProfile({
                displayName: "",
                photoURL: ""
            }).then(function() {
                var displayName = userNow.displayName;
                var photoURL = userNow.photoURL;
            }, function(error) {
                
            });

            document.getElementById('camera').addEventListener('click', () => {
                let options = {
                    quality: 50,
                    destinationType: Camera.DestinationType.DATA_URL,
                    encodingType: Camera.EncodingType.JPEG,
                    mediaType: Camera.MediaType.PICTURE,
                    targetWidth: 720,
                    correctOrientation: true
                }
            
                takePicture(options)
            })
            
            document.getElementById('gallery').addEventListener('click', () => {
                let options = {
                    quality: 50,
                    destinationType: Camera.DestinationType.DATA_URL,
                    encodingType: Camera.EncodingType.JPEG,
                    mediaType: Camera.MediaType.PICTURE,
                    targetWidth: 720,
                    correctOrientation: true,
                    sourceType: Camera.PictureSourceType.PHOTOLIBRARY
                }
            
                takePicture(options)
            })
            
            var takePicture = (options) => {
                navigator.camera.getPicture((image_data) => {
            
                    var image = document.getElementById('image');
                    image.src = "data:image/jpeg;base64," + image_data;
                }, 
                (error) => {
                    console.log(error)
                }, options)
            }
            
        

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