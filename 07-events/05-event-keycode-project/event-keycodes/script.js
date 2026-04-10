
// method 1
window.addEventListener('keydown', (e) => {
    const insert = document.getElementById('container');

    e.key === ' ' ? 'Space' : e.key
    insert.outerHTML = `
        <div class="key">
            s
            <small>${e.key === ' ' ? 'SPACE' : e.key}</small>
        </div>
        <div class="key">
            83
            <small>${e.keyCode}</small>
        </div>
        <div class="key">
            KeyS
            <small>${e.code}</small>
        </div>`
})