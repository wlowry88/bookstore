
export default Ember.Route.extend({

  model() {
    return this.store.findAll('book');
  },

  actions: {
    openCheckoutModal(book) {
      return this.render('modal', {
        outlet: 'modal',
        into: 'application',
        model: book,
        controller: 'application'
      });
    },

    closeCheckoutModal() {
      return this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    }
  }

});