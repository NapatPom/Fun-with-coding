// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    })
  })
})

// Active nav link on scroll
window.addEventListener('scroll', function () {
  let sections = document.querySelectorAll('section')
  let navLinks = document.querySelectorAll('.nav-link')

  sections.forEach((sec) => {
    let top = window.scrollY
    let offset = sec.offsetTop - 100
    let height = sec.offsetHeight
    let id = sec.getAttribute('id')

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove('active')
        document
          .querySelector(`.nav-link[href="#${id}"]`)
          .classList.add('active')
      })
    }
  })
})

// Mobile menu toggle
const navToggle = document.getElementById('mobile-nav-toggle')
const navMenu = document.getElementById('navbarNav')

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show')
  navToggle.classList.toggle('active')
})

// Close mobile menu when clicking nav links
document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show')
    navToggle.classList.remove('active')
  })
})