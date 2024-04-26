# Yellow - frequently asked questions

## What is ODTP?

**Open Data Transfer Protocol (ODTP)** is the application layer network protocol that uses WebTransport + JSON for data transfer.

## What is NEMP?

**The New E-Mail Protocol (NEMP)** is the new generation of e-mail protocol. It replaces the old e-mail protocols (SMTP, IMAP, POP3) and just describes the user's identity, not the data they are processing (messages, contacts etc.).

## What is Yellow?

**Yellow** is a very innovative decentralized, secure, modulable and open source instant messaging and social media software. It is the implementation of **ODTP** and **NEMP** protocols.

## Why is this software named "Yellow"?

**Yellow** is the color of cheerfulness, playfulness, warmth, energy and abundance. At the same time, it is the color on the Liberland and anarcho-capitalist flags. Furthermore, "Yellow" sounds like "Hello", which is symbolic for instant messaging (initial greeting).

## Why is NEMP using conversations instead of folders?

Folders system (Inbox, Sent etc.) is very obsolete concept of message storing that was created before proper e-mail client software even existed. The original e-mail worked in file system structure where directories had files had roles of e-mail folders and messages. This concept was adopted in all e-mail clients that were released later. Storing the e-mails in folders is very impractical solution, because if you search for message history, you have to switch between folders and search the content of each message. On the other hand conversations resolve this problem and make history search very fast, clear and easy. You don't have to copy the history of conversation in every single message so it saves disk space on servers.

Custom folders in classic e-mail clients had some advantages and are present in Yellow Client too. You can simply move whole conversations into folder (for example "Work", "Family" etc.). There is also a special non-conversation chat called "Own messages" where you can store your notes.

## Is Yellow Client backward compatible with classic e-mail protocols (SMTP, IMAP, POP3)?

Right now it is not backward compatible yet, but this feature will be added in future to Yellow Client.

## Why is decentralization and distribution important?

In today world, where many governments and big corporations are continously censoring users' content, decentralized and distributed network structure is extremely important. Even if you run centrally a free and open source service like Signal, some governments can push you to censor some content or they can easily block your servers.

For example WhatsApp and many other centrally run messaging services are blocked in China which leads to inaccessibility of such service for more than 1 billion of people in China.

Running the decentralized and distributed network of messaging servers or serverless messaging software can resolve this problem. Classic e-mail servers are distributed. Everyone is able to buy a domain and VPS very cheap and run their own e-mail server. Most of the e-mail servers are not banned even in countries like China, where government is hugely blocking many foreign servers.

It is **highly recommended not to use messaging software that is not decentralized and / or distributed**. NEMP is fully distributed solution the same way like SMTP (classic e-mail). You can use [**high availability**](https://en.wikipedia.org/wiki/High-availability_cluster) solution for your server so you'll run your own decentralized network just to be sure you'll never lose your data if anything bad happens to your server.

## What is the difference between decentralized and distributed network?

**Decentralized network** means that you have many nodes on the same network, ideally run in different part of the world and by different provider. If some node is unavailable, you can just connect to other node.

**Distributed network** means that you have just a part of the network run either centralized or decentralized. For example if you run your e-mail server, you can attach it with your domain names and you run just the part of the network that is identified by e-mail addresses with your domain name. Servers are communicating with each other and they exchange the content.

Having a both decentralized and distributed solution is very important for stability of the network.

## Why is end-to-end encryption important?

The end-to-end encryption is really recommended for everyone. Your personal and business data are potentially exploitable.

For example:

- You don't want your personal photos and videos to be published online
- You don't want your business competitors to know your vendors, customers and other business data
- You don't want thieves to know when you leave your home
- You don't want hackers to know passwords and other sensitive data to other services you're using and potentionaly delete your data or blackmail you
- You don't want anyone to know your location

These are just few examples, there are many more.

It is **highly recommended not to use messaging software that does not use end-to-end encryption**.

## Why is important to use open source software?

Open source means that the source code of the software is published for free to everyone. This way, you or other people can review the code, point out its potential vulnerabilities and also propose how to fix it. Developers can easily adopt such fix and publish the new fixed verison. Everyone can also check that there is no malicious code in the software. This is not possible in case of proprietary (closed source) software.

It is **highly recommended not to trust and not to use messaging software that is not open source** (both server and client software).

## Comparison with other messaging software

Please take a look at [**comparison tables**](https://yellow.libersoft.org/).

## Element (using Matrix protocol) is also open source, has a distributed network and using end-to-end encryption. How does it differ from Yellow?

Element (using Matrix protocol), the same as with Yellow (using ODTP and NEMP protocol), is the software that is fully open source, uses end-to-end encryption and has distributed server structure. Here are the differences between Yellow and Element:

- Yellow is an open modular platform, not a comprehensive software
- Yellow is a multiprotocol platform (except ODTP and NEMP, it can implement SMTP, Matrix and other protocols as well)
- Yellow has an intention to be modulary featured messaging and social media software, Element has just basic instant messaging functionality

## What are the cases of security issues with instant messaging applications in past?

Here is the article from Amnesty International about how (un)safe is to use well known instant messaging applications:

- https://www.amnesty.org/en/latest/campaigns/2016/10/which-messaging-apps-best-protect-your-privacy/

Other articles related to security and controversies:

### WeChat

- https://en.wikipedia.org/wiki/WeChat#Controversies
- https://nordvpn.com/blog/is-wechat-safe/
- https://www.wsj.com/articles/wechat-becomes-a-powerful-surveillance-tool-everywhere-in-china-11608633003
- https://www.bloomberg.com/news/features/2022-07-12/wechat-is-china-s-beloved-surveillance-tool
- https://www.washingtonpost.com/opinions/2020/05/07/wechat-users-outside-china-face-surveillance-while-training-censorship-algorithms/
- https://www.cbc.ca/news/science/wechat-surveillance-users-outside-china-1.5558503

### QQ

- https://en.wikipedia.org/wiki/Tencent_QQ#Controversies_and_criticisms
- https://www.privateinternetaccess.com/blog/tencent-has-been-caught-spying-on-your-web-browsing-history-with-qq-messenger/

### Zalo

- https://e.vnexpress.net/news/news/zalo-suspected-to-collect-iphone-data-4123342.html

### ICQ

- https://en.wikipedia.org/wiki/ICQ#Cooperation_with_Russian_intelligence_services

### SnapChat

- https://en.wikipedia.org/wiki/Snapchat#Controversies

### WhatsApp

- https://en.wikipedia.org/wiki/WhatsApp#Controversies_and_criticism

### iMessage

- https://en.wikipedia.org/wiki/IMessage#Security_and_privacy

### Telegram

- https://en.wikipedia.org/wiki/Telegram_(software)#Security

### Kik

- https://en.wikipedia.org/wiki/Kik_Messenger#Security

### Skype

- https://en.wikipedia.org/wiki/Skype#Security_and_privacy

### Viber

- https://en.wikipedia.org/wiki/Viber#Security_audit

### LINE

- https://en.wikipedia.org/wiki/Line_(software)#Security

### Hike

- https://en.wikipedia.org/wiki/Hike_Messenger#Privacy_&_Security

### Signal

- https://en.wikipedia.org/wiki/Signal_(software)#Security

### Threema

- https://en.wikipedia.org/wiki/Threema#Privacy
