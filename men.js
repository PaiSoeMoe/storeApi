const express = require('express');
const router = express.Router();
const product = require('./models/men');







router.get('/', async (req, res) => {
    const products = [
        {
            name: "NY Graphic Drawstring Hoodie",
            isActive: false,
            newPrice: 44.00,
            oldPrice: 0,
            img: ["assets/img/men-hood/1.webp", "assets/img/men-hood/2.webp", "assets/img/men-hood/3.webp", "assets/img/men-hood/4.webp"],
            category: "hoodies-sweatshirts",
            categoryLink: "hoodies-sweatshirts",
            color: ['Black'],
            onsale: false,
            instock: true,
            size: ['XS', 'S'],
            detail: "A knit hoodie featuring a drawstring hood, a front 'NY' text graphic, multicolor graphics throughout, long sleeves, a kangaroo pocket, and banded trim."
        }, {
            name: "NASA Graphic Hoodie",
            isActive: false,

            newPrice: 39.99,
            oldPrice: 0,
            img: ["assets/img/men-hood/5.webp", "assets/img/men-hood/6.webp", "assets/img/men-hood/7.webp", "assets/img/men-hood/8.webp", "assets/img/men-hood/9.webp"],
            category: "hoodies-sweatshirts",
            categoryLink: "hoodies-sweatshirts",
            color: ['White'],
            onsale: false,
            instock: true,
            size: ['S', 'M', 'L'],
            detail: "From our Cosmic Space Collection, this fleece-backed knit hoodie features the NASA logo, text, and American flag printed graphics on the chest, contrast topstitching, a kangaroo pocket, dropped shoulders, long sleeves, and ribbed trim."
        },
        {
            name: "Jean-Michel Basquiat Graphic Hoodie",
            isActive: false,
            newPrice: 29.99,
            oldPrice: 39.99,
            img: ["assets/img/men-hood/10.webp", "assets/img/men-hood/11.webp", "assets/img/men-hood/12.webp", "assets/img/men-hood/13.webp", "assets/img/men-hood/14.webp"],
            category: "hoodies-sweatshirts",
            categoryLink: "hoodies-sweatshirts",
            color: ['White'],
            onsale: true,
            instock: true,
            size: ['S', 'M', 'L'],
            detail: 'From our Forever 21 x Jean-Michel Basquiat collection, a fleece knit graphic hoodie featuring "Jean- Michel Basquiat™" text with an image of his painting on the back, front artist logo, drawstring hood, long dropped sleeves, and a kangaroo pocket.- © Estate of Jean - Michel Basquiat.Licensed by Artestar, New York.'
        },
        {
            name: "Rose Print Fleece Sweatshirt",
            isActive: false,
            newPrice: 10.99,
            oldPrice: 17.99,
            img: ["assets/img/men-hood/15.webp", "assets/img/men-hood/16.webp", "assets/img/men-hood/17.webp", "assets/img/men-hood/18.webp"],
            category: "hoodies-sweatshirts",
            categoryLink: "hoodies-sweatshirts",
            color: ['Black'],
            onsale: true,
            instock: true,
            size: ['S', 'M', 'L'],
            detail: 'A fleece knit sweatshirt featuring an allover floral rose print, long sleeves, crew neck, and ribbed trim.'
        },
        {
            name: "Hooded Denim Jacket",
            isActive: false,
            newPrice: 39.99,
            oldPrice: 0,
            img: ["assets/img/men-jacket/1.webp", "assets/img/men-jacket/2.webp", "assets/img/men-jacket/3.webp"],
            category: "jackets-outerwear",
            categoryLink: "jackets-outerwear",
            color: ['Black'],
            onsale: false,
            instock: true,
            size: ['S', 'M', 'L'],
            detail: 'A midweight denim jacket featuring a heathered French terry knit drawstring hood, basic collar, button front, long sleeves with button cuffs, dual chest flap pockets with button closures, and front slanted pockets.'
        }, {
            name: "Fear The Youth Denim Jacket",
            isActive: false,
            newPrice: 44.99,
            oldPrice: 0,
            img: ["assets/img/men-jacket/4.webp", "assets/img/men-jacket/5.webp", "assets/img/men-jacket/7.webp",],
            category: "jackets-outerwear",
            categoryLink: "jackets-outerwear",
            color: ['Denim'],
            onsale: false,
            instock: true,
            size: ['S', 'M', 'L'],
            detail: 'A lightweight denim jacket featuring a basic collar, dropped long sleeves with button cuffs, buttoned chest flap pockets, button-down front, slanted front welt pockets, embroidered rose graphics with "Fear The Youth" text written on the back, and adjustable waist tabs.'
        },
        {
            name: "Faux Leather Moto Jacket",
            isActive: false,
            newPrice: 39.99,
            oldPrice: 0,
            img: ["assets/img/men-jacket/8.webp", "assets/img/men-jacket/9.webp", "assets/img/men-jacket/10.webp"],
            category: "jackets-outerwear",
            categoryLink: "jackets-outerwear",
            color: ['Black'],
            onsale: false,
            instock: true,
            size: ['S', 'M', 'L'],
            detail: 'A faux leather moto jacket featuring a notched collar with snap-button accents, long sleeves with zippered cuffs, snap-button epaulettes, zippered slanted chest and front pockets, mock flap pocket, removable belt, and an off-center zip-up closure.'
        },

        // jean

        {
            name: "Zip-Fly Skinny Jeans",
            isActive: false,
            newPrice: 22.99,
            oldPrice: 0,
            img: ["assets/img/men-jean/1.webp", "assets/img/men-jean/2.webp", "assets/img/men-jean/3.webp", "assets/img/men-jean/4.webp"],
            category: "denim-jeans",
            categoryLink: "denim-jeans",
            color: ['Denim'],
            onsale: false,
            instock: true,
            size: ['S', 'M', 'L'],
            detail: 'A pair of jeans featuring more stretch and incredible recovery, a classic five-pocket construction, zip fly with button closure, and a skinny cut.'
        },
        {
            name: "Distressed Ankle-Zip Moto Jeans",
            isActive: false,
            newPrice: 34.99,
            oldPrice: 0,
            img: ["assets/img/men-jean/5.webp", "assets/img/men-jean/6.webp", "assets/img/men-jean/7.webp", "assets/img/men-jean/8.webp"],
            category: "denim-jeans",
            categoryLink: "denim-jeans",
            color: ['Denim'],
            onsale: false,
            instock: true,
            size: ['S', 'M', 'L'],
            detail: 'A pair of moto jeans featuring a distressed design, skinny fit with ankle-zip cuffs, five-pocket construction, front jetted pockets, ribbed thigh panels and back yoke, and a zip fly with a button closure.'
        },
        {
            name: "Faded Distressed Skinny Jeans",
            isActive: false,
            newPrice: 29.99,
            oldPrice: 0,
            img: ["assets/img/men-jean/9.webp", "assets/img/men-jean/0.webp", "assets/img/men-jean/11.webp", "assets/img/men-jean/12.webp"],
            category: "denim-jeans",
            categoryLink: "denim-jeans",
            color: ['Denim'],
            onsale: false,
            instock: true,
            size: ['S', 'M', 'L'],
            detail: 'A pair of skinny jeans featuring distressing throughout, intentional fading, whiskering, five-pocket construction, zip fly with button closure, and frayed trim.'
        },
        {
            name: "Tokyo Graphic Skinny Jeans",
            isActive: false,
            newPrice: 29.99,
            oldPrice: 0,
            img: ["assets/img/men-jean/13.webp", "assets/img/men-jean/14.webp", "assets/img/men-jean/15.webp", "assets/img/men-jean/16.webp"],
            category: "denim-jeans",
            categoryLink: "denim-jeans",
            color: ['Black'],
            onsale: false,
            instock: true,
            size: ['S', 'M', 'L'],
            detail: 'A pair of skinny jeans featuring belt loops, removable shoelace belt, front faded "Tokyo" text graphic written in Old English font, distressing on the knees, five pocket construction, and a zip fly with button closure.'
        },

        // graphic tee
        {
            name: "Japanese Text Graphic Tee",
            isActive: false,
            newPrice: 12.99,
            oldPrice: 0,
            img: ["assets/img/tee/1.webp", "assets/img/tee/2.webp", "assets/img/tee/3.webp"],
            category: "graphic-tees",
            categoryLink: "graphic-tees",
            color: ['Black'],
            onsale: false,
            instock: true,
            size: ['S', 'M', 'L'],
            detail: 'A cotton knit tee featuring an oil wash, Japanese text on the chest and back that reads "xx" arranged in an x shape, a crew neck, and short sleeves.'
        },
        {
            name: "Culture Graphic Tee",
            isActive: false,
            newPrice: 10.99,
            oldPrice: 0,
            img: ["assets/img/tee/4.webp", "assets/img/tee/5.webp", "assets/img/tee/7.webp"],
            category: "graphic-tees",
            categoryLink: "graphic-tees",
            color: ['Navy'],
            onsale: false,
            instock: true,
            size: ['S', 'M', 'L'],
            detail: 'A knit tee featuring front vertical colorblock with "Culture" text, ribbed crew neck, and short sleeves.'
        },
        {
            name: "Embroidered Rose Graphic Striped Tee",
            isActive: false,
            newPrice: 18.99,
            oldPrice: 0,
            img: ["assets/img/tee/8.webp", "assets/img/tee/9.webp", "assets/img/tee/10.webp", "assets/img/tee/11.webp"],
            category: "graphic-tees",
            categoryLink: "graphic-tees",
            color: ['Pink'],
            onsale: false,
            instock: true,
            size: ['S', 'M', 'L'],
            detail: 'A knit tee featuring a multicolor vertical striped print, embroidered rose chest graphic, ribbed crew neck, and short sleeves.'
        },

        //top
        {
            name: "Classic Striped Shirt",
            isActive: false,
            newPrice: 28.99,
            oldPrice: 0,
            img: ["assets/img/top/1.webp", "assets/img/top/2.webp", "assets/img/top/3.webp", "assets/img/top/4.webp"],
            category: "tops",
            categoryLink: "tops",
            color: ['Multi'],
            onsale: false,
            instock: true,
            size: ['S', 'M', 'L'],
            detail: "A perennial mainstay that will take you from occasion to occasion with seasonless appeal, this multicolored striped floral print shirt is a must-have for any well-curated closet. It's crafted from soft woven fabric and boasts traditional details like a classic fit, basic collar, button- down front, and short sleeves."
        },
        {
            name: "Classic Striped Long Sleeve Shirt",
            isActive: false,
            newPrice: 24.99,
            oldPrice: 0,
            img: ["assets/img/top/5.webp", "assets/img/top/6.webp", "assets/img/top/7.webp", "assets/img/top/8.webp"],
            category: "tops",
            categoryLink: "tops",
            color: ['White'],
            onsale: false,
            instock: true,
            size: ['S', 'M', 'L'],
            detail: "A perennial mainstay that will take you from occasion to occasion with seasonless appeal, this striped print shirt is a must-have for any well-curated closet. It's crafted from a soft woven fabric and boasts traditional details like a classic fit, basic collar, button-down front, long sleeves with button cuffs, curved hem, and a chest patch pocket."
        },
        {
            name: "Rose Varsity-Trim Polo",
            isActive: false,
            newPrice: 18.99,
            oldPrice: 0,
            img: ["assets/img/top/9.webp", "assets/img/top/10.webp", "assets/img/top/11.webp", "assets/img/top/12.webp"],
            category: "tops",
            categoryLink: "tops",
            color: ['Black'],
            onsale: false,
            instock: true,
            size: ['S', 'M', 'L'],
            detail: 'A knit polo featuring an allover rose floral print, varsity striped trim, basic collar, short sleeves, and a partial button placket.'
        },

        // shoe
        {
            name: "Faux Leather Combat Boots",
            isActive: false,
            newPrice: 25.00,
            oldPrice: 35.00,
            img: ["assets/img/men-shoe/1.webp", "assets/img/men-shoe/2.webp", "assets/img/men-shoe/3.webp"],
            category: "shoes",
            categoryLink: "shoes",
            color: ['Black'],
            onsale: true,
            instock: true,
            size: ['S', 'M', 'L'],
            detail: 'A pair of faux leather combat boots featuring a round toe, lace-up closure, and a block heel.'
        },
        {
            name: "Faux Leather Combat Boots",
            isActive: false,
            newPrice: 35.00,
            oldPrice: 0,
            img: ["assets/img/men-shoe/4.webp", "assets/img/men-shoe/5.webp", "assets/img/men-shoe/6.webp"],
            category: "shoes",
            categoryLink: "shoes",
            color: ['Brown'],
            onsale: false,
            instock: true,
            size: ['S', 'M', 'L'],
            detail: 'A pair of faux leather combat boots featuring a round toe, lace-up closure, back pull tab, block heel, and a lug sole.'
        },
        // hat 
        {
            name: "Faux Suede Baseball Hat",
            isActive: false,
            newPrice: 15.00,
            oldPrice: 0,
            img: ["assets/img/men-hat/1.webp", "assets/img/men-hat/2.webp", "assets/img/men-hat/3.webp"],
            category: "hats-beanies",
            categoryLink: "hats-beanies",
            color: ['Green'],
            onsale: false,
            instock: true,
            size: ['S', 'M', 'L'],
            detail: 'A faux suede baseball hat featuring eyelet vets, curved brim, and an adjustable back strap.'
        },
        {
            name: "Ribbed Foldover Beanie",
            isActive: false,
            newPrice: 10.00,
            oldPrice: 0,
            img: ["assets/img/men-hat/4.webp", "assets/img/men-hat/6.webp"],
            category: "hats-beanies",
            categoryLink: "hats-beanies",
            color: ['Gray'],
            onsale: false,
            instock: true,
            size: ['S', 'M', 'L'],
            detail: 'A ribbed knit beanie with a foldover brim.'
        },

        //bag

        {
            name: "Faux Leather Backpack",
            isActive: false,
            newPrice: 35.00,
            oldPrice: 0,
            img: ["assets/img/men-bag/1.webp", "assets/img/men-bag/2.webp"],
            category: "bags-backpacks",
            categoryLink: "bags-backpacks",
            color: ['Black'],
            onsale: false,
            instock: true,
            size: ['S', 'M', 'L'],
            detail: 'A faux leather backpack featuring a top handle, zip top closure, wall pocket, front zip pocket, side pockets, and adjustable shoulder straps.'
        },

        {
            name: "Reflective Shield Sunglasses",
            isActive: false,
            newPrice: 35.00,
            oldPrice: 0,
            img: ["assets/img/men-sunglass/1.webp", "assets/img/men-sunglass/2.webp"],
            category: "sunglasses",
            categoryLink: "sunglasses",
            color: ['White'],
            onsale: false,
            instock: true,
            size: ['S', 'M', 'L'],
            detail: 'A pair of sunglasses featuring a shield design, reflective lenses, and a solid frame.'
        },


    ]



    products.forEach((p) => {
        let product = new product({
            name: p.name,
            isActive: p.isActive,
            newPrice: p.newPrice,
            oldPrice: p.oldPrice,
            img: p.img,
            category: p.category,
            categoryLink: p.categoryLink,
            color: p.color,
            onsale: p.onsale,
            instock: p.instock,
            size: p.size,
            detail: p.detail
        })
        product.save();

    })

    //let cate = req.query.subcategory;
    product.find({ category: "hoodies-sweatshirts" }).then((d) => {

        res.send("hah", d);
    });

    // if (req.query.id !== "undefined") {
    //     res.send(await product.findById(id));
    // }
    // else if (cate === 'all') {

    //     res.send(await product.find({}));
    // } else {
    //     res.send(await product.find({ category: cate }))

    // }
})


module.exports = router;