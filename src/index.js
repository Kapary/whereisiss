window.onload = () => {
    console.log('test');

    let issData = {};
    const appContent = document.getElementById('app');


    window.setInterval(() => {
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
            })
            .catch(error => console.log(error));
    }, 5000);
};