module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: [
          {
            expand: true,
            cwd: "css",
            src: ["*.scss"],
            dest: "./css",
            ext: ".css"
          }
        ]
      }
    },

    watch: {
      sass: {
        options: {
          event: ["added", "changed"]
        },
        files: "css/**/*.scss",
        tasks: ["sass"]
      }
    },

    browserSync: {
      public: {
        bsFiles: {
          src: ["css/**/*"]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: "./"
          }
        }
      }
    }
  });

  grunt.registerTask("server", ["browserSync", "watch"]);

  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-browser-sync");
};
