var TeleportingDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node.addClass('teleportingDancer');
};

TeleportingDancer.prototype = Object.create(Dancer.prototype);

TeleportingDancer.prototype.constructor = TeleportingDancer;

TeleportingDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  this.setPosition(
    $('body').height() * Math.random(),
    $('body').width() * Math.random()
  );
};
