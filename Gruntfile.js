module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    concat: {
      dist: {
        src: ["src/jquery.modal.js"],
        dest: "dist/jquery.modal.min.js",
      },
    },

    uglify: {
      dist: {
        files: {
          "dist/jquery.modal.min.js": ["dist/jquery.modal.min.js"],
        },
      },
    },

    jshint: {
      all: ["Gruntfile.js", "src/*.js"],
      options: {
        curly: false,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true,
        jquery: true,

        globals: {
          module: true,
          require: true,
          jQuery: true,
          console: true,
          define: true,
        },
      },
    },

    sass: {
      dist: {
        options: {
          // implementation: require("node-sass"),
          outputStyle: "compressed",
          sourcemap: "none",
          lineNumbers: true,
          compass: false,
          update: false,
        },
        files: {
          "dist/modal.min.css": "src/modal.scss",
        },
      },
    },

    watch: {
      js: {
        files: ["src/*.js"],
        tasks: ["jshint", "concat", "uglify"],
      },
      css: {
        files: ["src/*.scss"],
        tasks: ["sass"],
        options: {
          spawn: false,
        },
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-sass");

  grunt.registerTask("default", ["sass", "concat", "uglify"]);
};
