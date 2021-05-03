
let prDetail

//if the product is the same as the SKU parameter in the URL, asing to prDetail
products.forEach((product) => {
    //get the parameter and split by "=" to get the SKU
    let sku = window.location.search.split('=')[1]
    if (product.sku == sku) {
        prDetail = product
    }
})

//Get the path of the clicked picture and assing to the main big picture
const loadPicture = function (urlPicture) {
    document.querySelector(`#mainPicture`).src = urlPicture
}

//get the gallery containter
const pictureGallery = document.querySelector(`#picList`)

//populate the gallery containter
//add the big gallery
let sInnerHTML = ` 
<img id="mainPicture" src="img/${prDetail.picture[0]}" alt="${prDetail.picDescription}" height="320" />`
pictureGallery.innerHTML = sInnerHTML

//create conainter for a list of small pictures
const newUl = document.createElement(`ul`)
newUl.classList.add(`prd-heading-pictures`)

// for each picture of the product create new list item and insdie create a new img item
prDetail.picture.forEach((img) => {
    const newLi = document.createElement(`li`)
    const newProduct = document.createElement(`img`)
    newProduct.setAttribute(`src`, `img/${img}`)
    newProduct.setAttribute(`alt`, `${prDetail.picDescription}`)
    newProduct.setAttribute(`height`, `"50"`)
    //to each img item send a click event  and send the function to load the picture
    newProduct.addEventListener(`click`, function () { loadPicture(`img/${img}`) })

    newLi.appendChild(newProduct)
    newUl.appendChild(newLi)
})

pictureGallery.appendChild(newUl)

//let sPicturesInnerHTML = document.querySelector(`#CollectionPicture`);


//Popupate pe existing html elements to add Product properties
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

//get rate value, split by "." to know get the numbers before and after the decimal point
let sStarRate = ``
let aStars = prDetail.rate.split('.')

//for each integer number add a full start icon
for (let i = 0; i < parseInt(aStars[0]); i++) {
    sStarRate += '<span class="material-icons">star</span>'
}
//if there is a decil numer add a half start icon
if (aStars[1] && parseInt(aStars[1]) == 5)
    sStarRate += '<span class="material-icons">star_half</span>'

document.querySelector(`#`).innerHTML = sStarRate