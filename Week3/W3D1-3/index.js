/*
OPDRACHT A -
Doe een GET request op [https://wincacademy.nl/](https://wincacademy.nl/) .

- Wat is de response?
De volledige HTML pagina met alle elementen

- Kun je ergens in de header terugvinden op wat voor type server onze website draait?
Ja, dat is 'Apache'.

OPDRACHT B -

Stel voor onderstaande oefeningen de header in met: **key** Content-Type en **value** application/json

1. Doe een POST request op [https://httpbin.org/post](https://httpbin.org/post),
met als **body** het onderstaande object, maar dan omgebouwd tot json (je kunt Googlen hoe je dit doet 😃)


Wat is nu de response?

{
  "args": {},
  "data": "\n{opleiding:\"Winc Academy\",\noordeel:\"is de allerbeste!\"\n}\n",
  "files": {},
  "form": {},
  "headers": {
    "Accept": "*",
    "Accept-Encoding": "gzip, deflate, br",
    "Content-Length": "58",
    "Content-Type": "application/json",
    "Host": "httpbin.org",
    "Postman-Token": "4e4f6e2b-f537-483a-a00d-0b05896a0434",
    "User-Agent": "PostmanRuntime/7.24.1",
    "X-Amzn-Trace-Id": "Root=1-5ec26f62-1f960cae83957a2622138f18"
  },
  "json": null,
  "origin": "84.85.155.188",
  "url": "https://httpbin.org/post"
}


Welke HTTP status code krijg je nu? Waarom krijg je deze terug denk je?

Status: 200 OK -> is goedgekeurd

2. Behoud de json die je stuurt, maar verander de request naar een DELETE en de url naar

Wat is nu de response?

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">
<title>404 Not Found</title>
<h1>Not Found</h1>
<p>The requested URL was not found on the server.  If you entered the URL manually please check your spelling and try again.</p>

Welke HTTP status code krijg je nu? Waarom krijg je deze terug denk je?

status: 404 NOT FOUND -> is geen bestaande URL
*/
