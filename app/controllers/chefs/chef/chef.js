import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    destroyItem(chef){
      chef.destroyRecord();
      this.transitionToRoute('chefs');
    }
  }
});
