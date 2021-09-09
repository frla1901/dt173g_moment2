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
Jag gjorde mycket förarbete klart i och med att jag kodade DEMO-GULP enligt filmerna.

### Mappstruktur

Källkodsfilerna skapades i mappen **/src**  
Grundstruktur i mappen är en **index.html** fil och 3 mappar **/css**, **/images** och **/js**  
Mapparna innehåller filer som tydligt är namngivna utifrån innehåll. Exempelvis **body.css** och **button.js**  
Innehållet i **/src** mappen skapades helt lokalt i VSC först - testade så att js funktionalitet samt css fungerade helt utan automatisering. 

När git startades valde jag att klona ner det repo som jag skapat på GitHub **dt173g_moment2**. README filen som du läser nu skapades först på GitHub men justerades sen i VSC. 

Valde att skapa en Gulp fil **gulpfile.js** som innehåller all min Gulpkod. 

Automatiserade mappar är:  
**/pub** Publicerade filer  
**/maps** Källkodens ursprung/sökväg

Automatiserade filer är:  
**main.css**
**main.js**
**main.css.maps**
**main.js.maps**

Skapade även en .gitignore fil för att exkludera innehållet i **node_modules** och **pub** mapparna när jag pushade till GitHub repot. 

### Tasks

Totalt 5 tasks 

1. HTML
2. JS
3. CSS
4. IMAGES
5. WATCH


### Att använda mitt system / struktur

Det som krävs för att kunna använda mitt system är:

* NodeJs installerat på datorn.  

* Klona detta repo: ![https://github.com/frla1901/dt173g_moment2.git](https://github.com/frla1901/dt173g_moment2.git)  

* Kör _nmp install_ antingen i VSC terminalen eller datorns Terminal 

* Kör _gulp_ antingen i VSC terminalen eller datorns Terminal 

Säkerställ att npm paketens versioner är som skärmavbilden nedan:) 

![Skärmavbild Package.json fil som beskriver det som har skapats](https://github.com/frla1901/dt173g_moment2/tree/main/src/images/Skärmavbild.png)

![Gulp logo](https://upload.wikimedia.org/wikipedia/commons/7/72/Gulp.js_Logo.svg)

