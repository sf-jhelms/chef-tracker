import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    makeExit(chef){
    Ember.set(chef,'isCooking', false)
    chef.save();
  },
    makeEnter(chef){
    Ember.set(chef,'isCooking', true)
    chef.save();
  }
  }
});
