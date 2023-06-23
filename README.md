WP Simple Gutenberg Block Greeting Plugin Sending Input Message to any OAuth2 Layered based REST API
========================

A simple wordpress gutenberg input block plugin that allows to send the message typed to any REST API with a OAuth2 Layer


Requirements
------------

  * WP Gutenberg Editor
  * An available REST API Endpoint based on OAuth2.0 layer with grant type clients_credentials. If you don't have an available REST API Endpoint, you may install this [WP Rest API Plugin With OAuth2 Layer plugin][1] on a seperate Wordpress Installation.
  

Installation
------------

* Clone/Insert these files in the WordPress Installation Plugin Directory in a folder (and name/rename it maybe ibl-gutenberg-greeter)
* Edit the variables in crud.js (located at src >> crud.js) accordingly :
```bash
const LOGIN_ENDPOINT_URL = 'https://ibleducation-instance1.local/wp-json/greetingbot/v1/login'
const SEND_GREETINGS_ENDPOINT_URL = 'https://ibleducation-instance1.local/wp-json/greetingbot/v1/send'
const GRANT_TYPE = 'client_credentials'
const CLIENT_ID = 'michaeloncode'
const CLIENT_SECRET = 'michaeloncode'
```
* Run on your terminal on the current plugin folder :

```bash
$ npm run build
```

  * Once finished, you can then activate the plugin on the Wordpress Installation

Usage
------------

* Open a gutenberg editor and search for these keywords
```bash
{
    "greeting"
    "ibleducation"
}
```
* You should be able to identify the new Gutenberg Block and any message you type in the block would be sent as a request to your REST API Endpoint using this request body format (example) :
```bash
{
    "greeting":"Hello World!"
}
```

Enjoy !


[1]: https://github.com/michael-on-code/ibleducation-oauth2-greeting-api