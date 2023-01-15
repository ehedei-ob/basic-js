const markers = [];
let map;

function initMap() {
  const posicion = {
    lat: 40.464341022338864,
    lng: -3.6870897508781675
  };

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: posicion
  });

  markers.push(
    new google.maps.Marker({
      position: {
        lat: 40.348047716176715,
        lng: -3.827911137539964
      },
      map,
      title: 'Alcorcón'
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 40.458162880953026,
        lng: -3.4751101963067375
      },
      map,
      title: 'Torrejon de Ardoz'
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 40.309666665345894,
        lng: -3.7325994282306882
      },
      map,
      title: 'Getafe'
    })
  );
}

window.initMap = initMap;
