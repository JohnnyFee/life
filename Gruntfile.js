/*global module:false*/
module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		resource: {
			images: 'resources/images'
		},

		qiniuConfig: grunt.file.readJSON('qiniu-config.json'),

		watch: {
			images: {
				files: ['<%= resource.images %>/**/*'],
				tasks: ['qiniu']
			}
		},

		qiniu: {
			life: {
				options: {
					accessKey: '<%= qiniuConfig.access_key %>',
					secretKey: '<%= qiniuConfig.secret_key %>',
					bucket: '<%= qiniuConfig.bucket %>',
					resources: [{
						cwd: '<%= resource.images %>',
						pattern: '**/*.*'
					}]
				}
			}
		}
	});

	require('load-grunt-tasks')(grunt);

	// Default task.
	grunt.registerTask('default', ['watch']);

};