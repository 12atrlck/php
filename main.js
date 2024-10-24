const products = [
    {
        images: 'images/1.png',
        id: 1,
        productName: 'Nike Free Met-5',
        productTitle: "Women's Workout Shoes",
        price: '$120',
        size: '40,42,44',
        variants:{
            materialType:'Sustainable Materials'
        }
    },

    {
        images: 'images/2.png',   
        id: 2,
        productName: 'Nike Dunk Low',
        productTitle: "Woman's shoe",
        price: '$115',
        size: '40,42,44',
        variants:{
            materialType:'Best Sellers'
        }
    },

    {
        images: 'images/3.png',
        id: 3,
        productName: "Nike Air Force 1'07",
        productTitle: "Man's shoe",
        price: '$115',
        size: '40,42,44',
        variants:{
            materialType:'Best Sellers'
        }
    },

    {
        images: 'images/4.png',
        id: 4,
        productName: 'Nike Air Force 1 LE',
        productTitle: "Big Kids' Shoes",
        price: '$90',
        size: '40,42,44',
        variants:{
            materialType:'Sustainable Materials'
        }
    },

    {
        images: 'images/5.png',
        id: 5,
        productName: 'Tatum 2',
        productTitle: 'Basketball Shoes',
        price: '$125',
        size: '40,42,44',
        variants:{
            materialType:'Best Sellers'
        }
    },

    // {
    //     images: 'images/6.png',
    //     id: 6,
    //     productName: 'Nike Sportswear Tech Fleece WindRunner',
    //     productTitle: "Men's Full-Zip Hoodie",
    //     price: '$145',
    //     size: 'S,M,L',
    //     variants:{
    //         materialType:'Best Sellers'
    //     }
    // },

    // {
    //     images: 'images/7.png',
    //     id: 7,
    //     productName: 'Nike Solo Swoosh',
    //     productTitle: "Men's Fleece Pullover Hoodie",
    //     price: '$100',
    //     size: 'S,M,L',
    //     variants:{
    //         materialType:'Best Sellers'
    //     }
    // },

    // {
    //     images: 'images/8.png',
    //     id: 8,
    //     productName: 'Nike Solo Swoosh',
    //     productTitle: "Men's Open-Hem Fleece Pants",
    //     price: '$110',
    //     size: 'S,M,L',
    //     variants:{
    //         materialType:'Sustainable Materials'
    //     }
    // },

    // {
    //     images: 'images/9.png',
    //     id: 9,
    //     productName: 'Los Angeles Dodgers Authentic Collection Practice',
    //     productTitle: "Men's Nike Dri-FIT MLB Shorts",
    //     price: '$60',
    //     size: 'S,M,L',
    //     variants:{
    //         materialType:'Sustainable Materials'
    //     }
    // },

    {
        images: 'images/10.png',
        id: 10,
        productName: 'Nike ACG Therm-FIT ADV "Rope de Dope"',
        productTitle: "Men's Full-Zip Vest",
        price: '$190',
        size: 'S,M,L',
        variants:{
            materialType:'Sustainable Materials'
        }
    },
];

const productDisplay = products.map((product, index) => {
    return `<div key='${index}' class="product-display">
        <div class="images">
            <img src="${product.images}" />
        </div>

        <div class="details-card">
            <div class="details">
                <h3>${product.productName}</h3>
                <p>${product.productTitle}</p>
                <p class="size">${product.size}</p>
                <p>${product.price}</p>
            </div>

            <button>Buy</button>
        </div>


    </div>`;
})

document.getElementById('container').innerHTML = productDisplay