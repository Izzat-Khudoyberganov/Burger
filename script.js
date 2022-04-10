product = {
    plainBurger: {
        name: "GAMBURGER",
        price: 10000,
        amount: 0,
        kkal: 500,
        get Summ() {
            return this.amount * this.price
        },
        get kkalSumm() {
            return this.amount * this.kkal
        }
    },
    freshBurger: {
        name: "GAMBURGER FRESH",
        price: 20500,
        amount: 0,
        kkal: 800,
        get Summ() {
            return this.amount * this.price
        },
        get kkalSumm() {
            return this.amount * this.kkal
        }
    },
    freshCombo: {
        name: "FRESH COMBO",
        price: 31900,
        amount: 0,
        kkal: 1200,
        get Summ() {
            return this.amount * this.price
        },
        get kkalSumm() {
            return this.amount * this.kkal
        }
    },
}

const plusOrMinus = document.querySelectorAll('.main__product-btn')
for (let i = 0; i < plusOrMinus.length; i++) {
    plusOrMinus[i].addEventListener('click', function () {
        count(this)
    })

}
function count(el) {
    let parent = el.closest('.main__product'),
        parentId = parent.getAttribute('id'),
        num = parent.querySelector('.main__product-num'),
        price = parent.querySelector('.main__product-price span'),
        kkal = parent.querySelector('.main__product-kcall span'),
        attribute = el.getAttribute('data-symbol')

    if (attribute == '+' && product[parentId].amount < 30) {
        product[parentId].amount++
    } else if (attribute == '-' && product[parentId].amount > 0) {
        product[parentId].amount--
    }
    num.innerHTML = product[parentId].amount
    price.innerHTML = product[parentId].Summ
    kkal.innerHTML = product[parentId].kkalSumm
}


const addCart = document.querySelector('.addCart'),
    receipt = document.querySelector('.receipt'),
    receiptWindow = document.querySelector('.receipt__window'),
    receiptWindowOut = document.querySelector('.receipt__window-out')
addCart.addEventListener('click', () => {
    receipt.style = `display:flex`;
    setTimeout(() => {
        receipt.style.opacity = '1'
        receiptWindow.style.top = '15%'
    }, 500);

    const productList = Object.values(product).filter(number => number.amount)
    let total = "",
        finalPrice = '',
        finalKkal = '',
        totalPrice = 0,
        totalkkal = 0

    for (let i = 0; i < productList.length; i++) {
        totalPrice += productList[i].Summ
        totalkkal += productList[i].kkalSumm
        if (productList[i].amount > 0) {
            total += `
    <div class="product">
        <span>${i + 1}</span>
        <div class="product__name">${productList[i].name}</div>
        <div class="product__amount">${productList[i].amount} x ${productList[i].price} = </div>
        <div class="product__price">${productList[i].Summ} Sum</div>
        </div>
        `
            finalPrice = ` 
        <h4>Umumiy narxi: ${totalPrice} Summ</h4>
        `
            finalKkal = `
        <h4>Umumiy kaloriya: ${totalkkal} kkal</h4>
        `
        }
    }


    receiptWindowOut.innerHTML = `${total} ${finalPrice} ${finalKkal} `
})

let second = document.querySelector('.header__timer-extra')
function rakursiya() {
    second.innerHTML++
    second.style.color = color()
    if (second.innerHTML < 80) {
        setTimeout(() => {
            rakursiya()
        }, 50);
    }
    else if (second.innerHTML < 100) {
        setTimeout(() => {
            rakursiya()
        }, 150);
    }
}
rakursiya()

// Random color function

function randNum(max, min) {
    return Math.floor(Math.random() * (max - min) + min)
}
function color() {
    let r = randNum(0, 255)
    let g = randNum(0, 255)
    let b = randNum(0, 255)
    return `rgb(${r},${g},${b})`
}

//  -- Open pictures in Modal Window --

const mainProductInfo = document.querySelectorAll('.main__product-info'),
    view = document.querySelector('.view'),
    closeBtn = document.querySelector('.view__close')

for (let i = 0; i < mainProductInfo.length; i++) {
    mainProductInfo[i].addEventListener('click', function () {
        select(this)
        view.classList.add('active')
    })
}
closeBtn.addEventListener('dblclick', () => {
    view.classList.remove('active')
})

function select(img) {
    let mainImgParent = img.closest('.main__product')
    mainImg = mainImgParent.querySelector('.main__product-img'),
    mainImgSrc = mainImg.getAttribute('src')
    viewImg = view.querySelector('img')

    if (mainImgSrc == 'images/product1.jpg') {
        viewImg.setAttribute('src', 'images/product1.jpg')
    } else if (mainImgSrc == "images/product2.jpg") {
        viewImg.setAttribute('src', 'images/product2.jpg')
    } else if (mainImgSrc == "images/product3.jpg") {
        viewImg.setAttribute('src', 'images/product3.jpg')
    }
}
let payBtn = document.querySelector('.receipt__window-btn');
payBtn.addEventListener('click', () => {
    document.location.reload()
})