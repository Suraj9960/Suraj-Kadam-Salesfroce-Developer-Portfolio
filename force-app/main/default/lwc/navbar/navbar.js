import { LightningElement } from 'lwc';

export default class Navbar extends LightningElement {
    navigate(event) {

        event.preventDefault();

        const section = event.currentTarget.dataset.section;

        this.dispatchEvent(
            new CustomEvent('navigate', {
                detail: {
                    section: section
                },
                bubbles: true,
                composed: true
            })
        );

    }
}