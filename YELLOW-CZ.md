# Yellow - dokumentace

**Yellow** je rozsáhlá komunikační platforma (tzv. [**super-app**](https://en.wikipedia.org/wiki/Super-app)), která poskytuje serverovou a klientskou aplikaci, podpůrné nástroje a dokumentaci.

## Klíčové vlastnosti

- **Otevřené zdrojové kódy** - Celá platforma je poskytována **bezplatně** a s **otevřenými zdrojovými kódy**. To přispívá důvěryhodnosti, bezpečnosti kódu, rychlému nalezení a opravě případných nedostatků v kódu a snadnému zapojení vývojářů 3. stran.

- **Multifunkčnost a modularita**: Modulární struktura klientské i serverové aplikace umožňuje uživatelům i správcům serverů si zvolit funkcionality aplikace podle svých představ. Platforma nabízí mnoho modulů z rozličných oblastí, jako je např. zasílání rychlých zpráv, sociální média, e-commerce, sdílení dat a mnoho dalšího. Platforma je otevřená i pro **moduly třetích stran**.

- **Podpora více protokolů**: Platforma podporuje integraci více komunikačních protokolů a je otevřena snadné integraci protokolů třetích stran. V rámci platformy jsou integrovány tyto protokoly:

  - [**AMTP**](./AMTP-CZ) - Nejnovější **klient-server** komunikační protokol, který přináší pokročilé možnosti v oblasti přenosu dat a **komunikace v reálném čase**. Nabízí **distribuovanou** síť serverů, které si mezi sebou předávají data, a také klientů, kteří se k těmto serverům připojují. Kdokoliv si může vytvořit vlastní server a připojit se tak k síti ostatních serverů nebo se jakožto klient připojit k již zavedeným serverům, které pro uživatele poskytují různé služby a navzájem si konkurují. Všechna uživatelská **data jsou uložena na serverech** a synchronizována s klientskými aplikacemi.

  - [**DMTP**](./DMTP-CZ) - Připravovaný **peer-to-peer** komunikační protokol. Tento protokol využívá plně **decentralizovanou** síť uživatelů, kteří se starají o doručení dat pro ostatní uživatele. Uživatelská **data jsou uložena pouze na koncových zařízeních** nebo na **decentralizovaných úložištích** (v určitých případech), nikoliv na serverech, jako je to v případě ostatních protokolů. Tento protokol je velmi bezpečný a odolný vůči cenzuře.

  - [**IMAP**](https://www.rfc-editor.org/rfc/rfc9051.html) - Původní protokol elektronické pošty. Do platformy je integrován z důvodu zpětné kompatibility.

- **Zabezpečení a ochrana soukromí**: Celé jádro platformy i oficiální moduly poskytující hlavní funkcionality systému, jsou vytvářeny dle standardů a doporučení protokolů **AMTP** a **DMTP**, tedy jsou v nich implementovány silné bezpečnostní prvky jako je např. **zabezpečená komunikace**, **koncové šifrování** apod. To zajišťuje nadstandardní ochranu soukromí pro uživatele.

## Seznam modulů

Jednotlivé moduly poskytují různé užitečné funkcionality. V této části jsou uvedeny oficiální moduly, poskytnuté k serverové i klientské aplikaci. Všechny moduly, ve kterých se přenáší nebo ukládají uživatelská data, jsou opatřeny **šifrováním**, což zajišťuje bezpečnou komunikaci mezi uživateli a ochranu proti tomu, aby kdokoliv (vč. správců serveru) mohl číst tato data.

### 📧 Rychlé zprávy

Modul **Rychlé zprávy** představuje hlavní funkcionalitu platformy, která umožňuje uživatelům komunikovat v reálném čase a zasílat mezi sebou data jako jsou **textové zprávy** (prostý i formátovaný text), **hlasové a video zprávy**, **neomezeně velké soubory**, **emotikony**, **animované nálepky**, **obrázky**, **kontakty**, **živé body na mapě** apod. Tyto jednotlivé typy zpráv lze taktéž kombinovat do jedné, **vícedílné zprávy**, což umožňuje například jednoduše vytvářet obchodní sdělení a komunikaci s chatboty.

V rámci každé konverzace je možné zakládat **více témat** rozhovorů. Jednotlivé konverzace mohou být taktéž **řazeny do skupin**, například dle typu kontaktu (práce, přátelé, apod.).

Modul umožňuje nejen konverzace **jeden na jednoho**, ale také poskytuje **chatovací skupiny** nebo **skupiny pro odběry novinek**. Tyto skupiny jsou vystaveny v přehledných **seznamech**, kde si je uživatelé mohou **filtrovat** dle kategorií, popularity, data vytvoření apod.

Uživatelské účty mohou být ovládány **chatboty**, což je vhodné například pro vytváření konverzací s uživatelskou podporou, pro objednávání zboží přes zprávy apod.

Na zprávy je možné **odpovídat**, **přeposílat** je a **reagovat** pomocí emotikon. Kontakty zasílající nevyžádané zprávy je taktéž možné snadno **zablokovat**.

Klientská aplikace umožňuje i vytváření **šablon zpráv**, což je využitelné například pro rychlou komunikaci se zákazníky v rámci uživatelské podpory.

Všechny zprávy je možné automaticky či na vyžádání **překládat** do mnoha světových jazyků.

Díky strukturovanosti tohoto modulu je snadné ve zprávách **vyhledávat**.

#### Cílová skupina:

Široká skupina různých uživatelů všech věkových kategorii, především těch, kteří hledají efektivní a bezpečnou platformu pro komunikaci. Funkcionality jsou vhodné jak pro jednotlivce, tak i soukromé a veřejné organizace.

### 🧾 Kontakty

Tento modul umožňuje uživatelům **spravovat** a **organizovat** své **kontakty**. Tato funkcionalita poskytuje funkce jako např. možnosti **importu a exportu** kontaktů v různých formátech, vytváření **skupin kontaktů**, **štítků**, **poznámek** apod. Dále pokročilé **vyhledávání** dle různých kritérií, **sdílení** kontaktů s ostatními uživateli, přiřazování **fotografií** k jednotlivým kontaktům, možnosti **nastavení soukromí** a mnoho dalšího.

Všechny kontakty jsou taktéž **synchronizovány** se serverem a mezi jednotlivými koncovými zařízeními.

#### Cílová skupina:

Funkcionality modulu jsou vhodné pro jednotlivce i organizace, tedy pro všechny kteří potřebují efektivně spravovat a sdílet své osobní či profesní kontakty.

### 📞 Hlasové a video hovory

Tento modul představuje další základní funkcionalitu platformy, která umožňuje uživatelům komunikovat prostřednictvím **videa** nebo pomocí **hlasu** v reálném čase. Hovory lze vést mezi dvěma **jednotlivci** i **skupinově**. Součástí je i možnost **sdílení obrazovky** a **vzdálené ovládání** zařízení. Hovory lze **nahrávat** a jednotlivé nahrávky přehrávat, spravovat a sdílet. **Kvalita hovoru** je automaticky přizpůsobena propustností internetového připojení.

#### Cílová skupina:

Uživatelé všech věkových kategorií, především těch, kteří hledají bezpečné telefonování pomocí hlasu či videa. Funkcionalita je vhodná pro širokou škálu domácích uživatelů i pro profesionální využití v různých typech organizací.

### 📱 Konferenční hovory

**Konferenční hovory** umožňují uživatelům účastnit se rozsáhlých skupinových diskuzí a setkání online v reálném čase. Tato funkcionalita je navržena pro efektivní a pohodlnou komunikaci mezi více účastníky a to prostřednictvím **hlasu** i **videa**. Taktéž je umožněno **sdílet obrazovku** a povolit konkrétním účastníkům **vzdálené řízení**. Moderátoři mají možnost řídit průběh hovoru, jako např. **přidávat**, **odstraňovat** a **blokovat** účastníky, **moderovat** ostatní a **zaznamenávat průběh hovoru**. Uživatelé mohou taktéž využít **chat** v rámci hovoru, **sdílet soubory** a **hlasovat v anketách**. Všechny konferenční hovory lze **plánovat** dopředu, aby mohli být účastníci včas informováni o termínu konference. Kvalita zvuku je automaticky optimalizována dle propustnosti síťového připojení.

#### Cílová skupina:

Především organizace, jako jsou firmy, vzdělávací instituce, lektoři, konzultanti, organizátoři akcí, odborné skupiny apod.

### ₿ Integrovaná kryptoměnová peněženka

**Integrovaná kryptoměnová peněženka** umožňuje uživatelům snadno a bezpečně **uchovávat**, **odesílat** a **přijímat** kryptoměny přímo v klientské aplikaci. To umožňuje placení a převod kryptoměn a tokenů mezi uživateli platformy a také **platby v rámci komerčních modulů** (např. za prémiové funkce). Peněženka podporuje všechny [**EVM-kompatibilní**](https://cs.wikipedia.org/wiki/Ethereum) blockchainy (jako je Ethereum, Binance Smart Chain, Polygon apod.). Tato funkcionalita je zcela oddělená od síťového protokolu a je propojená přímo s blockchainy. Zároveň umožňuje ostatním modulům využívat funkcionality [**chytrých smluv**](https://cs.wikipedia.org/wiki/Chytr%C3%BD_kontrakt), což značně přispívá k důvěryhodnosti transakcí a rozšiřuje možnosti funkcionalit modulů.

#### Cílová skupina:

Uživatelé, kteří chtějí v rámci platformy platit za služby, které moduly poskytují, využívat chytré smlouvy nebo si mezi sebou navzájem zasílat platby.

### 🧑‍🤝‍🧑 Profily a sledování

Tento modul umožňuje uživatelům **sledovat aktivity ostatních uživatelů** napříč moduly, čímž zajišťuje interakci a udržování kontaktu mezi lidmi. Tato funkcionalita podporuje vytváření a správu **seznamu sledovaných profilů**, **zobrazování aktivit**, **upozorňování na nové aktivity**, **zobrazení seznamu nejsledovanějších veřejných profilů** apod.

#### Cílová skupina:

Uživatelé sociálních sítí, odběratelé novinek dle zájmových oblastí apod.

### 🎞️ Video kanály

**Video kanály** umožňují uživatelům **vytvářet** a **spravovat** různé druhy **video obsahu**, jako např. **klasická videa**, **živá vysílání** a **krátká "reels" videa**. Tato funkcionalita poskytuje nástroje pro **tvorbu a distribuci video obsahu**. Zároveň poskytuje možnosti zapojení uživatelů, jako jsou **reakce** na videa, **komentáře**, **sdílení** apod.

#### Cílová skupina:

Sledovatelé video obsahu, tvůrci video obsahu, vzdělávací instituce, umělci a hudebníci, herní komunita, společnosti produkující komerční obsah, uživatelé hledající zábavu či vzdělání.

### 💬 Diskuzní fórum

**Diskuzní fórum** poskytuje prostor pro uživatele, kde mohou **diskutovat** o různých tématech, **sdílet názory**, **klást otázky** a **poskytovat odpovědi**. Tento modul umožňuje **vytváření**, **správu** a **vyhledávání** diskuzí filtrovatelných dle kategorií a obsahu, nabízí nástroje pro moderování obsahu a podporuje živé a strukturované konverzace. Zároveň nabízí možnosti **nastavení soukromí** pro soukromé diskuzní skupiny.

#### Cílová skupina:

Zájmové, profesní, vzdělávací, odborné a jiné skupiny, komunity, organizace poskytující uživatelskou podporu, běžní diskutující uživatelé apod.

### ⭐ Newsfeed

Tento modul poskytuje uživatelům personalizovaný **přehled o nejnovějších příspěvcích** sledovaných profilů. Poskytuje možnost udržení přehledu o novinkách a interakcích v rámci sítě uživatelů. Taktéž umožňuje zapojení uživatelů ve formě reakcí a komentářů k jednotlivým příspěvkům.

#### Cílová skupina:

Široká skupina koncových uživatelů, tvůrci obsahu, organizace a projekty poskytující obsah svým odběratelům apod.

### 🤳🏻 Příběhy

Modul **Příběhy** umožňuje uživatelům **vytvářet vizuální příspěvky**, které uživatelé mohou sdílet se svými přáteli a sledovateli. Tyto příspěvky jsou viditelné pouze po omezenou dobu (typicky 24 hodin) a umožňují uživatelům **sdílet okamžité momenty**, **krátká videa**, **obrázky**, **zvuk** apod. v atraktivním formátu, na který mohou odběratelé snadno **reagovat** nebo je **okomentovat**.

#### Cílová skupina:

Široká skupina koncových uživatelů, tvůrci obsahu, organizace poskytující obsah svým odběratelům apod.

### 🗓️ Události

Tento modul umožňuje uživatelům vytvářet, organizovat a sdílet různé typy událostí, jako jsou osobní setkání či veřejné akce. Tento modul poskytuje nástroje pro plánování, řízení a sdílení událostí, čímž usnadňuje koordinaci a zapojení účastníků. U jednotlivých událostí je umožněno nastavení soukromí a viditelnost. Modul taktéž poskytuje seznam veřejných událostí, které jsou filtrovatelné a seřaditelné podle různých kritérií.

#### Cílová skupina:

Organizátoři a pořadatelé veřejných událostí, běžní uživatelé organizující soukromé akce, účastníci veřejných i soukromých akcí.

### ✍🏻 Blogy

Blogy poskytují autorům možnost vytvářet, publikovat a sdílet své myšlenky a názory ve formě článků a čtenářům tyto články číst, reagovat na ně a komentovat v diskuzi. Modul je navržen tak, aby usnadňoval tvorbu obsahu, podporoval zapojení čtenářů. Taktéž poskytuje nástroje pro snadné psaní a úpravu textu a přidávání multimediálního obsahu. Zároveň je i implementována funkcionalita seznamu blogů s možností filtrace a řazením dle různých kritérií.

#### Cílová skupina:

Amatérští i profesionální autoři a čtenáři různorodého obsahu.

### 🛍️ E-shopy

Tento modul umožňuje uživatelům vytvářet a spravovat vlastní online obchody a v takovýchto obchodech pohodlně nakupovat. Pro správu těchto e-shopů je poskytnuta sada nástrojů pro prodej produktů a služeb, správu objednávek, dokladů, plateb a komunikaci se zákazníky.

#### Cílová skupina:

E-commerce podnikatelé, digitální tvůrci, koncoví zákazníci.

### 🏪 Tržiště

Modul Tržiště umožňuje koncovým uživatelům nakupovat a prodávat produkty a služby mezi sebou. Tržiště poskytuje přehlednou platformu pro inzerci, kde mohou uživatelé nabízet své zboží a služby, organizovat **aukce**. Modul umožňuje vyhledávání a filtrování položek dle různých kritérií, hodnocení a komunikaci mezi uživateli.

#### Cílová skupina:

Uživatelé, kteří prodávají a nakupují zboží či služby formou inzerce.

### 💰 Příspěvky

Tento modul umožňuje uživatelům podporovat ostatní členy komunity prostřednictvím finančních darů. Kdokoliv si může založit vlastní sbírku na libovolné účely a vybírat tak dary od lidí. Modul umožňuje snadnou správu sbírek, poskytuje seznam sbírek filtrovatelný a seřaditelný dle různých kritérií. Taktéž umožňuje komunikaci mezi dárci a provozovateli sbírky.

#### Cílová skupina:

Uživatelé provozující či přispívající na osobní, charitativní, komunitní, umělecké či jakékoliv jiné projekty.

### 🤑 Skupinové financování (crowdfunding)

Skupinové financování umožňuje uživatelům získávat finanční prostředky pro různé projekty prostřednictvím příspěvků od přispěvatelů, za což tito přispěvatelé dostávají různé odměny, podíly na projektu apod. Tento modul poskytuje komplexní nástroje pro vytváření a správu kampaní, čímž umožňuje realizaci inovativních nápadů, projektů a podnikatelských záměrů. Kdokoliv si může založit vlastní kampaň a sestavit jí podle svého uvážení. Platforma poskytuje i seznam veřejných kampaní, které lze filtrovat a řadit dle různých kritérií.

#### Cílová skupina:

Podnikatelé, startupy, tvůrci a umělci, neziskové organizace, komunity, inovátoři a vynálezci, vzdělávací projekty a přispěvatelé do těchto projektů.

### 📅 Kalendář

**Kalendář** je navržen pro efektivní **organizování času** a **plánování událostí**. Tento modul umožňuje uživatelům **vytvářet**, **synchronizovat** a **sdílet** kalendáře s ostatními členy komunity, což usnadňuje organizaci osobních i pracovních aktivit.

#### Cílová skupina:

Firemní uživatelé, domácí uživatelé, studenti, komunity apod.

### ✔️ Úkoly

Modul **Úkoly** umožňuje uživatelům **vytvářet**, **spravovat**, **delegovat**, **sledovat průběh** a **sdílet** úkoly v reálném čase. Tento modul je navržen tak, aby zlepšoval **produktivitu** a **organizaci práce**, usnadňoval **spolupráci** a zajišťoval, že všechny úkoly budou dokončeny včas a efektivně.

#### Cílová skupina:

Jednotlivci, týmy, pracovní skupiny, studenti, domácnosti a další

### 📂 Sdílení souborů

**Sdílení souborů** umožňuje uživatelům **nahrávat**, **stahovat**, přehledně **organizovat** a **sdílet** soubory různých formátů. Tento modul je navržen pro snadnou a efektivní výměnu videí, software, obrázků, dokumentů a dalších typů souborů mezi uživateli.

#### Cílová skupina:

Jednotlivci, studenti, komunity a další.

### ❤️ Seznamka

Modul **Seznamka** poskytuje moderní způsob seznamování se s novými lidmi za různými účely, jako např. nalezení životního partnera, příležitostná setkání, přátelství apod. Modul umožňuje vytváření profilů s galerií fotografií a podrobnými osobními informacemi, vyhledávání a filtrování ostatních uživatelů, možnosti řazení podle vzdálenosti a dalších kritérií, možnost kontaktování pomocí zpráv, lajkování uživatelských profilů, nalezení vzájemných shod, přidávání uživatelů do oblíbených apod.

#### Cílová skupina:

Jednotlivci, kteří hledají nové vztahy, přátele a známé za různými účely.

### ⛰️ Virtual chat

**Virtual chat** nabízí uživatelům prostředí virtuálního světa, ve kterém mohou vzájemně komunikovat a bavit se s ostatními prostřednictvím textového chatu (soukromých nebo veřejných chatovacích bublin) či hlasového chatu, přizpůsobovat si svou virtuální postavičku, navštěvovat různá místa ve virtuálním prostředí. Uživatelé taktéž mohou interagovat s ostatními objekty.

#### Cílová skupina:

Jednotlivci hledající interaktivní komunikaci, netradiční způsob seznamování s novými lidmi a zábavu ve virtuálním světě. Modul je určen především mladší generaci uživatelů.

### 🗺️ Mapy

**Mapy** nabízí uživatelům rozsáhlé možnosti pro **prohlížení** a **interakci** s geografickými informacemi. Modul poskytuje funkcionality jako **vyhledávání**, **sdílení polohy** v reálném čase a objevování míst a **bodů zájmů** (místní obchody, služby, události apod.). Body zájmů jsou filtrovatelné a propojené s dalšími moduly aplikace, jako jsou profily nebo možnost kontaktování pomocí rychlých zpráv.

#### Cílová skupina:

Uživatelé, kteří se chtějí propojovat s ostatními uživateli nebo body zájmů.

### 🎮 Hry

Modul **Hry** poskytuje uživatelům zábavu prostřednictvím zábavných online her, které mohou hrát se svými přáteli.

#### Cílová skupina:

Hráči her různých žánrů, sociálně zaměření hráči, příležitostní hráči, především mladší generace uživatelů.

### 📰 Media feed

Modul **Media feed** v platformě Yellow poskytuje uživatelům přehled zpráv a informací z různých médií. Tento modul agreguje obsah z různých zpravodajských serverů, blogů, sociálních médií a dalších zdrojů, aby uživatelé měli aktuální přehled o dění ve světě na jednom místě. Uživatelé si mohou personalizovat výběr oblíbených médií a sdílet obsah s ostatními uživateli.

#### Cílová skupina:

Aktivní čtenáři a informovaní uživatelé, obchodníci, studenti, zájemci o odborná témata apod.
