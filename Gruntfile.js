module.exports = function(grunt) {
    grunt.initConfig({
        //Read in the project settings from the package.json file into the pkg property. 
        //This allows us to refer to the values of properties within the package.json file
        pkg: grunt.file.readJSON('package.json'),
        //Set up watch tasks, run using "grunt watch"
        watch: {
            react: {
                //Watch files in this location
                files: ['app/utils/**/*.js','app/components/**/*.jsx'],
                //When files are changed, execute this job
                tasks: ['browserify']
            }
        },
        //set up options for browserify task
        browserify: {
            options: {
                transform: [ require('grunt-react').browserify ]
            },
            client: {
                //Files to make available on the client
                src: ['app/utils/**/*.js','app/components/**/*.jsx'],
                //Build the node modules into this file, which is used on the server
                dest: 'public/scripts/components.js'
            }
        }
    });

    //Load npm tasks
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //Register the default grunt task, run when executing command "grunt"
    //This task will run the "browserify" task
    grunt.registerTask('default', [
        'browserify'
    ]);
};