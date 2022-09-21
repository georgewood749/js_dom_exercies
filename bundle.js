(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}]},{},[1]);
