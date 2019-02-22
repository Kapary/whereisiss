window.onload = () => {
    console.log('test');

    let issData = {};
    const appContent = document.getElementById('app');


    var updatePosition = (map, marker) => window.setInterval(() => {
        fetch("http://api.open-notify.org/iss-now.json", {
            mode: "cors",
            credentials: "omit"
        })
            .then(response => {
                console.log("response", response);
                return response.json();
            })
            .then(data => {
                issData = data;
                console.log("asd", data);
                appContent.innerHTML = `${data.iss_position.latitude} ${data.iss_position.longitude}`;

                moveMarker(map, marker, data.iss_position.latitude, data.iss_position.longitude)
            })
            .catch(error => console.log(error));
    }, 5000);


    var initLat = 0;
    var initLon = 0;

    function initialize() {

        var myLatLng = new google.maps.LatLng(50, 50),
            myOptions = {
                zoom: 4,
                center: myLatLng,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            },
            map = new google.maps.Map(document.getElementById('map-canvas'), myOptions),
            marker = new google.maps.Marker({ position: myLatLng, map: map });

        marker.setMap(map);
        // moveMarker(map, marker);

        updatePosition(map, marker);

    }

    function moveMarker(map, marker, lat, lon) {
        marker.setPosition(new google.maps.LatLng(lat, lon));
        map.panTo(new google.maps.LatLng(lat, lon));
    };

    initialize();


};