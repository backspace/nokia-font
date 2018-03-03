import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['string', 'slices', 'debug', 'animated'],

  debug: false,
  animated: false,
  slices: 3,
  string: 'test'
});
