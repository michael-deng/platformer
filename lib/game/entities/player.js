ig.module(
	'game.entities.player'
)
.requires(
	'impact.entity'
)
.defines(function() {
	EntityPlayer = ig.Entity.extend({
		animSheet: new ig.AnimationSheet( 'media/p1_spritesheet.png', 72, 72),
		size: {x: 41, y: 68},
		offset: {x: 18, y: 4},
		flip: false,
		maxVel: {x: 250, y: 500},
		friction: {x: 600, y: 0},
		accelGround: 800,
		accelAir: 400,
		jump: 500,

		init: function(x, y, settings) {
			this.parent(x, y, settings);
			this.addAnim('idle', 1, [13]);
			this.addAnim('run', 0.07, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
			this.addAnim('jump', 1, [11]);
			this.addAnim('hurt', 1, [14]);
			this.addAnim('crouch', 1, [15]);
		},

		update: function() {
			var accel = this.standing ? this.accelGround : this.accelAir;
			if (ig.input.state('left')) {
				this.accel.x = -accel;
				this.flip = true;
			} else if (ig.input.state('right')) {
				this.accel.x = accel;
				this.flip = false;
			} else {
				this.accel.x = 0;
			}
			if (this.standing && ig.input.state('jump')) {
				this.vel.y = -this.jump;
			}

			if (this.vel.y != 0) {
				this.currentAnim = this.anims.jump;
			} else if (this.vel.x != 0) {
				this.currentAnim =  this.anims.run;
			} else {
				this.currentAnim = this.anims.idle;
			}
			this.currentAnim.flip.x = this.flip; 
			this.parent();
		}
	
	})
})