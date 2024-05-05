const data = [
 {
  title: 'Úvod',
  link: 'about'
 }, {
  title: 'Předmět dokumentace',
  link: 'subject'
 }, {
  title: 'Důvody vytvoření',
  link: 'arguments'
 }, {
  title: 'Cíle protokolu',
  link: 'objectives'
 }, {
  title: 'Zvolené standardy',
  link: 'standards',
  sub: [
   {
    title: 'WebTransport',
    link: 'standards-webtransport'
   }, {
    title: 'BSON',
    link: 'standards-bson'
   }
  ]
 }, {
  title: 'Architektura',
  link: 'architecture',
  sub: [
   {
    title: 'Distribuovaná síť',
    link: 'architecture-network',
   }, {
    title: 'Modularita',
    link: 'architecture-modularity'
   }
  ]
 }, {
  title: 'Identita uživatele',
  link: 'identity'
 }, {
  title: 'Zabezpečení',
  link: 'security',
  sub: [
   {
    title: 'Šifrovaný přenos dat',
    link: 'security-transfer'
   }, {
    title: 'Digitální podpis serveru',
    link: 'security-dkey'
   }, {
    title: 'Bezpečné přihlašování',
    link: 'security-login'
   }, {
    title: 'Blokace neautorizovaných přístupů',
    link: 'security-block'
   }, {
    title: 'Koncové šifrování',
    link: 'security-e2e'
   }
  ]
 }, {
  title: 'DNS',
  link: 'dns',
  sub: [
   {
    title: 'Konfigurace DNS',
    link: 'dns-config'
   }
  ]
 }, {
  title: 'Spojení',
  link: 'connection'
 }, {
  title: 'Příkazy',
  link: 'commands',
  sub: [
   {
    title: 'Chyby',
    link: 'commands-errors',
    sub: [
     {
      title: 'Obecné chyby jádra',
      link: 'commands-errors-general',
     }, {
      title: 'Chyby příkazů jádra',
      link: 'commands-errors-commands',
     }, {
      title: 'Chyby příkazů modulů',
      link: 'commands-errors-modules',
     }
    ]
   }, {
    title: 'Klient-server',
    link: 'commands-c2s',
    sub: [
     {
      title: 'Správce',
      link: 'commands-c2s-admin',
      sub: [
       {
        title: 'Přihlášení správce',
        link: 'commands-c2s-admin-login',
        sub: [
         {
          title: 'Přihlašovací výzva',
          link: 'commands-c2s-admin-login-challenge'
         }, {
          title: 'Přihlašovací odezva',
          link: 'commands-c2s-admin-login-response'
         }
        ]
       }, {
        title: 'Odhlášení správce',
        link: 'commands-c2s-admin-logout'
       }, {
        title: 'Správci',
        link: 'commands-c2s-admin-admins',
        sub: [
         {
          title: 'Seznam správců',
          link: 'commands-c2s-admin-admins-list'
         }, {
          title: 'Přidání nového správce',
          link: 'commands-c2s-admin-admins-add'
         }, {
          title: 'Úprava správce',
          link: 'commands-c2s-admin-admins-set'
         }, {
          title: 'Smazání správce',
          link: 'commands-c2s-admin-admins-del'
         }
        ]
       }, {
        title: 'Domény',
        link: 'commands-c2s-admin-domains',
        sub: [
         {
          title: 'Seznam domén',
          link: 'commands-c2s-admin-domains-list'
         }, {
          title: 'Přidání nové domény',
          link: 'commands-c2s-admin-domains-add'
         }, {
          title: 'Úprava domény',
          link: 'commands-c2s-admin-domains-set'
         }, {
          title: 'Smazání domény',
          link: 'commands-c2s-admin-domains-del'
         }
        ]
       }, {
        title: 'Uživatelské účty',
        link: 'commands-c2s-admin-users',
        sub: [
         {
          title: 'Seznam uživatelů',
          link: 'commands-c2s-admin-users-list'
         }, {
          title: 'Přidání nového uživatele',
          link: 'commands-c2s-admin-users-add'
         }, {
          title: 'Úprava uživatele',
          link: 'commands-c2s-admin-users-set'
         }, {
          title: 'Smazání uživatele',
          link: 'commands-c2s-admin-users-del'
         }
        ]
       }, {
        title: 'Informace o serveru pro správce',
        link: 'commands-c2s-admin-sysinfo'
       }
      ]
     }, {
      title: 'Uživatel',
      link: 'commands-c2s-user',
      sub: [
       {
        title: 'Registrace uživatele',
        link: 'commands-c2s-user-registration'
       }, {
        title: 'Přihlášení uživatele',
        link: 'commands-c2s-user-login',
        sub: [
         {
          title: 'Přihlašovací výzva',
          link: 'commands-c2s-user-login-challenge'
         }, {
          title: 'Přihlašovací odezva',
          link: 'commands-c2s-user-login-response'
         }
        ]
       }, {
        title: 'Ověření uživatele tokenem',
        link: 'commands-c2s-user-verify',
       }, {
        title: 'Odhlášení uživatele',
        link: 'commands-c2s-user-logout'
       }, {
        title: 'Změna veřejného klíče pro přihlášení',
        link: 'commands-c2s-user-setpubkey'
       }, {
        title: 'Změna hesla pro přihlášení',
        link: 'commands-c2s-user-setpassword'
       }, {
        title: 'Informace o serveru pro uživatele',
        link: 'commands-c2s-user-info'
       }, {
        title: 'Seznam používaných modulů',
        link: 'commands-c2s-user-modules'
       }
      ]
     }, {
      title: 'Komunikace s moduly',
      link: 'commands-c2s-modules'
     }
    ]
   }, {
    title: 'Server-server',
    link: 'commands-s2s'
   }
  ]
 }, {
  title: 'Příklady',
  link: 'examples'
 }
];
