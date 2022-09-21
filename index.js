const h1 = document.querySelector("h1");

h1.addEventListener('click', () => {
    h1.style.backgroundColor = "green";
})
h1.addEventListener('mouseleave', () => {
    h1.style.backgroundColor = "white";
})

const h2 = document.querySelector("h2");

h2.addEventListener('mouseover', () => {
    h2.textContent = "Hello world!";
})
h2.addEventListener('mouseleave', () => {
    h2.textContent = "Heading 2";
})

const body = document.querySelector('body');
const section = document.querySelector('section');

body.addEventListener("keypress", (event) => {
    const keyname = event.key;
    console.log(keyname);
    const p = document.createElement('p');
    p.textContent = keyname;
    section.appendChild(p)
})

const nav1 = document.querySelector('#p1nav');
let i = 0;

nav1.addEventListener('click', () => {
    // nav1.style.fontWeight = 'bold';
    i++
    if (i % 2 === 0) {
        document.querySelector('#nav1').style.fontWeight = "normal";
        document.querySelector('#nav1').style.fontSize = "initial";
    } else {
        document.querySelector('#nav1').style.fontWeight = "bold";
        document.querySelector('#nav1').style.fontSize = "400px";
    }

})

module.export = index;