
let prDetail
let sku = window.location.search.split('=')[1]

products.forEach((product) => {
    if (product.sku == sku) {
        prDetail = product
    }
})


const loadPicture = function (urlPicture) {
    document.querySelector(`#mainPicture`).src = urlPicture
}

// function fLoadPicture(urlPicture) {
//     document.querySelector(`#mainPicture`).src = urlPicture

// }

const productTable = document.querySelector(`#picList`)

let sInnerHTML = ` 
<img id="mainPicture" src="img/${prDetail.picture[0]}" alt="Two table lamps in a bedroom" height="320" />`
productTable.innerHTML = sInnerHTML

const newUl = document.createElement(`ul`)
newUl.classList.add(`prd-heading-pictures`)

prDetail.picture.forEach((img) => {
    const newLi = document.createElement(`li`)
    const newProduct = document.createElement(`img`)
    newProduct.setAttribute(`src`, `img/${img}`)
    newProduct.setAttribute(`alt`, `${prDetail.picDescription}`)
    newProduct.setAttribute(`height`, `"50"`)
    newProduct.addEventListener(`click`, function () { loadPicture(`img/${img}`) })
    newLi.appendChild(newProduct)
    newUl.appendChild(newLi)
})

productTable.appendChild(newUl)


//let sPicturesInnerHTML = document.querySelector(`#CollectionPicture`);

document.querySelector(`#ProductTitle`).innerHTML = `${prDetail.name} ${prDetail.category}`
document.querySelector(`#dataprice`).value = `${prDetail.price.salePrice}`
document.querySelector(`#delPrice`).innerHTML = `$${prDetail.price.regPrice}.00`
document.querySelector(`#insPrice`).innerHTML = `$${prDetail.price.salePrice}.00`
document.querySelector(`#description`).innerHTML = `
<li><span>${prDetail.overDescription}</span></li>
<li><span>${prDetail.overDescription}</span></li>`
document.querySelector(`#shipping`).innerHTML = `
<li><span>${prDetail.overDescription}</span></li>
<li><span>${prDetail.overDescription}</span></li>`
document.querySelector(`#guarantee`).innerHTML = `
<li><span>${prDetail.overDescription}</span></li>
<li><span>${prDetail.overDescription}</span></li>`





var sStarRate = ``
var aStars = prDetail.rate.split('.')

for (var i = 0; i < parseInt(aStars[0]); i++) {
    sStarRate += '<span class="material-icons">star</span>'
}

if (aStars[1] && parseInt(aStars[1]) == 5)
    sStarRate += '<span class="material-icons">star_half</span>'

document.querySelector(`#`).innerHTML = sStarRate