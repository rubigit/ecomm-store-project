const shortProductDescription = `Here is a shot of this product that might entice a user to click and add it to their cart.`
const genericOverview = `aLorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime eos, ducimus sapiente est quaerat repellendus necessitatibus praesentium modi quo sequi ad quibusdam illum officia. Animi consectetur id omnis qui et.`

//create products
const products = [
    {
        sku: `lmp001`,
        name: `Vavi`,
        category: `Table-Desk Lamp`,
        idCategory: `desk`,
        color: `Black`,
        bulbType: `Incandescent`,
        bulbColor: { color1: `White`, color2: `Yellow`, color2: `Rainbow` },
        price: { regPrice: 66, salePrice: 55 },
        shortdescription: shortProductDescription,
        rate: `5`,
        picture: [
            `desk-lamp-01-960w.jpg`,
            `chand-04-960w.jpg`,
            `floor-lamp-04-960w.jpg`,
            `floor-lamp-01-960w.jpg`,
            `wall-lamp-01-960w.jpg`
        ],
        picDescription: `Two table lamps in a bedroom`,
        overDescription: genericOverview,
        overShipping: genericOverview,
        overGuarantee: genericOverview
    },
    {
        sku: `lmp002`,
        name: `Soroca`,
        category: `Table-Desk Lamp`,
        idCategory: `desk`,
        color: `white`,
        bulbType: `Led`,
        bulbColor: { color1: `White`, color2: `Yellow`, color2: `Rainbow` },
        price: { regPrice: 93, salePrice: 82 },
        shortdescription: shortProductDescription,
        rate: `4.5`,
        picture: [
            `desk-lamp-02-960w.jpg`,
            `desk-lamp-01-960w.jpg`,
            `chand-01-960w.jpg`,
            `floor-lamp-01-960w.jpg`,
            `wall-lamp-01-960w.jpg`
        ],
        picDescription: `Clear wine glass beside white table lamp`,
        overDescription: genericOverview,
        overShipping: genericOverview,
        overGuarantee: genericOverview
    },
    {
        sku: `lmp003`,
        name: `Aalin`,
        category: `Floor Lamp`,
        idCategory: `floor`,
        color: `grey`,
        bulbType: `Incandescent`,
        bulbColor: { color1: `White`, color2: `Yellow`, color2: `Rainbow` },
        price: { regPrice: 78, salePrice: 67 },
        shortdescription: shortProductDescription,
        rate: `4`,
        picture: [
            `floor-lamp-01-960w.jpg`,
            `desk-lamp-02-960w.jpg`,
            `desk-lamp-01-960w.jpg`,
            `floor-lamp-01-960w.jpg`,
            `floor-lamp-02-960w.jpg`
        ],
        picDescription: `Floor lamp beside chair and desk`,
        overDescription: genericOverview,
        overShipping: genericOverview,
        overGuarantee: genericOverview
    },
    {
        sku: `lmp004`,
        name: `Aria`,
        category: `Floor Lamp`,
        idCategory: `floor`,
        color: `gold`,
        bulbType: `inc`,
        bulbColor: { color1: `White`, color2: `Yellow`, color2: `Rainbow` },
        price: { regPrice: 74, salePrice: 63 },
        shortdescription: shortProductDescription,
        rate: `2.5`,
        picture: [
            `floor-lamp-02-960w.jpg`,
            `chand-03-960w.jpg`,
            `chand-04-960w.jpg`,
            `desk-lamp-01-960w.jpg`,
            `desk-lamp-02-960w.jpg`
        ],
        picDescription: `Floor lamp beside sofa and window`,
        overDescription: genericOverview,
        overShipping: genericOverview,
        overGuarantee: genericOverview
    },
    {
        sku: `lmp005`,
        name: `Mattia`,
        category: `Wall Lamp`,
        idCategory: `wall`,
        color: `brown`,
        bulbType: `Incandescent`,
        bulbColor: { color1: `White`, color2: `Yellow`, color2: `Rainbow` },
        price: { regPrice: 86, salePrice: 75 },
        shortdescription: shortProductDescription,
        rate: `3.5`,
        picture: [
            `wall-lamp-01-960w.jpg`,
            `desk-lamp-02-960w.jpg`,
            `floor-lamp-02-960w.jpg`,
            `wall-lamp-01-960w.jpg`,
            `desk-lamp-01-960w.jpg`
        ],
        picDescription: `Wall lamp in a modern bright livingroom`,
        overDescription: genericOverview,
        overShipping: genericOverview,
        overGuarantee: genericOverview
    },
    {
        sku: `lmp006`,
        name: `Zoovi`,
        category: `Wall Lamp`,
        idCategory: `wall`,
        color: `black`,
        bulbType: `Led`,
        bulbColor: { color1: `White`, color2: `Yellow`, color2: `Rainbow` },
        price: { regPrice: 98, salePrice: 87 },
        shortdescription: shortProductDescription,
        rate: `4.5`,
        picture: [
            `wall-lamp-02-960w.jpg`,
            `desk-lamp-02-960w.jpg`,
            `chand-01-960w.jpg`,
            `floor-lamp-03-960w.jpg`,
            `floor-lamp-04-960w.jpg`

        ],
        picDescription: `Two wall lamps in a bedroom`,
        overDescription: genericOverview,
        overShipping: genericOverview,
        overGuarantee: genericOverview
    },
    {
        sku: `lmp007`,
        name: `Anaro`,
        category: `Chandelier`,
        idCategory: `chandelier`,
        color: `Black`,
        bulbType: `Incandescent`,
        bulbColor: { color1: `White`, color2: `Yellow`, color2: `Rainbow` },
        price: { regPrice: 66, salePrice: 55 },
        shortdescription: shortProductDescription,
        rate: `5`,
        picture: [
            `chand-01-960w.jpg`,
            `desk-lamp-02-960w.jpg`,
            `floor-lamp-01-960w.jpg`,
            `floor-lamp-02-960w.jpg`,
            `wall-lamp-02-960w.jpg`
        ],
        picDescription: `Chandelier in a living room`,
        overDescription: genericOverview,
        overShipping: genericOverview,
        overGuarantee: genericOverview
    },
    {
        sku: `lmp008`,
        name: `Hayth`,
        category: `Chandelier`,
        idCategory: `chandelier`,
        color: `white`,
        bulbType: `Led`,
        bulbColor: { color1: `White`, color2: `Yellow`, color2: `Rainbow` },
        price: { regPrice: 93, salePrice: 82 },
        shortdescription: shortProductDescription,
        rate: `5`,
        picture: [
            `chand-02-960w.jpg`,
            `desk-lamp-01-960w.jpg`,
            `desk-lamp-02-960w.jpg`,
            `floor-lamp-01-960w.jpg`,
            `wall-lamp-01-960w.jpg`
        ],
        picDescription: `Chandelier and red and brown floral stair carpet`,
        overDescription: genericOverview,
        overShipping: genericOverview,
        overGuarantee: genericOverview
    },
    {
        sku: `lmp009`,
        name: `Juliss`,
        category: `Floor Lamp`,
        idCategory: `floor`,
        color: `grey`,
        bulbType: `Incandescent`,
        bulbColor: { color1: `White`, color2: `Yellow`, color2: `Rainbow` },
        price: { regPrice: 78, salePrice: 67 },
        shortdescription: shortProductDescription,
        rate: `4`,
        picture: [
            `floor-lamp-03-960w.jpg`,
            `chand-03-960w.jpg`,
            `floor-lamp-02-960w.jpg`,
            `wall-lamp-02-960w.jpg`,
            `wall-lamp-01-960w.jpg`
        ],
        picDescription: `Bedroom interior with lamps near bed and mirror wall`,
        overDescription: genericOverview,
        overShipping: genericOverview,
        overGuarantee: genericOverview
    },
    {
        sku: `lmp010`,
        name: `Wynny`,
        category: `Floor Lamp`,
        idCategory: `floor`,
        color: `gold`,
        bulbType: `Incandescent`,
        bulbColor: { color1: `White`, color2: `Yellow`, color2: `Rainbow` },
        price: { regPrice: 74, salePrice: 63 },
        shortdescription: shortProductDescription,
        rate: `2.5`,
        picture: [
            `floor-lamp-04-960w.jpg`,
            `chand-01-960w.jpg`,
            `floor-lamp-02-960w.jpg`,
            `floor-lamp-03-960w.jpg`,
            `wall-lamp-02-960w.jpg`
        ],
        picDescription: `Floor lamp and green sofa`,
        overDescription: genericOverview,
        overShipping: genericOverview,
        overGuarantee: genericOverview
    },
    {
        sku: `lmp011`,
        name: `Draki`,
        category: `Chandelier`,
        idCategory: `chandelier`,
        color: `brown`,
        bulbType: `Incandescent`,
        bulbColor: { color1: `White`, color2: `Yellow`, color2: `Rainbow` },
        price: { regPrice: 86, salePrice: 75 },
        shortdescription: shortProductDescription,
        rate: `3.5`,
        picture: [
            `chand-03-960w.jpg`,
            `wall-lamp-01-960w.jpg`,
            `floor-lamp-02-960w.jpg`,
            `chand-04-960w.jpg`,
            `desk-lamp-01-960w.jpg`
        ],
        picDescription: `Chandelier and grind curtains`,
        overDescription: genericOverview,
        overShipping: genericOverview,
        overGuarantee: genericOverview
    },
    {
        sku: `lmp012`,
        name: `Ronai`,
        category: `Chandelier`,
        idCategory: `chandelier`,
        color: `black`,
        bulbType: `Led`,
        bulbColor: { color1: `White`, color2: `Yellow`, color2: `Rainbow` },
        price: { regPrice: 98, salePrice: 87 },
        shortdescription: shortProductDescription,
        rate: `3.5`,
        picture: [
            `chand-04-960w.jpg`,
            `floor-lamp-01-960w.jpg`,
            `floor-lamp-02-960w.jpg`,
            `wall-lamp-02-960w.jpg`,
            `wall-lamp-01-960w.jpg`
        ],
        picDescription: `white Chandelier and brown living room`,
        overDescription: genericOverview,
        overShipping: genericOverview,
        overGuarantee: genericOverview
    }

]