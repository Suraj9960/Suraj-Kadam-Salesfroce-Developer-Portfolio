import { LightningElement } from 'lwc';

export default class MainComponent extends LightningElement {
     handleNavigate(event) {

        const sectionName = event.detail.section;

        const section = this.template.querySelector(
            `[data-section="${sectionName}"]`
        );

        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}