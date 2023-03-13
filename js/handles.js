const header = document.querySelector('header')
const headerTwo = document.querySelector('.headerTwo')
const headerIn = document.querySelector('.headerIn')


window.addEventListener('scroll', () => {
    if (scrollY > 10) {
        headerIn.classList.add('active')
        header.classList.add('active')
    } else {
        headerIn.classList.remove('active')
        header.classList.remove('active')
    }
})
//
const DN = document.querySelector('#DN')
const HCM = document.querySelector('#HCM')
const listTP = document.querySelector('.listTP')
const listTP2 = document.querySelector('.listTP2')

const DNtxt = document.querySelector('.DN');
const HCMtxt = document.querySelector('.HCM');

const listtpItem = document.querySelectorAll('.listTP span')
const listtp2Item = document.querySelectorAll('.listTP2 span')

listtpItem.forEach(function (e) {
    e.addEventListener('click', () => {
        DNtxt.innerHTML = e.innerHTML
    })
})
listtp2Item.forEach(function (e) {
    e.addEventListener('click', () => {
        HCMtxt.innerHTML = e.innerHTML
    })
})

window.onload = () => {
    HCMtxt.innerHTML = "<span><h4>Ho Chi Minh</h4><p>Viet Nam</p></span>"
    DNtxt.innerHTML = "<span><h4>Da Nang</h4><p>Quang Nam, Viet Nam</p></span>"
}

DN.addEventListener('click', () => {
    listTP.classList.toggle('active')
})
HCM.addEventListener('click', () => {
    listTP2.classList.toggle('active')
})

const btnSearch = document.querySelector('.btnSearch')
const ItemInfo = document.querySelector('ItemInfo h4')

btnSearch.addEventListener('click', () => {
    changeFlight();

})
function changeFlight() {
    var infoFly = DNtxt.querySelector('span h4').innerHTML + ' - ' + HCMtxt.querySelector('span h4').innerHTML

    ItemInfo.innerHTML = localStorage.setItem('infoFlight1', infoFly)

}



//
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
//date

const depart = document.querySelector('#depart');
const retur = document.querySelector('#retur');


const prevCar = document.querySelector('#departPre')
const nextCar = document.querySelector('#departNext')

const prevCars = document.querySelector('#returPre')
const nextCars = document.querySelector('#returNext')

// depart.setAttribute("min", today)
// depart.setAttribute("value", today)

// retur.setAttribute("min", today)
// retur.setAttribute("value", today)
//Btn
prevCar.addEventListener('click', () => {
    prevCar.classList.add('active')
    nextCar.classList.remove('active')
})
nextCar.addEventListener('click', () => {
    nextCar.classList.add('active')
    prevCar.classList.remove('active')
})


prevCars.addEventListener('click', () => {
    prevCars.classList.add('active')
    nextCars.classList.remove('active')
})
nextCars.addEventListener('click', () => {
    nextCars.classList.add('active')
    prevCars.classList.remove('active')
})

//

let todays = new Date();


var dd = todays.getDate();
var mm = todays.getMonth() + 1;
var yyyy = todays.getFullYear();


if (dd < 10) {
    dd = '0' + dd
}
if (mm < 10) {
    mm = '0' + mm
}

depart.setAttribute("min", yyyy + '-' + mm + '-' + dd)
depart.setAttribute("value", yyyy + '-' + mm + '-' + dd)

prevCar.addEventListener("click", function () {
    depart.setAttribute("value", yyyy + '-' + mm + '-' + (dd -= 1))
})
nextCar.addEventListener("click", function () {
    depart.setAttribute("value", yyyy + '-' + mm + '-' + (dd += 1))
})

retur.setAttribute("min", yyyy + '-' + mm + '-' + dd)
retur.setAttribute("value", yyyy + '-' + mm + '-' + dd)

prevCars.addEventListener("click", function () {
    if (depart.value < retur.value) {
        retur.setAttribute("value", yyyy + '-' + mm + '-' + (dd -= 1))
    }
})
nextCars.addEventListener("click", function () {
    retur.setAttribute("value", yyyy + '-' + mm + '-' + (dd += 1))
})


