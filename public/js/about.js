const myserverurl = 'http://localhost:3000';


const emailLink = document.getElementById('emailLink');
const contactButton = document.getElementById('contactButton');
const homeAnchor = document.getElementById('home-anchor');

emailLink.onclick = () => {
    window.open("https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=jon.taylorlim99@gmail.com");
}

contactButton.onclick = () => {
    location.assign(`${myserverurl}/contact.html`);
}

homeAnchor.onclick = () => {
    location.assign(`${myserverurl}/index.html`);
}