https://www.jsonrpc.org/specification

```


Obecna forma prikazu z klienta k serveru je (priklad):
{

  cmd:"user_login",

  params: {
	name:...,
	password:...
  }
  
}


Spojení server-server

{
	error: "you_are_not_welcome_here",
message: "Your server is banned from connecting to this server. Please contact the administrator for more information."
	

}

class ErrorCodes(Enum):
	you_are_not_welcome_here = 1
	invalid_user = 2
	


if error == "admin_you_are_not_welcome_here":
	You are not welcome here. Please contact the administrator for more information.




-------=-------=---

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









===





## management of domains
Domain datatype:
```
{
    optional int id;
    string domain;
    datetime ts;
}
```
commands:
### list_domains
#### parameters
none.
#### return type
`list[Domain]`

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
    string domain
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
### edit_domain
#### request schema
```
Domain
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

## management of users
### list_users
#### parameters
none.
#### return type
`list[User]`
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
}```
### error codes
`user_exists`

### edit_user
#### parameters
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








