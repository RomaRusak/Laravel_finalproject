import cartWidget from "../cartWidget/script";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

BurgerMenu.init();

class SortForm {

    static sortForm = null;
    static sortFormLinks = null;
    static sormFormInput = null;

    static init() {
        this.sortForm = document.getElementById('catalog-sort-form');
        this.sortFormLinks = this.sortForm.querySelectorAll('.catalog-sort-value');
        this.sormFormInput = this.sortForm.querySelector('.catalog-input-value');
        
        this.sortFormLinks.forEach(item => {
            item.addEventListener('click', (e) => {
               this.sormFormInput.value = item.dataset.value;
               this.sortFormLinks.forEach(item => {
                    if (item.classList.contains('active-sort-link')) item.classList.remove('active-sort-link');
               })
               e.target.classList.add('active-sort-link');
               productsUI.sortProducts(this.sormFormInput.value);
            })
        })

        this.sortForm.querySelector('.catalog-sort-value[data-value="addition"]').classList.add('active-sort-link'); //менять тут стартовую сортировку
    }
}

class FiltersForm {

    static filtersHead = null
    static sizesFiltersInputs = null;
    static sizesFiltersChecked = [];
    static colorsFiltersInputs = null;
    static colorsFiltersCheced = [];

    static init() {
        this.filtersHead = document.querySelectorAll('.catalog-filters-head');
        this.sizesFiltersInputs = document.querySelector('.catalog-sizes-filters').querySelectorAll('input[type="checkbox"]');
        this.colorsFiltersInputs = document.querySelector('.catalog-sizes-colors').querySelectorAll('input[type="checkbox"]');
        
        this.filtersHead.forEach(item => {
            item.addEventListener('click', (e) => {

                e.target.closest('.catalog-filters-head').classList.toggle('catalog-head-active');
            })
        })

        this.sizesFiltersInputs.forEach(item => {
            item.addEventListener('click', () => {
                const checkedCheckboxes = document.querySelector('.catalog-sizes-filters').querySelectorAll('input[type="checkbox"]:checked');
                this.sizesFiltersChecked = [];
                checkedCheckboxes.forEach(item => {
                    this.sizesFiltersChecked.push(item.name);
                })
                
                productsUI.filterProducts({sizes: this.sizesFiltersChecked, colors: this.colorsFiltersCheced});
            })
        })

       this.colorsFiltersInputs.forEach(item => {
            item.addEventListener('click', () => {
                const checkedCheckboxes = document.querySelector('.catalog-sizes-colors').querySelectorAll('input[type="checkbox"]:checked');
                this.colorsFiltersCheced = [];
                checkedCheckboxes.forEach(item => {
                    this.colorsFiltersCheced.push(item.name);
                })
                
                productsUI.filterProducts({sizes: this.sizesFiltersChecked, colors: this.colorsFiltersCheced});
            })
       })
    }

}

class Products {

    currentUrl = null;
    category = null;
    token = null;
    products = null;
    filteredProducts = null;

        init() {
        this.currentUrl = window.location.href; 
        this.category = this.#getCategory();
        this.token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        this.#fetchData();
    }

    async #fetchData() {
        const url = `http://finalproject/getproducts?category=${this.category}`;

        try {
            const data = await fetch(url);
            this.#showPreloader()
            const respone = await data.json();
            this.#removePreloader();
            this.products = respone.products;
            this.filteredProducts = respone.products;
        } catch(error) {

        } finally {
            
            if (this.products.length) {
                productsUI.sortProducts('addition'); //менять тут стартовую сортировку
                this.createPagination();
                // this.render();
            }
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



    #getCategory() {

        const rexExp = /http:\/\/finalproject\/catalog\/(\w+)[?\/]?/;
        const category = this.currentUrl.match(rexExp)[1];
        
        return category;
    }
}


class ProductsUI extends Products {

    paginationCounter = null;
    paginationCurrentStep = null;
    shownProducts = null;

    constructor() {
        super();  
    }

    init() {
        super.init();
        this.paginationCounter = 6;
        this.paginationCurrentStep = 1;
    }

    render() {
        const productsWrapper = document.querySelector('.products-wrapper');
        productsWrapper.innerHTML = '';


            if (this.shownProducts) this.shownProducts.forEach(item => {

                const productItem = document.createElement('div');
                productItem.classList.add('product-item')
                
                const productItemImgWrapper = document.createElement('div');
                productItemImgWrapper.classList.add('product-item-img-wrapper');
    
                const productItemImg = document.createElement('img');
                productItemImg.setAttribute('src', item.images.img_1 ? `/images/products/${item.images.img_1}` : '/images/service/imageNotFound.jpg');
    
                const priceWrapper = document.createElement('div');
                priceWrapper.classList.add('price-wrapper');
    
                const price = document.createElement('p');
                price.classList.add('product-item-price');
                price.innerText = `${item.prices.total_price} р.`;
                
                const showDiscount = item.prices.discount > 0;
    
                const discount = document.createElement('p');
                discount.classList.add('product-item-discount');
                discount.innerText = showDiscount ?  `скидка: ${item.prices.total_discount} р.` : '';

                const productNameWrapper = document.createElement('div');
                productNameWrapper.classList.add('product-name-wrapper');

                const productName = document.createElement('p');
                productName.classList.add('product-item-name');
                productName.innerText = item.name;

                const productLinkWrapper = document.createElement('div');
                productLinkWrapper.classList.add('product-link-wrapper');

                const productItemLink = document.createElement('a');
                productItemLink.classList.add('product-item-link')
                productItemLink.setAttribute('href', `/catalog/${this.category}/${item.id}`);

                const productItemLinkContent = document.createElement('span');
                productItemLinkContent.classList.add('product-item-link-content');
                productItemLinkContent.innerText = 'Подробнее';

                const productItemLinkImg = document.createElement('img');
                productItemLinkImg.classList.add('product-item-link-img');
                productItemLinkImg.setAttribute('src', '/images/service/product_arrow_right.svg');


                productItemLink.append(productItemLinkContent, productItemLinkImg);
                productLinkWrapper.append(productItemLink);
                productNameWrapper.append(productName);
                priceWrapper.append(price, discount);                     
                productItemImgWrapper.append(productItemImg);
                productItem.append(productItemImgWrapper, priceWrapper, productNameWrapper, productLinkWrapper);
                productsWrapper.append(productItem);
            });

        
    }

    sortProducts(sortBy) {
        switch(sortBy) {
            case 'price':
                this.filteredProducts.sort((productA, productB) => {
                   return +productA.prices.total_price - +productB.prices.total_price;
                })
            break
            case 'discount':
                this.filteredProducts.sort((productA, productB) => {
                    return +productB.prices.total_discount - +productA.prices.total_discount;
                 })
            break
            case 'addition':
                this.filteredProducts.sort((productA, productB) => {
                   return productB.created_at.localeCompare(productA.created_at);
                })
            break
        }

        this.createPagination();
        
    }

    filterProducts({sizes, colors}) {

        if (sizes.length && colors.length) {
            
            this.filteredProducts = this.products.filter(item => {
                let colorFlag = false;
                let sizeFlag = false;

                colors.forEach(color => {
                    if (item.colors[color]) colorFlag = true;
                })

                sizes.forEach(size => {
                    if (item.sizes[size]) sizeFlag = true;
                })

                return colorFlag && sizeFlag ? true : false;
            })

            

        } else if(sizes.length && !colors.length) {

            this.filteredProducts= this.products.filter(item => {
                let flag = false;

                sizes.forEach(size => {
                    if (item.sizes[size]) flag = true;
                })

                return flag;
            })

        } else if (!sizes.length && colors.length) {

            this.filteredProducts= this.products.filter(item => {
                let flag = false;

                colors.forEach(color => {
                    if (item.colors[color]) flag = true;
                })

                return flag;
            })

        } else {
            this.filteredProducts = this.products;
        }
        
        this.createPagination();
    }

    createPagination() {
        
        document.querySelector('.pagination-wrapper').innerHTML = '';    

        const paginateMax = Math.ceil((this.filteredProducts.length / this.paginationCounter));
        
        for(let i = 1; i <= paginateMax; i++) {

            const paginateItem = document.createElement('div');
            paginateItem.classList.add('pagination-item');
            paginateItem.innerText = i;

            paginateItem.addEventListener('click', (e) => {
                this.paginationCurrentStep = e.target.innerText;

                const maxIndex = this.paginationCounter * this.paginationCurrentStep;
                const minIndex = maxIndex - this.paginationCounter;

                this.shownProducts = this.filteredProducts.slice( minIndex, maxIndex);

                this.render();
            })
            
            if (paginateMax > 1) {
                document.querySelector('.pagination-wrapper').append(paginateItem);
            }

        }

        this.shownProducts = this.filteredProducts.slice(0, this.paginationCounter);

        this.render();
    }
}

SortForm.init();
FiltersForm.init();
const productsUI = new ProductsUI;
productsUI.init();




