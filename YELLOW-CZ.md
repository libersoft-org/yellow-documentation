# Yellow - dokumentace

**Yellow** je rozsáhlá komunikační platforma (tzv. [**super-app**](https://en.wikipedia.org/wiki/Super-app)), která poskytuje serverovou a klientskou aplikaci, podpůrné nástroje a dokumentaci.

## Klíčové vlastnosti software

- **Otevřené zdrojové kódy** - Celá platforma je poskytována bezplatně a s otevřenými zdrojovými kódy. To přispívá důvěryhodnosti, bezpečnosti kódu a snadnému zapojení vývojářů 3. stran.

- **Multifunkčnost a modularita**: Modulární struktura umožňuje uživatelům i správcům serverů si zvolit funkcionality aplikace podle svých představ. Platforma nabízí mnoho modulů z rozličných oblastí, jako je např. zasílání rychlých zpráv, sociální média, e-commerce, sdílení souborů a mnoho dalšího. Platforma je otevřená i pro moduly třetích stran.

- **Podpora více protokolů**: Platforma podporuje integraci více komunikačních protokolů a je otevřena snadné integraci protokolů třetích stran. V rámci platformy jsou integrovány tyto protokoly:

  - [**AMTP**](./AMTP-CZ) - Nejnovější komunikační protokol, který přináší pokročilé možnosti v oblasti přenosu dat a komunikace v reálném čase. Nabízí **distribuovanou** síť serverů, které si mezi sebou předávají data, a také klientů, kteří se k těmto serverům připojují. Kdokoliv si může vytvořit vlastní server a připojit se tak k síti nebo se připojit k již zavedeným serverům, které pro uživatele poskytují své služby a navzájem si konkurují. Klientské aplikace si se servery a ostatními zařízeními mohou synchronizovat data.
  - [**DMTP**](./DMTP-CZ) - Připravovaný peer-to-peer komunikační protokol. Tento protokol využívá plně **decentralizovanou** síť uživatelů, kteří se starají o doručení dat pro ostatní uživatele. Data jsou uložena pouze na koncových zařízeních uživatelů nebo na decentralizovaných úložištích (v určitých případech), nikoliv na serverech, jako je to v případě ostatních protokolů. Tento protokol je velmi bezpečný a odolný vůči cenzuře.
  - [**IMAP**](https://www.rfc-editor.org/rfc/rfc9051.html) - Původní protokol elektronické pošty. Do platformy je integrován z důvodu zpětné kompatibility.

- **Zabezpečení a ochrana soukromí**: Celé jádro platformy i oficiální moduly poskytující hlavní funkcionality systému, jsou vytvářeny dle standradů a doporučení protokolů **AMTP** a **DMTP**, tedy jsou v nich implementovány silné bezpečnostní prvky jako je např. **zabezpečená komunikace**, **koncové šifrování** apod. To zajišťuje nadstandardní ochranu soukromí pro uživatele.

## Seznam funkcionalit software

### 📧 Rychlé zprávy

Tento modul představuje hlavní funkcionalitu platformy, která umožňuje uživatelům komunikovat v reálném čase a zasílat mezi sebou data jako jsou **textové zprávy** (prostý i formátovaný text), **hlasové a video zprávy**, **neomezeně velké soubory**, **emotikony**, **animované nálepky**, **obrázky**, **kontakty**, **živé body na mapě** apod. Tyto jednotlivé typy zpráv lze taktéž kombinovat do jedné, **vícedílné zprávy**, což umožňuje například jednoduše vytvářet obchodní sdělení a komunikaci s chatboty.

V rámci každého kontaktu je možné zakládat **více konverzací**, které mohou být například řazeny dle témat rozhovorů. Jednotlivé kontakty mohou být taktéž **řazeny do skupin**, například dle typu kontaktu (práce, přátelé, apod.).

Modul umožňuje nejen konverzace **jeden na jednoho**, ale také poskytuje **chatovací skupiny** nebo **odběry novinek**. Veřejné chatovací skupiny i odběry novinek jsou vystaveny v přehledných **seznamech**, kde si je uživatelé mohou **filtrovat** dle kategorií, popularity, data vytvoření apod.

Všechny zprávy ve všech formách (vč. zaslaných souborů apod.) jsou opatřené **koncovým šifrováním**, takže není možné, aby je kdokoliv mohl kompromitovat a to ani správci serverů, jelikož na serverech jsou tyto zprávy ukládány v zašifrované podobě.

Uživatelské účty mohou být ovládány **chatboty**, což je vhodné například pro vytváření konverzací s uživatelskou podporou, pro objednávání zboží apod.

Na zprávy je možné **odpovídat**, **přeposílat** je a **reagovat** pomocí emotikon.

Kontakty zasílající nevyžádané zprávy je taktéž možné snadno **zablokovat**.

Klientská aplikace umožňuje i vytváření **šablon zpráv**, což je využitelné například pro rychlou komunikaci se zákazníky v rámci uživatelské podpory.

Všechny zprávy je možné automaticky či na vyžádání **překládat** do mnoha světových jazyků.

Díky strukturovanosti tohoto modulu je snadné ve zprávách **vyhledávat**.

#### Cílová skupina:

Široká skupina různých uživatelů všech věkových kategorii, především těch, kteří hledají efektivní a bezpečnou platformu pro komunikaci. Funkcionality jsou vhodné jak pro jednotlivce, tak i soukromé a veřejné organizace. Tedy všech, kdo potřebují sdílet zprávy či soubory v reálném čase.

### 🧾 Kontakty

Tento modul umožňuje uživatelům spravovat a organizovat své **kontakty** na jednom místě. Tato funkcionalita poskytuje pokročilé funkce pro správu kontaktů jako např. možnosti **importu a exportu** s použitím různých formátů, vytváření **skupin kontaktů**, **štítků**, **poznámek** apod., pokročilé **vyhledávání** dle různých kritérií, **sdílení** kontaktů s ostatními uživateli, přiřazování **fotografií** k jednotlivým kontaktům, **stavové informace** (online, offline apod.), možnosti nastavení **soukromí** pro jednotlivé kontakty.

Všechny kontakty jsou taktéž **synchronizovány** se serverem a mezi jednotlivými koncovými zařízeními, taktéž jsou ukládány na servery v **šifrované** podobě.

#### Cílová skupina:

Všichni domácí i firemní uživatelé, kteří potřebují efektivně spravovat a sdílet své osobní či profesní kontakty. Tato funkcionalita je také užitečná pro firmy či jiné druhy organizací, které potřebují udržovat přehled o svých členech a partnerech.

### 📞 Hlasové a video hovory

Tento modul představuje další základní funkcionalitu platformy, která umožňuje uživatelům komunikovat tváří v tvář s použitím **videa** nebo pomocí **hlasu** v reálném čase. Hovory lze vést mezi dvěma **jednotlivci** i **skupinově**. Součástí je i možnost **sdílení obrazovky** a **vzdálené ovládání** zařízení. Hovory lze **nahrávat** a jednotlivé nahrávky přehrávat, spravovat a sdílet. Všechny hovory jsou opatřeny **koncovým šifrováním**, takže jsou odolné proti odposlechu. **Kvalita hovoru** je automaticky přizpůsobena propustností internetového připojení.

#### Cílová skupina:

Uživatelé všech věkových kategorií, především těch, kteří hledají bezpečné telefonování pomocí hlasu či videa. Funkcionalita je vhodná pro širokou škálu domácích uživatelů i pro profesionální využití v různých typech soukromých i veřejných organizací.

### 📱 Konferenční hovory

Konferenční hovory umožňují uživatelům účastnit se rozsáhlých skupinových diskusí a setkání v reálném čase. Tato funkcionalita je navržena pro efektivní a pohodlnou komunikaci mezi více účastníky a to prostřednictvím hlasu i videa z kamery. Taktéž je umožněno sdílet obrazovku a povolit konkrétním účastníkům vzdálené řízení. Moderátoři mají možnost řídit průběh hovoru, jako např. přidávat, odstraňovat a blokovat účastníky, povolovat či zakazovat ostatním audio a video a zaznamenávat průběh hovoru. Uživatelé mohou taktéž využít chat v rámci hovoru a hlasovat v anketách. Všechny konferenční hovory lze plánovat dopředu, aby mohli být účastníci včas informováni o termínech. Všechny hovory jsou opatřeny koncovým šifrováním, které účastníky chrání před odposlechy. Kvalita zvuku je automaticky optimalizována dle propustnosti síťového připojení.

#### Cílová skupina:

Především organizace, jako jsou firmy, vzdělávací instituce, lektoři, konzultantni, organizátoři akcí, profesní a odborné skupiny apod.

### ₿ Integrovaná kryptoměnová peněženka

Integrovaná kryptoměnová peněženka v platformě umožňuje uživatelům snadno a bezpečně uchovávat, odesílat a přijímat kryptoměny přímo v klientské aplikaci. To umožňuje placení a převod kryptoměn i tokenů mezi uživateli platformy a také platby v rámci komerčních modulů (např. za prémiové funkce). Peněženka podporuje všechny EVM-kompatibilní blockchainy (jako je Ethereum, Binance Smart Chain, Polygon apod.). Tato funkcionalita je zcela oddělená od síťového protokolu a je propojená přímo s blockchainy.

#### Cílová skupina:

Uživatelé, kteří chtějí v rámci platformy platit za služby, které moduly poskytují nebo uživatelé, kteří si mezi sebou navzájem zasílají platby. 

### 🧑‍🤝‍🧑 Sledovatelé

Tento modul umožňuje uživatelům sledovat aktivity ostatních uživatelů, čímž zajišťuje interakci a udržování kontaktu mezi komunitou a zájmovými osobami. Tato funkcionalita podporuje vytváření a správu seznamu sledovaných profilů, upozorňování na nové aktivity a interakce s obsahem sledovaných uživatelů.
Zároveň je i poskytnut seznam nejsledovanějších profilů, filtrovatelný dle různých kritérií.

#### Cílová skupina:

Uživatelé sociálních sítí, odběratelé novinek dle zájmových oblastí.

### 🎞️ Video kanály (vč. živých vysílání)

Video kanály v platformě Yellow umožňují uživatelům vytvářet a spravovat různé druhy video obsahu, jako např. **klasická videa**, **živá vysílání** a **krátká "reels" videa**. Tato funkcionalita poskytuje nástroje pro tvorbu a distribuci video obsahu. Zároveň poskytuje možnosti zapojení uživatelů, jako jsou reakce na videa, komentáře, sdílení apod.

#### Cílová skupina:

Sledovatelé video obsahu, tvůrci video obsahu, vzdělávací instituce, umělci a hudebníci, společnosti produkující komerční obsah, herní komunita, uživatelé hledající zábavu či vzdělání.

### 💬 Diskuzní fórum

**Diskuzní fórum** poskytuje prostor pro uživatele, kde mohou diskutovat o různých tématech, sdílet názory, klást otázky a poskytovat odpovědi. Tento modul umožňuje vytváření, správu a vyhledávání diskuzí filtrovatelných dle kategorií a obsahu, nabízí nástroje pro moderování obsahu a podporuje živé a strukturované konverzace. Zároveň nabízí možnosti nastavení soukromí pro soukromé diskuzní skupiny a pokročilé zabezpečení a ochranu uživatelských dat.

#### Cílová skupina:

Zájmové, profesní, vzdělávací, odborné a jiné skupiny, komunity, organizace poskytující uživatelskou podporu apod.

### ⭐ Newsfeed

Tento modul poskytuje uživatelům personalizovaný přehled o nejnovějších příspěvcích sledovaných profilů. Poskytuje možnost udržení přehledu o novinkách a interakcích v rámci sítě uživatelů. Taktéž umožňuje zapojení uživatelů k příspěvkům ve formě reakcí a komentářů.

#### Cílová skupina:

Široká skupina koncových uživatelů, tvůrci obsahu, organizace poskytující obsah svým odběratelům apod.

### 🤳🏻 Příběhy

Krátkodobé vizuální příspěvky, které uživatelé mohou sdílet se svými přáteli a sledovateli. Tyto příspěvky jsou viditelné pouze po omezenou dobu (typicky 24 hodin) a umožňují uživatelům sdílet okamžité momenty, krátká videa, fotografie a textové zprávy v atraktivním formátu, na který mohou odběratelé snadno reagovat.

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

Tento modul umožňuje uživatelům podporovat ostatní členy komunity prostřednictvím finančních darů. Kdokoliv si může založit vlastní sbírku na libovolné účely a vybírat tak dary od lidí. Modul umožňuje snadnou sprvávu sbírek, poskytuje seznam sbírek filtrovatelný a seřaditelný dle různých kritérií. Taktéž umožňuje komunikaci mezi dárci a provozovateli sbírky.

#### Cílová skupina:

Uživatelé provozující či přispívající na osobní, charitativní, komunitní, umělecké či jakékoliv jiné projekty.

### 🤑 Skupinové financování (crowdfunding)

Skupinové financování umožňuje uživatelům získávat finanční prostředky pro různé projekty prostřednictvím příspěvků od přispěvatelů, za což tito přispěvatelé dostávají různé odměny, podíly na projektu apod. Tento modul poskytuje komplexní nástroje pro vytváření a správu kampaní, čímž umožňuje realizaci inovativních nápadů, projektů a podnikatelských záměrů. Kdokoliv si může založit vlastní kampaň a sestavit jí podle svého uvážení. Platforma poskytuje i seznam veřejných kampaní, které lze filtrovat a řadit dle různých kritérií.

#### Cílová skupina:

Podnikatelé, startupy, tvůrci a umělci, neziskové organizace, komunity, inovátoři a vynálezci, vzdělávací projekty a přispěvatelé do těchto projektů.

### 📅 Sdílený kalendář

TODO

#### Cílová skupina:

TODO

### ✔️ Sdílené úkoly

TODO

#### Cílová skupina:

TODO

### 📂 Sdílení souborů

TODO

#### Cílová skupina:

TODO

### ❤️ Seznamka

TODO

#### Cílová skupina:

TODO

### ⛰️ Virtual chat

TODO

#### Cílová skupina:

TODO

### 🗺️ Mapy

TODO

#### Cílová skupina:

TODO

### 🎮 Hry

TODO

#### Cílová skupina:

TODO

### 📰 Media feed

TODO

#### Cílová skupina:

TODO

