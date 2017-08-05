module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      server: {
        options: {
          port: 8000,
          keepalive: true,
          livereload: true
        }
      }
    },

    watch: {
      options: {
        reload: true,
        atBegin: true,
        livereload: 35729
      },
      core: {
        files: ['Gruntfile.js'],
        tasks: ['jshint:grunt']
      },
      view: {
        files: [
          'index.html'
        ],
        tasks: []
      },
      css: {
        files: [
          'sass/*.scss',
          'sass/**/*.scss'
        ],
        tasks: ['sass', 'postcss']
      },
      js: {
        files: [
          'scripts/*.js',
          'scripts/**/*.js'
        ],
        tasks: ['concat:ng', 'jshint:ng']
      },
      svg: {
        files: ['i/svg-store/*.svg'],
        tasks: ['svgstore']
      }
    },

    concat: {
      vendorScss: {
        src: [
          'node_modules/normalize-css/normalize.css'
        ],
        dest: 'sass/base/_vendor.scss'
      },
      vendor: {
        src: [
          'node_modules/angular/angular.min.js'
        ],
        dest: 'js/vendor.js'
      },
      ng: {
        src: [
          'scripts/app.js',
          'scripts/app.*.js',
          'scripts/**/*.js'
        ],
        dest: 'js/main.js'
      }
    },

    jshint: {
      grunt: ['Gruntfile.js'],
      ng: ['js/main.js'],
      // options: {
      //   jshintrc: '.jshintrc'
      // }
    },

    sass: {
      options: {
        sourceMap: false
      },
      dev: {
        files: {
          'css/styles.css': 'sass/styles.scss'
        }
      }
    },

    uglify: {
      ng: {
        files: {
          'js/main.js': ['js/main.js']
        },
        options: {
          preserveComments: false
        }
      }
    },

    svgstore: {
      options: {
        svg: {
          xmlns: 'http://www.w3.org/2000/svg',
          style: 'display: none',
          viewBox: '0 0 500 500',
          x: '0px',
          y: '0px'
        },
        includedemo: true,
        includeTitleElement: false,
        preserveDescElement: false,
        cleanup: true
      },
      default: {
        files: {
          'i/assets.svg': ['i/svg-store/*.svg']
        }
      }
    },

    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')({
            browsers: ['last 2 versions', 'ie >= 9']
          }),
          require('cssnano')({
            zindex: false
          })
        ]
      },
      dev: {
        src: 'css/styles.css'
      }
    },
  });

  grunt.registerTask('build', ['concat', 'sass', 'postcss', 'jshint']);
  grunt.registerTask('minify', ['uglify']);
};
