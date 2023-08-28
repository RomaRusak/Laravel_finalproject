import cartWidget from "../cartWidget/script";

import BurgerMenu from "../BurgerMenu/BurgerMenu";

BurgerMenu.init();

class Order {
    static orderForm = null;
    static deliveryInputs = null;
    static paymentInputs = null;
    static orderInputs = null;
    static orderData = {
        name: null,
        email: null,
        city: null,
        street: null,
        home_number: null,
        apartment_number: null,
        phone_number: null,
        delivery: null,
        payment: null,
    }
    static submitButton = null;
    static phoneValid = null;
    static orderForm = null;
    static csrftoken = null;

    static init() {
        this.orderForm = document.querySelector('.order-form');
        this.deliveryInputs = document.querySelector('.delivery-data-wrapper').querySelectorAll('input[type="checkbox"]');
        this.paymentInputs = document.querySelector('.payment-wrapper').querySelectorAll('input[type="checkbox"]');
        this.orderInputs = document.querySelector('.order-info-wrapper').querySelectorAll('input');
        this.submitButton = document.querySelector('.makeAnOrder-button');
        this.phoneValid = document.getElementById('phone_number').value.length === 13;
        this.orderForm = document.querySelector('form.order-form');
        this.csrftoken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        const orderInfo = document.querySelector('.order-info-wrapper');

        this.orderData = {
            name: orderInfo.querySelector('input[name="name"]').value,
            email: orderInfo.querySelector('input[name="email"]').value,
            city: orderInfo.querySelector('input[name="city"]').value,
            street: orderInfo.querySelector('input[name="street"]').value,
            home_number: orderInfo.querySelector('input[name="home_number"]').value,
            apartment_number: orderInfo.querySelector('input[name="apartment_number"]').value,
            phone_number: orderInfo.querySelector('input[name="phone_number"]').value,
            delivery: null,
            payment: null,
            
        }
        
        this.addEventListeners();
    }

    static addEventListeners() {

        this.deliveryInputs.forEach(item => {
            item.addEventListener('click', (e) => {
                this.deliveryInputs.forEach(item => {
                    if (item !== e.target) item.checked = false;
                });

                this.orderData = {...this.orderData, delivery: e.target.checked ? e.target.value : null};
                this.validation();
            })
        })

        this.paymentInputs.forEach(item => {
            item.addEventListener('click', (e) => {
                this.paymentInputs.forEach(item => {
                    if (item !== e.target) item.checked = false;
                });

                this.orderData = {...this.orderData, payment: e.target.checked ? e.target.value : null};
                this.validation();
            })
        })

        this.orderInputs.forEach(item => {
            if (item.type !== 'tel') {
                item.addEventListener('input', (e) => {
                    this.orderData = {...this.orderData, [e.target.name]: e.target.value};
                    this.validation();
                })
            } else {
                
                function validateTel (e) {
                    const permissible = ['Backspace', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
                    if((!permissible.find(item => item === e.key)) || ((e.key === 'Backspace') && e.target.value.length < 5) || ((e.key !== 'Backspace') && e.target.value.length > 12)) {
                     e.preventDefault();
                    };
                    
                 }

                const checkPhoneLength = (phoneLen) => {
                    const phoneInput = document.getElementById('phone_number');

                    if (phoneLen === 13) {
                        this.phoneValid = true;
                        if (phoneInput.classList.contains('invalid')) phoneInput.classList.remove('invalid');
                    } else {
                        this.phoneValid = false;
                        phoneInput.classList.add('invalid')
                    }
                }

                item.addEventListener('keydown', (e) => {
                    validateTel(e);

                    setTimeout(() => {
                        checkPhoneLength(e.target.value.length)
                        this.orderData = {...this.orderData, [e.target.name]: e.target.value};
                        this.validation();
                    }, 0)
                })
            }
            
        })
        
        this.orderForm.addEventListener('submit', (e) =>{
            e.preventDefault();
            this.submitOrderForm();
        }); 
    }

    static validation() {
        
        if (Object.values(this.orderData).every(item => item) && this.phoneValid) {
            if (this.submitButton.classList.contains('disabled')) this.submitButton.classList.remove('disabled');
            this.submitButton.removeAttribute('disabled');
        } else {
            this.submitButton.classList.add('disabled');
            this.submitButton.setAttribute('disabled', '');
        }
    }

    static async submitOrderForm() {
        const url = 'http://finalproject/cart/order';

        try {
           
            const responce = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type':'application/x-www-form-urlencoded',
                    'X-CSRF-TOKEN': this.csrftoken
                },
                body: `name=${this.orderData.name}&email=${this.orderData.email}&city=${this.orderData.city}&street=${this.orderData.street}&home_number=${this.orderData.home_number}&apartment_number=${this.orderData.apartment_number}&phone_number=${this.orderData.phone_number}&delivery=${this.orderData.delivery}&payment=${this.orderData.payment}`
            })
    
            const responceData = await responce.json();

            if (responceData.errors) {
                const errors = Object.values(responceData.errors);
                
                let notification = `Не успеваю реализовать модальное окно \n`

                errors.forEach(error => {
                    notification += error + '\n';
                })

                alert(notification);
            } else {
                this.orderCompleatedSuccessfully();
            }
            

        } catch (e) {
            console.error(e)
        } 
    }

    static orderCompleatedSuccessfully() {
        
        const backgroundDiv = document.createElement('div');
        backgroundDiv.classList.add('modal-background');
        const modalWindowWrapper = document.createElement('div');
        modalWindowWrapper.classList.add('modal-window-wrapper');
        modalWindowWrapper.innerHTML = `
            <h2 class="modal-title">Ваша заявка обрабатывается</h2>
            <p class="modal-text">Наш специалист с Вами свяжется в ближайшее время</p>
        `

        backgroundDiv.append(modalWindowWrapper);
        document.body.append(backgroundDiv);

        setTimeout(() => {
            window.location.href='http://finalproject/';
        }, 4000);
    }
}

Order.init();

