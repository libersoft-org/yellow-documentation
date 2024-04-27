### Message <a name="u2s-messages"></a>

These are just some notes, the documentation is not yet available.

- Users can send messages to other users within the same server or to users on other servers as well.
- Message can contain the text or file
- Text messages are in [Markdown](https://www.markdownguide.org/) format.
- Files can contain any data. Client software may process the data in their own way (eg. image, audio. video or other type od data can be viewed within the client software in chat)
- Maximum message length and file size can be regulated by server.
- All the messages are end to end encrypted. Users can choose the encryption algorithm from those supported by server. Users store their private key and share their public key on the server. Other users (including those from other servers) can ask server for user's public key and encryption algorithm and they get it. Public key and algorithm is saved for each message on server. User can change encryption key and algorithm anytime.
- Identity in message module can represent mailbox and / or alias (none, either one or both)
- Messages that are sent to a specific alias identity can be sent to multiple addresses (not just one).
- Catch-all - messages sent to a non-existent account, but with correct domain, can be sent to multiple addresses?
- TODO - add a command that will just add a message to mailbox without sending it over the network - this is benefitial for example when a user changes their private + public key and wants to re-encrypt the whole chat history - so they delete all messages in their mailbox on server and just send them from client to server again, now encrypted with a new private key. Such messages will have old date and time etc.
- TODO - chat groups and news groups will NOT have their own identity. They only have owners / moderators, that are identities

<a name="commands-c2s-admin-catchall"></a><h5>Doménový koš</h5>
   <div>Doménový koš slouží k zachytávání a přeposílání došlých zpráv, které jsou poslané sice na existující doménu, ale neexistující identitu a to jednomu či více příjemcům. Jelikož identita neexistuje, použije se pro zašifrování zprávy veřejný klíč serveru. Server následně zprávu rozšifruje svými soukromým klíčem a opět zašifruje šifrou každého jednotlivého příjemce, kterému se má zpráva přeposlat. Pokud neexistuje v seznamu příjemců doméhového koše jediný příjemce, znamená to, že doméhový koš je pro doménu vypnutý.</div>
   <a name="commands-c2s-admin-catchall-list"></a><h6>Seznam příjemců</h6>
   <ul>
    <li>TODO</li>
   </ul>
   <a name="commands-c2s-admin-catchall-add"></a><h6>Přidat příjemce</h6>
   <ul>
    <li>TODO</li>
   </ul>
   <a name="commands-c2s-admin-catchall-set"></a><h6>Upravit příjemce</h6>
   <ul>
    <li>TODO</li>
   </ul>
   <a name="commands-c2s-admin-catchall-del"></a><h6>Smazat příjemce</h6>
   <ul>
    <li>TODO</li>
   </ul>

#### Send message to user <a name="u2s-messages-send2user"></a>
#### Send message to group <a name="u2s-messages-send2group"></a>
#### Receive message from user <a name="u2s-messages-receiveuser"></a>
#### Receive message from user in group <a name="u2s-messages-receivegroup"></a>
