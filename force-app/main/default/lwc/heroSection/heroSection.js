import { LightningElement } from 'lwc';
import ProfileImage from '@salesforce/resourceUrl/ProfileImage';
import Email from '@salesforce/resourceUrl/Email';
import GitHub from '@salesforce/resourceUrl/GitHub';
import Trailhead from '@salesforce/resourceUrl/Trailhead';
import Linkedin from '@salesforce/resourceUrl/Linkedin';

export default class HeroSection extends LightningElement {
    profileImage = ProfileImage;
    emailIcon = Email;
    githubIcon = GitHub;
    trailheadIcon = Trailhead;
    linkedinIcon = Linkedin;

    navigate(event){
        const section = event.currentTarget.dataset.section;
        this.dispatchEvent(
            new CustomEvent('navigate', {
                detail: { section: section },
                bubbles: true,
                composed: true
            })
        );
    }
}