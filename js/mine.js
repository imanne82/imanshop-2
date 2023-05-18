//                  product          //
let containerProductLapTop = document.querySelector('#containerProductLapTop')
let containerProductRefrigerator = document.querySelector('#containerProductRefrigerator')
let containerProductCleaner = document.querySelector('#containerProductCleaner')
let showProductDiscount = document.querySelector('#containerProductDiscount')
let listProduct = [
    {
        id: 1,
        number: 1,
        name: 'لپ تاپ asus شماره  ',
        price: '15,000,000',
        srcImg: 'productImg/kala1.jpg',
        details: 'لپ تاپ ایسوس 18 اینچ مدل LATITUDE E5540 پردازنده Core i3 رم 8GB هارد 512GB گرافیک 2GB با صفحه نمایش لمسی',
        grouping: 'LapTop',
        existence: 'no',
        discount: '0%'
    },
    {
        id: 2,
        number: 2,
        name: 'لپ تاپ asus شماره  ',
        price: '20,000,000',
        srcImg: 'productImg/kala2.jfif',
        details: 'لپ تاپ ایسوس 15 اینچ مدل LATITUDE E5540 پردازنده Core i5 رم 8GB هارد 512GB گرافیک 2GB ',
        grouping: 'LapTop',
        existence: 'yes',
        discount: '5%'
    },
    {
        id: 3,
        number: 3,
        name: 'لپ تاپ asus شماره  ',
        price: '50,000,000',
        srcImg: 'productImg/kala3.jfif',
        details: 'لپ تاپ ایسوس 18 اینچ مدل LATITUDE E5540 پردازنده Core i11 رم 8GB هارد 1TB گرافیک 6GB با صفحه نمایش لمسی',
        grouping: 'LapTop',
        existence: 'no',
        discount: '0%'
    },
    {
        id: 4,
        number: 4,
        name: 'لپ تاپ asus شماره  ',
        price: '7,000,000',
        srcImg: 'productImg/kala1.jpg',
        details: 'لپ تاپ ایسوس 15 اینچ مدل LATITUDE E5540 پردازنده Core i5 رم 4GB هارد 128GB گرافیک 2GB ',
        grouping: 'LapTop',
        existence: 'no',
        discount: '0%'
    },
    {
        id: 5,
        number: 5,
        name: 'لپ تاپ asus شماره  ',
        price: '18,000,000',
        srcImg: 'productImg/kala2.jfif',
        details: 'لپ تاپ ایسوس 15 اینچ مدل LATITUDE E5540 پردازنده Core i9 رم 8GB هارد 1TB گرافیک 2GB ',
        grouping: 'LapTop',
        existence: 'no',
        discount: '0%'
    },
    {
        id: 6,
        number: 6,
        name: 'لپ تاپ dell شماره  ',
        price: '10,000,000',
        srcImg: 'productImg/kala3.jfif',
        details: 'لپ تاپ دل 15 اینچ مدل LATITUDE E5540 پردازنده Core i3 رم 8GB هارد 512GB گرافیک 2GB ',
        grouping: 'LapTop',
        existence: 'no',
        discount: '0%'
    },
    {
        id: 7,
        number: 7,
        name: 'لپ تاپ dell شماره  ',
        price: '32,000,000',
        srcImg: 'productImg/kala1.jpg',
        details: 'لپ تاپ دل 15 اینچ مدل LATITUDE E5540 پردازنده Core i9 رم 16GB هارد 1TB گرافیک 8GB با صفحه نمایش لمسی',
        grouping: 'LapTop',
        existence: 'yes',
        discount: '5%'
    },
    {
        id: 8,
        number: 8,
        name: 'لپ تاپ dell شماره  ',
        price: '4,000,000',
        srcImg: 'productImg/kala2.jfif',
        details: 'لپ تاپ دل 15 اینچ مدل LATITUDE E5540 پردازنده Core i3 رم 2GB هارد 128GB گرافیک 512MB ',
        grouping: 'LapTop',
        existence: 'yes',
        discount: '0%'
    },
    {
        id: 9,
        number: 9,
        name: 'لپ تاپ dell شماره  ',
        price: '120,000,000',
        srcImg: 'productImg/kala3.jfif',
        details: 'لپ تاپ دل 15 اینچ مدل LATITUDE E5540 پردازنده Core i11 رم 16GB هارد 2TB گرافیک 16GB با صفحه نمایش لمسی',
        grouping: 'LapTop',
        existence: 'yes',
        discount: '10%'
    },
    {
        id: 10,
        number: 10,
        name: 'لپ تاپ dell شماره  ',
        price: '15,000,000',
        srcImg: 'productImg/kala2.jfif',
        details: 'لپ تاپ دل 15 اینچ مدل LATITUDE E5540 پردازنده Core i3 رم 8GB هارد 512GB گرافیک 2GB ',
        grouping: 'LapTop',
        existence: 'yes',
        discount: '0%'
    },

    {
        id: 11,
        number: 1,
        name: 'یخچال فریزر ساید بای ساید شماره ',
        price: '115,000,000',
        srcImg: 'productImg/kala4.jfif',
        details: ' دارای ابسرد کن (متصل به اب شهری ) و درب دو قلو با تکنولوژی تازه نگه داشتن مواد',
        grouping: 'refrigerator',
        existence: 'yes',
        discount: '4%'
    },
    {
        id: 12,
        number: 2,
        name: 'یخچال فریزر ساید بای ساید شماره ',
        price: '120,000,000',
        srcImg: 'productImg/kala5.jfif',
        details: ' دارای ابسرد کن (متصل به اب شهری ) و درب دو قلو با تکنولوژی تازه نگه داشتن مواد',
        grouping: 'refrigerator',
        existence: 'yes',
        discount: '5%'
    },
    {
        id: 13,
        number: 3,
        name: 'یخچال فریزر ساید بای ساید شماره ',
        price: '520,000,000',
        srcImg: 'productImg/kala6.jfif',
        details: ' دارای ابسرد کن (متصل به اب شهری ) و درب دو قلو با تکنولوژی تازه نگه داشتن مواد',
        grouping: 'refrigerator',
        existence: 'yes',
        discount: '0%'
    },
    {
        id: 14,
        number: 4,
        name: 'یخچال فریزر ساید بای ساید شماره ',
        price: '74,000,000',
        srcImg: 'productImg/kala4.jfif',
        details: ' دارای ابسرد کن (متصل به اب شهری ) و درب دو قلو با تکنولوژی تازه نگه داشتن مواد',
        grouping: 'refrigerator',
        existence: 'yes',
        discount: '5%'
    },
    {
        id: 15,
        number: 5,
        name: 'یخچال فریزر ساید بای ساید شماره ',
        price: '45,000,000',
        srcImg: 'productImg/kala5.jfif',
        details: ' دارای ابسرد کن (متصل به اب شهری ) و درب دو قلو با تکنولوژی تازه نگه داشتن مواد',
        grouping: 'refrigerator',
        existence: 'yes',
        discount: '5%'
    },
    {
        id: 16,
        number: 6,
        name: 'یخچال فریزر ساید بای ساید شماره ',
        price: '47,000,000',
        srcImg: 'productImg/kala6.jfif',
        details: ' دارای ابسرد کن (متصل به اب شهری ) و درب دو قلو با تکنولوژی تازه نگه داشتن مواد',
        grouping: 'refrigerator',
        existence: 'yes',
        discount: '5%'
    },
    {
        id: 17,
        number: 7,
        name: 'یخچال فریزر ساید بای ساید شماره ',
        price: '100,000,000',
        srcImg: 'productImg/kala4.jfif',
        details: ' دارای ابسرد کن (متصل به اب شهری ) و درب دو قلو با تکنولوژی تازه نگه داشتن مواد',
        grouping: 'refrigerator',
        existence: 'yes',
        discount: '2%'
    },
    {
        id: 18,
        number: 8,
        name: 'یخچال فریزر ساید بای ساید شماره ',
        price: '330,000,000',
        srcImg: 'productImg/kala5.jfif',
        details: ' دارای ابسرد کن (متصل به اب شهری ) و درب دو قلو با تکنولوژی تازه نگه داشتن مواد',
        grouping: 'refrigerator',
        existence: 'no',
        discount: '0%'
    },
    {
        id: 19,
        number: 9,
        name: 'یخچال فریزر ساید بای ساید شماره ',
        price: '200,000,000',
        srcImg: 'productImg/kala5.jfif',
        details: ' دارای ابسرد کن (متصل به اب شهری ) و درب دو قلو با تکنولوژی تازه نگه داشتن مواد',
        grouping: 'refrigerator',
        existence: 'no',
        discount: '0%'
    }, {
        id: 20,
        number: 10,
        name: 'یخچال فریزر ساید بای ساید شماره ',
        price: '150,000,000',
        srcImg: 'productImg/kala5.jfif',
        details: ' دارای ابسرد کن (متصل به اب شهری ) و درب دو قلو با تکنولوژی تازه نگه داشتن مواد',
        grouping: 'refrigerator',
        existence: 'yes',
        discount: '15%'
    },

    {
        id: 21,
        number: 1,
        name: 'جارو برقی LG شماره ',
        price: '5,000,000',
        srcImg: 'productImg/kala7.jfif',
        details: 'دارای حالت بی صدا و تقویت کننده ی قدرت  قابلیت وصل شدن به کیسه ی یکبار مصرف ',
        grouping: 'cleaner',
        existence: 'no',
        discount: '5%'
    },
    {
        id: 22,
        number: 2,
        name: 'جارو برقی LG شماره ',
        price: 15,
        srcImg: 'productImg/kala8.jfif',
        details: 'دارای حالت بی صدا و تقویت کننده ی قدرت  قابلیت وصل شدن به کیسه ی یکبار مصرف ',
        grouping: 'cleaner',
        existence: 'no',
        discount: '5%'
    },
    {
        id: 23,
        number: 3,
        name: 'جارو برقی LG شماره ',
        price: 15,
        srcImg: 'productImg/kala9.jfif',
        details: 'دارای حالت بی صدا و تقویت کننده ی قدرت  قابلیت وصل شدن به کیسه ی یکبار مصرف ',
        grouping: 'cleaner',
        existence: 'yes',
        discount: '0%'
    },
    {
        id: 24,
        number: 4,
        name: 'جارو برقی LG شماره ',
        price: 15,
        srcImg: 'productImg/kala7.jfif',
        details: 'دارای حالت بی صدا و تقویت کننده ی قدرت  قابلیت وصل شدن به کیسه ی یکبار مصرف ',
        grouping: 'cleaner',
        existence: 'yes',
        discount: '0%'
    },
    {
        id: 25,
        number: 5,
        name: 'جارو برقی LG شماره ',
        price: '5,000,000',
        srcImg: 'productImg/kala8.jfif',
        details: 'دارای حالت بی صدا و تقویت کننده ی قدرت  قابلیت وصل شدن به کیسه ی یکبار مصرف ',
        grouping: 'cleaner',
        existence: 'yes',
        discount: '0%'
    },
    {
        id: 26,
        number: 6,
        name: 'جارو برقی سامسونگ شماره ',
        price: '5,000,000',
        srcImg: 'productImg/kala9.jfif',
        details: 'دارای حالت بی صدا و تقویت کننده ی قدرت  قابلیت وصل شدن به کیسه ی یکبار مصرف ',
        grouping: 'cleaner',
        existence: 'yes',
        discount: '0%'
    },
    {
        id: 27,
        number: 7,
        name: 'جارو برقی سامسونگ شماره ',
        price: '5,000,000',
        srcImg: 'productImg/kala7.jfif',
        details: 'دارای حالت بی صدا و تقویت کننده ی قدرت  قابلیت وصل شدن به کیسه ی یکبار مصرف ',
        grouping: 'cleaner',
        existence: 'yes',
        discount: '0%'
    },
    {
        id: 28,
        number: 8,
        name: 'جارو برقی سامسونگ شماره ',
        price: '5,000,000',
        srcImg: 'productImg/kala8.jfif',
        details: 'دارای حالت بی صدا و تقویت کننده ی قدرت  قابلیت وصل شدن به کیسه ی یکبار مصرف ',
        grouping: 'cleaner',
        existence: 'yes',
        discount: '0%'
    },
    {
        id: 29,
        number: 9,
        name: 'جارو برقی سامسونگ شماره ',
        price: '5,000,000',
        srcImg: 'productImg/kala8.jfif',
        details: 'دارای حالت بی صدا و تقویت کننده ی قدرت  قابلیت وصل شدن به کیسه ی یکبار مصرف ',
        grouping: 'cleaner',
        existence: 'yes',
        discount: '0%'
    },
    {
        id: 30,
        number: 10,
        name: 'جارو برقی سامسونگ شماره ',
        price: '5,000,000',
        srcImg: 'productImg/kala8.jfif',
        details: 'دارای حالت بی صدا و تقویت کننده ی قدرت  قابلیت وصل شدن به کیسه ی یکبار مصرف ',
        grouping: 'cleaner',
        existence: 'yes',
        discount: '0%'
    },
]
let productLapTop = listProduct.filter(function (product) {
    return product.grouping === "LapTop"
})
productLapTop.forEach(function (laptop) {
    templateProduct(containerProductLapTop, laptop)
})
let productRefrigerator = listProduct.filter(function (product) {
    return product.grouping === 'refrigerator'
})
productRefrigerator.forEach(function (refrigerator) {
    templateProduct(containerProductRefrigerator, refrigerator)
})
let productCleaner = listProduct.filter(function (product) {
    return product.grouping === 'cleaner'
})
productCleaner.forEach(function (cleaner) {
    templateProduct(containerProductCleaner, cleaner)
})
let productDiscount = listProduct.filter(function (discount) {
    return discount.discount !== '0%' && discount.existence === 'yes'
})
productDiscount.forEach(function (productDiscount) {
    templateProduct(showProductDiscount, productDiscount)
})

function templateProduct(container, product) {
    container.insertAdjacentHTML('beforeend', '<div class="product" id="'+product.id+'">\n' +
        '    <div class="nameProduct">\n' +
        '        <h3> ' + product.name + ' ' + product.number + '</h3>\n' +
        '    </div>\n' +
        '    <div class="imgProduct">\n' +
        '        <img src="' + product.srcImg + '" alt="">\n' +
        '    </div>\n' +
        '    <div class="infoProduct">\n' +
        '        <div>\n' +
        '            <span>توضیحات :</span>\n' +
        '        </div>\n' +
        '        <div>\n' +
        '        <span>' + product.details + '</span>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="priceProduct">\n' +
        '        <span>قیمت :</span><span>' + product.price + '</span>\n' +
        '        <span>تخفیف :</span><span> ' + product.discount + '</span>\n' +
        '    </div>\n' +
        '    <div class="btn-addCart-favorite">\n' +
        '        <button>افزودن به سبد خرید</button>\n' +
        '        <button>افزودن به علاقه مندی</button>\n' +
        '    </div>\n' +
        '</div>')

}

function informationProduct(productId) {
    location.href = 'productInfo.html?id=' + productId + ''
}

let divProduct = document.querySelectorAll('.product')
divProduct.forEach(function (divPro) {
    divPro.addEventListener('click', function () {
      informationProduct(divPro.id)
    })
})

//                      showMenuBarMO               //
let showMenuBarMO = document.querySelector('#showMenuBarMO')
let menuBarMo = document.querySelector('.menuBarMo')
let closedMenuBarMO = document.querySelector('#closedMenuBarMO')
let menuMO = document.querySelector('.menuMO')
showMenuBarMO.addEventListener('click', function () {
    menuMO.style.left = '1rem'
    menuBarMo.style.visibility ='visible'

})
closedMenuBarMO.addEventListener('click', function () {
    menuMO.style.left = '500px'
    menuBarMo.style.visibility ='hidden'
})


//                       //                 دسته بندی کالا


let btnKala = document.querySelector('#kala')
let showKala = document.querySelector('.showKala')
let btnClosedShowKala = document.querySelector('.spanClosedShow')
divContainer = document.querySelector('#container')


function showKalaHandler(event) {
    event.preventDefault()
    showKala.style.display = 'block'
    divContainer.style.filter = 'blur(10px)'


}

function closedKalaHandler() {
    showKala.style.display = 'none'
    divContainer.style.filter = 'blur(0)'

}

btnKala.addEventListener('click', showKalaHandler)
btnClosedShowKala.addEventListener('click', closedKalaHandler)

