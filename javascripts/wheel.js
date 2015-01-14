function Wheel(el, incrementEl, directionEl) {
	this.el = el;
  this.panelCount = el.children().length;
	this.theta = 0;
  this.incrementEl = incrementEl.attr('max', this.panelCount);
  this.directionEl = directionEl;
}

Wheel.prototype = {

  spin: function() {
    var direction = this.directionEl.prop('checked') ? 1 : -1;
    console.log(direction);
    this.theta += ( 360 / this.panelCount ) * this.incrementEl.val() * direction;
    this.el.css(
    	{ transform: 'rotateX(' + this.theta + 'deg)' }
  	);
  }
};

$(function() {
  var wheel = new Wheel( $('.carousel'), $('.increment'), $('.direction') );
  var spinButton = $('.spin');
  spinButton.on('click', function() {
    wheel.spin();
  });
});