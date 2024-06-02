# Yellow - dokumentace

**Yellow** je rozsáhlá komunikační platforma (tzv. [**super-app**](https://en.wikipedia.org/wiki/Super-app)), která poskytuje serverovou a klientskou aplikaci, podpůrné nástroje a dokumentaci.

## Klíčové vlastnosti

- **Kompatibilita napříč zařízeními**: Klientská aplikace je dostupná pro mnoho platforem, především s OS Windows, Linux, macOS, Android, iOS a web na mnoha typech zařízení.

- **Jednoduchost a použitelnost klientské aplikace**: Aplikace je navržena tak, aby lidem **řešila a značně usnadňovala běžné potřeby reálného světa** v online prostředí (např. komunikace, zapojení se do komunit, obchodování, platby, vzdělávání, zábava, sledování aktuálního dění, seznamování se, profesní potřeby, sdílení informací apod.). I přes svou komplexní využitelnost si aplikace zachovává **přehledné a jednoduché uživatelské rozhraní**, které je snadno pochopitelné a ovladatelné pro běžného člověka téměř všech věkových kategorií a to bez odborných znalostí.

- **Jednoduchá instalace serveru a nastavení**: Serverová aplikace je jednoduše nainstalovatelná a nastavitelná i pro začínající správce serveru či pokročilejší uživatele PC. Aplikace umožňuje jednoduchou **instalaci a nastavení serveru do 5 minut** a přehledné webové rozhraní pro správu. Toto je využitelné pro ty, kteří nechtějí využívat servery a domény poskytovatelů služeb (třetích stran) a raději mají svá data pod kontrolou na vlastním serveru.

- **Kompletní náhrada za e-mail**: Jelikož platforma integruje protokol [**AMTP**](./AMTP-CZ), který představuje novou generaci e-mailových služeb, je mimo jiné i využitelná jako úplná náhrada za e-mailové klientské aplikace předchozích generací. To poskytuje mnohem přehlednější a modernější komunikaci s uživateli.

- **Multifunkčnost a modularita**: Modulární struktura klientské i serverové aplikace umožňuje uživatelům i správcům serverů si zvolit funkcionality aplikace podle svých představ. Platforma nabízí mnoho modulů z rozličných oblastí, jako je např. zasílání rychlých zpráv, sociální média, e-commerce, sdílení dat a mnoho dalšího. Platforma je otevřená i pro **moduly třetích stran**.

- **Zabezpečení a ochrana soukromí**: Celé jádro platformy i oficiální moduly poskytující hlavní funkcionality systému, jsou vytvářeny dle standardů a doporučení protokolů **AMTP** a **DMTP**, tedy jsou v nich implementovány silné bezpečnostní prvky jako je např. **zabezpečená komunikace**, **podepisování obsahu**, **koncové šifrování** apod. To zajišťuje nadstandardní ochranu soukromí pro uživatele.

- **Podpora více protokolů**: Platforma podporuje integraci více komunikačních protokolů a je otevřena snadné integraci protokolů třetích stran. V rámci platformy jsou integrovány tyto protokoly:

  - [**AMTP**](./AMTP-CZ) - Nejnovější **klient-server** komunikační protokol, který přináší pokročilé možnosti v oblasti přenosu dat a **komunikace v reálném čase**. Nabízí **distribuovanou** síť serverů, které si mezi sebou předávají data, a také klientů, kteří se k těmto serverům připojují. Kdokoliv si může vytvořit vlastní server a připojit se tak k síti ostatních serverů nebo se jakožto klient připojit k již zavedeným serverům, které pro uživatele poskytují různé služby a navzájem si konkurují. Všechna uživatelská **data jsou uložena na serverech** a synchronizována s klientskými aplikacemi.

  - [**DMTP**](./DMTP-CZ) - Připravovaný **peer-to-peer** komunikační protokol. Tento protokol využívá plně **decentralizovanou** síť uživatelů, kteří se starají o doručení dat pro ostatní uživatele. Uživatelská **data jsou uložena pouze na koncových zařízeních** nebo na **decentralizovaných úložištích** (v určitých případech), nikoliv na serverech, jako je to v případě ostatních protokolů. Tento protokol je velmi bezpečný a odolný vůči cenzuře.

  - [**IMAP**](https://www.rfc-editor.org/rfc/rfc9051.html) - Původní protokol elektronické pošty. Do platformy je integrován z důvodu zpětné kompatibility.

- **Otevřené zdrojové kódy** - Celá platforma je poskytována **bezplatně** a s **otevřenými zdrojovými kódy**. To přispívá důvěryhodnosti, bezpečnosti kódu, rychlému nalezení a opravě případných nedostatků v kódu a snadnému zapojení vývojářů 3. stran.

## Důvody vytvoření

Cílem vytvoření tohoto software je potřeba řešit některé z největších problémů současných komunikačních aplikací a přinést inovativní řešení, která dosud v digitálním světě chyběla. V současné době neexistuje žádná jiná aplikace, která by splňovala všechna následující kritéria:

- **Přívětivé uživatelské rozhraní**: U klientské aplikace je kladen důraz na jednoduché, přehledné a moderní uživatelské prostředí a to i přes komplexní funkcionalitu celé aplikace. Většina funkcionalit a akcí v aplikaci je přístupná **do max. 3 kliknutí**.

- **Modulární koncept, multifunkčnost**: Modulární koncept zajišťuje pro uživatele, provozovatele serverů i pro vývojáře řadu výhod, jako např.:

  - **Z hlediska uživatele**:

    - **Volba funkcionalit** - Uživatel si může v aplikaci zvolit jen funkcionality, které sám využívá a tím si zajistit maximální přehlednost a získat pozornost jen na obsah, který se rozhodne odebírat. To zajišťuje **maximální možný uživatelský zážitek**.

    - **Jednotné přihlašování** - Uživatel má pouze jednu aplikaci, do které se přihlašuje jedinými přihlašovacími údaji na libovolném počtu a druhu zařízení, což zajišťuje **maximální přístupnost**.

    - **Provázanost** - Funkcionality jsou navzájem provázané, což uživatelům **usnadňuje a zrychluje navigaci** uvnitř aplikace napříč funkcionalitami.

  - **Z hlediska provozovatele serveru**:

    - **Volba konkrétních funkcionalit** - Provozovatel serveru si zvolí jen funkcionality, které chce nabízet uživatelům, případně integruje moduly třetích stran či své vlastní moduly. Toto je výhodné například pro školy či firmy, kde jsou uživatelům poskytovány jen funkcionality, které jsou určené pro studijní či pracovní účely.

    - **Nízké náklady na vývoj funkcionalit** - Jsou zajištěny tím, že není pro každou novou funkcionalitu třeba tvořit celou platformu, ale využít již stávající a pouze vytvořit modul s konkrétními funkcionalitami. To ve většině případech šetří náklady spojené s vývojem nových funkcionalit o 50 - 90%.

    - **Nízké náklady na marketing** - Jsou zajištěny tím, že není třeba propagovat jednotlivé funkcionality v rámci jednotlivých marketingových kampaní, ale pouze jednou pro celou platformu. Taktéž, při uvedení nové funkcionality, se využívá stávající uživatelská základna. Zároveň, díky své provázanosti funkcionalit, je aplikace atraktivní pro influencery, kteří přivádějí své sledovatele, což zajišťuje růst uživatelské základny.

    - **Diverzifikace rizika** - V případě, že provozovatel serveru vsadí na některou z komerčních funkcionalit, která by nebyla pozitivně přijata uživateli, je ztráta vykompenzována ziskem z jiné funkcionality.

    - **Udržení uživatelů online** - Větší množství funkcionalit udržuje více lidí online, tzn. vyšší pravděpodobnost interakce mezi uživateli a následný vyšší potenciální zisk z komerčních funkcionalit.

    - **Aplikace jako nezbytnost** - Funkcionality propojené s běžnými denními potřebami uživatelů v rámci platformy, vytváří nezbytnost mít takovou aplikaci nejen zaregistrovanou a stále nainstalovanou, ale i jí aktivně využívat, tzn. nižší riziko, že uživatel aplikaci odinstaluje a naopak je stále přihlášen k odběru oznámení, které uživatele opět vrací k tomu aplikaci aktivně využívat a zvyšuje pravděpodobnost vynaložení finančních prostředků v rámci komerčních modulů.

    - **Zisk z funkcionalit třetích stran** - Integrace funkcionalit třetích stran přináší dodatečný zisk v rámci komerčních modulů.

  - **Z hlediska vývojáře**:

    - **Rychlý a snadný vývoj** - Modulární koncept zajišťuje vývojářům snadný a rychlý vývoj, díky tomu, že **vytváří pouze konkrétní moduly** a jejich funkcionality, nikoliv celou platformu.

- **Otevřené zdrojové kódy**:

  - **Transparentnost a bezpečnost** - Software umožňuje komukoli prohlédnout si zdrojový kód, což znamená, že bezpečnostní experti, programátoři a testeři mohou snadno zkontrolovat, zda neobsahuje bezpečnostní nedostatky nebo škodlivý kód. To zvyšuje důvěru v používání software.

  - **Spolehlivost a kvalita** - Díky tomu, že na vývoji software s otevřeným zdrojovým kódem může spolupracovat široká komunita vývojářů a bezpečnostních expertů z celého světa, je pravděpodobné, že chyby a nedostatky budou rychleji objeveny a opraveny. Kolektivní úsilí mnoha lidí vede k vyšší kvalitě a stabilitě software.

  - **Komunita a podpora** - Projekty s otevřeným zdrojovým kódem zajišťují silnou a aktivní komunitu, která poskytuje podporu, sdílí znalosti a zkušenosti a přispívá k dalšímu vývoji software.

  - **Inovace a rychlý vývoj** - Software s otevřeným zdrojovým kódem podporuje inovace a rychlejší vývoj. Vývojáři z celého světa mohou přinášet nové nápady a vylepšení platformy, což umožňuje rychlejší pokrok a implementaci nových technologií a funkcí.

- **Decentralizovaná nebo distribuovaná síťová architektura**: Tento typ sítě přináší uživatelům mnoho výhod:

  - **Větší dostupnost a spolehlivost** - Uživatelé mohou mít jistotu, že služby budou dostupné i v případě výpadku některých částí sítě. Decentralizovaná síť znamená, že není žádný centrální bod, který by mohl způsobit kompletní výpadek služby, což zajišťuje stabilní a nepřerušovanou dostupnost.
  
  - **Větší kontrola nad daty** - Uživatelé mají větší kontrolu nad svými daty, protože mohou rozhodovat, kde a jak jsou jejich informace ukládány a kdo k nim má přístup.

  - **Výkon a rychlost** - Díky rozložení zátěže na více uzlů mohou uživatelé zažít rychlejší přístup k datům a službám. Decentralizovaná síť umožňuje efektivnější zpracování a přenos dat, což vede k lepšímu uživatelskému zážitku.

  - **Odolnost vůči cenzuře** - V decentralizované síti je mnohem obtížnější provádět cenzuru nebo blokování obsahu, protože není žádný centrální bod, který by mohl být snadno kontrolován nebo ovlivňován. Uživatelé tak mají větší svobodu ve sdílení a přístupu k informacím.

- **Zabezpečení, šifrování a ochrana osobních dat**: Platforma klade maximální důraz na bezpečnost uživatelských dat, což uživatelům přináší následující výhody:

  - **Ochrana před neoprávněným přístupem** - Platforma zajišťuje uživatelům maximální ochranu při přihlašování a tím prevenci proti zneužití dat potenciálními útočníky.

  - **Šifrování dat** - Všechna soukromá data, která jsou přenášena mezi uživateli či ukládána na servery, jsou šifrována a poskytují tak uživatelům ochranu proti odposlechům jejich komunikace, což zajišťuje jejich soukromí a pocit bezpečí při používání aplikace.

  - **Digitální podpisy obsahu** - Protokoly zároveň počítají i s digitálním podepisováním veškerého obsahu, který je uživateli zasílán či sdílen, což zajišťuje věrohodnost původu informací pro uživatele, kteří tento obsah přijímají.
  
- **Integrace kryptoměnové peněženky**: Platforma přináší velkou škálu využitelnosti integrované kryptoměnové peněženky - poskytuje snadný, rychlý a bezpečný způsob platby bez potřeby tradičních bankovních převodů. Zasílání plateb uvnitř aplikace je značně jednodušší a rychlejší, než používání běžných bankovních služeb. Propojení peněženky s multifunkční platformou, jako je tato, poskytuje rozšířené možnosti jejího využití, než kdyby to byla samostatná aplikace. Mezi tyto výhody ty patří:

  - **Propojení uživatelské základny s platbami** - Uživatelé si mohou jednoduše v rámci platformy zasílat platby v kryptoměnách, přehledně zobrazit zůstatky, transakční historii a výpisy.

  - **Platby za služby a zboží** - Peněženka umožňuje uživatelům platit za různé služby a zboží v rámci komerčních modulů (video kanály, e-shopy, tržiště, příspěvky, skupinové financování, sdílení souborů, seznamka, virtual chat apod.). Taktéž umožňuje platby za upřednostňování záznamů v různých seznamech (rychlé zprávy - seznamy chatovacích a novinkových skupin, veřejné profily, video kanály, diskuzní fórum, události, blogy, e-shopy, tržiště, příspěvky, skupinové financování, seznamka apod.).

  - **Výdělky pro poskytovatele obsahu** - Poskytovatelé obsahu mohou vydělávat kryptoměny tak, že zapojí svoje odběratele do dění. Např. mohou získávat dary během živých vysílání, pořádat sbírky na libovolné účely, prodávat reklamní předměty v e-shopech, dražit zajímavé předměty v aukcích, vytvořit kampaň pro skupinové financování apod. Zároveň nemusí složitě přesvědčovat své odběratele, aby se registrovali na dalších službách, jelikož mají všechny funkcionality v rámci jedné platformy.

  - **Chytré smlouvy** - do modulů v rámci klientské aplikace lze zakomponovat možnosti chytrých smluv a tím zvýšit důvěryhodnost a zautomatizovat různé transakční procesy. Například takto lze pořádat transparentní soutěže o kryptoměny ve hrách, rozdělovat automaticky zisky z komerčních modulů, provádět služby peněžní úschovy v rámci tržiště apod. Taktéž tyto smlouvy poskytují aktivace prémiových služeb v rámci platformy.

  - **Paralelní ekonomika** - Multifunkční aplikace s integrovanou kryptoměnovou peněženkou má potenciál vytvořit fungující reálnou celosvětovou paralelní ekonomiku založenou na kryptoměnách a chytrých smlouvách. V době, kdy je platforma rozšířená mezi mnoho uživatelů, je možné, aby kamenné obchody a poskytovatelé různých služeb využívali aplikaci pro příjem plateb a uživatelé s ní běžně denně platili.

## Cílové skupiny

Platforma je využitelná mnoha cílovými skupinami uživatelů, jejichž potřeby se potkávají v jedné komplexní platformě. Zde je několik příkladů cílových skupin pro tento software:

**Běžní uživatelé - rodina, přátelé a komunity**: Uživatelé mohou snadno komunikovat s rodinou a přáteli pomocí rychlých zpráv, hlasových a video hovorů, sdílet si mezi sebou data bez omezení jejich velikosti, jako jsou fotografie, videa, obrázky, hlasové a video zprávy apod. Dále se mohou seznamovat, komunikovat a organizovat v komunitách pomocí různých modulů jako jsou chatovací skupiny (součást Rychlých zpráv), Diskuze, Newsfeed, Blogy, Události apod. Zároveň je jim umožněno mezi sebou platit díky integrované kryptoměnové peněžence, pomocí které mohou nakupovat na tržišti nebo prostřednictvím e-shopů, vybírat nebo zasílat peníze prostřednictvím modulů pro zasílaní darů nebo skupinového financování. Dale se mohou bavit prostřednictvím her, video kanálů nebo ve virtual chatu.

**Známé osobnosti a influenceři**: Platforma poskytuje možnosti sebeprezentace pomocí video kanálů s funkcionalitou publikování a prodeje video obsahu, živých vysílání, možnost psaní blogových článků, textového či vizuálního obsahu prostřednictvím newsfeedu a příběhů, prodeje reklamních předmětů v e-shopu, pořádání událostí, financování sbírek, darů, aukcí a mnoho dalšího.

**Podnikatelé a obchodníci**: Pro obchodníky a podnikatele jsou poskytnuty nástroje pro e-commerce (e-shopy, aukce, příspěvky a skupinové financování), které jim usnadňují obchodování a platby přímo v aplikaci. Taktéž se mohou sebeprezentovat pomocí různých nástrojů podobně jako influenceři.

**Pracovní týmy**: Pro pracovní skupiny a firmy platforma nabízí nástroje pro efektivní spolupráci a produktivitu, jako jsou sdílené úkoly, kalendáře, konferenční hovory. Taktéž spolu mohou efektivně komunikovat prostřednictvím rychlých zpráv, kde si mohou i snadno sdílet pracovní data.

**Neziskové organizace**: Platforma podporuje tvorbu a správu komunitních projektů, umožňuje vytvářet a organizovat sbírky a skupinové financování, což je ideální pro neziskové organizace. Ty se taktéž mohou sebeprezentovat pomocí řady nástrojů, stejně jako influenceři.

**Studenti, učitelé a školy**: Studenti mohou využívat platformu k organizaci svých studijních aktivit, komunikovat s učiteli a spolužáky, sdílet studijní materiály, sledovat výukový video obsah pomocí video kanálů, využívat konferenční hovory pro online výuku.

## Seznam modulů

Jednotlivé moduly poskytují různé užitečné funkcionality. V této části jsou uvedeny oficiální moduly, poskytnuté k serverové i klientské aplikaci. Všechny moduly, ve kterých se přenáší nebo ukládají uživatelská data, jsou opatřeny **šifrováním**, což zajišťuje bezpečnou komunikaci mezi uživateli a ochranu proti tomu, aby kdokoliv (vč. správců serveru) mohl číst tato data.

**POZNÁMKA**: Symbolem 💡 jsou označeny unikátní funkce.

### 📧 Rychlé zprávy

Modul **Rychlé zprávy** představuje hlavní funkcionalitu platformy, která umožňuje uživatelům komunikovat v reálném čase a zasílat mezi sebou různé druhy zpráv.

#### Seznam funkcí:

- Různé typy zpráv:
  - Textové zprávy (prostý i formátovaný text)
  - Hlasové zprávy
  - Video zprávy
  - Přenos souborů:
    - omezená velikost pro uložení na serveru
    - 💡 neomezená velikost bez ukládání na serveru
  - Emotikony
  - Animované nálepky
  - Obrázky (vč. animovaných GIFů)
  - Videa
  - Kontakty
  - Mapa - vč. sdílení polohy s pohybem v reálném čase
  - 💡 Vícedílné zprávy - kombinace různých druhů zpráv do jedné - vhodné např. pro tvorbu obchodních sdělení nebo zpráv od chatbotů
- Odpovídání, přeposílání a reakce
- Blokování kontaktů
- Nahlášení kontaktů
- 💡 Témata v rámci konverzace - možnost přepínání mezi nimi
- 💡 Řazení konverzací do skupin (např. práce, rodina, přátelé apod.)
- 💡 Šablony zpráv - vhodné např. pro uživatelskou podporu - přednastavené odpovědi pro zákazníky
- Překlady zpráv - mnoho světových jazyků, lze vybrat u konkrétní zprávy nebo u celé konverzace
- Vyhledávání v konverzacích
- Chatovací skupiny
  - Nastavení soukromí
  - Moderování
  - 💡 Seznam veřejných skupin - výpis, řazení (dle popularity, data vytvoření apod.) a filtrace (dle kategorie apod.)
- Novinkové skupiny
  - Nastavení soukromí
  - Moderování
  - 💡 Seznam veřejných novinkových skupin - výpis, řazení (dle popularity, data vytvoření apod.) a filtrace (dle kategorie apod.)
- Indikace přečtení
- Informace o koncovém šifrování
- Možnost ovládání konverzace chatbotem (např. pro objednávání zboží, uživatelskou podporu apod.)
- Provázání s moduly:
  - Profily - odkaz na profil
  - Volání - možnost zahájit audio / video hovor

#### Cílová skupina:

Široká skupina různých uživatelů všech věkových kategorii, především těch, kteří hledají efektivní a bezpečnou platformu pro komunikaci. Funkcionality jsou vhodné jak pro jednotlivce, tak i soukromé a veřejné organizace.

### 🧾 Kontakty

Tento modul umožňuje uživatelům spravovat a organizovat své kontakty.

#### Seznam funkcí:

- Správa kontaktů - vytváření, úprava, mazání, přiřazování fotografií, přidávání detailních informací, štítků a poznámek
- Správa skupin kontaktů
- Import a export kontaktů
- Export vizitek
- Fulltextové vyhledávání
- Synchronizace kontaktů se serverem a napříč zařízeními
- Provázání s moduly "Rychlé zprávy" (sdílení kontaktu do zprávy, odkaz na konverzaci) a "Profil" (odkaz na profil)

#### Cílová skupina:

Funkcionality modulu jsou vhodné pro jednotlivce i organizace, tedy pro všechny kteří potřebují efektivně spravovat a sdílet své osobní či profesní kontakty.

### 📞 Hovory

Tento modul představuje další základní funkcionalitu platformy, která umožňuje uživatelům komunikovat prostřednictvím videa či hlasu v reálném čase.

#### Seznam funkcí:

- Hlasové hovory
- Video hovory
- Skupinové hovory
- Sdílení obrazovky
- 💡 Vzdálené ovládaní zařízení
- 💡 Nahrávání hovorů - hlas i video, správa nahrávek, možnost sdílení nahrávek (odeslání po skončení vybranému seznamu uživatelů do rychlých zpráv)
- Historie volání
- Automatické přizpůsobení kvality hovoru
- Koncové šifrování hovorů
- Provázání s moduly:
  - Kontakty - volání přímo z kontaktu
  - Kalendář - plánování hovorů

#### Cílová skupina:

Uživatelé všech věkových kategorií, především těch, kteří hledají bezpečné telefonování pomocí hlasu či videa. Funkcionalita je vhodná pro širokou škálu domácích uživatelů i pro profesionální využití v různých typech organizací.

### ₿ Integrovaná kryptoměnová peněženka

Tento modul umožňuje uživatelům snadno a bezpečně uchovávat, odesílat a přijímat platby v kryptoměnách, tokenech a NFT přímo v klientské aplikaci. Peněženka je založená na knihovně [**Ethers.js**](https://ethers.org/).

#### Seznam funkcí:

- Vytvoření seed klíče pro automatickou tvorbu privátních klíčů
- Záloha a obnovení seed klíče
- Možnost zašifrování privátních klíčů PIN kódem, heslem nebo biometrickým ověřením
- Možnost připojení na více EVM-kompatibilních blockchainů (jako je Ethereum, Binance Smart Chain, Polygon apod.)
- Možnost přepínání mezi více účty
- Zobrazení zůstatků aktiv - hlavní měna, tokeny, NFT
- Příjem a odesílání aktiv
- Spouštění metod [**chytrých smluv**](https://cs.wikipedia.org/wiki/Chytr%C3%BD_kontrakt) - značně přispívá k důvěryhodnosti transakcí a rozšiřuje možnosti funkcionalit modulů
- Transakční historie, výpisy a hledání v transakcích
- Generování QR kódu pro mobilní transakce
- 💡 Možnost plateb mezi uživateli
- 💡 Možnost využití chytrých smluv v rámci modulů (rozdělení zisků z komerčních modulů, zajištění férovosti pravidel her, transparentní hlasování, úschova v rámci tržiště apod.)
- Provázání s moduly:
  - 💡 Rychlé zprávy - možnost automatického zaslání zprávy o příchozí platbě nebo žádosti o platbu - zpráva s QR kódem a tlačítkem pro potvrzení platby - s konkrétní čáskou či možností zadání libovolné / výchozí změnitelné částky
  - 💡 Sdílení souborů - Platba za přístup ke komerčním databázím
  - 💡 Profily - možnost zveřejnění adresy + QR kódu + tlačítka pro platbu
  - 💡 Video kanály - platba za komerční videa, zasílání příspěvků oblíbenému kanálu, zasílání příspěvků v rámci živých vysílání
  - 💡 Diskuzní fórum - možnost mít tlačítko pro příspěvek vedle jména autora - zobrazí možnost vložení částky, tlačítka pro zaplacení, adresa a QR kód - funguje např. jako poděkování za dobrou radu apod.
  - 💡 Newsfeed - možnost mít tlačítko pro příspěvek vedle jména (stejné jako u diskuzního fóra)
  - 💡 Příběhy - možnost mít tlačítko pro příspěvek při kliknutí na jméno (podobné jako u diskuzního fóra)
  - 💡 Události - možnost zaslání příspěvku v události nebo zaplacení členství na události apod.
  - 💡 Blogy - možnost mít tlačítko pro příspěvek v seznamu článků a u konkrétního článku (stejné jako u diskuzního fóra)
  - 💡 E-shopy - platba za zboží a služby
  - 💡 Tržiště - platba za zboží a služby, možnost úschovy - chytrá smlouva
  - 💡 Příspěvky - platba příspěvku v rámci kampaně, možnost upozornění na pravidelné příspěvky
  - 💡 Skupinové financování - platba příspěvku v rámci kampaně
  - 💡 Úkoly - platba za splnění konkrétních úkolů + označení zaplacení
  - 💡 Virtual chat - platba měsíčního členství, za doplňky na postavu, předměty do prostoru apod.
  - 💡 Hry - Platby za komerční hry, možnost sázek v rámci her přes chytré smlouvy

#### Cílová skupina:

Uživatelé, kteří chtějí v rámci platformy platit za služby, které moduly poskytují, využívat chytré smlouvy nebo si mezi sebou navzájem zasílat platby.

### ❤️ Seznamka

Modul poskytuje moderní způsob seznamování se s novými lidmi za různými účely, jako např. nalezení životního partnera, příležitostná setkání, přátelství apod.

#### Seznam funkcí:

- Vytvoření profilu s podrobnými osobními informacemi a galerií fotografií
- Vyhledávání uživatelů
- 💡 Filtrování (dle všech osobních informací)
- Řazení v seznamu uživatelů dle:
  - 💡 vzdálenosti podle geolokace
  - stáří profilu
- Shody:
  - lajkování profilů ostatních uživatelů
  - 💡 zobrazení kdo dal like mě, komu jsem dal like já a vzájemné liky - rychlejší způsob zjištění shod
  - 💡 možnost odstranit like / dislike
- Možnost zaslat super like - zaslání oznámení druhé straně
- Přidávání uživatelů do oblíbených
- 💡 Možnost kontaktování pomocí zpráv bez nutnosti shody

#### Cílová skupina:

Jednotlivci, kteří hledají nové vztahy, přátele a známé za různými účely. Uživatelé různých věkových kategorií, především mladší generace a střední věk.

### 📂 Sdílení souborů

Tento modul umožňuje uživatelům nahrávat, stahovat, přehledně organizovat a sdílet soubory různých formátů. Tento modul je navržen pro snadnou a efektivní výměnu videí, software, obrázků, dokumentů a dalších typů souborů mezi uživateli.

#### Seznam funkcí:

- Nahrávání souborů
- Stahování souborů
- Přehrávání videa a audia online
- Řazení souborů do produktů
- Řazení produktů do kategorií
- Vyhledávání - dle kategorie, dle klíčové fráze
- Šifrování souborů
- Nahlášení nevhodného obsahu

#### Cílová skupina:

Jednotlivci, studenti, komunity a další.

### 🧑‍🤝‍🧑 Profily a sledování

Tento modul umožňuje uživatelům vytvořit si vlastní veřejný profil a sledovat aktivity ostatních uživatelů napříč moduly, čímž zajišťuje interakci a udržování kontaktu mezi lidmi.

#### Seznam funkcí:

- Vytvoření vlastního veřejného profilu vč. fotografií
- Sledování profilů ostatních uživatelů a zobrazení jejich posledních aktivit
- Oznamování vybraných aktivit
- Seznam sledujících / sledovaných a jejich export
- Nastavení soukromí - viditelnost vlastního profilu (jen já / jen pro sledované / veřejný)
- Úprava vlastního profilu, vč. výběru viditelných modulů v profilu
- Zobrazení aktivit napříč všemi moduly nebo u konkrétních modulů
- Blokování zobrazení profilu pro konkrétní uživatele
- 💡 Seznam veřejných profilů s možností řazení a vyhledávání
- Zobrazení aktivit nejsledovanějších veřejných profilů (bez nutnosti sledování, odděleně od sledovaných profilů)
- Provázání s řadou modulů:
  - Zobrazení aktivit z ostatních modulů:
    - Video kanály - nová videa, probíhající live streamy
    - Diskuzní fórum - nové příspěvky
    - Newsfeed - nové příspěvky
    - Příběhy - aktuální příběhy
    - Události - zůčastnění se, komentáře
    - 💡 Blogy - nové blogy, nové články
    - 💡 E-shopy - odkazy na jednotlivé e-shopy, nové produkty
    - Tržiště - nové inzerované položky, seznam inzerovaných položek
    - 💡 Příspěvky - seznam kampaní, informace o začátku a dokončení
    - 💡 Skupinové financování - seznam kampaní, informace o začátku a dokončení
    - Kalendář (blížící se události z veřejných kalendářů)
  - Rychlé zprávy - možnost sdílení profilu v rámci zprávy

#### Cílová skupina:

Uživatelé sociálních sítí, odběratelé novinek dle zájmových oblastí apod.

### 🎞️ Video kanály

**Video kanály** umožňují uživatelům publikovat a sledovat různé druhy video obsahu, jako např. klasická videa, živá vysílání a rátká "reels" videa. Tato funkcionalita poskytuje nástroje pro tvorbu a distribuci video obsahu. Zároveň poskytuje možnosti zapojení uživatelů, jako jsou reakce na videa, komentáře, sdílení apod.

#### Seznam funkcí:

- Možnost vytvoření více kanálů
- Správa videí (nahrávání, mazání, nastavení názvu a popisu)
- Správa playlistů (vytváření, přidávání a odebírání položek)
- Statistiky sledovanosti, reakcí a komentářů ke každému videu a živému vysílání
- Přidávání kanálů do odběrů
- Přehrávání videí + komentáře, reakce, sdílení
- Živá vysílání - vč. komentářů, reakcí, sdílení
- Krátká "reels" videa
- 💡 Zasílání darů - tlačítko v kanálu, u každého videa a v rámci živých vysílání
- Zasílání oznámení o nových videích odberatelům
- 💡 Prodej placených videí - přes integrovanou kryptoměnovou peněženku
- Blokování a nahlašování kanálů
- 💡 Provázání s moduly - Tlačítka (platba, skupinové financování, dary, diskuzní fórum, veřejná chatovací skupina, veřejná novinková skupina, blog, e-shop, profil apod.) v kanálu a pod videi, zaslání rychlé zprávy majiteli kanálu

#### Cílová skupina:

Sledovatelé video obsahu, tvůrci video obsahu, vzdělávací instituce, umělci a hudebníci, herní komunita, společnosti produkující komerční obsah, uživatelé hledající zábavu či vzdělání.

### 💬 Diskuzní fórum

Tento modul poskytuje prostor pro uživatele, kde mohou zakládat tématické diskuze a v nich diskutovat, sdílet názory, klást otázky a poskytovat odpovědi.

#### Seznam funkcí:

- Kategorie diskuzí - určuje správce serveru
- Vytváření a mazání vlastních diskuzních fór
- Nastavení soukromí fóra - veřejné či soukromé
- Seznam veřejných diskuzí - seřaditelný dle počtu příspěvků a odpovědí / data založení, filtrovatelný dle kategorií
- Seznam soukromých diskuzích, jejíchž je uživatel členem
- Seznam příspěvků v diskuzi
- Zobrazení příspěvku a jeho odpovědí
- Možnost psaní příspěvků a odpovědí - různé druhy zpráv (stejně jako u modulu "Rychlé zprávy")
- 💡 Vícedílné příspěvky - jako u vícedílných zpráv v modulu Rychlé zprávy
- Možnost reakcí na příspěvky a odpovědi
- Moderování diskuzí - správa moderujících, mazání příspěvků a odpovědí, blokace uživatelů
- Vyhledávání diskuzí, příspěvků a odpovědí
- Nahlašování závadných diskuzí, příspěvků a odpovědí
- 💡 Provázanost s ostatními moduly:
  - Tlačítka v příspěvcích a odpovědích, které odkazují na další moduly (profil, napsání rychlé zprávy apod.)
  - Video kanály - tlačítko pod videem a v informacích o kanálu
  - Profily - sekce Příspěvky v diskuzním fóru

#### Cílová skupina:

Zájmové, profesní, vzdělávací, odborné a jiné skupiny, komunity, organizace poskytující uživatelskou podporu, běžní diskutující uživatelé apod.

### ⭐ Newsfeed

Tento modul poskytuje uživatelům publikovat textový, obrázkový, video a audio obsah, který sdílí ve formě jednotlivých příspěvků. Poskytuje možnost udržení přehledu o novinkách a interakcích v rámci sítě uživatelů. Taktéž umožňuje zapojení uživatelů ve formě reakcí a komentářů k jednotlivým příspěvkům.

#### Seznam funkcí:

- Vytvoření příspěvku (text, obrázek, video, audio apod.)
- 💡 Vícedílné příspěvky - jako u vícedílných zpráv v modulu Rychlé zprávy
- Přehled příspěvků sledovaných profilů
- Správa vlastních příspěvků - zobrazení, editace, smazání
- Komentování příspěvků
- Reakce na příspěvky a komentáře
- Moderování komentářů
- Sdílení příspěvků do zpráv
- Seznam nejsledovanějších / nejnovějších veřejných příspěvků
- Nastavení soukromí newsfeedu - veřejný / jen pro sledující / jen pro sledované
- 💡 Provázanost s ostatními moduly:
  - Tlačítka v příspěvcích a odpovědích, které odkazují na další moduly (profil, napsání rychlé zprávy apod.)
  - Video kanály - tlačítko pod videem a v informacích o kanálu
  - Profily - sekce příspěvky v Newsfeedu

#### Cílová skupina:

Široká skupina koncových uživatelů, tvůrci obsahu, organizace a projekty poskytující obsah svým odběratelům apod.

### 🤳🏻 Příběhy

Modul umožňuje uživatelům vytvářet vizuální příspěvky, které uživatelé mohou sdílet se svými sledovateli. Tyto příspěvky jsou viditelné pouze po omezenou dobu a umožňují uživatelům sdílet okamžité momenty.

#### Seznam funkcí:

- Vytváření vizuálních příspěvků - krátká videa, obrázky, zvuk, texty
- Zobrazení po omezenou dobu - typicky 24 hodin
- Možnost reakcí a komentářů
- 💡 Provázanost s moduly - viditelnost story v profilech

#### Cílová skupina:

Široká skupina koncových uživatelů, tvůrci obsahu, organizace poskytující obsah svým odběratelům apod.

### 🗓️ Události

Tento modul umožňuje uživatelům organizovat různé typy událostí, jako jsou osobní setkání či veřejné akce.

#### Seznam funkcí:

- Vytváření a organizování událostí
- Přihlášení k události
- Komentáře a reakce
- Nastavení soukromí - soukromé nebo veřejné
- Zobrazení seznamu všech veřejných událostí a možnost jejich řazení a filtrování
- Provázání s ostatními moduly:
  - Sdílení do newsfeedu a zpráv
  - 💡 Zobrazení události na mapě
  - 💡 Tlačítko pod videem, sekce v profilech
  - 💡 Propojení s konferenčními hovory

#### Cílová skupina:

Organizátoři a pořadatelé veřejných událostí, běžní uživatelé organizující soukromé akce, účastníci těchto akcí.

### ✍🏻 Blogy

Tento modul poskytuje autorům možnost publikovat své myšlenky a názory ve formě článků. Modul je navržen tak, aby usnadňoval tvorbu obsahu a podporoval zapojení čtenářů.

#### Seznam funkcí:

- Vytváření a publikování článků
- Čtení, komentování a reakce na články
- Nástroje pro snadné psaní a úpravu textu a přidávání multimediálního obsahu
- Seznamy blogů a článků, řazené dle popularity nebo data vytvoření a filtrovatelné dle různých kritérií (kategorie, jazyk apod.)
- 💡 Provázanost s ostatními moduly:
  - Tlačítko pod videem ve video kanálech
  - Sekce v profilech
  - Možnost sdílet články v newsfeedu a do zpráv

#### Cílová skupina:

Amatérští i profesionální autoři, čtenáři různorodého obsahu.

### 🗺️ Mapy

**Mapy** nabízí uživatelům rozsáhlé možnosti pro interakci s geografickými informacemi. Mapy jsou založeny na [**OpenStreetMap**](https://www.openstreetmap.org/).

#### Seznam funkcí:

- Prohlížení mapy
- Vyhledávání míst
- Body zájmu - místní obchody, služby, události, možnost hodnocení a komentování, filtrování
- 💡 Provázanost s ostatními moduly:
  - Odkaz na konkrétní události nebo veřejné skupiny
  - Možnost kontatkovat přes rychlé zprávy
  - Sdílení polohy v rychlých zprávách - jednorázově i v reálném čase

#### Cílová skupina:

Uživatelé, kteří se chtějí propojovat v reálném světě s ostatními a sdílet svou polohu nebo uživatelé hledající a hodnotící body zájmů.

### 🛍️ E-shopy

Tento modul umožňuje uživatelům vytvářet a spravovat vlastní online obchody a v takovýchto obchodech pohodlně nakupovat.

#### Seznam funkcí:

- Vytváření a správa vlastních e-shopů
- Nakupování v e-shopech
- Seznam e-shopů seřazený podle popularity
- Správa objednávek, vystavování dokladů
- 💡 Platby integrovanou kryptoměnovou peněženkou
- 💡 Provázanost s ostatními moduly - sekce v profilech, tlačítka ve video kanálech, body na mapě, komunikace se zákazníky přes rychlé zprávy apod.

#### Cílová skupina:

E-commerce podnikatelé, digitální tvůrci, poskytovatelé služeb roznášek jídla a koncoví zákazníci.

### 🏪 Tržiště

Modul umožňuje koncovým uživatelům nakupovat a prodávat produkty a služby mezi sebou.

#### Seznam funkcí:

- Nákup a prodej produktů a služeb mezi uživateli - inzerce
- Možnost nastavení fixní ceny nebo aukce
- Vyhledávání a filtrování položek
- Hodnocení prodejců
- 💡 Platby přes integrovaou kryptoměnovou peněženku
- 💡 Možnost využití chytrých smluv pro účely úschovy
- 💡 Provázanost s ostatními moduly:
  - Možnost zobrazení sekce v profilu
  - Možnost zobrazení lokace na mapě apod.
  - Zasílání zpráv v rámci modulu Rychlé zprávy

#### Cílová skupina:

Uživatelé, kteří prodávají, draží či nakupují zboží a služby formou inzerce.

### 💰 Příspěvky

Tento modul umožňuje uživatelům finančně podporovat konkrétní uživatele, projekty či charity prostřednictvím finančních darů.

#### Seznam funkcí:

- Založení a správa vlastních sbírek
- 💡 Žádná nutnost schvalování - kdokoliv může vytvořit sbírku k libovolným účelům
- Přispívání na konkrétní sbírky
- 💡 Seznam veřejných sbírek - možnost řazení a filtrování
- 💡 Platby přes integrovaou kryptoměnovou peněženku
- 💡 Provázanost s ostatními moduly:
  - Možnost zobrazení sekce v profilu
  - Možnost tlačítek ve video kanálech
  - Možnost zobrazení lokace na mapě
  - Zasílání zpráv v rámci modulu Rychlé zprávy

#### Cílová skupina:

Uživatelé provozující či přispívající na osobní, charitativní, komunitní, umělecké či jakékoliv jiné projekty.

### 🤑 Skupinové financování (crowdfunding)

Díky tomuto modulu je uživatelům umožněno získávat finanční prostředky na různé projekty prostřednictvím příspěvků od přispěvatelů, za což tito přispěvatelé dostávají různé odměny, podíly na projektu či jiné výhody. To umožňuje realizaci inovativních nápadů, projektů a podnikatelských záměrů.

#### Seznam funkcí:

- Založení a správa kampaní skupinového financování
- 💡 Žádná nutnost schvalování - kdokoliv může vytvořit kampaň k libovolným účelům
- Přispívání na konkrétní kampaně
- Seznam veřejných sbírek - možnost řazení a filtrování
- 💡 Platby přes integrovaou kryptoměnovou peněženku
- 💡 Provázanost s ostatními moduly:
  - Možnost zobrazení sekce v profilu
  - Možnost tlačítek ve video kanálech
  - Možnost zobrazení lokace na mapě
  - Zasílání zpráv v rámci modulu Rychlé zprávy

#### Cílová skupina:

Podnikatelé, startupy, tvůrci a umělci, neziskové organizace, komunity, inovátoři a vynálezci, vzdělávací projekty a přispěvatelé.

### 📅 Kalendář

Tento modul je navržen pro efektivní organizování času a plánování událostí. Tento modul umožňuje uživatelům **vytvářet**, **synchronizovat** a **sdílet** kalendáře s ostatními členy komunity, což usnadňuje organizaci osobních i pracovních aktivit.

#### Seznam funkcí:

- Vytváření více kalendářů
- Organizování času a plánování událostí
- Sdílení kalendáře s ostatními - pouze pro čtění nebo s možností modifikací
- 💡 Provázanost s ostatními moduly:
  - Tlačítka ve video kanálech
  - Sdílení do soukromých zpráv
  - Sekce v rámci profilu
  - Automatické vytvoření události spojené s konferenčním hovorem

#### Cílová skupina:

Firemní uživatelé, domácí uživatelé, studenti, komunity apod.

### ✔️ Úkoly

Modul umožňuje uživatelům spravovat a sdílet nástěnky s úkoly, je navržen tak, aby zlepšoval produktivitu a organizaci práce, usnadňoval spolupráci v týmu a zajišťoval, že všechny úkoly budou dokončeny včas a efektivně.

#### Seznam funkcí:

- Vytváření a správa úkolových nástěnek
- Sledování průběhu, delegování, komentování úkolů v reálném čase
- Sdílení úkolů s ostatními členy týmu
- 💡 Provázanost s ostatními moduly - sdílení do soukromých zpráv
  
#### Cílová skupina:

Jednotlivci, týmy, pracovní skupiny, studenti, domácnosti a další.

### 📱 Konferenční hovory

Modul umožňuje uživatelům účastnit se rozsáhlých skupinových diskuzí a setkání online v reálném čase. Tato funkcionalita je navržena pro efektivní a pohodlnou komunikaci mezi více účastníky prostřednictvím hlasu a videa.

#### Seznam funkcí:

- Hlasové a video konferenční hovory pro více účastníků
- Moderování konference - udělování moderátorských práv, přídávání, odstraňování a blokování účastníků, povolování a zakazování mikrofonu / kamery
- Sdílení obrazovky
- 💡 Vzdálené ovládání zařízení
- Nahrávání konference - správa nahrávek, možnost sdílení nahrávek (odeslání po skončení vybranému seznamu uživatelů do rychlých zpráv)
- Chat v rámci konference vč. sdílení souborů a možnosti hlasování
- Automatická optimalizace kvality dle propustnosti síťového připojení
- Koncové šifrování konference
- 💡 Provázání s moduly:
  - Kontakty - výběr uživatelů
  - Kalendář - uložení plánované konference do kalendáře
  - Rychlé zprávy - upozornění před začátkem

#### Cílová skupina:

Především organizace, jako jsou firmy, vzdělávací instituce, lektoři, konzultanti, organizátoři akcí, odborné skupiny apod.

### ⛰️ Virtual chat

Modul nabízí uživatelům prostředí virtuálního světa, ve kterém mohou vzájemně komunikovat a bavit se.

#### Seznam funkcí:

- Ovládání vlastní postavy ve virtuálním světě
- Přizpůsobení vlastní postavy - vzhled, oblečení apod.
- Komunikace pomocí textového a hlasového chatu
- Možnost navštěvování různých veřejných lokalit
- Možnost pronájmu vlastní soukromé lokality vč. možnosti vlastní modifikace lokality
- Možnosti nákupu předmětů
- Možnost interakcí s předměty
- Možnost blokace a nahlašování uživatelů
- 💡 Provázanost s ostatními moduly:
  - Možnost sdílení vlastní identity - profil a kontakt do rychlých zpráv
  - Platby prostřednictvím integrované kryptoměnové peněženky

### 🎮 Hry

Tento modul poskytuje uživatelům zábavu prostřednictvím her, které mohou hrát se svými přáteli online.

#### Seznam funkcí:

- Seznam her od různých vývojářů
- Možnost vydání vlastní hry
- Možnost prodeje komerčních her integrovanou kryptoměnovou peněženkou
- 💡 Provázanost s ostatními moduly:
  - Rychlé zprávy - hraní mini her přímo ve zprávách
  - Platby v rámci integrované kryptoměnové peněženky
  - Možnost vytvoření férových her pomocí chytrých smluv - pomocí integrované kryptoměnové peněženky

#### Cílová skupina:

Hráči her různých žánrů, sociálně zaměření hráči, příležitostní hráči, především mladší generace uživatelů.

### 📰 Media feed

Modul poskytuje uživatelům přehled zpráv a informací, agreguje obsah z různých zpravodajských serverů a dalších zdrojů, aby uživatelé měli aktuální přehled o dění v okolí a ve světě na jednom místě.

#### Seznam funkcí:

- Přehled zpráv z různých zpravodajských serverů
- Personalizace díky výběru oblíbených médií
- Provázanost s ostatními moduly - sdílení přes rychlé zprávy nebo do newsfeedu

#### Cílová skupina:

Aktivní čtenáři a informovaní uživatelé, obchodníci, studenti, zájemci o odborná témata apod.

## Plán vývoje

### 1. fáze - 6 měsíců

#### Technická realizace:

- **Serverová a klientská aplikace**: Implementace AMTP, modularity, vrstev zabezpečení, vícejazyková podpora (pouze klientská aplikace), motivy
- **Modul pro rychlé zprávy**: Prosté i formátované zprávy, vícedílné zprávy, hlasové a video zprávy, podpora animovaných nálepek, přenos souborů, sdílení kontaktů, složky konverzací, témata zpráv, blokování kontaktů, chatovací skupiny, novinkové skupiny, seznamy veřejných skupin, překlad zpráv, šablony zpráv
- **Modul pro kontakty**: Správa kontaktů, import a export, skupiny kontaktů, štítky, poznámky, vyhledávání, sdílení
- **Modul pro videohovory**: Volání (hlas + video), výpisy volání, skupinové hovory, sdílení obrazovky, nahrávání hovorů
- **Podpůrné nástroje**: WebTransport konzole, správa domén, účtů, modulů a správců

#### Marketing:

Po dokončení technické realizace této fáze, dojde k seznámení produktu s veřejností s minimálními náklady na marketing. Očekává se cca 500 - 1 000 uživatelů, kteří budou aplikaci testovat, hlásit chyby a navrhovat změny.

### 2. fáze - 6 měsíců:

#### Technická realizace:

- **Vytvoření ostatních modulů s vyšší prioritou**: (tyto moduly je nutné v této fázi dokončit, jsou seřazeny podle priority)

  - integrovaná kryptoměnová peněženka
  - seznamka
  - sdílení souborů
  - profily a sledování
  - video kanály
  - diskuzní fórum
  - newsfeed
  - příběhy
  - události
  - blogy
  - mapy
  - e-shopy
  - tržiště
  - příspěvky
  - skupinové financování

- **Vytvoření ostatních modulů s nižší prioritou**: (tyto moduly budou vytvořeny v případě včasnějšího splnění plánu, v opačném případě budou přesunuty do další fáze)

  - virtual chat
  - hry
  - kalendář
  - úkoly
  - konferenční hovory
  - media feed

#### Marketing:

V průběhu této fáze dojde ke zvětšení uživatelské základny na nižší jednotky tisíc uživatelů s minimálními marketingovými náklady a s použitím vlastních marketingových kanálů.

Po dokončení této fáze se spustí nejprve marketing pomocí vlastních nástrojů a poté se přistoupí k masivnějšímu seznámení široké veřejnosti s platformou formou zapojení spolupráce s influencery, affiliate marketingu, PPC, tvorby prezentačních videí, mediálních článků, vytvoření hudebního videa, spotů apod.

### Další fáze a plány do budoucna:

#### Technická realizace:

- **Vytvoření paralelní ekonomiky**: Paralelní ekonomika ve spojení s multifunkční komunikační aplikací přínáší řadu možností využitelnosti:
  - Zapojení reálné ekonomiky do platformy (platby zboží a služeb v kryptoměnách i mimo platformu - např. v kamenných obchodech)
  - Vytvoření funkcionalit pro tvorbu a správu decentralizovaných organizací (společnosti, neziskové organizace apod.) a nástrojů pro jejich pohodlnou správu (emitování tokenů představující podíly na orgrazaci / projektu, systémy hlasování, vyplácení zisků organizace dle podílů, možnosti prodeje tokenů prostřednictvím tržiště / skupinového financování apod.)

- **Vytvoření modulu Nástěnka**: Tento modul umožňuje vytvářet přehlednou nástěnku s ovládacími prvky (widgety), které umožňují uživatelům zobrazit rychlé přehledy přesně toho, co je zajímá díky propojení s ostatními moduly (např. zobrazit aktuální zprávy, nejbližší svátky, část kalendáře apod.). Zároveň umožňuje vykonávat rychlé akce konkrétních modulech. Tento modul je vhodný nastavit jako výchozí po spuštění.

- **Vytvoření modulu AI asistent**: Tento modul umožňuje snadné získávání informací a ovládání aplikace pomocí textu a hlasu a to na jedno kliknutí. Asistent vykonává akce v aplikaci za uživatele (např. "Napiš Honzovi zprávu o tom, že se zítra nedostavím na schůzku.", "Najdi v diskuzích zajímavá témata o umělé inteligenci.", "Přidej na nástěnku ovládací prvky pro kalendář a svátky." apod.).

- **Vytvoření modulu Vzdělávání**: Tento modul nabízí publikování a prodej vzdělávcích kurzů formou videí, pracovních listů, testů a možnosti získání certifikace. Zároveň umožňuje uživatelům kurzy hodnotit a komentovat, vyhledávat je dle kategorií, hodnocení apod. Taktéž mohou uživatelé kurzy a získané certifikáty sdílet s ostatními.

- **Vytvoření funkcionality otázkové hry do Seznamky**: 3 muži položí otázku 3 ženám a obráceně, po spuštění odpoví muži ženám na otázky a obráceně, následně si navzájem ohodnotí odpovědi a vyberou ten protějšek, který jim byl dle odpovědi nejsympatičtější. Kladné hodnocení odpovědí zajistí body, ty se následně přičítají na high score.

- **Nové funkcionality v rámci modulu Rychlé zprávy** (ne vše se bude realizovat, spíše nápady):
  - **Widgety do chat bubliny**:
    - **Sdílená tabule** - Umožňuje uživatelům spolupracovat v reálním čase na sdílené ploše, kde mohou kreslit, psát poznámky, přidávat obrázky a další interaktivní prvky. Funkcionalita je užitečná pro práci, výuku i zábavu.
    - **Duelové mini hry** - Zábavné jednoduché mini hry pro dva přímo v bublině - např. piškvorky, šibenice, dáma, Connect 4, šachy, lodě, duel Tetris pro 2, hádánky, Draw it, Simon apod.
    - **Odškrtávací seznamy** - Přidávání, uprava, zaškrtávání a odstraňování položek za běhu, synchronizované s druhou stranou. Užitečné pro nákupní seznam, plánování výletu / dovolené, domácích prací, pracovních úkolů apod.
    - **Anketa / hlasování** - V chatovací skupině s více účastníky mohou lidé hlasovat přímo v chatovací bublině pro uživatelem vytvořenou anketu.
    - **Zvukové efekty** - Uživatelé mohou vybírat zvukové efekty z předdefinované knihovny přímo v chatovací bublině. Knihovna může obsahovat různé kategorie zvuků, jako jsou smích, potlesk, bzučení, výbuchy, zvuky zvířat atd.
    - **Piano** - Synchronizované piano, které slyší a mohou ovládat obě strany zároveň. Také obsahuje funkci zobrazení notové osnovy s notami nebo zobrazení následné posloupnosti jednotlivých kláves (jako u Guitar Hero).
    - **Počasí** - Widget, který rychle nasdílí v chatovací bublině počasí v následujících hodinách a dnech s druhou stranou pro vybranou lokaci.
    - **Recepty** - Jednoduchý widget, který z velkého seznamu receptů na jídla vybírá dle zvolené kategorie a sdílí s druhou stranou.
    - **Hudební playlist** - Sdílení, přidávání a odebírání položek sdíleného playlistu v reálném čase s odkazem na Spotify - možnost společného (možná i synchronizovaného) poslechu hudby.
    - **Interaktivní infografika** - Vytváření grafů přímo ve zprávě ze zadané struktury dat (např. JSON, CSV apod.).
    - **Plánování tras a závodů na trasách** - Live sledování dvojice či skupiny lidí, kteří se v reálném čase pohybují po mapě, možnost nastavit cestu trasy, kontrolních bodů (vhodné např. pro závody) apod.
    - **Ceny akcií, komodit a kryptoměn** - Možnost zaslání grafů a cen ke konkrétním aktivům přímo v chatovací bublině.
    - **Návrhy na filmy a seriály** - Ve widgetu se vybere žánr, rozsah let vydání apod. a poté widget nabídne film či seriál ke zhlédnutí.
    - **3D modely s otáčením** - Při zaslání souborů 3D modelů (OBJ, FBX apod.) se model zobrazí přímo v bublině, lze ho otáčet, zvětšovat jeho detaily, zobrazit na celou obrazovku apod.
    - **Stopky a odpočítávání** - Synchronizované časovače pro různé účely.
    - **Sandboxovaný kód** - Spustitelný sandboxovaný kód přímo v chatovací bublině nabízí možnost druhé straně spustit bezpěčný kód, který představuje widget uvnitř chatovací bubliny. Po obdržení druhou stranou může uživatel nahlédnout do kódu a následně spustit a poté i zastavit kód. To nabízí neomezené možnosti použití - např. tvorba her, ukázky kódu pro programátory apod.
    - **Krokoměr** - Sdílený počet kroků v reálném čase a možnosti fitness výzev.
    - **Horoskopy** - Výběr znamení / dalších kritérií a následné zaslání horoskopu druhé straně.
    - **360 stupňové fotky / videa** - Možnost zobrazení otočitelného panoramatického obrázku / videa přímo v chatovací bublině s možností zobrazení na celé obrazovce.
    - **Live stream v bublině** - Společné sledování filmu se synchronizovaným sliderem - přináší možnost sledovat oběma stranám stejné video synchronizovaně v reálném čase a možnost live komentářů.
    - **Hlasové filtry** - Pozměnění hlasu ve stylu aplikace MorphVOX přímo v hlasových zprávách nebo při hovorech.
    - **Anonymní chatovací skupiny** - Možnost u chatovacích skupin nastavit anonymitu účastníků
    - **Upozorňování zprávami na pohyby v krypto peněžence** - Možnost monitorovat pohyby na krypto peněžence (jak hlavní měna, tak tokeny i NFT) pomocí zpráv nebo upozornění zprávou druhé straně, že uživatel provedl transakci

  - **Chat boti**:
    - **Monitoring zdraví** - Detekce pádu, tepu, teploty, zasílání výstrah (např. Mii band - propojený s Androidem a následně Yellow s ním propojit přes Fitness API). Využitelné např. k monitoringu seniorů, pacientů apod.
    - **Automatické shrnutí konverzací** - Využití AI u velmi dlouhých textů - získání přehledu toho, o čem byla dlouhá konverzace.
    - **Geofencing** - Upozornění zprávou na to, když nějaké zařízení opustí předem vymezený prostor. Vhodné pro monitorování domácích zvířat apod.

  - **Ostatní funkce**:
    - **Předčítání zpráv** - Poslech hlasové nahrávky z příchozího textu, v různých typech hlasů. Vhodné, pokud uživatel nemá čas číst dlouhý text, např. když je zaneprázdněn jinou činností u které nemá pozornost na obrazovku zařízení (např. při úklidu apod.).
    - **Převod hlasové zprávy na text** - Možnost převodu mluveného slova na textovou zprávu. Vhodné pokud uživatel je v prostředí, kde nemá možnost zprávy poslouchat.
    - **Naplánovaná zpráva** - Automatizované odeslání zprávy v konkrétní čas nebo po určité době.
    - Vstup do aplikace a rozšifrování dat pomocí otisku / hesla.

- **Vytvoření protokolu DMTP**: Vytvoření dalšího protokolu do platformy, který je plně decentralizovaný. Protokol umožňuje uživatelům komunikovat bez nutnosti serverů a data ukládá na decentralizovaná úložiště v případě potřeby.

- **Podpora hardwarových peněženek**: Podpora hardwarových peněženek jako Trezor a Ledger v integrované kryptoměnové peněžence - potvrzování transakcí přes HW peněženku představuje silnou ochranu před zavirovanými zařízeními.

- **Návrh a výroba zařízení pro rozšifrování obsahu** - Soukromé klíče uložené v zařízeních, jako jsou mobilní telefony nebo počítače, představují určité riziko zneužití, například pokud je zařízení zavirováno nebo má podvržený firmware či bezpečnostní nedostatky v operačním systému. Ani zašifrování soukromých klíčů není stoprocentní ochranou, jelikož zařízení může obsahovat keylogger či může být vzdáleně sledována jeho obrazovka či operační paměť ve které je heslo dočasně uloženo. Tento problém lze vyřešit tak, že soukromé klíče pro rozšifrování obsahu jsou uloženy jinde, než na takto potenciálně zkompromitovatelném zařízení. Právě proto je v plánu navržení a výroba samostatného zařízení, které nemá žádné připojení do internetu, pouze paměť pro uložení soukromého klíče, USB port, dotykový displej na kterém lze číst a psát zprávy či zobrazovat další obsah. Do tohoto zařízení jsou jiným zařízením (mobilním telefonem, počítačem apod.), které je připojené do internetu, zasílány zprávy v původní zašifrované formě přes USB port. Zařízení je technicky navrženo tak, aby nebylo fyzicky možné přenést soukromé klíče z paměti zařízení přes USB port zpět do mobilního telefonu či počítače a zkompromitovat tak soukromé klíče. Zařízení následně rozšifruje obsah a zobrazí na svém displeji (nikoliv na displeji mobilního telefonu nebo počítače). Zároveň jsou i privátní klíče v tomto zařízení zašifrovány pomocí hesla, které zná jen majitel tohoto zařízení a tím je zajištěno, že v případě odcizení tohoto zařízení stále nebude možné získat soukromé klíče a rozšifrovat tak soukromý obsah, jako zprávy apod. Toto představuje robustní ochranu proti odposlechu dat. Předtím, než bude toto zařízení navrženo a vyrobeno, bude proveden průzkum trhu pro zjištění poptávky po tomto zařízení. Pokud bude poptávka velká, bude zařízení navrženo a zadána jeho výroba.

#### Marketing:

- Pokračování propagace produktu pomocí osvědčených marketingových kanálů z předchozích fází
