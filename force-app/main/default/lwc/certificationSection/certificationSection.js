import { LightningElement } from 'lwc';
import Certifications from '@salesforce/resourceUrl/Certifications';


export default class CertificationSection extends LightningElement {
    adminCertification = Certifications + '/admin.png';

    pd1Certification = Certifications + '/pd1.png';

    agentforceCertification = Certifications + '/agentforce.png';

    starRanger = Certifications + '/double-star-ranger.png';
}