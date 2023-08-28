import cartWidget from "../cartWidget/script";

class BurgerMenu {

    static burgerMenu = null;
    static navMenu = null;
    static navMenuWidth = null;
    static welcomeBlock = null;

    static init() {
        this.burgerMenu = document.querySelector('.burger-menu');
        this.navMenu = document.querySelector('nav');
        this.welcomeBlock = document.querySelector('.welcome-block');
        this.navMenuWidth = this.navMenu.offsetWidth;

        this.burgerMenu.addEventListener('click', () => {
            this.burgerMenu.classList.toggle('active');
            this.burgerMenu.classList.contains('active') ? this.showNavMenu() : this.closeNavMenu();
        })
    }

    static showNavMenu() {
        this.navMenu.style.left = 0;
        this.welcomeBlock.style.opacity = 0;
    }

    static closeNavMenu() {
        this.navMenu.style.left = `-${this.navMenuWidth}px`;
        this.welcomeBlock.style.opacity = 1;
    }

}

class AddScrollUp {

    static screenHeight = null;
    static arrowTop = null;

    static init() {

        this.screenHeight = window.screen.height

        window.addEventListener('scroll', () => {
            const posTop = window.pageYOffset;

            if (posTop > this.screenHeight / 2 && !document.querySelector('.arrow-top')) {
                this.createArrowTop();
                document.querySelector('.main').append(this.arrowTop);
            }

            if (posTop <= this.screenHeight / 2 && document.querySelector('.arrow-top')) {
                document.querySelector('.arrow-top').remove();
            }
        });

    }

    static createArrowTop() {
        this.arrowTop = document.createElement('a');
        this.arrowTop.classList.add('arrow-top');
        this.arrowTop.setAttribute('href', '#');
        
    }

}

class Accordeon {

    static heads = null;
    static bodies = null;

    static init() {
        this.heads = document.querySelector('.questions-wrapper').querySelectorAll('.accordeon-head');
        this.bodies = document.querySelector('.questions-wrapper').querySelectorAll('.accordeon-body');

        this.heads.forEach(item => {
            item.addEventListener('click', (e) => {
                this.heads.forEach(item => {
                    if (item.classList.contains('active') && item !== e.target) item.classList.remove('active');
                })
                e.target.closest('.accordeon-head').classList.toggle('active');
            })
        })
    }
}

BurgerMenu.init();
AddScrollUp.init();
Accordeon.init();