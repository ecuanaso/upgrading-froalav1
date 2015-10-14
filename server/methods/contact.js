// Meteor.startup(function() {
//     reCAPTCHA.config({
//         privatekey: '6LfTtg0TAAAAALEIHk-bkUDiRJou0kvbDJ3wdPUx'
//     });
// });

function nl2br (str, is_xhtml) {
    var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br ' + '/>' : '<br>'; // Adjust comment to avoid issue on phpjs.org display
    return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
}

String.prototype.escape = function() {
    var tagsToReplace = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;'
    };
    return nl2br(this.replace(/[&<>]/g, function(tag) {
        return tagsToReplace[tag] || tag;
    }));
};

Meteor.methods({
    verifyAndSendContact : function(recaptchaResponse, doc){
        check(recaptchaResponse, String);

        var verifyCaptchaResponse = reCAPTCHA.verifyCaptcha(recaptchaResponse, this.connection.clientAddress);

        if (!verifyCaptchaResponse.success) {
            console.log('reCAPTCHA check failed!', verifyCaptchaResponse);
            throw new Meteor.Error(422, 'reCAPTCHA Failed: ' + verifyCaptchaResponse.error);
        } else
            console.log('reCAPTCHA verification passed!');

        check(doc, ContactSchema);

        var html = "<b>Subject: " + doc.title + "</b><br>"
            + "<b>Name: " + doc.name + "</b><br>"
            + "<b>Email: " + doc.email + "</b><br><br>"
            + doc.message.escape();

        this.unblock();

        Email.send({
            to: doc.categoryId,
            from: orion.config.get('MAIL_FROM'),
            // subject: orion.dictionary.get('global.siteName') + ' - Contact',
            subject: doc.title,
            replyTo: doc.email,
            html: html
        });

        return true;
    }
});
