# Open Data Transfer Protocol (ODTP) - documentation

Open Data Transfer Protocol (ODTP) is an universal communication network protocol used in software like [**Yellow**](https://yellow.libersoft.org).

This documents contains the complete protocol documentation.

## Development state

- Early stage, not completed

## Protocol core

- Data are sent using HTTPS over WebTransport
- All the commands over WebSocket are sent in JSON format (it is recommended to send the JSON data in compact format)
- There is a permanent connection between client and server
- Server to server connections are not permanent (the first server disconnects after data are sent)
