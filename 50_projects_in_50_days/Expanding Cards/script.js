// querySelectorAll creates a NodeList of the divs and saves it to the const
const panels = document.querySelectorAll('.panel')

//panels loops through each panel console.log(panel)
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}