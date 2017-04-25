import Ember from 'ember';

export default Ember.Controller.extend({
  chefsLength: Ember.computed.alias('model.length'),
  availableChefs: Ember.computed.filterBy('model', 'isCooking', true),
  actions: {
    makeExit(chef){
    Ember.set(chef,'isCooking', false)
    chef.save();
  },
    makeEnter(chef){
    Ember.set(chef,'isCooking', true)
    chef.save();
  },
  saveNewItem(){
    this.store.createRecord('chef', {
      isCooking: false,
      name: this.get('newItem')
    }).save()
    this.set('newItem', '')
  },
  destroyItem(chef){
    chef.destroyRecord();
  }
  }
});
