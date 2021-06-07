const panels = document.querySelectorAll('.panel') //NodeList(5), panels[0] = first panel
console.log(panels)

panels.forEach((panel) =>{
    //console.log(panel) //show each panel
    panel.addEventListener('click', () => {
        removeActiveClasses()
        console.log("it oke")
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    console.log("here it is")
    panels.forEach((panel) => {
      panel.classList.remove('active')
    })
}
