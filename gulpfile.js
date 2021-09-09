/* Min Gulp kod - Moment 2 DT173G Webbutveckling III*/


const {src, dest, parallel, series, watch} = require('gulp');   // Skapa variabel för att hämta i gulp-paketet med metoderna (src, dest, parallel, series och watch)
                                                                // src = hämtar in källkodsfiler 
                                                                // dest = lägger till källkodsfilerna i pub katalogen (pub) så de publiceras
                                                                // parallel = tasks/funktioner körs parallellt 
                                                                // series = tasks/funktioner körs i serie.
                                                                // watch = övervakar förändringar i tasks
                                                                
const concat = require('gulp-concat');                          // Skapa variabel för att hämta gulp-paketet concat som slår samman (konkatenerar CSS och JavaScript)  
const imagemin = require('gulp-imagemin');                      // Skapa variabel för att hämta gulp-paketet imagemin som komprimerar bilder
const cssnano = require('gulp-cssnano');                        // Skapa variabel för att hämta gulp-paketet cssnano som minifierar CSS
const terser = require('gulp-terser');                          // Skapa variabel för att hämta gulp-paketet terser som minifierar JavaScript

const files = {
      // Skapa objekt som lagrar sökvägar
      htmlPath:"src/**/*.html",               // sökväg till html filerna (src)
      cssPath:"src/**/*.css",                 // sökväg till css filerna (src)
      jsPath:"src/**/*.js",                   // sökväg till js filerna (src)
      imagePath:"src/images/*"                // sökväg till alla olika format i mappen images (src)
}

// Task 1 - HTML - funktion som kopierar/hämtar över alla html-filer till publicering (pub)
function taskHTML(){
    return src(files.htmlPath)  // gulp metoden src = vilka sökvägar och därmed filer ska hämtas?
    .pipe(dest('pub'));         // skicka vidare filerna till pub genom att använda metoden .pipe
}

// Task 2 - CSS - funktion som kopierar/hämtar över alla css-filer till publicering (pub)
function taskCSS(){
    return src(files.cssPath)               // gulp metoden src = vilka sökvägar och därmed filer ska hämtas?
    .pipe(concat('main.css'))               // slår ihop alla css-filerna till en main.css fil 
    .pipe(cssnano())                        // minifierar alla css-filer
    .pipe(dest('pub/css'))                  // skicka vidare filerna till pub genom att använda metoden .pipe
}

// Task 3 - JS - funktion som kopierar/hämtar över alla js.filer till publicering (pub)
function taskJS(){
    return src(files.jsPath)                // gulp metoden src = vilka sökvägar och därmed filer ska hämtas?
    .pipe(concat('main.js'))                // slår ihop alla js-filerna till en main.js fil 
    .pipe(terser())                         // minifierar alla js-filer
    .pipe(dest('pub/js'));                  // skicka vidare filerna till pub genom att använda metoden .pipe
}

// Task 4 - Images - funktion som kopierar/hämtar över alla bildfiler till publicering (pub)
function taskImages(){
    return src(files.imagePath)             // gulp metoden src = vilka sökvägar och därmed filer ska hämtas? 
    .pipe (imagemin())                      // minifierar bilder
    .pipe(dest('pub/images'));              // skicka vidare filerna till pub genom att använda metoden .pipe
}

// exporterar från private till public parallellt 
exports.default = parallel(taskHTML, taskCSS, taskJS, taskImages);   // kör dessa samtidigt/parallellt