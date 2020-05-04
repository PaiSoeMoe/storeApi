const express = require('express');
const router = express.Router();
const product = require('./models/women');

const products = [

    {
        name: "Shawl Collar Open-Front Blazer",
        isActive: false,
        newPrice: 34.99,
        oldPrice: 0,
        img: ["assets/img/women-jacket/1.webp", "assets/img/women-jacket/2.webp", "assets/img/women-jacket/3.webp", "assets/img/women-jacket/4.webp"],
        category: "jackets-outerwear",
        categoryLink: "jackets-outerwear",
        color: ['Sage'],
        onsale: false,
        instock: true,
        size: ['S', 'M', 'L'],
        detail: 'A woven blazer featuring a shawl collar, open front, padded shoulders, ruched 3/4 sleeves, front flap pockets, and satin lining.'
    }, {
        name: "Faded Denim Jacket",
        isActive: false,
        newPrice: 34.99,
        oldPrice: 0,
        img: ["assets/img/women-jacket/5.webp", "assets/img/women-jacket/6.webp", "assets/img/women-jacket/7.webp", "assets/img/women-jacket/8.webp"],
        category: "jackets-outerwear",
        categoryLink: "jackets-outerwear",
        color: ['Denim'],
        onsale: false,
        instock: true,
        size: ['S', 'M', 'L'],
        detail: 'A denim jacket featuring a faded wash, lightly distressed details, basic collar, long sleeves with button cuffs, chest flap pockets, front slant pockets, and front button closures.'
    },
    {
        name: "Acid Wash Boyfriend Denim Jacket",
        isActive: false,
        newPrice: 34.99,
        oldPrice: 0,
        img: ["assets/img/women-jacket/9.webp", "assets/img/women-jacket/10.webp", "assets/img/women-jacket/11.webp"],
        category: "jackets-outerwear",
        categoryLink: "jackets-outerwear",
        color: ['Denim'],
        onsale: false,
        instock: true,
        size: ['S', 'M', 'L'],
        detail: 'A boyfriend denim jacket featuring an acid wash, oversized fit, basic collar, dropped shoulders, long sleeves with button cuffs, slanted front and buttoned chest flap pockets, adjustable waist tabs, and button-front closures.'
    },
    {
        name: "Seamed Denim Hooded Jacket",
        isActive: false,
        newPrice: 34.99,
        oldPrice: 0,
        img: ["assets/img/women-jacket/12.webp", "assets/img/women-jacket/13.webp", "assets/img/women-jacket/14.webp", "assets/img/women-jacket/15.webp"],
        category: "jackets-outerwear",
        categoryLink: "jackets-outerwear",
        color: ['Denim'],
        onsale: false,
        instock: true,
        size: ['S', 'M', 'L'],
        detail: 'A lightweight denim jacket featuring burnished hardware, partially elasticized trim, long raglan sleeves, drawstring hood, snap-button closures, front flap pockets with snap-button closures, and seamed details.'
    },
    {
        name: "Sheer Lace Bandeau",
        isActive: false,
        newPrice: 14.00,
        oldPrice: 0,
        img: ["assets/img/lingerie-sleepwear/1.webp", "assets/img/lingerie-sleepwear/2.webp", "assets/img/lingerie-sleepwear/3.webp"],
        category: "lingerie-sleepwear",
        categoryLink: "lingerie-sleepwear",
        color: ['Pink'],
        onsale: false,
        instock: true,
        size: ['XS', 'S'],
        detail: "A sheer lace bandeau featuring a straight neckline, ruched and padded bust with removable cups, and scalloped trim."
    }, {
        name: "Floral Thong Panty",
        isActive: false,
        newPrice: 10.00,
        oldPrice: 0,
        img: ["assets/img/lingerie-sleepwear/4.webp", "assets/img/lingerie-sleepwear/5.webp"],
        category: "lingerie-sleepwear",
        categoryLink: "lingerie-sleepwear",
        color: ['Black'],
        onsale: false,
        instock: true,
        size: ['XS', 'S'],
        detail: "A sheer mesh thong panty with an allover floral print."
    },
    {
        name: "Sheer Lace-Trim Teddy",
        isActive: false,
        newPrice: 25.00,
        oldPrice: 0,
        img: ["assets/img/lingerie-sleepwear/9.webp", "assets/img/lingerie-sleepwear/10.webp", "assets/img/lingerie-sleepwear/11.webp"],
        category: "lingerie-sleepwear",
        categoryLink: "lingerie-sleepwear",
        color: ['Red'],
        onsale: false,
        instock: true,
        size: ['XS', 'S'],
        detail: "A sheer mesh thong panty with an allover floral print."
    },
    {
        name: "Seamless Halter Bodysuit",
        isActive: false,
        newPrice: 12.99,
        oldPrice: 17.99,
        img: ["assets/img/lingerie-sleepwear/12.webp", "assets/img/lingerie-sleepwear/13.webp", "assets/img/lingerie-sleepwear/14.webp", "assets/img/lingerie-sleepwear/15.webp"],
        category: "lingerie-sleepwear",
        categoryLink: "lingerie-sleepwear",
        color: ['White'],
        onsale: true,
        instock: true,
        size: ['S', 'M', 'L'],
        detail: 'A seamless knit bodysuit featuring a halter neck and a cheeky bottom with snap-button closures.'
    },
    // jean

    {
        name: "Distressed Denim Joggers",
        isActive: false,
        newPrice: 29.99,
        oldPrice: 0,
        img: ["assets/img/women-jean/1.webp", "assets/img/women-jean/2.webp", "assets/img/women-jean/3.webp", "assets/img/women-jean/4.webp"],
        category: "denim-jeans",
        categoryLink: "denim-jeans",
        color: ['Denim'],
        onsale: false,
        instock: true,
        size: ['S', 'M', 'L'],
        detail: 'A pair of denim joggers featuring an elasticized drawstring waist, whiskering, slanted front pockets, distressed accents on the knee, and intentional fading.'
    },
    {
        name: "Distressed Retro High-Rise Shorts",
        isActive: false,
        newPrice: 19.99,
        oldPrice: 0,
        img: ["assets/img/women-jean/5.webp", "assets/img/women-jean/6.webp", "assets/img/women-jean/7.webp", "assets/img/women-jean/8.webp"],
        category: "denim-jeans",
        categoryLink: "denim-jeans",
        color: ['Denim'],
        onsale: false,
        instock: true,
        size: ['S', 'M', 'L'],
        detail: 'A pair of retro high-rise denim shorts featuring a distressed design with ripped, exposed threading, and fraying, front subtle pre-made whiskered creasing, banded waist with elongated belt loops, traditional five-pocket construction, zip fly with buttoned closure, burnished hardware, and etched rivets.'
    },
    {
        name: "Curvy Denim Shorts",
        isActive: false,
        newPrice: 19.99,
        oldPrice: 0,
        img: ["assets/img/women-jean/9.webp", "assets/img/women-jean/10.webp", "assets/img/women-jean/11.webp", "assets/img/women-jean/12.webp"],
        category: "denim-jeans",
        categoryLink: "denim-jeans",
        color: ['Denim'],
        onsale: false,
        instock: true,
        size: ['S', 'M', 'L'],
        detail: 'A pair of denim shorts featuring a button fly, a mid-rise, five pocket construction, and a cuffed hem.'
    },
    {
        name: "The Sunset Curvy Fit Jeans",
        isActive: false,
        newPrice: 29.99,
        oldPrice: 0,
        img: ["assets/img/women-jean/13.webp", "assets/img/women-jean/14.webp", "assets/img/women-jean/15.webp", "assets/img/women-jean/16.webp"],
        category: "denim-jeans",
        categoryLink: "denim-jeans",
        color: ['Black'],
        onsale: false,
        instock: true,
        size: ['S', 'M', 'L'],
        detail: 'The Sunset curvy fit jeans feature a super high-rise waist, faded wash, front whiskering, five-pocket construction, skinny leg, and a zip fly.'
    },

    // dresses
    {
        name: "Pleated High-Low Halter Dress",
        isActive: false,
        newPrice: 48.00,
        oldPrice: 0,
        img: ["assets/img/dresses/1.webp", "assets/img/dresses/2.webp", "assets/img/dresses/3.webp", "assets/img/dresses/4.webp"],
        category: "dresses",
        categoryLink: "dresses",
        color: ['Red'],
        onsale: false,
        instock: true,
        size: ['S', 'M', 'L'],
        detail: 'A partially lined woven dress featuring an accordion pleated construction, halter neckline with self-tie straps at the neck, colorblock detailing, an open back with partial elasticized trim, asymmetrical high-low hem, removable waist sash belt, and a flowy silhouette.'
    },
    {
        name: "Crisscross Cami Dress",
        isActive: false,
        newPrice: 22.99,
        oldPrice: 0,
        img: ["assets/img/dresses/5.webp", "assets/img/dresses/6.webp", "assets/img/dresses/7.webp", "assets/img/dresses/8.webp"],
        category: "dresses",
        categoryLink: "dresses",
        color: ['Black'],
        onsale: false,
        instock: true,
        size: ['S', 'M', 'L'],
        detail: 'A woven calf-length dress featuring a V-neckline, adjustable cami straps, V-back cutout with crisscross details, princess seams, button front, and a fit and flare silhouette.'
    },
    {
        name: "Floral Embroidered Maxi Dress",
        isActive: false,
        newPrice: 38.00,
        oldPrice: 0,
        img: ["assets/img/dresses/9.webp", "assets/img/dresses/10.webp", "assets/img/dresses/11.webp", "assets/img/dresses/12.webp"],
        category: "dresses",
        categoryLink: "dresses",
        color: ['White'],
        onsale: false,
        instock: true,
        size: ['S', 'M', 'L'],
        detail: 'A crinkle woven maxi dress featuring floral embroidery, V-neckline with crochet trim, smocked waist, dual cami straps with a knotted design, front slit, and front button closures.'
    },

    //top
    {
        name: "Short Sleeve Twist-Back Tee",
        isActive: false,
        newPrice: 18.00,
        oldPrice: 0,
        img: ["assets/img/women-top/1.webp", "assets/img/women-top/2.webp", "assets/img/women-top/3.webp", "assets/img/women-top/4.webp"],
        category: "tops",
        categoryLink: "tops",
        color: ['Black'],
        onsale: false,
        instock: true,
        size: ['S', 'M', 'L'],
        detail: "A slub knit tee featuring a round neckline, short sleeves, and a twist-back design."
    },
    {
        name: "Clip Dot Open-Shoulder Top",
        isActive: false,
        newPrice: 24.99,
        oldPrice: 0,
        img: ["assets/img/women-top/5.webp", "assets/img/women-top/6.webp", "assets/img/women-top/7.webp"],
        category: "tops",
        categoryLink: "tops",
        color: ['White'],
        onsale: false,
        instock: true,
        size: ['S', 'M', 'L'],
        detail: "A perennial mainstay that will take you from occasion to occasion with seasonless appeal, this striped print shirt is a must-have for any well-curated closet. It's crafted from a soft woven fabric and boasts traditional details like a classic fit, basic collar, button-down front, long sleeves with button cuffs, curved hem, and a chest patch pocket."
    },
    {
        name: "Leopard Print Boxy Shirt",
        isActive: false,
        newPrice: 18.99,
        oldPrice: 0,
        img: ["assets/img/women-top/9.webp", "assets/img/women-top/10.webp"],
        category: "tops",
        categoryLink: "tops",
        color: ['Black'],
        onsale: false,
        instock: true,
        size: ['S', 'M', 'L'],
        detail: 'Style Deals - A woven shirt featuring a leopard print, basic collar, button-down front, dropped shoulders, short sleeves, and a boxy fit.'
    },
    {
        name: "Tropical Print Boxy Shirt",
        isActive: false,
        newPrice: 17.00,
        oldPrice: 0,
        img: ["assets/img/women-top/11.webp", "assets/img/women-top/12.webp", "assets/img/women-top/13.webp"],
        category: "tops",
        categoryLink: "tops",
        color: ['Orange'],
        onsale: false,
        instock: true,
        size: ['S', 'M', 'L'],
        detail: "Style Deals - A woven shirt featuring a tropical island print, basic collar, button-down front, dropped shoulders, short sleeves, and a boxy fit."
    },
    // romper

    {
        name: "Scoop Neck Cami Jumpsuit",
        isActive: false,
        newPrice: 17.99,
        oldPrice: 0,
        img: ["assets/img/romper/1.webp", "assets/img/romper/2.webp", "assets/img/romper/3.webp", "assets/img/romper/4.webp"],
        category: "rompers-jumpsuits",
        categoryLink: "rompers-jumpsuits",
        color: ['Black'],
        onsale: false,
        instock: true,
        size: ['S', 'M', 'L'],
        detail: "Style Deals - A soft knit cami jumpsuit featuring a scoop-cut neck and back with a skinny leg."
    },
    {
        name: "Belted Leaf Print Romper",
        isActive: false,
        newPrice: 35.00,
        oldPrice: 0,
        img: ["assets/img/romper/7.jpg", "assets/img/romper/6.webp", "assets/img/romper/5.webp"],
        category: "rompers-jumpsuits",
        categoryLink: "rompers-jumpsuits",
        color: ['Multi'],
        onsale: false,
        instock: true,
        size: ['S', 'M', 'L'],
        detail: "A woven romper featuring a tropical leaf print, mock wrap design, plunging surplice neckline, 3/4 kimono sleeves, and a removable self-tie sash belt at the elasticized waist."
    },
    {
        name: "Floral Flounce Romper",
        isActive: false,
        newPrice: 22.99,
        oldPrice: 0,
        img: ["assets/img/romper/7.webp", "assets/img/romper/8.webp", "assets/img/romper/9.webp", "assets/img/romper/10.webp"],
        category: "rompers-jumpsuits",
        categoryLink: "rompers-jumpsuits",
        color: ['Blue'],
        onsale: false,
        instock: true,
        size: ['S', 'M', 'L'],
        detail: "A woven romper featuring an allover floral print, adjustable cami straps that cross at the back, surplice neckline, shirred bodice, bust lining, layered flounce hem, attached sash belt, and a concealed back zipper."
    },


    // shoe
    {
        name: "Faux Suede Pointed Toe Pumps",
        isActive: false,
        newPrice: 29.99,
        oldPrice: 39.99,
        img: ["assets/img/women-shoe/1.webp", "assets/img/women-shoe/2.webp", "assets/img/women-shoe/3.webp"],
        category: "shoes",
        categoryLink: "shoes",
        color: ['Pink'],
        onsale: true,
        instock: true,
        size: ['S', 'M', 'L'],
        detail: 'A pair of faux suede pumps featuring a stiletto high heel, pointed toe, and lightly padded insole.'
    },
    {
        name: "Strappy Lace-Up Block Heels",
        isActive: false,
        newPrice: 25.00,
        oldPrice: 0,
        img: ["assets/img/women-shoe/4.webp", "assets/img/women-shoe/5.webp", "assets/img/women-shoe/6.webp", "assets/img/women-shoe/7.webp"],
        category: "shoes",
        categoryLink: "shoes",
        color: ['Red'],
        onsale: false,
        instock: true,
        size: ['S', 'M', 'L'],
        detail: 'A pair of faux suede heels featuring a pointed toe, strappy lace-up closure, and a high covered block heel.'
    },
    {
        name: "Faux Suede Block Heels",
        isActive: false,
        newPrice: 25.00,
        oldPrice: 0,
        img: ["assets/img/women-shoe/8.webp", "assets/img/women-shoe/9.webp", "assets/img/women-shoe/10.webp", "assets/img/women-shoe/11.webp"],
        category: "shoes",
        categoryLink: "shoes",
        color: ['Brown'],
        onsale: false,
        instock: true,
        size: ['S', 'M', 'L'],
        detail: 'A pair of faux suede heels featuring a pointed toe, adjustable ankle strap, and a covered block heel.'
    },
    // bag
    {
        name: "Quilted Faux Leather Crossbody Bag",
        isActive: false,
        newPrice: 24.99,
        oldPrice: 0,
        img: ["assets/img/women-bag/1.webp", "assets/img/women-bag/2.webp", "assets/img/women-bag/3.webp"],
        category: "bags-backpacks",
        categoryLink: "bags-backpacks",
        color: ['Black'],
        onsale: false,
        instock: true,
        size: ['One Size'],
        detail: 'An unstructured faux leather crossbody bag featuring a diamond-quilted exterior, high-polish accents, curb chain shoulder strap, flap top with a turn-lock closure, and an interior zip divider pocket that creates dual compartments.'
    },
    {
        name: "Round Faux Leather Crossbody Bag",
        isActive: false,
        newPrice: 25.00,
        oldPrice: 0,
        img: ["assets/img/women-bag/4.webp", "assets/img/women-bag/5.webp", "assets/img/women-bag/6.webp", "assets/img/women-bag/7.webp"],
        category: "bags-backpacks",
        categoryLink: "bags-backpacks",
        color: ['Blue'],
        onsale: false,
        instock: true,
        size: ['S', 'M', 'L'],
        detail: 'A small faux leather crossbody bag featuring high-polish accents, round body, top flap with push-lock closure, and a removable and adjustable shoulder strap.'
    },
    //bag

    {
        name: "Structured Push-Lock Crossbody Bag",
        isActive: false,
        newPrice: 19.99,
        oldPrice: 0,
        img: ["assets/img/women-bag/8.webp", "assets/img/women-bag/9.webp", "assets/img/women-bag/10.webp", "assets/img/women-bag/11.webp"],
        category: "bags-backpacks",
        categoryLink: "bags-backpacks",
        color: ['Pink'],
        onsale: false,
        instock: true,
        size: ['S', 'M', 'L'],
        detail: 'A structured faux leather crossbody bag featuring a top handle, flap top with high-polish push-lock closure, and an adjustable shoulder strap.'
    },
    {
        name: "Structured Faux Leather Backpack",
        isActive: false,
        newPrice: 22.99,
        oldPrice: 0,
        img: ["assets/img/women-bag/12.webp", "assets/img/women-bag/13.webp", "assets/img/women-bag/14.webp"],
        category: "bags-backpacks",
        categoryLink: "bags-backpacks",
        color: ['White'],
        onsale: false,
        instock: true,
        size: ['S', 'M', 'L'],
        detail: 'A small faux leather backpack featuring a structured body, top handle, flap top with concealed drawstring and snap-button closure, side zipper pull closures, and adjustable shoulder straps.'
    },
    {
        name: "Tinted Geo Sunglasses",
        isActive: false,
        newPrice: 12.99,
        oldPrice: 0,
        img: ["assets/img/women-sunglasses/1.webp", "assets/img/women-sunglasses/2.webp", "assets/img/women-sunglasses/3.webp"],
        category: "sunglasses",
        categoryLink: "sunglasses",
        color: ['Black'],
        onsale: false,
        instock: true,
        size: ['S', 'M', 'L'],
        detail: 'This pair of sunglasses features tinted lenses, a solid rectangular frames, and metallic accents at the temples'
    },
    {
        name: "Round Tinted Sunglasses",
        isActive: false,
        newPrice: 10.99,
        oldPrice: 0,
        img: ["assets/img/women-sunglasses/4.webp", "assets/img/women-sunglasses/5.webp", "assets/img/women-sunglasses/6.webp"],
        category: "sunglasses",
        categoryLink: "sunglasses",
        color: ['Gold'],
        onsale: false,
        instock: true,
        size: ['S', 'M', 'L'],
        detail: 'A high-polish pair of premium aviator sunglasses featuring round tortoiseshell frames, tinted lens, a brow bar, and nose pads.'
    },
    {
        name: "Round Tinted Sunglasses",
        isActive: false,
        newPrice: 10.99,
        oldPrice: 0,
        img: ["assets/img/women-sunglasses/7.webp", "assets/img/women-sunglasses/8.webp", "assets/img/women-sunglasses/9.webp"],
        category: "sunglasses",
        categoryLink: "sunglasses",
        color: ['Brown'],
        onsale: false,
        instock: true,
        size: ['S', 'M', 'L'],
        detail: 'A pair of round sunglasses with tinted lens.'
    },

]

// products.forEach((p) => {
//     let p1 = new product({
//         name: p.name,
//         isActive: p.isActive,
//         newPrice: p.newPrice,
//         oldPrice: p.oldPrice,
//         img: p.img,
//         category: p.category,
//         categoryLink: p.categoryLink,
//         color: p.color,
//         onsale: p.onsale,
//         instock: p.instock,
//         size: p.size,
//         detail: p.detail
//     });
//     p1.save();
// })




router.get('/', async (req, res) => {

    let cate = req.query.subcategory;
    if (req.query.id !== "undefined") {
        res.send(await product.findById(id))
    }
    else if (cate === 'all') {
        res.send(await product.find({}));
    } else {
        res.send(await product.find({ category: cate }))

    }
})



module.exports = router;