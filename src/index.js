window.onload = () => {
    console.log('test');

    let issData = {};
    const appContent = document.getElementById('app');


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
        })
        .catch(error => console.log(error));
};