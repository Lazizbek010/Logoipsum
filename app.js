let bars = document.getElementById('bars')
let resNav = document.querySelector('.res-nav')
let close = document.querySelector('.close')
bars.addEventListener('click', ()=>{
    resNav.classList.add('shownav')
})
close.addEventListener("click", ()=>{
    resNav.classList.remove('shownav')
})

