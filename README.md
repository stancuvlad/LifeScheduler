<p>
  <h1 align="center">LifeScheduler</h1>
</p>

## Proiect Cloud
## Introducere

Descriere problema

Una dintre cele mai intampinate probleme in ziua de astazi este gestionarea timpului precum si a responsabilitatilor pe care le avem. Pentru a avea posibilitatea de a ne organiza mai bine lucrurile pe care la avem de facut, de a ne organiza timpul sau pentru a putea fi stabilite anumite locuri unde trebuie sa ajungem sau pe care am dori sa le vizitam, o solutie ar fi crearea unei aplicatii mobile care sa ofere aceste optiuni.

Aplicatia respectiva ar oferi utilizatorilor posibilitatea de a introduce date, pe categorii, de a le modifica sau sterge si cel mai important lucru, de a le vizualiza. In acest sens, cea mai eficienta solutie ar fi folosirea unui serviciu de Cloud Computing care sa ofere posibilitatea de a crea o baza de date, care sa poata fi gestionata/accesata folosind printre altele un server. In acest sens, o modalitate ca aplicatia sa acceseze datele ar fi folosirea unui RESTful API. Pentru a avea posibilitatea de lucra cu o baza de date, de a crea un server si un RESTful API, este necesar ca serviciul Cloud sa ofere si un mediu de dezvoltare pentru o mai usoara realizare a solutiei propuse.

Cel mai potrivit serviciu de Cloud Computing in vederea dezvoltarii unui RESTful API ar fi folosirea unui PaaS (Platform as a Service). PaaS este un serviciu de cloud computing care este folosit in principial de dezvoltatorii de aplicatii software deoarece poate fi accesat de mai multi utilizatori, un mediu de lucru dinamic fiind ideal in vederea realizarii unui astfel de proiect. Este usor de folosit, anumite servicii fiind din start preinstalate si automatizate pentru a nu fi necesara interventia utilizatorilor. 

O multime de servicii Cloud Computing de tipul PaaS ofera un mediu de dezvoltare unde pot fi accesate cu usurinta resursele necesare in crearea anumitor aplicatii software.

In ideea de a utiliza o platforma open source de Cloud Computing in dezvoltarea unei aplicatii mobile pentru a tine evidenta anumitor task-uri, remindere, locuri pe care dorim sa le vizitam s.a.m.d, cea mai potrivita platforma ar fi Goorm deoarece ofera un mediu de dezvoltare (IDE), unde poate fi rulat un sistem de operare (Ubuntu), creat un server folosind un modul express in Node.js in scopul de a crea un RESTful API.


## Prezentare API-uri utilizate

Pentru inceput, folosind GoormIDE, am creat un RESTful API pe care l-am utilizat mai departe in scopul de accesa o baza de date relationala MySQL. Cu ajutorul acestui API, aplicatia permite inregistrarea utilizatorilor precum si a datelor corespunzatoare acestora. Prin intermediul acestui API sunt trimise diferite request-uri de GET, POST, PUT si DELETE.

## Google Sign-In

Google Sign-In API este un sistem de autentificare sigur care reduce povara de conectare pentru utilizatori, permitandu-le sa se conecteze cu contul lor Google - acelasi cont pe care il folosesc deja cu Gmail, Play si alte servicii Google.

Utilizatorii pot crea cu usurinta conturi noi pe aplicatie printr-o singura atingere de buton si pot primi o conectare asistata. In acest fel, acest API reduce riscul de parole uitate sau frustrarea acestora atunci cand incearca sa se autentifice sau sa treaca la o alta activitate. Conectarea asistata permite utilizatorului sa isi aleaga contul existent, prevenind crearea de conturi duplicat.

Cand un utilizator isi salveaza parola cu Google pe Android, poate sari procesul de introducere a datelor de autentificare.

## Google Maps

Cu ajutorul unui Google Maps API pot fi adaugate harti pe baza datelor Google Maps in aplicatia mobila. API-ul gestioneaza automat accesul la serverele Google Maps, descarcarea datelor, afisarea hartilor si raspunsul la gesturile pentru harti. De asemenea, se pot adauga markeri, poligoane si suprapuneri la o harta de baza si pentru a schimba vizualizarea utilizatorului asupra unei anumite zone pe harta. Aceste obiecte ofera informatii suplimentare pentru locatiile hartii si permit interactiunea utilizatorilor cu harta. 
Acest API permite adaugarea anumitor componente grafice pe o harta precum:

Icoane ancorate la pozitii specifice de pe harta (Markere).
Seturi de segmente de linie (poligoane).
Segmente inchise (poligoane).
Grafice bitmap ancorate pozitiilor specifice de pe harta (Ground overlays).

## Flux de date
Exemple de request / response

GetUser Details request:
```bash
GET /users/{userId}
```

GetUser Details response:
```bash
{
	"id":1,
	"username":"root",
	"parola":"pass",
	"email":"email@gmail.com",
	"nivel_de_acces":1
}
```

GetItems request:
```bash
GET /users/{userId}/items
```

GetItems response:
```bash
[
    {
        "id": 1,
        "user_id": 1,
        "name": "Wash dishes",
        "description": "NONE"
    }
]
```

DeleteItem request:
```bash
DELETE /users/{userId}/items/{itemId}
```

DeleteItem response:
```bash
Item sters cu succes!
```

## Capturi ecran aplicație

La pornirea aplicatiei, prima oara apare un Splash Screen

<p>
  <h1 align="center">SplashScreen</h1>
</p>
<p align="center">
  <img src="images/SplashScreen.PNG">
</p>

Dupa porneste activitatea de unde ne putem loga

<p align="center">
  <img src="images/LoginScreen.PNG"> <img src="images/UseGoogleAccount.PNG">
</p>


Odata ce ne-am conectat, putem accesa functionalitatile aplicatiei.
Prima oara se incarca sectiunile de unde ne putem alege ce sa facem mai departe din aplicatie.

<p align="center">
  <img src="images/SectionsScreen.PNG">
</p>

Daca alegem sectiunea de ToDo, se va incarca urmatoarea activitate:

<p align="center">
  <img src="images/ToDoScreen.PNG">
</p>

<p>
  <h1 align="center">Add a new task</h1>
</p>

<p align="center">
  <img src="images/AddItemScreen.PNG">
</p>

Daca alegem sectiunea de ToGo, se va incarca urmatoarea activitate:

<p align="center">
  <img src="images/ToGoScreen.PNG">
</p>
