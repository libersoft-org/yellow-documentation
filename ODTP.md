# Open Data Transfer Protocol (ODTP) - documentation

## Table of contents
- [**About**](#about)
- [**Development state**](#development-state)
- [**Protocol objectives**](#protocol-objectives)
- [**Architecture**](#architecture)
- [**Security**](#security)
- [**Connection establishment**](#connection-establishment)
- [**Message structure**](#message-structure)
- [**Commands specification**](#commands-specifications)
- [**Error handling**](#error-handling)
- [**Example**](#example)

## About

The Open Data Transfer Protocol (ODTP) is an universal communication network protocol used in software like [**Yellow**](https://yellow.libersoft.org). It is designed to facilitate reliable and secure data exchange between two points. Leveraging the WebTransport protocol for connection establishment and data transmission and Binary JSON (BSON) for structured, compact command representation.

This documents contains the complete protocol documentation.

## Development state

- Early stage, not completed

## Protocol objectives

## Architecture

## Security

## Connection establishment

## Message structure

## Commands specification

## Error handling

## Example

## DELETE NOTES:

- Data are sent using HTTPS over WebTransport
- All the commands over WebSocket are sent in JSON / BSON format (it is recommended to send the JSON data in compact format)
- There is a permanent connection between client and server
- Server to server connections are not permanent (the first server disconnects after data are sent)
