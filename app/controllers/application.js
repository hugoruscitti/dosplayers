import Ember from 'ember';

export default Ember.Controller.extend({
  showDragonPunch: false,

  actions: {
    showDragonPunch() {
      this.set("showDragonPunch", true);
    },
    hideDragonPunch() {
      this.set("showDragonPunch", false);
    }
  }
});
