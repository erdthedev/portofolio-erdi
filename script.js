const menuBtn = document.getElementById('menuBtn')
const navLinks = document.getElementById('navLinks')
const year = document.getElementById('year')

year.textContent = new Date().getFullYear()

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open')
  menuBtn.textContent = navLinks.classList.contains('open') ? '×' : '☰'
})

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open')
    menuBtn.textContent = '☰'
  })
})
