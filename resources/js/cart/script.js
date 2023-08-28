import BurgerMenu from "../BurgerMenu/BurgerMenu";
import cartWidget from "../cartWidget/script";

BurgerMenu.init();

class NodeConstructor {
    static createNode (tagName, attributes, text) {
        let elem = document.createElement(`${tagName}`)

        const addAtributes = (elem, attributes) => {
            attributes.forEach(attr => {
                elem.setAttribute(attr[0], attr[1])
            })
            return elem
        }

        const addInnerText = (elem, text) => {
            elem.innerHTML = `${text}`
            return elem
        }
        
        switch (arguments.length) {
            case 1:
                return elem
            case 2:
                return Array.isArray(arguments[1])
                ? addAtributes(elem, attributes)
                : addInnerText(elem, attributes)        
            case 3:
                elem = addAtributes(elem, attributes)
                return addInnerText(elem, text)
        }
    }
}

class ProductsInCart {

    products = null;
    #token = null;

    init() {
        this.token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        this.#fetchData();
    }

    async #fetchData() {

        const url = `http://finalproject/get_products_in_cart`;

        try {
            const data = await fetch(url);
            this.#showPreloader()
            const respone = await data.json();
            this.#removePreloader();

            this.products = respone;
        } catch(error) {
            console.error(error);
        } finally {
            this.render();
        }
    }

    #showPreloader() {

        const preloader = document.createElement('div');
        preloader.classList.add('loader');
        preloader.innerHTML = `
            <div class="loader-inner">
            <div class="loader-line-wrap">
                <div class="loader-line"></div>
            </div>
            <div class="loader-line-wrap">
                <div class="loader-line"></div>
            </div>
            <div class="loader-line-wrap">
                <div class="loader-line"></div>
            </div>
            <div class="loader-line-wrap">
                <div class="loader-line"></div>
            </div>
            <div class="loader-line-wrap">
                <div class="loader-line"></div>
            </div>
        </div>
        `

        document.body.append(preloader);
    }

    #removePreloader() {
        setTimeout(() => {
            document.querySelector('.loader').remove()
        }, 1200);
    }
}

class ProductsInCartUI extends ProductsInCart {

    #cartProductsWrapper = null;

    constructor() {
        super();

        this.#cartProductsWrapper = document.querySelector('.cart-products-wrapper');
    }

    render() {
        this.#cartProductsWrapper.innerHTML = '';

        if (this.products.length) {
            this.products.forEach(product => {
                const productWrapper = NodeConstructor.createNode('div', [['class', 'product-wrapper'], ['data-id', product.id]]);
                const producttImgWrapper = NodeConstructor.createNode('div', [['class', 'product-img-wrapper']]);
                const productImg = NodeConstructor.createNode('img', [['src', `/images/products/${product.product.images.img_1}`]]);

                const productDescription = NodeConstructor.createNode('div', [['class', 'product-description']]);
                const productTitleWrapper = NodeConstructor.createNode('div', [['class', 'product-title-wrapper']]);
                const productTitle = NodeConstructor.createNode('h3', [['class', 'product-title']], product.product.name);
                const productInfoWrapper = NodeConstructor.createNode('div', [['class', 'product-info-wrapper']]);
                const productColorWrapper = NodeConstructor.createNode('div', [['class', 'product-color-wrapper']]);
                const productSizeWrapper = NodeConstructor.createNode('div', [['class', 'product-size-wrapper']]);
                const productColorText = NodeConstructor.createNode('p', [['class', 'product-color']], `Цвет ${this.getColor(product.color)}`);
                const productSizeText = NodeConstructor.createNode('p', [['class', 'product-size']], `Размер ${product.size}`);
                const productButtonsWrapper = NodeConstructor.createNode('div', [['class', 'product-buttons-wrapper']]);
                const productButtonDec = NodeConstructor.createNode('button', [['class', 'button-dec product-button']]);
                const productButtonInc = NodeConstructor.createNode('button', [['class', 'button-inc product-button']]);
                const productCounter = NodeConstructor.createNode('p', [['class', 'product-counter']], product.quantity);
                const productDeleteWrapper = NodeConstructor.createNode('div', [['class', 'product-delete-wrapper']]);
                const productDeleteItem = NodeConstructor.createNode('div', [['class', 'product-delete-item']]);
                const productDeleteImg = NodeConstructor.createNode('img', [['src', '/images/service/product_delete_icon.svg']]);
                const productDeleteText = NodeConstructor.createNode('span', 'Удалить')

                const productPriceWrapper = NodeConstructor.createNode('div', [['class', 'product-price-wrapper']]);
                const productPriceTitle = NodeConstructor.createNode('h3', [['class', 'product-price-title']], 'Стоимость');
                const productPriceCounter = NodeConstructor.createNode('p', [['class', 'product-price-counter']], (product.quantity * +product.product.prices.total_price).toFixed(2));

                productDeleteItem.append(productDeleteImg, productDeleteText);
                productDeleteWrapper.append(productDeleteItem);
                productPriceWrapper.append(productPriceTitle, productPriceCounter);
                productButtonsWrapper.append(productButtonDec, productCounter, productButtonInc);
                productSizeWrapper.append(productSizeText);
                productColorWrapper.append(productColorText);
                productInfoWrapper.append(productColorWrapper, productSizeWrapper);
                productTitleWrapper.append(productTitle);
                productDescription.append(productTitleWrapper, productInfoWrapper, productButtonsWrapper, productDeleteWrapper);
                producttImgWrapper.append(productImg);
                productWrapper.append(producttImgWrapper, productDescription, productPriceWrapper);
                this.#cartProductsWrapper.append(productWrapper);

            })

            const totalProductCounters = NodeConstructor.createNode('div', [['class', 'product-counters-wrapper']]);

            const totalSumCounterWrapper = NodeConstructor.createNode('div', [['class', 'total-sum-counter-wrapper']]);
            const totalCounterWrapper = NodeConstructor.createNode('div', [['class', 'total-counter-wrapper']]);
            const totalSumCounter = NodeConstructor.createNode('p', [['class', 'total-sum']], `Итого: <span class="total-sum-counter"> ${this.products.reduce((accum, item) => {
                return accum += +(item.quantity * +item.product.prices.total_price).toFixed(2)
            }, 0).toFixed(2)} </span> руб.`);
            const totalCounter = NodeConstructor.createNode('p', [['class', 'total-counter']], `Товары, ${this.products.reduce((accum, item) => {
                return accum += item.quantity;
            }, 0)} шт.`);
            
            const orderLinkWrapper = NodeConstructor.createNode('div', [['class', 'order-link-wrapper']]);
            const orderLink = NodeConstructor.createNode('a', [['class', 'order-link'], ['href', 'http://finalproject/cart/order']], 'Заказать');

            orderLinkWrapper.append(orderLink);
            totalCounterWrapper.append(totalCounter);
            totalSumCounterWrapper.append(totalSumCounter);
            totalProductCounters.append(totalSumCounterWrapper, totalCounterWrapper);
            this.#cartProductsWrapper.append(totalProductCounters, orderLinkWrapper);
        } else {
            const cartIsEmptyTitle = NodeConstructor.createNode('h3', [['class', 'cart-empty-title']], 'Ваша корзина пуста');
            const emptyCartImgWrapper = NodeConstructor.createNode('div', [['class', 'empty-cart-img-wrapper']]);
            const emptyCartImg = NodeConstructor.createNode('img', [['src', '/images/service/empty_cart.jpg']])

            emptyCartImgWrapper.append(emptyCartImg);
            this.#cartProductsWrapper.append(cartIsEmptyTitle, emptyCartImgWrapper);
        }

        this.#addEventListener();
    }

    getColor(color) {
        switch (color) {
            case 'white':
                return 'белый';
            case 'black':
                return 'черный';
            case 'green':
                return 'зеленый';
            case 'pink':
                return 'розовый';
            case 'yellow':
                return 'желтый';
            default:
                return 'неизвестно';
        }
    }

    #addEventListener() {
        const incButtons = document.querySelectorAll('.button-inc');
        incButtons.forEach(item => {
            item.addEventListener('click', (e) => {
                const id = e.target.closest('.product-wrapper').dataset.id
                this.#productInc(id);
            })
        })

        const decButtons = document.querySelectorAll('.button-dec');
        decButtons.forEach(item => {
            item.addEventListener('click', (e) => {
                const id = e.target.closest('.product-wrapper').dataset.id
                this.#productDec(id);
            })
        })
       
        const deleteButtons = document.querySelectorAll('.product-delete-item'); 
        deleteButtons.forEach(item => {
            item.addEventListener('click', (e) => {
                const id = e.target.closest('.product-wrapper').dataset.id
                this.#productDel(id);
            });
        });
    }

    async #productInc(id) {
        const url = 'http://finalproject/product_cart_inc'

        try {
            const responce = await fetch(url,{
                method: 'POST',
                headers: {
                    'Content-Type':'application/x-www-form-urlencoded',
                    'X-CSRF-TOKEN': this.token
                },
                body: `id=${id}`
            })
    
            this.products = await responce.json();
        } catch(e) {
            console.error(e);
        } finally {
            this.render();
            cartWidget.update(this.products);
        }
             
    }

    async #productDec(id) {
        const url = 'http://finalproject/product_cart_dec'

        try {
            const responce = await fetch(url,{
                method: 'POST',
                headers: {
                    'Content-Type':'application/x-www-form-urlencoded',
                    'X-CSRF-TOKEN': this.token
                },
                body: `id=${id}`
            })
    
            this.products = await responce.json();
        } catch(e) {
            console.error(e);
        } finally {
            this.render();
            cartWidget.update(this.products);
        }
    }

    async #productDel(id) {
        const url = 'http://finalproject/product_cart_del'

        try {
            const responce = await fetch(url,{
                method: 'POST',
                headers: {
                    'Content-Type':'application/x-www-form-urlencoded',
                    'X-CSRF-TOKEN': this.token
                },
                body: `id=${id}`
            })
    
            this.products = await responce.json();
        } catch(e) {
            console.error(e);
        } finally {
            this.render();
            cartWidget.update(this.products);
        }
    }

}

const productsInCart = new ProductsInCartUI;
productsInCart.init();
