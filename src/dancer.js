var Dancer = function(top, left, timeBetweenSteps) {
  // this = {}
  this.$node = $('<span class="dancer"></span>');
  // remember this dancer's position on the screen:
  this._position = {top, left};
  // remember this dancer's interval between steps
  this._timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
  // return this;
};

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this._timeBetweenSteps); // maybe revisit?
};

Dancer.prototype.setPosition = function(top, left) {
  this._position = {left, top};
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function() {
  this.setPosition('50%', this._position.left);
};
