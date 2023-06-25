// new

function displaySettingWindow() {
    // get window container
    const windowEl = document.querySelector('.window-container')
    windowEl.innerHTML = ''
    
    // Window for Routines content
    const sectionElWindow = document.createElement('section')
    sectionElWindow.classList.add('window')
    sectionElWindow.id = 'setting-window'

    // Heading
    const h2El = document.createElement('h2')
    h2El.innerText = "Settings"

    // append to html
    sectionElWindow.appendChild(h2El)
    windowEl.appendChild(sectionElWindow)
}