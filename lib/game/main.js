ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'game.levels.grass1'
)
.defines(function(){

MyGame = ig.Game.extend({
	
	gravity: 400,

	init: function() {
		// Initialize your game here; bind keys etc.
		ig.input.bind(ig.KEY.UP_ARROW, 'jump');
		ig.input.bind(ig.KEY.RIGHT_ARROW, 'right');
		ig.input.bind(ig.KEY.DOWN_ARROW, 'crouch');
		ig.input.bind(ig.KEY.LEFT_ARROW, 'left');
		ig.input.bind(ig.KEY.SPACE, 'jump');
		this.loadLevel(LevelGrass1);
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		
		// Add your own, additional update code here
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		
		
		// Add your own drawing code here
		var x = ig.system.width/2,
			y = ig.system.height/2;
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 1920, 1440, 0.5 );

});
