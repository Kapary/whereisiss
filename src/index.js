window.onload = () => {
    const appContent = document.getElementById('app');

    var updatePosition = (map, marker) => window.setInterval(() => {
        fetch("http://api.open-notify.org/iss-now.json", {
            mode: "cors",
            credentials: "omit"
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                issData = data;
                appContent.innerHTML = `${data.iss_position.latitude} ${data.iss_position.longitude}`;

                moveMarker(map, marker, data.iss_position.latitude, data.iss_position.longitude)
            })
            .catch(error => console.log(error));
    }, 5000);

    function moveMarker(map, marker, lat, lon) {
        marker.setPosition(new google.maps.LatLng(lat, lon));
        map.panTo(new google.maps.LatLng(lat, lon));
    };

    (function initialize() {
        var myLatLng = new google.maps.LatLng(50, 50),
            myOptions = {
                zoom: 4,
                center: myLatLng,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            },
            map = new google.maps.Map(document.getElementById('map-canvas'), myOptions),
            marker = new google.maps.Marker({ position: myLatLng, map: map });

        marker.setMap(map);
        updatePosition(map, marker);
    })();
};