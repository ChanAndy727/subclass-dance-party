var TeleportingDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node.addClass('teleportingDancer');
  this._isLinedUp = false;
};

TeleportingDancer.prototype = Object.create(Dancer.prototype);

TeleportingDancer.prototype.constructor = TeleportingDancer;

TeleportingDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  if (!this._isLinedUp) {
    this.setPosition(
      $('body').height() * Math.random(),
      $('body').width() * Math.random()
    );
  }
};

TeleportingDancer.prototype.lineUp = function() {
  Dancer.prototype.lineUp.bind(this)();
  this._isLinedUp = true;
  setTimeout(() => this._isLinedUp = false, 5000);
};
