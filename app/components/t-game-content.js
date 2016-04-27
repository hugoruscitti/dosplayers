import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "",
  isShowingModal: false,
  actions: {
    toggleModal() {
      this.toggleProperty('isShowingModal');
    },
    showModal() {
      this.set("isShowingModal", true);
    }
  }

});
