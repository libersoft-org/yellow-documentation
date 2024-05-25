# Yellow - dokumentace

**Yellow** je rozsáhlá komunikační platforma (tzv. [**super-app**](https://en.wikipedia.org/wiki/Super-app)), která poskytuje serverovou a klientskou aplikaci, podpůrné nástroje a dokumentaci.

## Klíčové vlastnosti

- **Kompatibilita napříč zařízeními** - Klientská aplikace je dostupná pro mnoho platforem, především s OS Windows, Linux, macOS, Android, iOS a web na mnoha typech zařízení.

- **Jednoduchost a použitelnost klientské aplikace** - Aplikace je navržena tak, aby lidem **řešila a značně usnadňovala běžné potřeby reálného světa** v online prostředí (např. komunikace, zapojení se do komunit, obchodování, platby, vzdělávání, zábava, sledování aktuálního dění, seznamování se, profesní potřeby, sdílení informací apod.). I přes svou komplexní využitelnost si aplikace zachovává **přehledné a jednoduché uživatelské rozhraní**, které je snadno pochopitelné a ovladatelné pro běžného člověka téměř všech věkových kategorií a to bez odborných znalostí.

- **Jednoduchá instalace serveru a nastavení** - Serverová aplikace je jednoduše nainstalovatelná a nastavitelná i pro začínající správce serveru či pokročilejší uživatele PC. Aplikace umožňuje jednoduchou **instalaci a nastavení serveru do 5 minut** a přehledné webové rozhraní pro správu. Toto je výhodné pro ty, kteří nechtějí využívat servery a domény poskytovatelů služeb (třetích stran) a raději mají svá data pod kontrolou na vlastním serveru.

- **Kompletní náhrada za e-mail** - Jelikož platforma integruje protokol [**AMTP**](./AMTP-CZ), který představuje novou generaci e-mailových služeb, je mimo jiné i využitelná jako úplná náhrada za e-mailové klientské aplikace předchozích generací. To poskytuje mnohem přehlednější a modernější komunikaci s uživateli.

- **Multifunkčnost a modularita**: Modulární struktura klientské i serverové aplikace umožňuje uživatelům i správcům serverů si zvolit funkcionality aplikace podle svých představ. Platforma nabízí mnoho modulů z rozličných oblastí, jako je např. zasílání rychlých zpráv, sociální média, e-commerce, sdílení dat a mnoho dalšího. Platforma je otevřená i pro **moduly třetích stran**.

- **Zabezpečení a ochrana soukromí**: Celé jádro platformy i oficiální moduly poskytující hlavní funkcionality systému, jsou vytvářeny dle standardů a doporučení protokolů **AMTP** a **DMTP**, tedy jsou v nich implementovány silné bezpečnostní prvky jako je např. **zabezpečená komunikace**, **koncové šifrování** apod. To zajišťuje nadstandardní ochranu soukromí pro uživatele.

- **Podpora více protokolů**: Platforma podporuje integraci více komunikačních protokolů a je otevřena snadné integraci protokolů třetích stran. V rámci platformy jsou integrovány tyto protokoly:

  - [**AMTP**](./AMTP-CZ) - Nejnovější **klient-server** komunikační protokol, který přináší pokročilé možnosti v oblasti přenosu dat a **komunikace v reálném čase**. Nabízí **distribuovanou** síť serverů, které si mezi sebou předávají data, a také klientů, kteří se k těmto serverům připojují. Kdokoliv si může vytvořit vlastní server a připojit se tak k síti ostatních serverů nebo se jakožto klient připojit k již zavedeným serverům, které pro uživatele poskytují různé služby a navzájem si konkurují. Všechna uživatelská **data jsou uložena na serverech** a synchronizována s klientskými aplikacemi.

  - [**DMTP**](./DMTP-CZ) - Připravovaný **peer-to-peer** komunikační protokol. Tento protokol využívá plně **decentralizovanou** síť uživatelů, kteří se starají o doručení dat pro ostatní uživatele. Uživatelská **data jsou uložena pouze na koncových zařízeních** nebo na **decentralizovaných úložištích** (v určitých případech), nikoliv na serverech, jako je to v případě ostatních protokolů. Tento protokol je velmi bezpečný a odolný vůči cenzuře.

  - [**IMAP**](https://www.rfc-editor.org/rfc/rfc9051.html) - Původní protokol elektronické pošty. Do platformy je integrován z důvodu zpětné kompatibility.

- **Otevřené zdrojové kódy** - Celá platforma je poskytována **bezplatně** a s **otevřenými zdrojovými kódy**. To přispívá důvěryhodnosti, bezpečnosti kódu, rychlému nalezení a opravě případných nedostatků v kódu a snadnému zapojení vývojářů 3. stran.

## Důvody vytvoření

Cílem vytvoření tohoto software je potřeba řešit některé z největších problémů současných komunikačních aplikací a přinést inovativní řešení, která dosud v digitálním světě chyběla. V současné době neexistuje žádná jiná aplikace, která by splňovala všechna následující kritéria:

- **Přívětivé uživatelské rozhraní** - U klientské aplikace je kladen důraz na jednoduché, přehledné a moderní uživatelské prostředí a to i přes komplexní funkcionalitu celé aplikace. Většina funkcionalit a akcí v aplikaci je přístupná **do max. 3 kliknutí**.

- **Modulární koncept, multifunkčnost** - Modulární koncept zajišťuje pro uživatele, provozovatele serverů i pro vývojáře řadu výhod, jako např.:

  - **Z hlediska uživatele**:

    - **Volba funkcionalit** - Uživatel si může v aplikaci zvolit jen funkcionality, které sám využívá a tím si zajistit maximální přehlednost a získat pozornost jen na obsah, který se rozhodne odebírat. To zajišťuje **maximální možný uživatelský zážitek**.

    - **Jednotné přihlašování** - Uživatel má pouze jednu aplikaci, do které se přihlašuje jedinými přihlašovacími údaji na libovolném počtu a druhu zařízení, což zajišťuje **maximální přístupnost**.

    - **Provázanost** - Funkcionality jsou navzájem provázané, což uživatelům **usnadňuje a zrychluje navigaci** uvnitř aplikace napříč funkcionalitami.

  - **Z hlediska provozovatele serveru**:

    - **Volba konkrétních funkcionalit** - Provozovatel serveru si zvolí jen funkcionality, které chce nabízet uživatelům, případně integruje moduly třetích stran či své vlastní moduly. Toto je výhodné například pro školy či firmy, kde jsou uživatelům poskytovány jen funkcionality, které jsou určené pro studijní či pracovní účely.

    - **Nízké náklady na vývoj funkcionalit** - Jsou zajištěny tím, že není pro každou novou funkcionalitu třeba tvořit celou platformu, ale využít již stávající.

    - **Nízké náklady na marketing** - Jsou zajištěny tím, že není třeba propagovat jednotlivé funkcionality v rámci jednotlivých marketingových kampaní, ale pouze jednou pro celou platformu. Taktéž, při uvedení nové funkcionality, se využívá stávající uživatelská základna. Zároveň, díky své provázanosti funkcionalit, je aplikace atraktivní pro influencery, kteří přivádějí své sledovatele, což zajišťuje růst uživatelské základny.

    - **Diverzifikace rizika** - V případě, že provozovatel serveru vsadí na některou z komerčních funkcionalit, která by nebyla pozitivně přijata uživateli, je ztráta vykompenzována ziskem z jiné funkcionality.

    - **Udržení uživatelů online** - Větší množství funkcionalit udržuje více lidí online, tzn. vyšší pravděpodobnost interakce mezi uživateli a následný vyšší potenciální zisk z komerčních funkcionalit.

    - **Aplikace jako nezbytnost** - Funkcionality propojené s běžnými denními potřebami uživatelů v rámci platformy, vytváří nezbytnost mít takovou aplikaci nejen zaregistrovanou a stále nainstalovanou, ale i jí aktivně využívat, tzn. nižší riziko, že uživatel aplikaci odinstaluje a naopak stále odebírá její oznámení, které uživatele opět vrací k tomu aplikaci aktivně využívat a zvyšuje pravděpodobnost vynaložení finančních prostředků v rámci komerčních modulů.

    - **Zisk z funkcionalit třetích stran** - Integrace funkcionalit třetích stran přináší dodatečný zisk v rámci komerčních modulů.

  - **Z hlediska vývojáře**:

    - **Rychlý a snadný vývoj** - Modulární koncept zajišťuje vývojářům snadný a rychlý vývoj, díky tomu, že **vytváří pouze konkrétní moduly** a jejich funkcionality, nikoliv celou platformu.

- **Otevřené zdrojové kódy**:

  - **Transparentnost a bezpečnost** - Software umožňuje komukoli prohlédnout si zdrojový kód, což znamená, že bezpečnostní experti a uživatelé mohou snadno zkontrolovat, zda neobsahuje bezpečnostní nedostatky nebo škodlivý kód. To zvyšuje důvěru v používání software.

  - **Spolehlivost a kvalita** - Díky tomu, že na vývoji software s otevřeným zdrojovým kódem může spolupracovat široká komunita vývojářů a bezpečnostních expertů z celého světa, je pravděpodobné, že chyby a nedostatky budou rychleji objeveny a opraveny. Kolektivní úsilí mnoha lidí vede k vyšší kvalitě a stabilitě software.

  - **Komunita a podpora** - projekty s otevřeným zdrojovým kódem zajišťují silnou a aktivní komunitu, která poskytuje podporu, sdílí znalosti a zkušenosti a přispívá k dalšímu vývoji softwaru.

  - **Inovace a rychlý vývoj** - software s otevřeným zdrojovým kódem podporuje inovace a rychlejší vývoj. Vývojáři z celého světa mohou přinášet nové nápady a vylepšení platformy, což umožňuje rychlejší pokrok a implementaci nových technologií a funkcí.

- **Decentralizovaná nebo distribuovaná síťová architektura**: Tento typ sítě přináší uživatelům mnoho výhod:

  - **Větší dostupnost a spolehlivost** - Uživatelé mohou mít jistotu, že služby budou dostupné i v případě výpadku některých částí sítě. Decentralizovaná síť znamená, že není žádný centrální bod, který by mohl způsobit kompletní výpadek služby, což zajišťuje stabilní a nepřerušovanou dostupnost.
  
  - **Větší kontrola nad daty** - Uživatelé mají větší kontrolu nad svými daty, protože mohou rozhodovat, kde a jak jsou jejich informace ukládány a kdo k nim má přístup.

  - **Výkon a rychlost** - Díky rozložení zátěže na více uzlů mohou uživatelé zažít rychlejší přístup k datům a službám. Decentralizovaná síť umožňuje efektivnější zpracování a přenos dat, což vede k lepšímu uživatelskému zážitku.

  - **Odolnost vůči cenzuře** - V decentralizované síti je mnohem obtížnější provádět cenzuru nebo blokování obsahu, protože není žádný centrální bod, který by mohl být snadno kontrolován nebo ovlivňován. Uživatelé tak mají větší svobodu ve sdílení a přístupu k informacím.

- **Zabezpečení, šifrování a ochrana osobních dat**: Platforma klade maximální důraz na bezpečnost uživatelských dat, což uživatelům přináší následující výhody:

  - **Ochrana před neoprávněným přístupem** - Platforma zajišťuje uživatelům maximální ochranu při přihlašování a tím prevenci proti zneužití dat potenciálními útočníky.

  - **Šifrování dat** - Všechna soukromá data, která jsou přenášena mezi uživateli či ukládána na servery, jsou šifrována a poskytují tak uživatelům ochranu proti odposlechům jejich komunikace, což zajišťuje ochranu jejich soukromí a pocit bezpečí při používání aplikace.

  - **Digitální podpisy obsahu** - Protokoly zároveň počítají i s digitálním podepisováním veškerého obsahu, který je uživateli zasílán či sdílen, což zajišťuje ještě větší věrohodnost původu informací pro uživatele, kteří tento obsah přijímají.
  
- **Integrace kryptoměnové peněženky** - TODO
  - TODO - možnost výdělku pro infleuncery, e-shopy, monetizace
  - TODO - využití chytrých smluv v komunikační aplikaci
  - TODO - paralelní ekonomika

## Cílové skupiny

Platforma je využitelná mnoha cílovými skupinami uživatelů, jejichž potřeby se potkávají v jedné komplexní platformě. Zde je několik příkladů cílových skupin pro tento software:

**Běžní uživatelé - rodina, přátelé a komunity**: Uživatelé mohou snadno komunikovat s rodinou a přáteli pomocí rychlých zpráv, hlasových a video hovorů, sdílet si mezi sebou data bez omezení jejich velikosti, jako jsou fotografie, videa, obrázky, hlasové a video zprávy apod. Dále se mohou seznamovat, komunikovat a organizovat v komunitách pomocí různých modulů jako jsou chatovací skupiny (součást Rychlých zpráv), Diskuze, Newsfeed, Blogy, Události apod. Zároveň je jim umožněno mezi sebou platit díky integrované kryptoměnové peněžence, pomocí které mohou nakupovat na tržišti nebo prostřednictvím e-shopů, vybírat nebo zasílat peníze prostřednictvím modulů pro zasílaní darů nebo skupinového financování. Dale se mohou bavit prostřednictvím her, video kanálů nebo ve virtual chatu.

**Známé osobnosti a influenceři**: Platforma poskytuje možnosti sebeprezentace pomocí video kanálů s funkcionalitou publikování a prodeje video obsahu, živých vysílání, možnost psaní blogových článků, textového či vizuálního obsahu prostřednictvím newsfeedu a příběhů, prodeje reklamních předmětů v e-shopu, pořádání událostí, financování sbírek, darů, aukcí a mnoho dalšího.

**Podnikatelé a obchodníci**: Pro obchodníky a podnikatele jsou poskytnuty nástroje pro e-commerce (e-shopy, aukce, příspevky a skupinové financování), které jim usnadňují obchodování a platby přímo v aplikaci. Taktéž se mohou sebeprezentovat pomocí různých nástrojů podobně jako influenceři.

**Pracovní týmy**: Pro pracovní skupiny a firmy platforma nabízí nástroje pro efektivní spolupráci a produktivitu, jako jsou sdílené úkoly, kalendáře, konferenční hovory. Taktéž spolu mohou efektivně komunikovat prostřednictvím rychlých zpráv, kde si mohou i snadno sdílet pracovní data.

**Neziskové organizace**: Platforma podporuje tvorbu a správu komunitních projektů, umožňuje vytvářet a organizovat sbírky a skupinové financování, což je ideální pro neziskové organizace. Ty se taktéž mohou sebeprezentovat pomocí řady nástrojů, stejně jako influenceři.

**Studenti, učitelé a školy**: Studenti mohou využívat platformu k organizaci svých studijních aktivit, komunikovat s učiteli a spolužáky, sdílet studijní materiály, sledovat výukový video obsah pomocí video kanálů, využívat konferenční hovory pro online výuku.

## Seznam modulů

TODO - dopsat všude unikátní funkce

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

#### Unikátní funkce:

- Vícedílné zprávy v rámci IM
- Zasílání neomezeně velkých souborů
- Živé body na mapě v rámci IM
- Řazení kontaktů do skupin
- Řazení konverzací do témat
- Šablony zpráv
- Provázanost s ostatními moduly (např. tlačítko "Napsat zprávu" v diskuzi, video kanálech, seznamce, e-shopech, v profilech apod.)

#### Cílová skupina:

Široká skupina různých uživatelů všech věkových kategorii, především těch, kteří hledají efektivní a bezpečnou platformu pro komunikaci. Funkcionality jsou vhodné jak pro jednotlivce, tak i soukromé a veřejné organizace.

### 🧾 Kontakty

Tento modul umožňuje uživatelům **spravovat** a **organizovat** své **kontakty**. Tato funkcionalita poskytuje funkce jako např. možnosti **importu a exportu** kontaktů v různých formátech, vytváření **skupin kontaktů**, **štítků**, **poznámek** apod. Dále pokročilé **vyhledávání** dle různých kritérií, **sdílení** kontaktů s ostatními uživateli, přiřazování **fotografií** k jednotlivým kontaktům, možnosti **nastavení soukromí** a mnoho dalšího.

Všechny kontakty jsou taktéž **synchronizovány** se serverem a mezi jednotlivými koncovými zařízeními.

#### Cílová skupina:

Funkcionality modulu jsou vhodné pro jednotlivce i organizace, tedy pro všechny kteří potřebují efektivně spravovat a sdílet své osobní či profesní kontakty.

### 📞 Hlasové a video hovory

Tento modul představuje další základní funkcionalitu platformy, která umožňuje uživatelům komunikovat prostřednictvím **videa** nebo pomocí **hlasu** v reálném čase. Hovory lze vést mezi dvěma **jednotlivci** i **skupinově**. Součástí je i možnost **sdílení obrazovky** a **vzdálené ovládání** zařízení. Hovory lze **nahrávat** a jednotlivé nahrávky přehrávat, spravovat a sdílet. **Kvalita hovoru** je automaticky přizpůsobena propustností internetového připojení.

#### Unikátní funkce:

- Vzdálené ovládání zařízení v rámci hovoru

#### Cílová skupina:

Uživatelé všech věkových kategorií, především těch, kteří hledají bezpečné telefonování pomocí hlasu či videa. Funkcionalita je vhodná pro širokou škálu domácích uživatelů i pro profesionální využití v různých typech organizací.

### 📱 Konferenční hovory

**Konferenční hovory** umožňují uživatelům účastnit se rozsáhlých skupinových diskuzí a setkání online v reálném čase. Tato funkcionalita je navržena pro efektivní a pohodlnou komunikaci mezi více účastníky a to prostřednictvím **hlasu** i **videa**. Taktéž je umožněno **sdílet obrazovku** a povolit konkrétním účastníkům **vzdálené řízení**. Moderátoři mají možnost řídit průběh hovoru, jako např. **přidávat**, **odstraňovat** a **blokovat** účastníky, **moderovat** ostatní a **zaznamenávat průběh hovoru**. Uživatelé mohou taktéž využít **chat** v rámci hovoru, **sdílet soubory** a **hlasovat v anketách**. Všechny konferenční hovory lze **plánovat** dopředu, aby mohli být účastníci včas informováni o termínu konference. Kvalita zvuku je automaticky optimalizována dle propustnosti síťového připojení.

#### Unikátní funkce:

- Vzdálené ovládání zařízení v rámci konferenčního hovoru

#### Cílová skupina:

Především organizace, jako jsou firmy, vzdělávací instituce, lektoři, konzultanti, organizátoři akcí, odborné skupiny apod.

### ₿ Integrovaná kryptoměnová peněženka

**Integrovaná kryptoměnová peněženka** umožňuje uživatelům snadno a bezpečně **uchovávat**, **odesílat** a **přijímat** kryptoměny přímo v klientské aplikaci. To umožňuje placení a převod kryptoměn a tokenů mezi uživateli platformy a také **platby v rámci komerčních modulů** (např. za prémiové funkce). Peněženka podporuje všechny [**EVM-kompatibilní**](https://cs.wikipedia.org/wiki/Ethereum) blockchainy (jako je Ethereum, Binance Smart Chain, Polygon apod.). Tato funkcionalita je zcela oddělená od síťového protokolu a je propojená přímo s blockchainy. Zároveň umožňuje ostatním modulům využívat funkcionality [**chytrých smluv**](https://cs.wikipedia.org/wiki/Chytr%C3%BD_kontrakt), což značně přispívá k důvěryhodnosti transakcí a rozšiřuje možnosti funkcionalit modulů.

#### Unikátní funkce:

- Provázanost peněženky s uživatelskou základnou (možnost plateb mezi uživateli apod.)
- Možnost využití plateb v rámci modulů (prémiové funkce, platby za služby a zboží apod.)
- Možnost využití smart contractů v rámci modulů (rozdělení zisků z modulů, zajištění férovosti pravidel her, transparentní hlasování apod.)

#### Cílová skupina:

Uživatelé, kteří chtějí v rámci platformy platit za služby, které moduly poskytují, využívat chytré smlouvy nebo si mezi sebou navzájem zasílat platby.

### 🧑‍🤝‍🧑 Profily a sledování

Tento modul umožňuje uživatelům **sledovat aktivity ostatních uživatelů** napříč moduly, čímž zajišťuje interakci a udržování kontaktu mezi lidmi. Tato funkcionalita podporuje vytváření a správu **seznamu sledovaných profilů**, **zobrazování aktivit**, **upozorňování na nové aktivity**, **zobrazení seznamu nejsledovanějších veřejných profilů** apod.

#### Unikátní funkce:

- Veřejný obsah profilů z více modulů na jednom místě (provázanost s moduly)

#### Cílová skupina:

Uživatelé sociálních sítí, odběratelé novinek dle zájmových oblastí apod.

### 🎞️ Video kanály

**Video kanály** umožňují uživatelům **vytvářet** a **spravovat** různé druhy **video obsahu**, jako např. **klasická videa**, **živá vysílání** a **krátká "reels" videa**. Tato funkcionalita poskytuje nástroje pro **tvorbu a distribuci video obsahu**. Zároveň poskytuje možnosti zapojení uživatelů, jako jsou **reakce** na videa, **komentáře**, **sdílení** apod.

#### Unikátní funkce:

- Placená videa v rámci video kanálů
- Provázanost s ostatními moduly (např. sekce v profilech, tlačítka ostatních modulů pod videi apod.)

#### Cílová skupina:

Sledovatelé video obsahu, tvůrci video obsahu, vzdělávací instituce, umělci a hudebníci, herní komunita, společnosti produkující komerční obsah, uživatelé hledající zábavu či vzdělání.

### 💬 Diskuzní fórum

**Diskuzní fórum** poskytuje prostor pro uživatele, kde mohou **diskutovat** o různých tématech, **sdílet názory**, **klást otázky** a **poskytovat odpovědi**. Tento modul umožňuje **vytváření**, **správu** a **vyhledávání** diskuzí filtrovatelných dle kategorií a obsahu, nabízí nástroje pro moderování obsahu a podporuje živé a strukturované konverzace. Zároveň nabízí možnosti **nastavení soukromí** pro soukromé diskuzní skupiny.

#### Unikátní funkce:

- Provázanost s ostatními moduly (např. tlačítko pod videem ve video kanálech, sekce v profilech apod.)

#### Cílová skupina:

Zájmové, profesní, vzdělávací, odborné a jiné skupiny, komunity, organizace poskytující uživatelskou podporu, běžní diskutující uživatelé apod.

### ⭐ Newsfeed

Tento modul poskytuje uživatelům personalizovaný **přehled o nejnovějších příspěvcích** sledovaných profilů. Poskytuje možnost udržení přehledu o novinkách a interakcích v rámci sítě uživatelů. Taktéž umožňuje zapojení uživatelů ve formě reakcí a komentářů k jednotlivým příspěvkům.

#### Unikátní funkce:

- Provázanost s ostatními moduly (např. tlačítko pod videem ve video kanálech, sekce v profilech apod.)

#### Cílová skupina:

Široká skupina koncových uživatelů, tvůrci obsahu, organizace a projekty poskytující obsah svým odběratelům apod.

### 🤳🏻 Příběhy

Modul **Příběhy** umožňuje uživatelům **vytvářet vizuální příspěvky**, které uživatelé mohou sdílet se svými přáteli a sledovateli. Tyto příspěvky jsou viditelné pouze po omezenou dobu (typicky 24 hodin) a umožňují uživatelům **sdílet okamžité momenty**, **krátká videa**, **obrázky**, **zvuk** apod. v atraktivním formátu, na který mohou odběratelé snadno **reagovat** nebo je **okomentovat**.

#### Cílová skupina:

Široká skupina koncových uživatelů, tvůrci obsahu, organizace poskytující obsah svým odběratelům apod.

### 🗓️ Události

Tento modul umožňuje uživatelům **vytvářet**, **organizovat** a **sdílet** různé typy **událostí**, jako jsou **osobní setkání** či **veřejné akce**. Tento modul poskytuje **nástroje pro plánování**, **řízení**, **sdílení**, **reagování** a **komentování událostí**, čímž usnadňuje koordinaci a zapojení účastníků. U jednotlivých událostí je umožněno **nastavení soukromí** a **viditelnost**. Modul taktéž poskytuje **seznam veřejných událostí**, které jsou filtrovatelné a seřaditelné podle různých kritérií.

#### Unikátní funkce:

- Provázanost s ostatními moduly (např. tlačítko pod videem ve video kanálech, sekce v profilech apod.)

#### Cílová skupina:

Organizátoři a pořadatelé veřejných událostí, běžní uživatelé organizující soukromé akce, účastníci těchto akcí.

### ✍🏻 Blogy

**Blogy** poskytují autorům možnost **vytvářet**, **publikovat** a **sdílet** své myšlenky a názory ve formě článků a čtenářům tyto články **číst**, **reagovat** na ně a **komentovat** v diskuzi. Modul je navržen tak, aby usnadňoval tvorbu obsahu a podporoval zapojení čtenářů. Taktéž poskytuje nástroje pro snadné psaní a úpravu textu a přidávání multimediálního obsahu. Zároveň je i implementována funkcionalita **seznamu blogů** s možností filtrace a řazení dle různých kritérií.

#### Unikátní funkce:

- Provázanost s ostatními moduly (např. tlačítko pod videem ve video kanálech, sekce v profilech apod.)

#### Cílová skupina:

Amatérští i profesionální autoři, čtenáři různorodého obsahu.

### 🛍️ E-shopy

Tento modul umožňuje uživatelům **vytvářet** a **spravovat** vlastní **online obchody** a v takovýchto obchodech pohodlně **nakupovat**. Pro správu těchto e-shopů je poskytnuta sada nástrojů pro prodej produktů a služeb, správu objednávek, dokladů, plateb a možnost komunikace se zákazníky.

#### Unikátní funkce:

- Provázanost s ostatními moduly (např. tlačítko pod videem ve video kanálech, lokace v mapách, sekce v profilech apod.)

#### Cílová skupina:

E-commerce podnikatelé, digitální tvůrci, poskytovatelé služeb roznášek jídla a koncoví zákazníci.

### 🏪 Tržiště

Modul **Tržiště** umožňuje koncovým uživatelům **nakupovat** a **prodávat produkty a služby** mezi sebou. Poskytuje přehlednou platformu pro **inzerci**, kde mohou uživatelé nabízet své zboží a služby za **fixní ceny** nebo je dražit formou **aukce**. Modul umožňuje vyhledávání a filtrování položek dle různých kritérií, **hodnotit prodejce** a **komunikovat** s nimi.

#### Unikátní funkce:

- Provázanost s ostatními moduly (např. lokace v mapách, sekce v profilech apod.)

#### Cílová skupina:

Uživatelé, kteří prodávají, draží či nakupují zboží a služby formou inzerce.

### 💰 Příspěvky

Tento modul umožňuje uživatelům **finančně podporovat** konkrétní uživatele, projekty či charity prostřednictvím finančních darů. Kdokoliv si může založit vlastní sbírku na libovolné účely a vybírat tak dary od ostatních. Modul umožňuje snadnou **správu sbírek**, poskytuje **seznam veřejných sbírek** filtrovatelný a řaditelný dle různých kritérií. Taktéž umožňuje **komunikaci** mezi dárci a provozovateli sbírky.

#### Cílová skupina:

Uživatelé provozující či přispívající na osobní, charitativní, komunitní, umělecké či jakékoliv jiné projekty.

### 🤑 Skupinové financování

**Skupinové financování** (crowdfunding) umožňuje uživatelům **získávat finanční prostředky** na různé projekty prostřednictvím příspěvků od přispěvatelů, za což tito přispěvatelé dostávají různé **odměny**, **podíly** na projektu či jiné **výhody**. Tento modul poskytuje komplexní nástroje pro vytváření a správu kampaní, čímž umožňuje realizaci inovativních nápadů, projektů a podnikatelských záměrů. Kdokoliv si může založit vlastní kampaň pro libovolný účel a sestavit jí podle svého uvážení. Platforma poskytuje i **seznam veřejných kampaní**, které lze filtrovat a řadit dle různých kritérií.

#### Cílová skupina:

Podnikatelé, startupy, tvůrci a umělci, neziskové organizace, komunity, inovátoři a vynálezci, vzdělávací projekty a přispěvatelé.

### 📅 Kalendář

**Kalendář** je navržen pro efektivní **organizování času** a **plánování událostí**. Tento modul umožňuje uživatelům **vytvářet**, **synchronizovat** a **sdílet** kalendáře s ostatními členy komunity, což usnadňuje organizaci osobních i pracovních aktivit.

#### Cílová skupina:

Firemní uživatelé, domácí uživatelé, studenti, komunity apod.

### ✔️ Úkoly

Modul **Úkoly** umožňuje uživatelům **vytvářet**, **spravovat**, **delegovat**, **sledovat průběh**, **sdílet** a **komentovat** úkoly v reálném čase. Tento modul je navržen tak, aby zlepšoval **produktivitu** a **organizaci práce**, usnadňoval **spolupráci** v týmu a zajišťoval, že všechny úkoly budou dokončeny včas a efektivně.

#### Cílová skupina:

Jednotlivci, týmy, pracovní skupiny, studenti, domácnosti a další.

### 📂 Sdílení souborů

**Sdílení souborů** umožňuje uživatelům **nahrávat**, **stahovat**, přehledně **organizovat** a **sdílet** soubory různých formátů. Tento modul je navržen pro snadnou a efektivní výměnu videí, software, obrázků, dokumentů a dalších typů souborů mezi uživateli.

#### Cílová skupina:

Jednotlivci, studenti, komunity a další.

### ❤️ Seznamka

Modul **Seznamka** poskytuje moderní způsob **seznamování se s novými lidmi** za různými účely, jako např. **nalezení životního partnera**, **příležitostná setkání**, **přátelství** apod. Modul umožňuje **vytváření profilů** s **galerií fotografií** a podrobnými **osobními informacemi**, **vyhledávání** a **filtrování** ostatních uživatelů, možnosti **řazení uživatelů dle vzdálenosti** a dalších kritérií, možnost **kontaktování** pomocí zpráv, **lajkování** uživatelských profilů, nalezení **vzájemných shod**, přidávání uživatelů do **oblíbených** apod.

#### Cílová skupina:

Jednotlivci, kteří hledají nové vztahy, přátele a známé za různými účely. Uživatelé různých věkových kategorií, především mladší generace a střední věk.

### ⛰️ Virtual chat

**Virtual chat** nabízí uživatelům prostředí **virtuálního světa**, ve kterém mohou vzájemně **komunikovat** a bavit se s ostatními prostřednictvím **textového chatu** (soukromých nebo veřejných chatovacích bublin) či **hlasového chatu**, přizpůsobovat si svou virtuální postavičku, **navštěvovat různá místa** ve virtuálním prostředí. Uživatelé taktéž mohou **interagovat s ostatními objekty**.

#### Cílová skupina:

Jednotlivci hledající interaktivní komunikaci, netradiční způsob seznamování s novými lidmi a zábavu ve virtuálním světě. Modul je určen především mladší generaci uživatelů.

### 🗺️ Mapy

**Mapy** nabízí uživatelům rozsáhlé možnosti pro **prohlížení** a **interakci** s geografickými informacemi. Modul poskytuje funkcionality jako **vyhledávání**, **sdílení polohy** v reálném čase a **objevování míst** a nalézání **bodů zájmů** (místní obchody, služby, události apod.), které lze **hodnotit** a **komentovat**. Body zájmů jsou **filtrovatelné** a propojené s dalšími moduly aplikace, jako jsou profily nebo možnost kontaktování pomocí rychlých zpráv.

#### Cílová skupina:

Uživatelé, kteří se chtějí propojovat v reálném světě s ostatními a sdílet svou polohu nebo uživatelé hledající a hodnotící body zájmů.

### 🎮 Hry

Modul **Hry** poskytuje uživatelům zábavu prostřednictvím her, které mohou hrát se svými přáteli online.

#### Cílová skupina:

Hráči her různých žánrů, sociálně zaměření hráči, příležitostní hráči, především mladší generace uživatelů.

### 📰 Media feed

Modul **Media feed** v platformě Yellow poskytuje uživatelům **přehled zpráv** a informací z různých **médií**. Tento modul agreguje obsah z různých zpravodajských **serverů**, **blogů**, **sociálních médií** a dalších zdrojů, aby uživatelé měli aktuální přehled o dění v okolí a ve světě na jednom místě. Uživatelé si mohou personalizovat **výběr oblíbených médií** a **sdílet** obsah s ostatními uživateli.

#### Cílová skupina:

Aktivní čtenáři a informovaní uživatelé, obchodníci, studenti, zájemci o odborná témata apod.

## Plán vývoje

TODO
