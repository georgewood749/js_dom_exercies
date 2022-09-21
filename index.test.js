const renderDom = require('./helpers')

let dom;
let document;

describe('index.html', () => {
    beforeEach( async() => {
        dom = await renderDom('index.html');
        document = await dom.window.document;
    })

    test('it has a title', () => {
        let title = document.querySelector('title');
        expect(title).toBeTruthy();
    })
    test('clicking h1 makes background green', () => {
        let h1 = document.querySelector('h1');
        h1.dispatchEvent(new dom.window.Event('click'));
        expect(h1.style.backgroundColor).toBe("green");
    })
    test('mousing out of h1 makes background white again', () => {
        let h1 = document.querySelector('h1');
        h1.dispatchEvent(new dom.window.Event('mouseleave'));
        expect(h1.style.backgroundColor).toBe("white");
    })
    test('hovering over h2 replaces words to "Hello world!"', () => {
        let h2 = document.querySelector('h2');
        h2.dispatchEvent(new dom.window.Event('mouseover'));
        expect(h2.innerHTML).toContain("Hello world!");
    })
    // test('typing letter creates new p tag with that letter', () => {
    //     let ps = document.querySelectorAll('p');
    //     ps.forEach(p => {
    //         p.dispatchEvent(new dom.window.Event('keypress'));
    //         ps = document.querySelectorAll('p');
    //     })
    //     expect(ps.length).toBeGreaterThan(3);
    // })
    
})