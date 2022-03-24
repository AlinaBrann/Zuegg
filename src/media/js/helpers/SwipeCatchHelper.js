const utils = require('../utils/Utils');
const dom = require('../utils/DOM');

const UP = 'up';
const DOWN = 'down';
const LEFT = 'left';
const RIGHT = 'right';

function SwipeCatchHelper() {}

SwipeCatchHelper.prototype = {
	watch($element, handler, preventDefaults, useMouse = false) {
		let xDistance = 50;
		let yDistance = 50;
		let swipeTime = 500;

		let touching = false;
		let startX = 0;
		let startY = 0;
		let startTime = 0;

		let directionX = 0;
		let directionY = 0;
		let prevDx = 0;
		let prevDy = 0;

		let skipX = false;
		let skipY = false;

		let startEvents = 'touchstart';
		let moveEvents = 'touchmove';
		let endEvents = 'touchend blur resize';

		if (useMouse) {
			startEvents += ' mousedown';
			moveEvents += ' mousemove';
			endEvents += ' mouseup';
		}

		$element.on(startEvents, function(e) {
			preventDefaults && e.preventDefault();

			touching = true;

			let touch =
				e.touches && e.touches.length
					? e.touches[0]
					: {
							screenX: e.clientX,
							screenY: e.clientY,
					  };

			// let touch = e.touches[0];

			startX = touch.screenX;
			startY = touch.screenY;

			startTime = utils.now();

			skipX = false;
			skipY = false;
		});

		dom.$window
			.on(moveEvents, function(e) {
				if (touching) {
					preventDefaults && e.preventDefault();

					let touch =
						e.touches && e.touches.length
							? e.touches[0]
							: {
									screenX: e.clientX,
									screenY: e.clientY,
							  };

					// let touch = e.touches[0];
					let dx = touch.screenX - startX;
					let dy = touch.screenY - startY;

					let currentDirectionX = dx > prevDx ? 1 : -1;
					let currentDirectionY = dy > prevDy ? 1 : -1;

					if (preventDefaults) {
						if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
							e.preventDefault();
						}
					}

					if (directionX != 0) {
						if (directionX != currentDirectionX) {
							startX = touch.screenX;
							dx = 0;
						}
					}

					directionX = currentDirectionX;

					if (directionY != 0) {
						if (directionY != currentDirectionY) {
							startY = touch.screenY;
							dy = 0;
						}
					}

					directionY = currentDirectionY;

					prevDx = dx;
					prevDy = dy;

					let now = utils.now();
					if (now - startTime < swipeTime) {
						if (!skipX) {
							if (Math.abs(dx) > xDistance) {
								handler(dx > 0 ? RIGHT : LEFT);
								skipX = true;
							}
						}

						if (!skipY) {
							if (Math.abs(dy) > yDistance) {
								handler(dy > 0 ? DOWN : UP);
								skipY = true;
							}
						}
					}
				}
			})
			.on(endEvents, function(e) {
				touching = false;
				directionX = 0;
				directionY = 0;
				prevDx = 0;
				prevDy = 0;
			});
	},
};

let instance = new SwipeCatchHelper();
instance.UP = UP;
instance.DOWN = DOWN;
instance.LEFT = LEFT;
instance.RIGHT = RIGHT;

module.exports = instance;
