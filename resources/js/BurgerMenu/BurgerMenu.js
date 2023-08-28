class BurgerMenu {
    static burgerMenu = null;
    static navMenu = null;
    static navMenuWidth = null;

    static init() {
        this.burgerMenu = document.querySelector(".burger-menu");
        this.navMenu = document.querySelector("nav");
        // this.welcomeBlock = document.querySelector('.welcome-block');
        this.navMenuWidth = this.navMenu.offsetWidth;

        this.burgerMenu.addEventListener("click", () => {
            this.burgerMenu.classList.toggle("active");
            this.burgerMenu.classList.contains("active")
                ? this.showNavMenu()
                : this.closeNavMenu();
        });
    }

    static showNavMenu() {
        this.navMenu.style.left = 0;
    }

    static closeNavMenu() {
        this.navMenu.style.left = `-${this.navMenuWidth}px`;
    }
}

export default BurgerMenu;
