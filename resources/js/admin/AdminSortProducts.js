class AdminSortProducts {
    static sortForm = null;
    static sortSelect = null;

    static init() {
        this.sortForm = document.querySelector(".sort-products-form");

        if (this.sortForm) {
            this.sortSelect = this.sortForm.querySelector("select");
            this.sortSelect.addEventListener("change", () => {
                this.sortForm.submit();
            });
        }
    }
}

AdminSortProducts.init();
