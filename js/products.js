const shortProductDescription = `Here is a shot of this product that might entice a user to click and add it to their cart.`
const genericOverview = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime eos, ducimus sapiente est quaerat repellendus necessitatibus praesentium modi quo sequi ad quibusdam illum officia. Animi consectetur id omnis qui et.`
const products = [
    {
        sku: `lmp001`,
        name: `Vavi`,
        category: `Table-Desk Lamp`,
        color: `Black`,
        bulbType: `Incandescent`,
        bulbColor: { color1: `White`, color2: `Yellow`, color2: `Rainbow` },
        price: { regPrice: 66, salePrice: 55 },
        shortdescription: shortProductDescription,
        rate: `5`,
        picture: [
            `desk-lamp-01-480w.jpg`,
            `desk-lamp-02-480w.jpg`,
            `floor-lamp-01-480w.jpg`,
            `floor-lamp-02-480w.jpg`,
            `wall-lamp-02-480w.jpg`
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
        color: `white`,
        bulbType: `Led`,
        bulbColor: { color1: `White`, color2: `Yellow`, color2: `Rainbow` },
        price: { regPrice: 93, salePrice: 82 },
        shortdescription: shortProductDescription,
        rate: `5`,
        picture: [
            `desk-lamp-02-480w.jpg`,
            `desk-lamp-02-480w.jpg`,
            `desk-lamp-02-480w.jpg`,
            `desk-lamp-02-480w.jpg`,
            `desk-lamp-02-480w.jpg`
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
        color: `grey`,
        bulbType: `Incandescent`,
        bulbColor: { color1: `White`, color2: `Yellow`, color2: `Rainbow` },
        price: { regPrice: 78, salePrice: 67 },
        shortdescription: shortProductDescription,
        rate: `4`,
        picture: [
            `floor-lamp-01-480w.jpg`,
            `floor-lamp-01-480w.jpg`,
            `floor-lamp-01-480w.jpg`,
            `floor-lamp-01-480w.jpg`,
            `floor-lamp-01-480w.jpg`
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
        color: `gold`,
        bulbType: `Led`,
        bulbColor: { color1: `White`, color2: `Yellow`, color2: `Rainbow` },
        price: { regPrice: 74, salePrice: 63 },
        shortdescription: shortProductDescription,
        rate: `3.5`,
        picture: [
            `floor-lamp-02-480w.jpg`,
            `floor-lamp-02-480w.jpg`,
            `floor-lamp-02-480w.jpg`,
            `floor-lamp-02-480w.jpg`,
            `floor-lamp-02-480w.jpg`
        ],
        picDescription: `Floor lamp beside sofa and window`,
        overDescription: genericOverview,
        overShipping: genericOverview,
        overGuarantee: genericOverview
    }

]