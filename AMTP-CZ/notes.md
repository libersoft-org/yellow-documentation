# crypto
https://neurotechnics.com/tools/pbkdf2-test



# api schema frameworks / data types

https://en.wikipedia.org/wiki/BSON
https://www.jsonrpc.org/specification
https://grpc.io/



```

tabulka banu vlastnich uzivatelu:
	admin_id ban_id, user_amail, reason, expiration, ts

crud:
	add_ban(user_amail, reason, expiration)
	list_bans()
	edit_ban(ban_id, reason, expiration)
	remove_ban(ban_id)

---------------

tabulka banu ip adres:
	ban_id, admin_id, ip: string, reason: string, expiration: datetime = null, ts: datetime
crud:
	...

```


# Příkazy - Admin - Správci (chybí v NOTES)

## admin_list_admins
### parameters
none.
### response example
```
{
    "result": [
        {
            "id": 1,
            "name": "Admin Adam",
            "pubkey": "Xxxxx..."
        }
    ]
}
```




## admin_add_admin
### parameters
string name
string pubkey
### request example
```
{
    "name": "Admin Bob",
    "pubkey": "Xxxxx..."
}
```
### response example
```
{
    "id": 2,
    "name": "Admin Bob",
}
```




### admin_edit_admin
#### parameters
int id
optional string name
optional string pubkey
optional string password_hash
#### request example
```
{
    "id": 2,
    "pubkey": "Yyyyyy..."
}
```
#### response example
```
{
    "result": "ok"
}
```
#### error codes
`admin_does_not_exist`
`invalid_pubkey`
`invalid_name`
`admin_with_that_name_exists`




### admin_delete_admin
#### parameters
int id
#### request example
```
{
    "id": 2
}
```
#### response example
```
{
    "result": "ok"
}
```
#### error codes
`admin_does_not_exist`
`admin_is_last_admin`






## management of domains
Domain datatype:
```
{
    int id;
    string domain;
    datetime ts;
}
```
commands:

### list_domains
#### parameters
none.
#### return type
`array[Domain]`

#### return example
```
{
    "result": [
        {
            "id": 1,
            "domain": "example1.com",
            "ts": "2020-01-01 00:00:00"
        }
    ]
}

```



### create_domain
### request schema
```
{
    string domain  // Musi odpovidat regularnimu vyrazu pro domeny
}
```
#### example query
```
{
    "domain": "example.com"
}
```
#### return example
```
{
    "id": 2,
    "domain": "example2.com",
    "ts": "2020-01-01 00:00:00"
}
```
#### chybove kody
`domain_exists`
`invalid_domain_name`





### edit_domain
#### request schema
```
{
    int id;
    string domain;
}
``` 
#### example request
```
{
    "id": 2,
    "domain": "example2-new.com"
}
```
#### return example
```
{
    "id": 2,
    "domain": "example2-new.com",
    "ts": "2020-01-01 00:00:00"
}
```
#### chybove kody
`domain_does_not_exist`
`invalid_domain_name`






### delete_domain
### request schema
```
{
    int id
}
```
### request example
```
{
    "id": 2
}
```
### return example
```
{
    "status": "ok"
}
```
#### chybove kody
`domain_does_not_exist`







## management of users
### list_users
#### parameters
none.
#### return type
`array[User]`
#### return example
```
{
    "users": [
        {
            "id": 1,
            "amail": "franta@example1.com"
            "pubkey": "Xxxxx..."
        }
    ]
}
```




### create_user
#### parameters
```
string amail;
string pubkey;
```

#### example
```
{
    "amail": "tonda@example2.com",
    "pubkey": "Xxxxx..."
}
```
### return example
```
{
    "id": 2,
    "amail": "tonda@example2.com",
    "pubkey": "Xxxxx..."
}
```

### error codes
`user_with_that_identifier_exists`
`invalid_identifier`
`invalid_pubkey`




### edit_user
#### parameters
```
int id
string amail
```
#### example
```
{
    "id": 2,
    "amail": "tonda@example3.com"
}
```
### return example
```
{
    "success": "ok"
}
```
### error codes
`user_does_not_exist`


### delete_user
#### parameters
```
{
    int id
}
```
### error codes
`user_does_not_exist`
`invalid_identifier`
`invalid_pubkey`





# Informace o serveru pro správce
## admin_info
### parameters
none.





# Příkazy uživatele
## user_register
### parameters
string identifier
string pubkey
### example response
```
{
    "result": "ok"
}
```
### error codes
`invalid_identifier`
`invalid_pubkey`
`user_with_that_identifier_exists`
`registration_disabled`




## user_login
### parameters
string password_hash
### response schema
string key_challenge





## user_login2 (continued)
### parameters
string challenge_response
### response example
{
    "result": "ok"
}




## user_logout
### parameters
none.
### response example
{
    "result": "ok"
}




## user_set_pubkey
### parameters
string pubkey
### response example
{
    "result": "ok"
}



## user_set_password
### parameters
```
string password_hash
```
### request example
```
{
    "password_hash": "Xxxxx..."
}
```
### response example
```
{
    "result": "ok"
}
```
### error codes
`invalid_password_hash`
`password_verification_disabled`










## user_set_homeserver_login_password_verification_enabled
### parameters
bool enabled
### response example
{
    "result": "ok"
}




## user_set_homeserver_login_password
### parameters
string password_hash
### response example
{
    "result": "ok"
}




## user_homeserver_info
### parameters
none.
### response example
{
    "result":{
         "app_name": "AMTP Server",
         "app_version": "1.00",
         "hostname": "amtp.example.com"
    }
}







# commandy pro management zablokovaných IP adminem
## admin_list_bans
### parameters
none.
### response example
```
{
    "result": [
        {
            "id": 1,
            "ip": "Xxx.xxx.xxx.xxx",
            "reason": "Bruteforce",
            "expiration": "2020-01-01 00:00:00"
        }   
    ]
}
```




## admin_add_ban
### parameters
string ip
string reason
datetime expiration
### response example
{
    "result": "ok"
}
### error codes
`invalid_ip`





## admin_delete_ban
### parameters
int id
### response example
{
    "result": "ok"
}
### error codes
`ban_does_not_exist`
`invalid_ip`






# commandy pro admina na blokaci uživatelských účtů
## admin_list_user_bans
### parameters
none.
### response example
```
{
    "result": [
        {
            "id": 1,
            "user_amail": "pepa@domain1.example.com"
            "reason": "blbec"
        }
    ]
}
```


## admin_add_user_ban
### parameters
string user_amail
string reason
datetime expiration
### response example
{
    "result": "ok"
}
### error codes
`invalid_user_amail`
`user_does_not_exist`
`invalid_reason`
`invalid_expiration`
`user_is_already_banned`




# Příkazy - Admin - Správa uživatelských tokenů (chybí v NOTES)
## admin_list_user_sessions
### parameters
int user_id
### response example
```
{
    "result": [
        {
            "id": 1,
            "description": "Firefox for Windows version Xxxx..",
            "expiration": "2020-01-01 00:00:00"
        }
    ]
}
```



### admin_delete_user_session
#### parameters
int user_id
int session_id
#### request example
```
{
    "user_id": 1,
    "session_id": 1
}
```
#### response example
```
{
    "result": "ok"
}
```
#### error codes
`session_does_not_exist`
`user_does_not_exist`






# commandy pro správu uživatelských tokenů - "Správa uživatelských tokenů"
## user_list_sessions
### parameters
none.
### response example
{
    "result": [
        {
            "id": 1,
            "description": "Firefox for Windows version Xxxx..",
            "expiration": "2020-01-01 00:00:00"
        }
    ]
}




## user_delete_session
### parameters
int id
### response example
```
{
    "result": "ok"
}
```
### error codes
`session_does_not_exist`




## user_update_session
### parameters
int id
string description
### request example
```
{
    "id": 1,
    "description": "home PC"
}
```
### response example
```
{
    "result": "ok"
}
```










# modul zprav
## pridani zpravy do databaze
### priklad
```
{
    "command": "com.github.libersoft.messages.add",
    "from": "franta@server1.example.com",
    "to": "pepa@server1.example.com",
    "subject": "Ahoj Pepo",
    "body": "Jak se mas?",
}
```
### odpoved
```
{
    "id": 1,
    "ts": "2020-01-01 00:00:00"
}
```
## seznam zprav
### priklad
```
{
    "command": "com.github.libersoft.messages.list",
}
```
### odpoved
```
{
    "messages": [
        {
            "id": 1,
            "from": "franta@server1.example.com",
            "to": "pepa@server1.example.com",
            "subject": "Ahoj Pepo",
            "body": "Jak se mas?",
        }
    ]
}
```
## uprava zpravy
### priklad
```
{
    "command": "com.github.libersoft.messages.edit",
    "id": 1,
    "subject": "Ahoj Pepo, jak se mas?"
}
```
Uprava zpravy je mozna pouze v pripade, ze je zprava vytvorena uzivatelem, a nebyla jiz odeslana.

### odpoved
```
{
    "success": "ok"
}
```
## smazani zpravy
### priklad
```
{
    "command": "com.github.libersoft.messages.delete",
    "id": 1
}
```
### odpoved
```
{
    "success": "ok"
}
```
## predani zpravy na cilovy server
Po nastaveni priznaku "ready_to_send" klientem, zacne modul zprav pokusy o doruceni zpravy na cilovy server, viz "Spojení server-server" a "Zpravy mezi moduly", priklad zpravy predane z modulu do jadra.







# for v2

    

## BSON
realne treba taky CBOR, ale hlavne protobuf(?).  
### navic komprese: https://wicg.github.io/compression/
    https://github.com/w3c/webtransport/issues/167






# wtfs

- To je způsobeno především snahou těchto aktualizací o navázání na původní koncepty, což je velmi limitující faktor, který vyžaduje změnu přístupu.

- řadu dalších funkcionalit, kde je okamžitá komunikace nezbytná (např. videohovory, sdílení obrazovky, přenos velkých souborů apod.) 

- Tím jsou sníženy latence a zvýšena propustnost při přenosu dat.

> ?


- přenos dat v online hrách apod.).


- BSON, který kombinuje výhody strojově i lidsky snadno čitelného formátu JSON, 

> BSON, který kombinuje výhody formátu JSON s efektivitou binárního formátu.

- Snadné zpracování dat: Umožňuje přímý přístup k jednotlivým prvkům dat, aniž by bylo potřeba procházet celý objekt, 
> nevim na jaky urovni to mas na mysli, ale myslim ze na binarni urovni se musi vzdy projit cely objekt, podobne jako kdyz se parsuje json


- Integrace s databázovými systémy: Mnoho současných databázových systémů, jako je např. MongoDB, nativně používá BSON pro ukládání a zpracování dat. To může usnadnit integraci s těmito databázemi, což je výhodné pro aplikace vyžadující komplexní databázové operace.

az na to ze vubec. Podle chatgpt pouziva bson jen mongo a Couchbase, a naprosto neni jasny jak by to mohlo usnadnit integraci.










## messages
- Text messages are in [Markdown](https://www.markdownguide.org/) format.
- 
- All the messages are end to end encrypted. Users can choose the encryption algorithm from those supported by server. Users store their private key and share their public key on the server.
- 
- All the contacts stored on the server are encrypted by end to end encryption

> Some encrypted backup and file sharing services provide client-side encryption. The encryption they offer is here not referred to as end-to-end encryption, because the services are not meant for sharing messages between users[further explanation needed]. However, the term "end-to-end encryption" is sometimes incorrectly used to describe client-side encryption.[24]


