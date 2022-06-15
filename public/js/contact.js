const myserverurl = 'https://localhost:3000';

const profileButton = document.getElementById('github');
const homeAnchor = document.getElementById('home');

profileButton.onclick = () => {
    window.open("https://github.com/JTZ18");
}

homeAnchor.onclick = () => {
    location.assign(`${myserverurl}/index.html`);
}