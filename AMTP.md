# Advanced Mail Transfer Protocol (AMTP) - documentation

## Table of contents

- [**Development state**](#development-state)
- [**About**](#about)
- [**Architecture**](#architecture)
- [**Identity**](#identity)
- [**Security**](#security)
- [**Client to server connection**](#client-to-server-connection)
- [**Server to server connection**](#server-to-server-connection)
- [**Modules**]()
- [**Example**](#example)


## Development state

This is just a draft. It is not the final version of protocol, some parts might be obsolete, we are working on new version!

## About

The **Advanced Mail Transfer Protocol (AMTP)** is the next generation of e-mail protocol, extending beyond the traditional limitations of SMTP by supporting a broader range of communication modules. Unlike SMTP, AMTP uses more modern, efficient, and secure methods for data transfer, identification, and addressing by leveraging [**ODTP**](./ODTP.md) (Open Data Transfer Protocol).

### Protocol objective

- **Extensibility**: Support for communication modules for different purposes (messages, forum, social media features, etc.)
- **Efficiency**: Utilization of WebTransport and BSON messages to reduce latency and increase throughput
- **Security**: Secured data transfer and end-to-end encryption
- **Universality**: Retaining the e-mail identity (user@domain.tld) while expanding functionality

## Architecture

## Identity

- User's identity is in e-mail address format, the same applies to aliases, chat groups, news groups etc.

## Security

## Client to server conneection

## Server to server conneection

## Modules

## Example

# **TODO:** MOVE THE FOLLOWING TO ADMIN MODULE:

### Admin login <a name="a2s-login"></a>

- Admin has to be logged in in order to manage the server. If the login is successful, they'll get the admin token that has to be sent in every request

- Request example:

```json
{
 "api_name": "admin_sysinfo",
 "admin_token": "1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"
}
```

- Response example:

```json
{
 "app_name": "Yellow Server",
 "app_version": "0.01",
 "os_name": "Linux",
 "os_version": "5.10.0-19-amd64",
 "cpu_model": "Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz",
 "cpu_cores": 40,
 "cpu_arch": "x64",
 "cpu_load": 0,
 "ram_total": 8332619776,
 "ram_free": 7842000896,
 "hostname": "mail",
 "networks": [
  {
   "ens1": [
    "192.168.0.5",
    "12ab::34cd:56ef:7890:1234"
   ]
  }, {
   "ens1": [
    "40.30.20.10",
    "12ab::34cd:56ef:7890:4321"
   ]
  }
 ],
 "uptime": "8 days, 17 hours, 32 minutes, 52 seconds"
}
```

### Admin logout <a name="a2s-logout"></a>

### Domains management <a name="a2s-domains"></a>

#### Domains list: <a name="a2s-domains-list"></a>

- Request example:

```json
{
 "api_name": "admin_get_domains",
 "admin_token":"1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"
}
```

- Response example:

```json
[
 {
  "id": 1,
  "name": "domain1.tld",
  "created":"2023-11-25 14:57:03"
 }, {
  "id": 2,
  "name": "domain2.tld",
  "created": "2023-11-26 16:21:08"
 }
]
```

#### Add a new domain <a name="a2s-domains-add"></a>

#### Set the existing domain <a name="a2s-domains-set"></a>

#### Delete the domain <a name="a2s-domains-del"></a>


### Users management <a name="a2s-users"></a>

#### Users list <a name="a2s-users-list"></a>

#### Add a new user <a name="a2s-users-add"></a>

#### Set the existing user <a name="a2s-users-set"></a>

#### Delete the user <a name="a2s-users-del"></a>


### Aliases management <a name="a2s-aliases"></a>

#### Aliases list <a name="a2s-aliases-list"></a>

#### Add a new alias <a name="a2s-aliases-add"></a>

#### Set the existing alias <a name="a2s-aliases-set"></a>

#### Delete the alias <a name="a2s-aliases-del"></a>


### Admins management <a name="a2s-admins"></a>

#### Admins list <a name="a2s-admins-list"></a>

#### Add a new admin <a name="a2s-admins-add"></a>

#### Set the existing admin <a name="a2s-admins-set"></a>

#### Delete the admin <a name="a2s-admins-del"></a>


```json
```

## User to server communication <a name="u2s"></a>

### User login <a name="u2s-login"></a>

- User logs in using their e-mail address and password. The additional verification is possible (2FA etc.).
- If the login is successful, they'll get user token that is sent in all requests.
- User tokens may expire if they are not used for longer time period.
- User tokens are stored in the server database and users store it localy.
- If the user has more tokens for the same account (for example from more devices), they can delete other tokens by their request.

### Server info <a name="u2s-serverinfo"></a>

- Users can request other server's information such as maximum message length accepted, maximum file size accepted etc.

### User info <a name="u2s-userinfo"></a>

- Users can request other user's information such as their client software and its version, visible name, photo etc.

## **TODO:** MOVE THE FOLLOWING TO CONTACTS MODULE:

### Contacts management <a name="u2s-contacts"></a>

- Contacts for each user are stored server side.
- Users are able to manage them.
- All the contacts stored on the server are encrypted by end to end encryption

## **TODO:** MOVE THE FOLLOWING TO MESSAGES MODULE:

### Message <a name="u2s-messages"></a>

- Users can send messages to other users within the same server or to users on other servers as well.
- Message can contain the text or file
- Text messages are in [Markdown](https://www.markdownguide.org/) format.
- Files can contain any data. Client software may process the data in their own way (eg. image, audio. video or other type od data can be viewed within the client software in chat)
- Maximum message length and file size can be regulated by server.
- All the messages are end to end encrypted. Users can choose the encryption algorithm from those supported by server. Users store their private key and share their public key on the server. Other users (including those from other servers) can ask server for user's public key and encryption algorithm and they get it. Public key and algorithm is saved for each message on server. User can change encryption key and algorithm anytime.

#### Send message to user <a name="u2s-messages-send2user"></a>
#### Send message to group <a name="u2s-messages-send2group"></a>
#### Receive message from user <a name="u2s-messages-receiveuser"></a>
#### Receive message from user in group <a name="u2s-messages-receivegroup"></a>
