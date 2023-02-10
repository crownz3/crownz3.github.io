function jsFile() {

  const body = document.querySelector(".big-parent"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");

  toggle.addEventListener("click", () => {
    sidebar.classList.toggle("xlose")


  })

  modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark")

    let val = body.classList.contains("dark")
    if (val === true) {
      modeText.textContent = "Dark Mode"
    } else {
      modeText.textContent = "Light Mode"
    }

  })

  window.addEventListener('resize', () => {
    let screen = window.matchMedia("(max-width:600px)")
    let screenSize = screen.matches

    if (screenSize) {
      sidebar.classList.remove('close')
      sidebar.classList.add('close')
    } else {
      sidebar.classList.remove('close')
      sidebar.classList.add('close')

    }

  })



}

