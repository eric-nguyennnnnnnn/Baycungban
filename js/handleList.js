const navMenuicon = document.querySelector('.navMenuicon')
    const btnX = document.querySelector('.btnX')
    const menuRes = document.querySelector('.menuRes')
    navMenuicon.addEventListener('click', () => {
        menuRes.classList.toggle('active')
    })
    btnX.addEventListener('click', () => {
        menuRes.classList.remove('active')
    })
    menuRes.addEventListener('click', () => {
        menuRes.classList.remove('active')
    })
//
//
const ItemInfo = document.querySelector('.ItemInfo h4')

ItemInfo.innerHTML = localStorage.getItem('infoFlight1')