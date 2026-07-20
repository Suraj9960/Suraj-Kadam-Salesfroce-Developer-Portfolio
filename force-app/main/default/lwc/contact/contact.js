import { LightningElement } from 'lwc';
import sendEmailToMe from '@salesforce/apex/ContactController.sendEmail';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class Contact extends LightningElement {

    visitorName ='';
    visitorEmail = '';
    subject = '';
    body = '';

    handleNameChange(event){
        this.visitorName = event.target.value;
    }

    handleEmailChange(event){
        this.visitorEmail = event.target.value;
    }

    handleSubjectChange(event){
        this.subject = event.target.value;
    }

    handleMessageChange(event){
        this.body = event.target.value;
    }

    sendEmail(event){
        event.preventDefault();
        //alert('Send Message clicked!!');

        console.log('Data=>',this.visitorEmail, this.visitorName, this.subject, this.body);
        sendEmailToMe({
            emailAddress:this.visitorEmail,
            message:this.body,
            name: this.visitorName,
            subject : this.subject

        }).then(response=>{

            console.log('Response=>',response);
            alert('Res: ' + JSON.stringify(response));
            const event = new ShowToastEvent({
                title: 'Sending message',
                message: 'Message Send Successfully!!',
                variant: 'Success' // 'success', 'error', 'info', किंवा 'warning'
            });
            this.dispatchEvent(event);

        }).catch(error=>{
            console.error('Error=>', JSON.stringify(error));
            const evt = new ShowToastEvent({
                title: 'Error sending message',
                message: error.body?.message || 'Unknown error',
                variant: 'error'
            });
            this.dispatchEvent(evt);
        });

    }
    
}