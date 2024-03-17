# Open Data Transfer Protocol (ODTP) - documentation

## Table of contents

- [**Development state**](#development-state)
- [**About**](#about)
- [**Protocol objectives**](#protocol-objectives)
- [**Architecture**](#architecture)
- [**Security**](#security)
- [**Modularity**](#modularity)
- [**Connection establishment**](#connection-establishment)
- [**Message structure**](#message-structure)
- [**Commands specification**](#commands-specifications)
- [**Error handling**](#error-handling)
- [**Example**](#example)


## Development state

- Early stage, not completed

## About

The Open Data Transfer Protocol (ODTP) is a protocol that describes application layer and data format used in software like [**Yellow**](https://yellow.libersoft.org). It is designed to facilitate reliable and secure data exchange between two points.

## Protocol objectives

- **Efficiency** - Minimize overhead for faster data transfer, providing multiplexed and low-latency connection
- **Reliability** - Ensure data integrity and order
- **Security** - Secure data transfer using WebTransport's underlying protocols
- **Flexibility** - Support a wide range of applications and data types
- **Modularity** - Supports communication between separate modules

## Architecture

**ODTP** operates over **WebTransport** protocol for connection establishment and encrypted data transmission and Binary JSON (BSON) for structured, compact command representation.

## Security

## Message structure

User defines if they want to communicate with the core or with a module.

### Core communication example:

```json
{
 "command": "...",
 "data": {
  .
  .
  .
 }
}
```

### Module communication example:

```json
{
 "module": "file_sharing",
 "error": 0,
 "data": {
  "command": "download",
  "file_id": "1234567890abcdef"
 }
}
```

## Connection establishment

## Error handling

### Error from core example:

```json
{
 "error": 1,
 "message": "Command not found"
}
```

### Error from module example:

```json
{
 "module": "messages",
 "data": {
  "error": 1,
  "message": "Command not found"
 }
}
```

## DELETE NOTES:

- Data are sent using HTTPS over WebTransport
- All the commands over WebTransport are sent in BSON format
