# dt173g_moment2

## Syftet med automatiseringsprocessen?

Är att underlätta arbetet för utvecklaren genom att skapa en automatisering mellan arbetsfiler och publikation av dessa filer. Automatiseringen betyder att utvecklaren kan minifiera, förbättra och kontrollera filer, bilder etc. per automatik. Dessa tar därmed så liten plats som möjligt vilket resulterar i att mängden HTTP-anrop minskas & att sidan laddas snabbare!   

### Automatiseringsprocessen innehåller:

* Sammanslagning och minifiering av filer
* Komprimering samt optimering av bilder
* Konvertering av innehåll, som ex. SASS -> CSS eller LESS -> CSS
* Kvalitetskontroll av källkod
*  ... och mycket mer.

I detta moment har jag använt mig av npm verktyget Gulp i automatiseringsprocessen.

![Gulp logo](https://upload.wikimedia.org/wikipedia/commons/7/72/Gulp.js_Logo.svg)

## NPM paket / verktyg
1. **gulp** - för automatisering.
2. **gulp-concat** - för att slå ihop mina js-filer och css-filer.
3. **gulp-terser** - för att minifirera mina js-filer.
4. **gulp-cssnano** - för att minifiera mina CSS-filer. 
5. **gulp-imagemin** - för att minifiera mina bilder. 
6. **browser-sync** - för att kunna använda och se hur sidan uppdateras live (som Live-server i VSC).
7. **gulp-sourcemaps** - för att kunna se källkodens ursprung/sökväg.


## Mitt system / struktur
Följde till stor del de filmer som tillhör Moment 2 vilket gör att min struktur liknar den som presenterades!
Jag gjorde mycket förarbete/planering av struktur klart i förväg då jag kodade DEMO-GULP simultant som jag såg på filmerna.

### Mappstruktur

#### _README.md_
Använde VSC och valde att klona ner det repo som jag skapat på GitHub **dt173g_moment2**  
README filen som du läser just nu skapades först på GitHub men justerades sen i VSC och slutligen på GitHub igen.

#### _/src_
Innehåller källkodsfilerna och grundstruktur i mappen är en **index.html** fil och 3 mappar **/css**, **/images** och **/js**  
Mapparna innehåller filer som tydligt är namngivna utifrån innehåll. Exempelvis **body.css** och **button.js**  
Innehållet i **/src** mappen skapades helt lokalt i VSC först - testade så att js funktionalitet samt css fungerade helt utan automatisering.  

#### _gulpfile.js_
Innehåller all min Gulpkod. 

#### _Automatiserade mappar_  
**/pub** Innehåller alla publicerade filer  
**/maps** undermap till **/pub** som innehåller källkodens ursprung/sökväg

#### _Automatiserade filer_
**main.css** - sammanslagna och minifierade CSS filer.  
**main.js** - sammanslagna och minifierade JS filer.    
**main.css.maps** - fil som innehåller mapping till CSS filernas ursprungliga plats/sökväg.  
**main.js.maps**  - fil som innehåller mapping till JS filerna ursprungliga plats/sökväg.  

#### _.gitignore_ 
Denna fil skapades för att automatiskt kunna exkludera innehållet i **node_modules** och **/pub** mapparna när jag pushade till GitHub repot. 

### Tasks

Totalt 5 tasks 

1. HTML  
    Innehåller metoderna _src_ och _.pipe(dest)_
2. JS  
    Innehåller metoderna _src_ och _.pipe(dest)_ samt _.init_, _.write_ och _.stream_
3. CSS  
    Innehåller metoderna _src_ och _.pipe(dest)_ samt _.init_ och _.write_ 
4. IMAGES  
    Innehåller metoderna _src_ och _.pipe(dest)_
5. WATCH  
    Innehåller metoderna _watch_, _.init_ och _.reload_

Utöver detta användes metoden _exports.default_ både för att skapa parallell och serie export från private till public.


### Att använda mitt system / struktur

Det som krävs för att kunna använda mitt system är att:

* NodeJs är installerat på datorn.  

* Detta repo klonas antingen i VSC: 
[https://github.com/frla1901/dt173g_moment2.git](https://github.com/frla1901/dt173g_moment2.git)  
eller att kommandot git clone och länken till repot körs i terminalen

* Kommandot _nmp install_ körs antingen i VSC terminalen eller datorns Terminal 

* Kommandot _gulp_ körs antingen i VSC terminalen eller datorns Terminal 

Säkerställ att npm paketens versioner är som skärmavbilden & info nedan:) 

![Skärmavbild Package.json fil som beskriver det som har skapats](https://github.com/frla1901/dt173g_moment2/blob/main/src/images/Skärmavbild.png)

    "browser-sync": "^2.27.5",
    "gulp": "^4.0.2",
    "gulp-concat": "^2.6.1",
    "gulp-cssnano": "^2.1.3",
    "gulp-imagemin": "^7.1.0",
    "gulp-sourcemaps": "^3.0.0",
    "gulp-terser": "^2.0.1"



