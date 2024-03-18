search = document.getElementById('search')
loading = document.getElementById('loading')
expanding = document.getElementById('expanding')
sound = document.getElementById('sound')
navigation = document.getElementById('navigation')
landing = document.getElementById('landing')

search.addEventListener('click', () => {
    window.open("search/search.html", "_self")
})

loading.addEventListener('click', () => {
    window.open("loading/loading.html", "_self")
})

expanding.addEventListener('click', () => {
    window.open("expanding/expanding.html", "_self")
})

sound.addEventListener('click', () => {
    window.open("sound/sound.html", "_self")
})

navigation.addEventListener('click', () => {
    window.open("navigation/navigation.html", "_self")
})

landing.addEventListener('click', () => {
    window.open("landing/landing.html", "_self")
})

nav = document.querySelector('.nav')

window.addEventListener('scroll', fixNav)

function fixNav() {
    if (window.scrollY > 200) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}
