module.exports = (grunt) ->
    grunt.initConfig
        pkg: grunt.file.readJSON('package.json')
        
        # PUT CONFIGURATION SECTIONS HERE

    grunt.loadNpmTasks plugin for plugin in [
        'grunt-contrib-watch'
        'grunt-contrib-connect'
        'grunt-contrib-copy'
        'grunt-contrib-coffee'
        'grunt-contrib-uglify'
        'grunt-contrib-less'
        'grunt-responsive-images'
    ]
    grunt.registerTask 'dev', [
        'less:dev', 
        'coffee', 
        'copy:coffee',
        'responsive_images', 
        'hugo:dev']
    grunt.registerTask 'default', [
        'less:dist', 
        'coffee', 
        'copy:coffee', 
        'uglify', 
        'responsive_images', 
        'hugo:dist']
    grunt.registerTask 'edit', ['connect', 'watch']
    grunt.registerTask 'hugo', (target) ->
        done = @async()
        args = ['--source=site', "--destination=build/#{target}"]
        if target == 'dev'
            args.push '--baseUrl=http://127.0.0.1:8080'
            args.push '--buildDrafts=true'
            args.push '--buildFuture=true'
        hugo = require('child_process').spawn 'hugo', args, stdio: 'inherit'
        (hugo.on e, -> done(true)) for e in ['exit', 'error']