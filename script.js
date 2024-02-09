var jsonData = JSON.stringify({ Temp: 25, Humidity: 50 });

var options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    },
    body: jsonData
};
fetch('https://github.com/ericseignol/domotik3')
  .then(response => {
    if (!response.ok) {
      throw new Error('La requête a échoué');
    }
    return response.json();
  })
  .then(data => {
    // Traitement des données reçues
    console.log('Données reçues :', data);
    // Par exemple, mise à jour de l'affichage HTML avec les données
    document.getElementById('temperature').innerText = data.Temp + ' °C';
    document.getElementById('humidity').innerText = data.Humidity + '%';
  })
  .catch(error => {
    console.error('Erreur lors de la récupération des données :', error);
  });


/*
fetch('https://192.168.1.97/led', options).then((resp) => resp.json()).then(data => {
    document.getElementsByClassName('gpio')[0].classList.remove("activate");
    document.getElementsByClassName('gpio')[0].classList.remove("disable");
    if (data.currentLed) {
        document.getElementsByClassName('gpio')[0].setAttribute('data-gpio', 0);
        document.getElementsByClassName('gpio')[0].getElementsByTagName('h4')[0].innerHTML = 'Désactiver le GPIO';
        document.getElementsByClassName('gpio')[0].classList.add("disable");
    }else {
        document.getElementsByClassName('gpio')[0].setAttribute('data-gpio', 1);
        document.getElementsByClassName('gpio')[0].getElementsByTagName('h4')[0].innerHTML = 'Activer le GPIO';
        document.getElementsByClassName('gpio')[0].classList.add("activate");
    }
});


fetch('https://192.168.1.97/volt', options).then((resp) => resp.json()).then(data => {
    if (data.voltage) {
        document.getElementsByClassName('volt')[0].getElementsByTagName('h4')[0].innerHTML = data.voltage + 'v';
    }
});

function configLed() {

    var data = 'show=' + document.getElementsByClassName('gpio')[0].getAttribute('data-gpio');
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        },
        body: data,
    };

    fetch('https://192.168.1.97/led', options).then((resp) => resp.json()).then(data => {
        document.getElementsByClassName('gpio')[0].classList.remove("activate");
        document.getElementsByClassName('gpio')[0].classList.remove("disable");
        if (data.currentLed) {
            document.getElementsByClassName('gpio')[0].setAttribute('data-gpio', 0);
            document.getElementsByClassName('gpio')[0].getElementsByTagName('h4')[0].innerHTML = 'Désactiver le GPIO';
            document.getElementsByClassName('gpio')[0].classList.add("disable");
        }else {
            document.getElementsByClassName('gpio')[0].setAttribute('data-gpio', 1);
            document.getElementsByClassName('gpio')[0].getElementsByTagName('h4')[0].innerHTML = 'Activer le GPIO';
            document.getElementsByClassName('gpio')[0].classList.add("activate");
        }

    }).catch(error => {
        console.log(error);
    });
}*/
