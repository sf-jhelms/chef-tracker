import Ember from 'ember';

export default Ember.Component.extend({
  isOpen: false,
  actions: {
    toggleAvailability(chef){
      chef.toggleProperty('isCooking')
      chef.save();
  },
    toggleOpen(){
    this.toggleProperty('isOpen');
    }
  }
});
