import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  isCooking: DS.attr('boolean'),
  numStudents: DS.attr('number', {defaultValue: 0}),
  description: DS.attr('string'),
  hasDegree: DS.attr('boolean'),
  school: DS.attr('string'),
  imageUrl: DS.attr('string')
});
