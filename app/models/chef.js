import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  isCooking: DS.attr('boolean'),
  numStudents: DS.attr('number', {defaultValue: 0}),
  description: DS.attr('string')
});
