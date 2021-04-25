const shortProductDescription = `Here is a shot of this product that might entice a user to click and add it to their cart.`
const products = [
    {
        name: `Vavi`,
        category: `Table & Desk Lamp`,
        color: `Black`,
        bulbType: `Incandescent`,
        price: { regPrice: 66, salePrice: 55 },
        shortdescription: shortProductDescription,
        rate: `4.5`,
        picture: `desk-lamp-01-480w.jpg`,
        picDescription: `Two table lamps in a bedroom`
    }
]

const productTable = document.querySelector(`#results`)
products.forEach((product) => {
    alert(`asdasd`)
    const displayProduct = document.createElement(`article`)
    displayProduct.classList.add(`product`)
    displayProduct.innerHTML = `
    <header>
          <img src="img/${product.picture}" alt="${product.picDescription}" height="320" />
          <div class=prod-name-price>
            <h3>${product.name} ${product.category}</h3>
            <data value="${product.price.salePrice} "><del>$${product.price.regPrice}.00</del><ins>$${product.price.salePrice}.00</ins></data>
          </div>
          <div class="prod-description-rate">
            <p>${product.shortdescription}</p>
            <dl>
              <dt>Rating</dt>
              <dd><span class="material-icons">star</span><span class="material-icons">star</span><span
                  class="material-icons">star</span><span class="material-icons">star</span><span
                  class="material-icons">star_half</span><span>${product.rate}</span></dd>
            </dl>
          </div>
          <a href="./product.html">see more</a>
        </header>
        <footer>
          <button class="product-like"><span class="produc-icon-text">.</span></button>
          <button class="product-cart"><span class="produc-icon-text">.</span></button>
        </footer>
    `
    productTable.appendChild(displayProduct)
})