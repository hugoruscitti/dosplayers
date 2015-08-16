import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['col', 's12', 'm6', 'l4'],

  actions: {
    showModal() {
      this.set("modalVisible", true);
    },

    hideModal() {
      this.set("modalVisible", false);
    }
  }
});
