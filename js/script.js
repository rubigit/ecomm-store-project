function LoadPage(filters, sort, searchFilter) {

  const productTable = document.querySelector(`#results`)
  productTable.innerHTML = ""

  products.sort(function (a, b) {
    let valueA
    let valueB

    if (sort == "high") {
      valueA = b.price.salePrice
      valueB = a.price.salePrice
    } else if (sort == "low") {
      valueA = a.price.salePrice
      valueB = b.price.salePrice
    } else if (sort == "rate") {
      valueA = a.rate
      valueB = b.rate
    }
    else {
      valueA = a.name
      valueB = b.name
    }

    if (valueA > valueB) {
      return 1
    }
    if (valueA < valueB) {
      return -1
    }

    return 0

  })

  products.forEach((product) => {

    let addProduct = false

    if (filters[0].length == 0 && filters[1].length == 0 && filters[2].length == 0 && filters[3] == 0 && searchFilter == "") {
      addProduct = true
    }
    else {
      //alert(filters[3])
      //RATING
      if (parseInt(product.rate) >= filters[3])
        addProduct = true

      //CATEGORY
      if (filters[0].length > 0 && addProduct) {
        addProduct = false
        filters[0].forEach((myCategory) => {
          if (product.idCategory.toUpperCase() == myCategory.toUpperCase())
            addProduct = true
        })
      }

      // LAMP FINISH
      if (filters[1].length > 0 && addProduct) {
        addProduct = false
        filters[1].forEach((myColor) => {
          if (product.color.toUpperCase() == myColor.toUpperCase())
            addProduct = true
        })
      }

      //BULB TYPE
      if (filters[2].length > 0 && addProduct) {
        addProduct = false
        filters[2].forEach((myBulbType) => {
          if (product.bulbType.toUpperCase() == myBulbType.toUpperCase())
            addProduct = true
        })
      }

      // SEARCH NAME
      if (searchFilter != "" && addProduct) {
        if (product.name.toUpperCase().includes(searchFilter.toUpperCase()))
          addProduct = true
        else
          addProduct = false
      }

    }

    if (addProduct) {
      const displayProduct = document.createElement(`article`)
      displayProduct.classList.add(`product`)
      let sInnerHTML = `
      <header>
            <img src="img/${product.picture[0]}" alt="${product.picDescription}" height="320" />
            <div class=prod-name-price>
              <h3>${product.name} ${product.category}</h3>
              <data value="${product.price.salePrice} "><del>$${product.price.regPrice}.00</del><ins>$${product.price.salePrice}.00</ins></data>
            </div>
            <div class="prod-description-rate">
              <p>${product.shortdescription}</p>
              <dl>
                  <dd>`

      let aStars = product.rate.split('.')

      for (let i = 0; i < parseInt(aStars[0]); i++) {
        sInnerHTML += '<span class="material-icons">star</span>'
      }

      if (aStars[1] && parseInt(aStars[1]) == 5)
        sInnerHTML += '<span class="material-icons">star_half</span>'

      sInnerHTML += `</dd>
              </dl>
            </div>
            <a class="see-more" href="./product.html?sku=${product.sku}">see more</a>
          </header>
          <footer>
            <button class="product-like"><span class="produc-icon-text">.</span></button>
            <button class="product-cart"><span class="produc-icon-text">.</span></button>
          </footer>
      `
      displayProduct.innerHTML = sInnerHTML
      productTable.appendChild(displayProduct)
    }
  })
}

function getFilters() {
  let filters = []
  let category = []
  let lampFinish = []
  let bulbType = []

  //CATEGORY
  let filterCategory = document.querySelector(`#filterCategory`).children

  for (let i = 0; i < filterCategory.length; i++) {
    if (filterCategory[i].children[0].checked)
      category.push(filterCategory[i].children[0].value)
  }
  filters[0] = category

  //LAMP FINISH
  let filterLampFinish = document.querySelector(`#filterLampFinish`).children

  for (let i = 0; i < filterLampFinish.length; i++) {
    if (filterLampFinish[i].children[0].checked)
      lampFinish.push(filterLampFinish[i].children[0].value)
  }
  filters[1] = lampFinish

  //BULB TYPE
  let filterBulbType = document.querySelector(`#filterBulbType`).children

  for (let i = 0; i < filterBulbType.length; i++) {
    if (filterBulbType[i].children[0].checked)
      bulbType.push(filterBulbType[i].children[0].value)
  }
  filters[2] = bulbType

  //RATING
  if (document.querySelector(`#aboveFour`).checked)
    filters[3] = 4
  else if (document.querySelector(`#aboveThree`).checked)
    filters[3] = 3
  else if (document.querySelector(`#aboveTwo`).checked)
    filters[3] = 2
  else
    filters[3] = 0

  return filters
}

const toggleFilters = function () {

  //alert(document.querySelector(`.filters`))
  document.querySelector(`.filters`).classList.toggle(`makeFloat`)
  document.querySelector(`.filter-options`).classList.toggle(`hide`)
  document.querySelector(`.filter-btn-collectio`).classList.toggle(`hide`)

  let filters = getFilters()
  LoadPage(filters, document.querySelector(`#sort`).value, document.querySelector(`#find`).value)
}
const applyFilter = function () {
  let filters = getFilters()
  LoadPage(filters, document.querySelector(`#sort`).value, document.querySelector(`#find`).value)
}

const searchFilter = function () {

  let filters = getFilters()
  LoadPage(filters, document.querySelector(`#sort`).value, document.querySelector(`#find`).value)
}

const clearFilters = function () {
  //CATEGORY
  let filterCategory = document.querySelector(`#filterCategory`).children
  for (let i = 0; i < filterCategory.length; i++) {
    filterCategory[i].children[0].checked = false
  }

  //LAMP FINISH
  let filterLampFinish = document.querySelector(`#filterLampFinish`).children
  for (let i = 0; i < filterLampFinish.length; i++) {
    filterLampFinish[i].children[0].checked = false
  }

  //BULB TYPE
  let filterBulbType = document.querySelector(`#filterBulbType`).children
  for (let i = 0; i < filterBulbType.length; i++) {
    filterBulbType[i].children[0].checked = false
  }

  //RATING
  document.querySelector(`#aboveFour`).checked = false
  document.querySelector(`#aboveThree`).checked = false
  document.querySelector(`#aboveTwo`).checked = false
  document.querySelector(`#aboveOne`).checked = false
}

function sortProducts(event) {

  let filters = getFilters()

  LoadPage(filters, event.target.value, document.querySelector(`#find`).value)

}

// LOAD PAGE

//initialize products
LoadPage(new Array(new Array(), new Array(), new Array(), 0), 'name', '')

// Select filter button
// {
const filterButton = document.querySelector(`.filter-opt-button`)

filterButton.addEventListener(`click`, toggleFilters)
document.querySelector(`#btnClearFilter`).addEventListener(`click`, clearFilters)
document.querySelector(`#btnApplyFilter`).addEventListener(`click`, applyFilter)
document.querySelector(`#btnSearch`).addEventListener(`click`, searchFilter)


document.querySelector(`.filters`).classList.toggle(`makeFloat`)
document.querySelector(`.filter-options`).classList.toggle(`hide`)
document.querySelector(`.filter-btn-collectio`).classList.toggle(`hide`)

document.querySelector(`#sort`).addEventListener(`change`, sortProducts)

// }
