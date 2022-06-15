const myserverurl = 'https://esc-ce5-node-app.herokuapp.com';


const profileButton = document.getElementById('profileButton');

profileButton.onclick = () => {
    location.assign(`${myserverurl}/about.html`);
}
