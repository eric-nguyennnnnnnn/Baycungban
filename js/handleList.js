const navMenuicon = document.querySelector('.navMenuicon')
const btnX = document.querySelector('.btnX')
const menuRes = document.querySelector('.menuRes')
const getVNLanguage = document.getElementById('vn-language')
const getENLanguage = document.getElementById('en-language')
const checkLanguage = localStorage.getItem('language_active')
const flightItem = document.getElementById('mainCard-list_flight')
const getItemFlight = document.getElementById('cardItem-flight')
let idActive = 0;


const listFlight = [
    { id: 0, from: '18:00', to: '19:30', flight_time: '1h 30m', provide: 'bamboo airways', price: '1,326,000 vnd', discount: '1,322,000 vnd', active: false },
    { id: 1, from: '18:30', to: '20:00', flight_time: '1h 30m', provide: 'vietnam airlines', price: '1,826,000 vnd', discount: '1,522,000 vnd', active: false },
    { id: 2, from: '19:00', to: '20:30', flight_time: '1h 30m', provide: 'bamboo airways', price: '1,326,000 vnd', discount: '1,322,000 vnd', active: false },
    { id: 3, from: '20:00', to: '21:30', flight_time: '1h 30m', provide: 'vietnam airlines', price: '1,926,000 vnd', discount: '1,422,000 vnd', active: false },
    { id: 4, from: '20:30', to: '22:00', flight_time: '1h 30m', provide: 'bamboo airways', price: '1,326,000 vnd', discount: '1,322,000 vnd', active: false },
    { id: 5, from: '21:00', to: '22:30', flight_time: '1h 30m', provide: 'vietnam airlines', price: '1,526,000 vnd', discount: '1,122,000 vnd', active: false },
]

navMenuicon.addEventListener('click', () => {
    menuRes.classList.toggle('active')
})
btnX.addEventListener('click', () => {
    menuRes.classList.remove('active')
})
menuRes.addEventListener('click', () => {
    menuRes.classList.remove('active')
})

const renderList = () => {
    listFlight.forEach((item, index) => {
        flightItem.innerHTML += `<div class="cardItem cardFlight-item" id=${item.id}>
        <div class="cardTop">
            <div class="cardBrand">
                <div class="logos"><img src="${item.provide === 'vietnam airlines' ? './img/icon/vietnamAir.png' : './img/icon/bamboo.png'}" alt=""></div>
                <div class="names">${item.provide}</div>
            </div>
            <div class="cardTime">
                <div class="times">
                    <span>${item.from}</span>
                    <div class="timesUnder">DAD</div>
                </div>
                <div class="timesAbout">
                    <div class="timesTop">${item.flight_time}</div>
                    <div class="timesMid">
                        <div class="midCir"></div>
                        <div class="midLine"></div>
                        <div class="midCir"></div>
                    </div>
                    <div class="timesBot">Direct</div>
                </div>
                <div class="times">
                    <span>${item.to}</span>
                    <div class="timesUnder">DAD</div>
                </div>
            </div>
            <div class="cardWeight">
                <div class="weightTop">
                    <i class='bx bx-shopping-bag'></i><span>Baggage</span><span
                        class="purple">20kg</span>
                </div>
                <div class="weightTop">
                    <i class='bx bx-restaurant'></i><span>In-flight</span><span
                        class="purple">Meal</span>
                </div>
            </div>
            <div class="cardPrice">
                <span>${item.price}</span>
                <span class="orange">${item.discount}</span>
            </div>
            <div class="cardAction">
                <div class="btnChoose" id=${item.id}>Choose</div>
            </div>
        </div>
    </div>`
    });
}

const defaultItem = (id) => {
    const item = listFlight[id];
    return `
    <div class="cardTop">
        <div class="cardBrand">
            <div class="logos"><img src="${item.provide === 'vietnam airlines' ? './img/icon/vietnamAir.png' : './img/icon/bamboo.png'}" alt=""></div>
            <div class="names">${item.provide}</div>
        </div>
        <div class="cardTime">
            <div class="times">
                <span>${item.from}</span>
                <div class="timesUnder">DAD</div>
            </div>
            <div class="timesAbout">
                <div class="timesTop">${item.flight_time}</div>
                <div class="timesMid">
                    <div class="midCir"></div>
                    <div class="midLine"></div>
                    <div class="midCir"></div>
                </div>
                <div class="timesBot">Direct</div>
            </div>
            <div class="times">
                <span>${item.to}</span>
                <div class="timesUnder">DAD</div>
            </div>
        </div>
        <div class="cardWeight">
            <div class="weightTop">
                <i class='bx bx-shopping-bag'></i><span>Baggage</span><span
                    class="purple">20kg</span>
            </div>
            <div class="weightTop">
                <i class='bx bx-restaurant'></i><span>In-flight</span><span
                    class="purple">Meal</span>
            </div>
        </div>
        <div class="cardPrice">
            <span>${item.price}</span>
            <span class="orange">${item.discount}</span>
        </div>
        <div class="cardAction">
            <div class="btnChoose" id=${item.id}>Choose</div>
        </div>
</div>`
}
const detailFlight = `<input type="radio" name="cardBotinfo" id="details">
    <input type="radio" checked name="cardBotinfo" id="infos">
    <div class="btnLine">
        <label for="details">Flight Detail</label>
        <label for="infos">Fare Info</label>
        <div class="line"></div>
    </div>
    <div class="cardBot">
        <div class="cardBotL">
            <div class="botL">
                <div class="botLtop">
                    <h4>21:40</h4>
                    <span>11 Feb</span>
                </div>
                <div class="botLtop">1h 30m</div>
                <div class="botLtop">
                    <h4>21:40</h4>
                    <span>11 Feb</span>
                </div>
            </div>
            <div class="botM">
                <div class="circleM"></div>
                <div class="lineM"></div>
                <div class="circleM"></div>
            </div>
            <div class="botR">
                <div class="botR_text">
                    <h4>Da nang (DAD)</h4>
                    <span>Da Nang Airport</span>
                </div>
                <div class="botR_text">
                    <h4>Ho Chi Minh City (SGN)</h4>
                    <span>Tansonnhat Intl</span>
                </div>
            </div>
        </div>
        <div class="cardBotR">
            <div class="logoBoxs">
                <div class="logos"><img src="./img/icon/bamboo.png" alt=""></div>
                <div class="logosTitle">
                    <h4>BAMBOO AIRWAYS</h4>
                    <span>QH-183 • Economy</span>
                </div>
            </div>
            <div class="cardDetail">
                <div class="cardDeL">
                    <span>Bagggage <span class="purple">20kg</span></span>
                    <br>
                    <span>In-flight <span class="purple">Meal</span></span>
                    <br>
                    <span>In-flight <span class="purple">Entertainment</span></span>
                </div>
                <div class="cardDeR">
                    <span>Aircraft <span class="purple">Airbus A321</span></span>
                    <br>
                    <span>Seat layout <span class="purple">3-3</span></span>
                    <br>
                    <span>Seat Pitch <span class="purple">29 inches (standard)</span></span>
                </div>
            </div>
        </div>
    </div>
    <div class="cardBotInfo">
        <div class="cardBotL">
            <h4>Conditions</h4>
            <div class="logoBoxs">
                <div class="logos"><img src="./img/icon/bamboo.png" alt=""></div>
                <div class="logosTitle">
                    <h4>BAMBOO AIRWAYS</h4>
                    <span>QH-183 • Economy</span>
                </div>
            </div>
            <div class="cardInfoLocateBox">
                <div class="locateFr">
                    <span>Da Nang</span>
                    <span class="purple">Economy</span>
                </div>
                <div class="locateLine">
                    <div class="locateCir"></div>
                    <div class="locateLine"></div>
                    <div class="locateCir"></div>
                </div>
                <div class="locateTo"><span>Ho Chi Minh City</span></div>
            </div>
            <br>
            <span>Non - Refundable</span>
        </div>
        <div class="cardBotR">
            <h4>Price details</h4>
            <div class="cardBotDetail">
                <div class="cardBotDetailL">
                    <span>Adult Basic Fare (x1)</span>
                    <br>
                    <span>Tax</span>
                    <br>
                    <span>Regular Total Price</span>
                    <br>
                    <span class="orange">Save</span>
                </div>
                <div class="cardBotDetailR">
                    <span>1,326,000 vnd</span>
                    <br>
                    <span>included</span>
                    <br>
                    <span>1,326,000 vnd</span>
                    <br>
                    <span>-4000 vnd</span>
                </div>
            </div>
            <hr class="line">
            <div class="cardBotDetailTotal">
                <span>You Pay</span>
                <span class="orange">1,322,000 vnd</span>
            </div>
        </div>
        </div>`

window.onload = () => {
    renderList();
    const getAllItem = document.querySelectorAll('.cardFlight-item')
    getAllItem[0].innerHTML += detailFlight;
    let currId = 0
    getAllItem[0].classList.add('active-cardItem')
    getAllItem.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            if (e.target.outerText === "Choose") {
                getAllItem[currId].classList.remove('active-cardItem')
                getAllItem[currId].childNodes.forEach((child, idx) => {
                    if (idx !== 0) {
                        child.remove()
                    }
                })
                getAllItem[currId].innerHTML += defaultItem(currId);
                item.classList.add('active-cardItem')
                item.innerHTML += detailFlight;
                currId = item.attributes[1].nodeValue
            }
        })
    })

}
const ItemInfo = document.querySelector('.ItemInfo h4')

ItemInfo.innerHTML = localStorage.getItem('infoFlight1')
getVNLanguage.addEventListener('click', () => {
    getVNLanguage.classList.add('active-language')
    getENLanguage.classList.remove('active-language')
    localStorage.setItem('language_active', 'vn')
})
getENLanguage.addEventListener('click', () => {
    getVNLanguage.classList.remove('active-language')
    getENLanguage.classList.add('active-language')
    localStorage.setItem('language_active', 'en')
})