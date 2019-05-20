
var app = {


    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);

        document.getElementById('btnLogOut').addEventListener('click', () => {
            firebase.auth().signOut().then(function () {
                window.location = 'index.html'
                console.log('deslogado')
            }).catch(function (error) {
                // An error happened.
                console.log('erro ao deslogar')
            });

        })


        this.carregaLista(this.addItemList, this.buscaDetalhes)

    },

    carregaLista: function (callback, detalhe) {
        document.getElementById('carregando').style.display = "block"
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://swapi.co/api/people/');
        xhr.send();
        xhr.onload = function () {
            if (xhr.status != 200) {
                alert(`Error ${xhr.status}: ${xhr.statusText}`);
            }
            else { // Exibe o resultado
                // var swPeople = JSON.parse(xhr.response)
                document.getElementById('carregando').style.display = "none"
                var allPeople = JSON.parse(xhr.response)
                callback(allPeople, detalhe)

            }
        };


        xhr.onerror = function () {
            alert("Request failed");
        };
    },

    addItemList: (allPeople, detalhe) => {
        // var nodePagPrev = document.createElement('li')
        // var nodePagNext = document.createElement('li')
        // var pagPrev = 0
        // var pagNext = 0
        
        // allPeople.previous == null ? nodePagPrev.className = "page-item disabled" : nodePagPrev.className = "page-item";
        // allPeople.next == null ? nodePagNext.className = "page-item disabled" : nodePagNext.className = "page-item";
        

        // nodePagPrev.innerHTML = `<a class="page-link" href="#" onclick="pagination(${JSON.stringify(allPeople)}, 'previous')";">Previous</a>`
        // nodePagNext.innerHTML = `<a class="page-link" href="#" onclick="pagination(${JSON.stringify(allPeople)}, 'next')";">Next</a>`
        // document.getElementById('pagination').appendChild(nodePagPrev)
        // document.getElementById('pagination').appendChild(nodePagNext)
        
        for (var i in allPeople.results) {
            // this.addItemList(swPeople.results[i])
            let people = allPeople.results[i]
            var node = document.createElement('a');
            node.id = i;
            node.href = "#";
            node.className = "list-group-item list-group-item-action"
            node.innerText = people.name

            // node.innerHTML = `<a id="${i}" class="detalhe" href="#" url="${people.url};">${people.name}</a>`

            document.getElementById('listaSW').appendChild(node)
            document.getElementById(i).addEventListener('click', () => {
                detalhe(people)
            })
        }
    },

    buscaDetalhes: function (people) {
        var storage = window.localStorage

        storage.setItem("people", JSON.stringify(people))
        window.location = "detalhes.html"
        console.log(people)
    },

    pagination: (people, pag) => {
        console.log(url)
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('deviceready');

    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        // var parentElement = document.getElementById(id);
        // var listeningElement = parentElement.querySelector('.listening');
        // var receivedElement = parentElement.querySelector('.received');

        // listeningElement.setAttribute('style', 'display:none;');
        // receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();