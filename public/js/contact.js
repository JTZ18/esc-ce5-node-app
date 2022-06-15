const myserverurl = 'https://esc-ce5-node-app.herokuapp.com';

const profileButton = document.getElementById('github');
const homeAnchor = document.getElementById('home');

profileButton.onclick = () => {
    window.open("https://github.com/JTZ18");
}

homeAnchor.onclick = () => {
    location.assign(`${myserverurl}/index.html`);
}