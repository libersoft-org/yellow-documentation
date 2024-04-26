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
  - [**Core communication**](#core-communication)
  - [**Module communication**](#module-communication)
- [**Error handling**](#error-handling)
  - [**Error from core**](#error-from-core)
  - [**Error from module**](#error-from-module)
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

**ODTP** operates over [**WebTransport**](https://www.w3.org/TR/webtransport/) protocol for connection establishment and encrypted data transmission and [**BSON**](https://en.wikipedia.org/wiki/BSON) for structured, compact command representation.

## Security

- TODO

## Modularity

- TODO

## Connection establishment

- TODO

## Message structure

User defines if they want to communicate with the core or with a module.

### Core communication:

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

### Module communication:

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

## Error handling

### Error from core:

```json
{
 "error": 1,
 "message": "Command not found"
}
```

### Error from module:

```json
{
 "module": "messages",
 "data": {
  "error": 1,
  "message": "Command not found"
 }
}
```

## Example

- TODO
