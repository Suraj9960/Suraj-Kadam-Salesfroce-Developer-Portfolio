public with sharing class ContactController {
    
    @AuraEnabled
    public static Boolean sendEmail(String emailAddress, String message, String name, String subject) {
        try {
            Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
            mail.setToAddresses(new List<String>{'surajkadam9965@gmail.com'});
            mail.setReplyTo(emailAddress);
            mail.setSenderDisplayName(name);
            mail.setSubject(subject);
            mail.setPlainTextBody('Name: ' + name + '\n\nMessage: ' + message);

            Messaging.SendEmailResult[] results = Messaging.sendEmail(
                new List<Messaging.SingleEmailMessage>{ mail }
            );

            if (!results[0].isSuccess()) {
                String errMsg = results[0].getErrors()[0].getMessage();
                throw new AuraHandledException('Email failed: ' + errMsg);
            }
            return true;
        } catch (Exception e) {
            throw new AuraHandledException('Error sending email: ' + e.getMessage());
        }
    }
}