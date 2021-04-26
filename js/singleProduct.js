
let prDetail;
let sku = window.location.search.split('=')[1];

products.forEach((product) => {
    if (product.sku == sku) {
        prDetail = product
    }

});

document.querySelector(`#ProductTitle`).innerHTML = `${prDetail.name} ${prDetail.category}`
document.querySelector(`#dataprice`).value = `${prDetail.price.salePrice}`
document.querySelector(`#delPrice`).innerHTML = `$${prDetail.price.regPrice}.00`
document.querySelector(`#insPrice`).innerHTML = `$${prDetail.price.salePrice}.00`





const productTable = document.querySelector(`#picList`);

let sInnerHTML = ` <img id="mainPicture" src="img/${prDetail.picture[0]}" alt="Two table lamps in a bedroom" height="320" />
<ul class="prd-heading-pictures">`;

prDetail.picture.forEach((img) => {
    sInnerHTML += `<li><img onclick="fLoadPicture('img/${img}');" src="img/${img}" alt="Two wall lamps in a bedroom" height="50"  /></li>`;
});

sInnerHTML += `</ul>`;

productTable.innerHTML = sInnerHTML;

function fLoadPicture(urlPicture) {
    document.querySelector(`#mainPicture`).src = urlPicture;

}