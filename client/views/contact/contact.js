// Template.contact.onRendered(function(){
//   $('.parallax').parallax();
// });

Template.contact.onCreated(function(){
  this.subscribe('recipients');
});


Meteor.startup(function() {
    reCAPTCHA.config({
        publickey: '6LeM1Q4TAAAAAFgoLHhtl-JfvIo_-3wdPHubRJ8y'
    });
});

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