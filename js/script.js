const productTable = document.querySelector(`#results`)
products.forEach((product) => {
  // alert(`asdasd`)
  const displayProduct = document.createElement(`article`)
  displayProduct.classList.add(`product`)
  var sInnerHTML = `
    <header>
          <img src="img/${product.picture[0]}" alt="${product.picDescription}" height="320" />
          <div class=prod-name-price>
            <h3>${product.name} ${product.category}</h3>
            <data value="${product.price.salePrice} "><del>$${product.price.regPrice}.00</del><ins>$${product.price.salePrice}.00</ins></data>
          </div>
          <div class="prod-description-rate">
            <p>${product.shortdescription}</p>
            <dl>
                <dd>`;

  var aStars = product.rate.split('.');

  for (var i = 0; i < parseInt(aStars[0]); i++) {
    sInnerHTML += '<span class="material-icons">star</span>';
  }

  if (aStars[1] && parseInt(aStars[1]) == 5)
    sInnerHTML += '<span class="material-icons">star_half</span>';

  sInnerHTML += `</dd>
            </dl>
          </div>
          <a href="./product.html?sku=${product.sku}">see more</a>
        </header>
        <footer>
          <button class="product-like"><span class="produc-icon-text">.</span></button>
          <button class="product-cart"><span class="produc-icon-text">.</span></button>
        </footer>
    `;
  displayProduct.innerHTML = sInnerHTML;
  productTable.appendChild(displayProduct)
})