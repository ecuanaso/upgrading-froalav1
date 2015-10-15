ContactSchema = new SimpleSchema({
  categoryId: {
    type: String,
    label: "Recipients",
    autoform: {
      options: function() {
        return Recipients.find({}, {sort: { position: 1 }}).map(function(rec) { 
              return { label: rec.name, value: rec.email }; 
            });
      }
     }
  },
  title: {
    type: String,
    label: "Subject",
    max: 50,
    optional: true
  },

  name : {
    type: String,
    label: "Your Name",
    max: 50
  },

  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    label: "Your E-mail Address"
  },
  message: {
    type: String,
    label: "Message",
    max: 1000
  }
});