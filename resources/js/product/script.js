import cartWidget from "../cartWidget/script";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

class ProductGallery {

    static productGalleryMainImage = null
    static productGalleryAllImages = null;

    static init() {
        this.productGalleryMainImage = document.querySelector('.product-main-image-wrapper > img');
        this.productGalleryAllImages = document.querySelectorAll('.product-all-images img');
        
        this.productGalleryAllImages.forEach(img => {
            img.addEventListener('click', (e) => {
                const src = this.getImgName(e.target.src);
                this.productGalleryMainImage.setAttribute('src', `/images/products/${src}`);
            })
        })

    }

    static getImgName(name) {

        const regExp = /http:\/\/finalproject\/images\/products\/(\w+.\w+)[?\/]?/;
        const src = name.match(regExp)[1];
        
        return src;
    }

}

class Slider {

    static sliderItemWidth = 450;
    static slidetItemsCount = null;
    static sliderLine = null;
    static sliderNext = null;
    static offset = 0;
    
    static init() {
        this.slidetItemsCount = document.querySelectorAll('.review-wrapper').length;

        if (this.slidetItemsCount) {
            this.sliderLine = document.querySelector('.reviews-line');
            this.sliderLine.style.width = this.sliderItemWidth * this.slidetItemsCount + 'px';
        }

        if (this.slidetItemsCount > 2) {
            this.createSliderNext();
            this.sliderNextAddListener();
        }
        
    }


    static createSliderNext() {

        const sliderNext = document.createElement('div');
        sliderNext.classList.add('reviews-arrow-right');

        document.querySelector('.service-reviews-wrapper').append(sliderNext);
    }

    static sliderNextAddListener() {

        this.sliderNext = document.querySelector('.reviews-arrow-right');

        this.sliderNext.addEventListener('click', () => {
            this.offset += this.sliderItemWidth;
            if (this.offset > this.sliderItemWidth * (this.slidetItemsCount - 1)) {
                this.offset = 0;
                this.sliderLine.style.right = 0;
            } else {
                this.sliderLine.style.right = this.offset + 'px';
            }
        })
    }

}

class ModaWindow {
    static createModalButton = null;
    static backgroundDiv = null;
    static modalWindowWrapper = null;
    static csrfToken = null;
    static category = null;
    static productId = null;
    static starsIcons = null;
    static currentRating = null;
    static ratingInput = null
    static detailInput = null;
    
    static init() {
        this.createModalButton = document.querySelector('.add-review-button');
        this.csrfToken = document.querySelector('meta[name="csrf-token"]').content;
        
        const params = this.getParams();
        if (params) [this.category, this.productId] = params;

        this.createModalButton.addEventListener('click', () => {
            this.createModal();
        })
    }

    static createModal() {
        this.backgroundDiv = document.createElement('div');
        this.backgroundDiv.classList.add('modal-background');
        this.modalWindowWrapper = document.createElement('div');
        this.modalWindowWrapper.classList.add('modal-window-wrapper');

        this.modalWindowWrapper.innerHTML = `
        <div class="close-modal-wrapper"></div>
        <div class="modal-content">
            <form action="/catalog/${this.category}/${this.productId}" method="post" class="modal-content-form">
                <input type="hidden" name="_token" value="${this.csrfToken}">
                <div>
                    <input type="number" name="rating" id="rating">
                </div>

                <div class="modal-rating-wrapper">
            
                </div>

                <div class="modal-detail-wrapper">
                    <textarea name="detail" cols="30" rows="10">Ваш отзыв</textarea>
                </div>

                <div>
                    <button type="submit" class="add-review-button disabled" disabled>Опубликовать отзыв</button>
                </div>
            </form>
        </div>
        `   

        this.backgroundDiv.append(this.modalWindowWrapper);
        document.body.append(this.backgroundDiv);
        document.body.style.overflowY = 'hidden';

        this.backgroundDiv.addEventListener('click', (e) => {
            if (!e.target.closest('.modal-window-wrapper')) {
                this.backgroundDiv.remove();
                document.body.style.overflowY = 'scroll';
            }
        })

        this.ratingInput = this.modalWindowWrapper.querySelector('#rating');
        this.detailInput = this.modalWindowWrapper.querySelector('.modal-detail-wrapper textarea');
        this.submitFormButton = this.modalWindowWrapper.querySelector('.add-review-button');
        
        this.detailInput.addEventListener('input', () => {
            this.validateForm();
        })

        this.renderStarsIcons();
    }

    static getParams() {
        const currentHref = document.location.href;
        const regExp = /http:\/\/finalproject\/catalog\/(\w+)\/(\d+)+[?\/]?/;

        const [allMatches, category, id]  = currentHref.match(regExp);

        if (allMatches) {
            return [category, id];
        }
    }

    static renderStarsIcons() {

        const ratingWrapper = this.modalWindowWrapper.querySelector('.modal-rating-wrapper');

        for (let i = 1; i <= 5; i++) {

            const staWrapper = document.createElement('div');
            staWrapper.classList.add('star-icon-wrapper');
            
            for (let j = 1; j <= 2; j++) {
                
                const starImg = document.createElement('img');

                if (j % 2 !== 0) {
                    starImg.setAttribute('src', '/images/service/starLeftInActive.png')
                    starImg.setAttribute('data-rating', i * 2 - 1);
                } else {
                    starImg.setAttribute('src', '/images/service/starRightInActive.png')
                    starImg.setAttribute('data-rating', i * 2);
                }
                
                starImg.classList.add('star-icon');
                starImg.addEventListener('click', (e) => {
                    this.addRating(e);
                });
                
                starImg.addEventListener('mouseenter', (e) => {
                    this.replaceStars(+e.target.dataset.rating);
                })

                starImg.addEventListener('mouseleave', (e) => {
                    this.replaceStars(this.currentRating ? this.currentRating : 0);
                });

                staWrapper.append(starImg);

            };

            ratingWrapper.append(staWrapper);
        }

        this.starsIcons = this.modalWindowWrapper.querySelectorAll('.star-icon');
    }

    static addRating(e) {
        
        this.currentRating = +e.target.dataset.rating;

        this.ratingInput.value = this.currentRating;
        this.validateForm();

        this.replaceStars(this.currentRating);
    }

    static replaceStars(untilValue) {
        
        this.starsIcons.forEach(star => {
            if (+star.dataset.rating <= untilValue) {
                if (+star.dataset.rating & 2 !== 0) {
                    star.setAttribute('src', '/images/service/starLeftActive.png');
                } else {
                    star.setAttribute('src', '/images/service/starRightActive.png');
                }
            } else {
                if (+star.dataset.rating & 2 !== 0) {
                    star.setAttribute('src', '/images/service/starLeftInActive.png');
                } else {
                    star.setAttribute('src', '/images/service/starRightInActive.png');
                }
            }
        });

    }

    static validateForm() {
        
        if (!this.ratingInput.value || !this.detailInput.value) {
            if (!this.submitFormButton.classList.contains('disabled')) this.submitFormButton.classList.add('disabled');
            this.submitFormButton.setAttribute('disabled', '');
        } else {
            if (this.submitFormButton.classList.contains('disabled')) this.submitFormButton.classList.remove('disabled');
            this.submitFormButton.removeAttribute('disabled');
        }
    }
}

class ProductForm {

    static colorInputs = null;
    static sizeInputs = null;

    static init() {

        this.colorInputs = document.querySelector('.product-colors').querySelectorAll('input[type="checkbox"]');
        this.sizeInputs = document.querySelector('.product-sizes').querySelectorAll('input[type="checkbox"]');
        
        [this.colorInputs, this.sizeInputs].forEach(checkboxes => this.createRadioButtons(checkboxes))

    }

    static createRadioButtons(checkboxes) {

        checkboxes.forEach(checkbox => {
            
            checkbox.addEventListener('click', (e) => {
                checkboxes.forEach(checkbox => checkbox.checked = false);

                e.target.checked = true;
            })

        })

    }

}

class AddToCart {

    static productForm = null
    static color = null;
    static size = null;
    static token = null;
    static id = null;

    static init() {

        this.productForm = document.querySelector('.product-description');
        this.token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        this.id = document.querySelector('.id-input').value;

        this.productForm.addEventListener('submit', (e) => {
            e.preventDefault();

            if (document.querySelector('.product-colors').querySelector('input:checked')) {
                this.color = document.querySelector('.product-colors').querySelector('input:checked').value;
            }

            if (this.size = document.querySelector('.product-sizes').querySelector('input:checked')) {
                this.size = document.querySelector('.product-sizes').querySelector('input:checked').value;
            }
            

            switch (true) {
                case this.size && !this.color:
                    alert('не успеваю реализовать модальное окно, а вы не выбрали цвет!');
                break

                case !this.size && !this.color:
                    alert('не успеваю реализовать модальное окно, а вы не выбрали цвет и размер!');
                break

                case this.color && !this.size:
                    alert('не успеваю реализовать модальное окно, а вы не выбрали размер!');
                break

                default:
                    this.addToCart();
                break
            }
 
        }) 
            
    }

    static async addToCart() {
        const url = 'http://finalproject/add_to_cart';

        

        const responce = await fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type':'application/x-www-form-urlencoded',
                'X-CSRF-TOKEN': this.token
            },
            body: `color=${this.color}&size=${this.size}&id=${this.id}`
        })

        const data = await responce.json();
        
        cartWidget.update(data);
    }
}
AddToCart.init();

BurgerMenu.init();
ProductGallery.init();
Slider.init();
ModaWindow.init();
ProductForm.init();
