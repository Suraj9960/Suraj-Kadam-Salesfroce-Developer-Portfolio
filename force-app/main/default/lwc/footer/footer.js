import { LightningElement } from 'lwc';
import GitHub from '@salesforce/resourceUrl/GitHub';
import Trailhead from '@salesforce/resourceUrl/Trailhead';
import Linkedin from '@salesforce/resourceUrl/Linkedin';

export default class Footer extends LightningElement {
    githubIcon = GitHub;
    trailheadIcon = Trailhead;
    linkedinIcon = Linkedin;

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