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
result "ok"




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




## user_setpubkey
### parameters
string pubkey
### response example
{
    "result": "ok"
}




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






# commandy pro správu uživatelských tokenů
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
{
    "result": "ok"
}
### error codes
`session_does_not_exist`
















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








