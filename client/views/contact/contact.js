// Template.contact.onRendered(function(){
//   $('.parallax').parallax();
// });

// Meteor.startup(function() {
//     reCAPTCHA.config({
//         publickey: '6LfTtg0TAAAAAAezGp2OCfAJz4RanrU9rM_P4--O'
//     });
// });

AutoForm.addHooks('contactForm', {
 
  onSubmit:   function(insertDoc, updateDoc, currentDoc){

     var self = this;
     
      //get the captcha data
      var recaptchaResponse = grecaptcha.getResponse();

      Meteor.call('verifyAndSendContact', recaptchaResponse, insertDoc, function(error, result) {
            
            if (error) {
              Session.set('errorMsg', error.reason);
            } else {
              grecaptcha.reset();
              Session.set('errorMsg', false)
              self.done();
            }
          }); 

      return false;

  },

  onSuccess: function(formType, result) {
   // Session.set('emailSent', true)
    Materialize.toast(orion.dictionary.get('contact.successMessage'), 3000,  'alert-color')
  },
});

Template.contact.helpers({
  getCaptchaErrors: function(){
    return Session.get('errorMsg');
  }
})