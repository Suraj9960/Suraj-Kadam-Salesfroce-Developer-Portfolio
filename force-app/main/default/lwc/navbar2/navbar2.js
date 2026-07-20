import { LightningElement } from 'lwc';

export default class Navbar2 extends LightningElement {
     isMenuOpen = false;

    isScrolled = false;

    connectedCallback() {

        window.addEventListener(
            'scroll',
            this.handleScroll.bind(this)
        );
    }

    handleScroll() {

        this.isScrolled = window.scrollY > 50;
    }

    toggleMenu() {

        this.isMenuOpen = !this.isMenuOpen;
    }

    get navbarClass() {

        return this.isScrolled
            ? 'navbar scrolled'
            : 'navbar';
    }

    get menuClass() {

        return this.isMenuOpen
            ? 'menu-open'
            : '';
    }
}