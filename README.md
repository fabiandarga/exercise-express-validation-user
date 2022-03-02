# User Daten Validieren

Die Route `POST /users` soll ein JSON Objekt mit user daten bekommen.
z.B.:  
```
{
    "firstName": 'John',
    "lastName": 'Doe',
    "age": 36,
    "email": 'john@example.com',
    "userName": 'MisterCool'
}
```
### Validierung
Der Server soll testen ob die Daten den vorgegebenen Regeln entsprechen.

* Der Server soll mit **Success** antworten, wenn alles in Ordnung ist.  
* Wenn es invalide Daten gibt, sollen alle Fehler-Meldungen zurückgegeben werden.

### Regeln
#### firstName
* Required
* Nur Buchstaben
* maximal 30 Zeichen
#### lastName
* Required
* Nur Buchstaben
* maximal 30 Zeichen
#### age
* Required
* Nur Zahlen
* 18-99
#### email
* Required
* Gültige Email 
#### userName
* Required
* Nur Buchstaben
* Keine Leerzeichen
* Keine Sonderzeichen
* maximal 15 Zeichen
