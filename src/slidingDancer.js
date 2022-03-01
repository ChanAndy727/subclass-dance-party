var SlidingDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node.addClass('slidingDancer');
};
SlidingDancer.prototype = Object.create(Dancer.prototype);
SlidingDancer.prototype.constructor = SlidingDancer;

SlidingDancer.prototype.step = function() {
  Dancer.prototype.step.apply(this);
  // hide the element with sliding up motion
  this.$node.slideToggle();

};