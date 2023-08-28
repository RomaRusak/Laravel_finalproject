class CartWidget {

    #cartWidgetCounter = null;
    #cartWidgetCounterValue = null;
    #csrftoken = null;

    async getCartData() {
        const url = 'http://finalproject/get_cart_data';

        try {

            const responce = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type':'application/x-www-form-urlencoded',
                    'X-CSRF-TOKEN': this.#csrftoken
                },
            })
    
            const data = await responce.json();
            if (data.length) this.update(data);

        } catch (e) {
            console.error(e)
        } 
        
    }

    init() {
        this.#csrftoken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        this.#cartWidgetCounterValue = 0;
        this.getCartData();
        
        const cartWidget = document.querySelector('.cart-widget-wrapper');
        this.#cartWidgetCounter = cartWidget.querySelector('.cart-widget-counter');
        this.render();
    }

    update(data) {
       this.#cartWidgetCounterValue = data.reduce((accum, item) => {
        return accum += item.quantity;
       }, 0)

       this.render();
    }

    render() {
        this.#cartWidgetCounter.innerText = this.#cartWidgetCounterValue;

        if (this.#cartWidgetCounterValue === 0) {
            this.#cartWidgetCounter.classList.add('hidden');
        } else if(this.#cartWidgetCounterValue && this.#cartWidgetCounter.classList.contains('hidden')) {
            this.#cartWidgetCounter.classList.remove('hidden');
        }
    }

}

const cartWidget = new CartWidget;
cartWidget.init();

export default cartWidget;