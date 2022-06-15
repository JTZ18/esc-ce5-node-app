const myserverurl = 'http://localhost:3000';


const profileButton = document.getElementById('profileButton');

profileButton.onclick = () => {
    location.assign(`${myserverurl}/about.html`);
}
