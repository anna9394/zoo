const switchButton = document.querySelector('.switch input[type="checkbox"]')

const THEME = 'theme'
const LIGHT = 'light'
const DARK = 'dark'

window.addEventListener('load', () => {
  const theme = localStorage.getItem(THEME)

  if (theme === DARK) {
    document.documentElement.className = 'dark-theme'
    switchButton.checked = true
  } else {
    document.documentElement.className = 'light-theme'
  }
  
})


switchButton.addEventListener('change', () => {
    if (switchButton.checked) {
      document.documentElement.className = 'dark-theme'
      localStorage.setItem(THEME, DARK)
    } else {
      document.documentElement.className = 'light-theme'
      localStorage.setItem(THEME, LIGHT)
    }
  
  })

  const burgerButton = document.querySelector('.burger-menu')
  const headerNavigation = document.querySelector('.headerNavigation')

  burgerButton.addEventListener('click', () => {
    if (headerNavigation.classList.contains('show')){
      headerNavigation.classList.remove('show')
    } else{
      headerNavigation.classList.add('show')
    }
    
  })

  
  
