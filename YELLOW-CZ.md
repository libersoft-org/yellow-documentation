# Yellow - dokumentace

**Yellow** je rozsáhlá komunikační platforma (tzv. [**super-app**](https://en.wikipedia.org/wiki/Super-app)), která poskytuje serverovou a klientskou aplikaci, podpůrné nástroje a dokumentaci.

**Zde je seznam klíčových vlastností tohoto software:**

- **Otevřené zdrojové kódy** - Celá platforma je poskytována bezplatně a s otevřenými zdrojovými kódy. To přispívá důvěryhodnosti, bezpečnosti kódu a snadnému zapojení vývojářů 3. stran.

- **Multifunkčnost a modularita**: Modulární struktura umožňuje uživatelům i správcům serverů si zvolit funkcionality aplikace podle svých představ. Platforma nabízí mnoho modulů z rozličných oblastí, jako je např. zasílání rychlých zpráv, sociální média, e-commerce, sdílení souborů a mnoho dalšího. Platforma je otevřená i pro moduly třetích stran.

- **Podpora více protokolů**: Platforma podporuje integraci více komunikačních protokolů a je otevřena snadné integraci protokolů třetích stran. V rámci platformy jsou integrovány tyto protokoly:

  - [**AMTP**](./AMTP-CZ) - Nejnovější komunikační protokol, který přináší pokročilé možnosti v oblasti přenosu dat a komunikace v reálném čase. Nabízí **distribuovanou** síť serverů, které si mezi sebou předávají data, a také klientů, kteří se k těmto serverům připojují. Kdokoliv si může vytvořit vlastní server a připojit se tak k síti nebo se připojit k již zavedeným serverům, které pro uživatele poskytují své služby a navzájem si konkurují. Klientské aplikace si se servery a ostatními zařízeními mohou synchronizovat data.
  - [**DMTP**](./DMTP-CZ) - Připravovaný peer-to-peer komunikační protokol. Tento protokol využívá plně **decentralizovanou** síť uživatelů, kteří se starají o doručení dat pro ostatní uživatele. Data jsou uložena pouze na koncových zařízeních uživatelů nebo na decentralizovaných úložištích (v určitých případech), nikoliv na serverech, jako je to v případě ostatních protokolů. Tento protokol je velmi bezpečný a odolný vůči cenzuře.
  - [**IMAP**](https://www.rfc-editor.org/rfc/rfc9051.html) - Původní protokol elektronické pošty. Do platformy je integrován z důvodu zpětné kompatibility.

- **Zabezpečení a ochrana soukromí**: Celé jádro platformy i oficiální moduly poskytující hlavní funkcionality systému, jsou vytvářeny dle standradů a doporučení protokolů **AMTP** a **DMTP**, tedy jsou v nich implementovány silné bezpečnostní prvky jako je např. **zabezpečená komunikace**, **koncové šifrování** apod. To zajišťuje nadstandardní ochranu soukromí pro uživatele.

**Seznam funkcionalit, které jsou součástí tohoto software:**

## 📧 Rychlé zprávy

Tento modul představuje hlavní funkcionalitu platformy **Yellow**, která umožňuje uživatelům komunikovat v reálném čase a zasílat mezi sebou data jako jsou **textové zprávy** (prostý i formátovaný text), **hlasové a video zprávy**, **neomezeně velké soubory**, **emotikony**, **animované nálepky**, **obrázky**, **kontakty**, **živé body na mapě** apod. Tyto jednotlivé typy zpráv lze taktéž kombinovat do jedné, **vícedílné zprávy**, což umožňuje například jednoduše vytvářet obchodní sdělení a komunikaci s chatboty.

V rámci každého kontaktu je možné zakládat **více konverzací**, které mohou být například řazeny dle témat rozhovorů. Jednotlivé kontakty mohou být taktéž **řazeny do skupin**, například dle typu kontaktu (práce, přátelé, apod.).

Modul umožňuje nejen konverzace **jeden na jednoho**, ale také poskytuje **chatovací skupiny** nebo **odběry novinek**. Veřejné chatovací skupiny i odběry novinek jsou vystaveny v přehledných **seznamech**, kde si je uživatelé mohou **filtrovat** dle kategorií, popularity, data vytvoření apod.

Všechny zprávy ve všech formách (vč. zaslaných souborů apod.) jsou opatřené **koncovým šifrováním**, takže není možné, aby je kdokoliv mohl kompromitovat a to ani správci serverů, jelikož na serverech jsou tyto zprávy ukládány v zašifrované podobě.

Uživatelské účty mohou být ovládány **chatboty**, což je vhodné například pro vytváření konverzací s uživatelskou podporou, pro objednávání zboží apod.

Na zprávy je možné **odpovídat**, **přeposílat** je a **reagovat** pomocí emotikon.

Kontakty zasílající nevyžádané zprávy je taktéž možné snadno **zablokovat**.

Klientská aplikace umožňuje i vytváření **šablon zpráv**, což je využitelné například pro rychlou komunikaci se zákazníky v rámci uživatelské podpory.

Všechny zprávy je možné automaticky či na vyžádání **překládat** do mnoha světových jazyků.

Díky strukturovanosti tohoto modulu je snadné ve zprávách **vyhledávat**.

### Cílová skupina:

Široká skupina různých uživatelů všech věkových kategorii, především těch, kteří hledají efektivní a bezpečnou platformu pro komunikaci. Funkcionality jsou vhodné jak pro jednotlivce, tak i soukromé a veřejné organizace. Tedy všech, kdo potřebují sdílet zprávy či soubory v reálném čase.

## 🧾 Kontakty

Tento modul umožňuje uživatelům spravovat a organizovat své **kontakty** na jednom místě. Tato funkcionalita poskytuje pokročilé funkce pro správu kontaktů jako např. možnosti **importu a exportu** s použitím různých formátů, vytváření **skupin kontaktů**, **štítků**, **poznámek** apod., pokročilé **vyhledávání** dle různých kritérií, **sdílení** kontaktů s ostatními uživateli, přiřazování **fotografií** k jednotlivým kontaktům, **stavové informace** (online, offline apod.), možnosti nastavení **soukromí** pro jednotlivé kontakty.

Všechny kontakty jsou taktéž **synchronizovány** se serverem a mezi jednotlivými koncovými zařízeními, taktéž jsou ukládány na servery v **šifrované** podobě.

### Cílová skupina:

Všichni uživatelé, kteří potřebují efektivně spravovat a sdílet své osobní či profesní kontakty. Tato funkcionalita je také užitečná pro firmy či jiné druhy organizací, které potřebují udržovat přehled o svých členech a partnerech.

## 📞 Hlasové a video hovory

Tento modul představuje další základní funkcionalitu platformy, která umožňuje uživatelům komunikovat tváří v tvář s použitím **videa** nebo pomocí **hlasu** v reálném čase. Hovory lze vést mezi dvěma **jednotlivci** i **skupinově**. Součástí je i možnost **sdílení obrazovky** a **vzdálené ovládání** zařízení. Hovory lze **nahrávat** a jednotlivé nahrávky přehrávat, spravovat a sdílet. Všechny hovory jsou opatřeny **koncovým šifrováním**, takže jsou odolné proti odposlechu. **Kvalita hovoru** je automaticky přizpůsobena propustností internetového připojení.

### Cílová skupina:

Všichni uživatelé hledající bezpečné telefonování pomocí hlasu a videa. Funkcionalita je vhodná pro širokou škálu uživatelů, tedy **domácí** i **firemní** uživatele, či **další typy organizací**.

## 📱 Konferenční hovory

Konferenční hovory umožňují uživatelům účastnit se rozsáhlých skupinových diskusí a setkání v reálném čase. Tato funkcionalita je navržena pro efektivní a pohodlnou komunikaci mezi více účastníky a to prostřednictvím hlasu i videa z kamery. Taktéž je umožněno sdílet obrazovku a povolit konkrétním účastníkům vzdálené řízení. Moderátoři mají možnost řídit průběh hovoru, jako např. přidávat, odstraňovat a blokovat účastníky, povolovat či zakazovat ostatním audio a video a zaznamenávat průběh hovoru. Uživatelé mohou taktéž využít chat v rámci hovoru a hlasovat v anketách. Všechny konferenční hovory lze plánovat dopředu, aby mohli být účastníci včas informováni o termínech. Všechny hovory jsou opatřeny koncovým šifrováním, které účastníky chrání před odposlechy. Kvalita zvuku je automaticky optimalizována dle propustnosti síťového připojení.

### Cílová skupina:

Především organizace, jako jsou firmy, vzdělávací instituce, lektoři, konzultantni, organizátoři akcí, profesní a odborné skupiny apod.

## ₿ Integrovaná kryptoměnová peněženka

Umožňuje platby a převody kryptoměn mezi uživateli a platby v rámci placených funkcí v modulech.
TODO

## 🧑‍🤝‍🧑 Sledovatelé

TODO

### Cílová skupina:

TODO

## 🎞️ Video kanály (vč. živých vysílání)

TODO

### Cílová skupina:

TODO

## 💬 Diskuzní fórum

TODO

### Cílová skupina:

TODO

## ⭐ Newsfeed

TODO

### Cílová skupina:

TODO

## 🤳🏻 Příběhy (stories)

TODO

### Cílová skupina:

TODO

## 🗓️ Události

TODO

### Cílová skupina:

TODO

## ✍🏻 Blogy

TODO

### Cílová skupina:

TODO

## 🛍️ E-shopy

TODO

### Cílová skupina:

TODO

## 🏪 Tržiště (vč. aukce)

TODO

### Cílová skupina:

TODO

## 💰 Příspěvky (donations)

TODO

### Cílová skupina:

TODO

## 🤑 Skupinové financování (crowdfunding)

TODO

### Cílová skupina:

TODO

## 📅 Sdílený kalendář

TODO

### Cílová skupina:

TODO

## ✔️ Sdílené úkoly

TODO

### Cílová skupina:

TODO

## 📂 Sdílení souborů

TODO

### Cílová skupina:

TODO

## ❤️ Seznamka

TODO

### Cílová skupina:

TODO

## ⛰️ Virtual chat

TODO

### Cílová skupina:

TODO

## 🗺️ Mapy

TODO

### Cílová skupina:

TODO

## 🎮 Hry

TODO

### Cílová skupina:

TODO

## 📰 Media feed

TODO

### Cílová skupina:

TODO

