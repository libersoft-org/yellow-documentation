# Advanced Mail Transfer Protocol (AMTP) - documentation

## Table of contents

- [**Development state**](#development-state)
- [**About**](#about)
- [**Architecture**](#architecture)
- [**Identity**](#identity)
- [**Security**](#security)
- [**Client to server connection**](#client-to-server-connection)
- [**Server to server connection**](#server-to-server-connection)
- [**DNS connection**](#dns-connection)
- [**Modules**]()
- [**Example**](#example)


## Development state

This is just a draft. It is not the final version of protocol, some parts might be obsolete, we are working on new version!

## About

The **Advanced Mail Transfer Protocol (AMTP)** is the next generation of e-mail protocol, extending beyond the traditional limitations of [**SMTP**](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol) by supporting a broader range of communication modules. Unlike SMTP, AMTP uses more modern, efficient, and secure methods for data transfer, identification, and addressing by leveraging [**ODTP**](./ODTP.md) (Open Data Transfer Protocol).

### Protocol objectives

- **Extensibility**: Support for communication modules for different purposes (messages, forum, social media features, etc.)
- **Efficiency**: Utilization of ODTP protocol to reduce latency and increase throughput
- **Security**: Secured data transfer and end-to-end encryption
- **Universality**: Retaining the e-mail identity (**user@domain.tld**) while expanding functionality

### What is common with SMTP protocol:

- The type of identity (**user@domain.tld**)
- Network topology (distributed model)
- Server-server non-permanent connection

### What is different from SMTP protocol:

- The type of authentication (signing by private key)
- Security by default (secured channel and end-to-end encryption by default)
- Different application layer protocol (**WebTransport**) - as described in **ODTP**
- Message format (**BSON**) - as described in **ODTP**
- Client-server permanent connection
- Modularity

## Architecture

**AMTP** operates on the principle of a persistent connection between the client and server using **ODTP**, enabling real-time communication and data exchange. The protocol supports both client-server and server-server communication for message passing and other data object exchanges. Server-server connections are not persistent.

## Identity

- User's identity is in e-mail address format, the same applies to aliases, chat groups, news groups etc.

## Security

### User and administrator authentication

The authentication process for users and administrators is designed to ensure that sensitive information remains confined to the user's device. This is achieved through a asymmetric encryption strategy, outlined as follows:

#### 1. Key generation and initial setup:
- Upon initiating the registration process, the client generates a unique private key on the device. Utilizing an encryption algorithm compatible with the server, a corresponding public key is derived from this private key.
- Both keys are securely stored on the client's device. However, only the public key, along with the identification of the utilized encryption algorithm, is transmitted to the server during account registration. The server then records the public key and the identification of encryption algorithm in its database for future authentication processes. It is crucial to note that the private key is NEVER transmitted or leaves the client's device, ensuring maximum security.

#### 2. Authentication sequence:
- For authentication, the client sends a login request accompanied by their username to the server.
- In response, the server generates a random string (containing at least 40 characters), which is then encrypted using the client's public key before being sent back to the client.
- Upon receipt, the client utilizes their private key to decrypt the received string, sending the decrypted string back to the server for verification.
- The server compares the decrypted string with the original random string. If they match, it confirms the client's identity and grants access by issuing a session token to the client.

This authentication method leverages the strengths of asymmetric encryption to safeguard user data, ensuring that sensitive information, such as private keys, remains protected within the confines of the user's device. This approach not only enhances security but also aligns with best practices for secure communications in modern applications.

## DNS connection

## Modules

## Commands

### Client to server connection

#### Admin commands

##### Admin login <a name="a2s-login"></a>

- Admin has to be logged in in order to execute commands starting **admin_***. If the login is successful, admin gets the admin token that has to be sent in every following request.

###### 1. Login request

**Request example:**

```json
{
 "command": "admin_login_request",
 "user": "admin",
}
```

**Response example:**

```json
{
 "command": "admin_login_request",
 "error": 0,
 "data": {
  "verification_string": "1A2B3C4D5E6F1A2B3C4D5E6F1A2B3C4D5E6F1A2B3C4D5E6F",
 }
}
```

**Request example:**

```json
{
 "command": "admin_login_verify",
 "user": "admin",
 "verification_string": "abcdefghijklmnopqrstuvwxyz1234567890abcd"
}
```

**Response example:**

```json
{
 "command": "admin_login_verify",
 "error": 0,
 "data": {
  "admin_token": "1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"
 }
}
```

##### Admin system info <a name="a2s-sysinfo"></a>

**Request example:**

```json
{
 "command": "admin_sysinfo",
 "admin_token": "1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"
}
```

**Response example:**

```json
{
 "command": "admin_sysinfo",
 "data": {
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
    "ens2": [
     "40.30.20.10",
     "12ab::34cd:56ef:7890:4321"
    ]
   }
  ],
  "uptime": "8 days, 17 hours, 32 minutes, 52 seconds"
 }
}
```

##### Admin logout <a name="a2s-logout"></a>

##### Domains list: <a name="a2s-domains-list"></a>

**Request example:**

```json
{
 "command": "admin_get_domains",
 "admin_token":"1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"
}
```

**Response example:**

```json
{
 "command": "admin_get_domains",
 "data": {
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
 }
}
```

##### Add a new domain <a name="a2s-domains-add"></a>

```json
```

##### Set the existing domain <a name="a2s-domains-set"></a>

##### Delete the domain <a name="a2s-domains-del"></a>

##### Users list <a name="a2s-users-list"></a>

##### Add a new user <a name="a2s-users-add"></a>

##### Set the existing user <a name="a2s-users-set"></a>

##### Delete the user <a name="a2s-users-del"></a>

##### Aliases list <a name="a2s-aliases-list"></a>

##### Add a new alias <a name="a2s-aliases-add"></a>

##### Set the existing alias <a name="a2s-aliases-set"></a>

##### Delete the alias <a name="a2s-aliases-del"></a>

##### Admins list <a name="a2s-admins-list"></a>

##### Add a new admin <a name="a2s-admins-add"></a>

##### Set the existing admin <a name="a2s-admins-set"></a>

##### Delete the admin <a name="a2s-admins-del"></a>

#### User commands

##### User login <a name="u2s-login"></a>

- User logs in using their e-mail address and password. The additional verification is possible (2FA etc.).
- If the login is successful, they'll get user token that is sent in all requests.
- User tokens may expire if they are not used for longer time period.
- User tokens are stored in the server database and users store it localy.
- If the user has more tokens for the same account (for example from more devices), they can delete other tokens by their request.

##### Server info <a name="u2s-serverinfo"></a>

- Users can request other server's information such as maximum message length accepted, maximum file size accepted etc.

##### User info <a name="u2s-userinfo"></a>

- Users can request other user's information such as their client software and its version, visible name, photo etc.


##### Server to server connection

- TODO
