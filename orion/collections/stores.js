Stores.attachSchema(new SimpleSchema({
  hidden: {
    type: Boolean,
    label: 'Hidden'
  },
  name: {
    type: String,
    label: 'Name'
  },
  owner: orion.attribute('user', { label: 'Dueño' }, {
    publicationName: 'storesUser'
  }),
  phone: {
    type: String,
    label: 'Telephone'
  },
  email: {
    type: String,
    label: 'Email'
  },
  direction: {
    type: String,
    label: 'Direction'
  },
  website: {
    type: String,
    optional: true,
    label: 'Web Site'
  },
  logo: orion.attribute('image', {
    label: 'Logo'
  }),
  discount: {
    type: Number,
    min: 1,
    max: 100,
    optional: true,
    label: 'Discount'
  }
}));
