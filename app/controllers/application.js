import Ember from 'ember';

export default Ember.Controller.extend({
  chefsLength: Ember.computed.alias('model.length'),
  availableChefs: Ember.computed.filterBy('model', 'isCooking', true),
  chefStudents: Ember.computed.mapBy('model', 'numStudents'),
  totalStudents: Ember.computed.sum('chefStudents'),
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
  },
  decStudent(chef){
    if(chef.get('numStudents')>0) {
    chef.decrementProperty('numStudents', 1)
    chef.save();
    }
  },
  incStudent(chef){
    chef.incrementProperty('numStudents', 1)
    chef.save();
  }
  }
});
