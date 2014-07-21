module.exports = function(grunt) {

	require('corpapp-grunt-module')(grunt);

	grunt.registerTask('default', [
		'build'
	]);
	
	grunt.registerTask('run', [
		'build',
		'connect',
		'watch'
	]);
};	