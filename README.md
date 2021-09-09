# dt173g_moment2

## Syftet med automatiseringsprocessen?

Är att underlätta arbetet för utvecklaren genom att skapa en automatisering mellan arbetsfiler och publikation av dessa filer.  
Automatiseringen betyder att utvecklaren kan minifiera, förbättra och kontrollera filer, bilder etc. per automatik. Dessa tar därmed så liten plats som möjligt vilket resulterar i att mängden HTTP-anrop minskas & att sidan laddas snabbare!   

### Automatiseringsprocessen innehåller:

* Sammanslagning och minifiering av filer
* Komprimering samt optimering av bilder
* Konvertering av innehåll, som ex. SASS -> CSS eller LESS -> CSS
* Kvalitetskontroll av källkod
*  ... och mycket mer.

I detta moment har jag använt mig av npm verktyget Gulp i automatiseringsprocessen.


## NPM paket / verktyg
1. **gulp** - för automatisering.
2. **gulp-concat** - för att slå ihop mina js-filer och css-filer.
3. **gulp-terser** - för att minifirera mina js-filer.
4. **gulp-cssnano** - för att minifiera mina CSS-filer. 
5. **gulp-imagemin** - för att minifiera mina bilder. 
6. **browser-sync** - för att kunna använda och se hur sidan uppdateras live (som Live-server i VSC).
7. **gulp-sourcemaps** - för att kunna se källkodens ursprung/sökväg (visar src mapparna).


## Mitt system / struktur
Följde till stor del de filmer som tillhör Moment 2 vilket gör att min struktur liknar den som presenterades!

### Mappstruktur

Källkodsfilerna skapades i mappen **/src**  
Grundstruktur i mappen är en **index.html** fil och 3 mappar **/css**, **/js** och **/images**  
Mapparna innehåller filer som tydligt är namngivna utifrån innehåll. Exempelvis **body.css** och **button.js**  

Publicerade filer skapas automatiskt till mappen **/pub**
Skapade en .gitignore fil för att exkludera innehållet i **node_modules** och **pub** mapparna.

### Tasks


### Att använda mitt system / struktur
![Package.json fil som beskriver det som har skapats](/images/Skärmavbild 2021-09-09 kl. 13.31.59.png)

Det som krävs för att kunna använda mitt system är:

![Gulp logo](https://commons.wikimedia.org/wiki/File:Gulp.js_Logo.svg)

