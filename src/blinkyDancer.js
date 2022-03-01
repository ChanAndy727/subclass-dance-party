var BlinkyDancer = function(top, left, timeBetweenSteps) {
  // arguments = [top, left, timeBetweenSteps]
  Dancer.apply(this, arguments);
  this.someproperty = 'laksdjf';
  this.someOtherProperty = 'alsdkfj';
  // this.$node = $('<span class="dancer blinkyDancer"></span>');
  this.$node.addClass('blinkyDancer');
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;


BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.apply(this);
  this.$node.toggle();
};