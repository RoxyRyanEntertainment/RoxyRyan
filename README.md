# Roxy Ryan Entertainment: website

Statische website (HTML, CSS en een beetje JavaScript), gratis gehost via GitHub Pages.

**Live:** https://roxyryanentertainment.github.io/RoxyRyan/

## Pagina's
| Bestand | Pagina |
|---|---|
| `index.html` | Home |
| `over-roxy.html` | Over Roxy |
| `supermodels.html` | Showgroep The Supermodels |
| `maskara.html` | Mask'ara (Borsbeek) |
| `creaties.html` | Creaties en strass-werk |
| `galerij.html` | Galerij |
| `videos.html` | Video's |
| `evenementen.html` | Agenda |
| `bookings.html` | Bookings |
| `contact.html` | Contact |
| `404.html` | Pagina die verschijnt bij een foute link |

Andere bestanden:
- `style.css`, `home.css`, `pages.css`: vormgeving
- `script.js`: menu op gsm, vergrote foto's (lightbox), bezoekersteller, verlopen shows verbergen
- `sitemap.xml`: lijst van alle pagina's voor Google
- `images/`: logo, foto's en flyers. `og-image.jpg` is de afbeelding die verschijnt als iemand de site deelt via WhatsApp of Facebook.

## Zelf iets aanpassen

**Een show toevoegen aan de agenda**
Open `evenementen.html`. Bovenaan de agenda staat in de code uitleg hoe je een blok kopieert. Vul bij `data-end-date` de laatste dag van de show in (bv. `2026-10-24`). De dag erna verdwijnt de show vanzelf van de site.

**Een video toevoegen**
Zet de video op YouTube (mag als "niet vermeld"). Open `videos.html` en volg de uitleg in de code. Gebruik als adres `https://www.youtube-nocookie.com/embed/VIDEO-ID`, dan plaatst YouTube pas cookies als iemand op play drukt.

**Een creatie toevoegen**
Open `creaties.html` en volg de uitleg in de code om een Instagram-post toe te voegen.

**Foto's toevoegen**
Verklein foto's eerst tot maximaal 1800 pixels breed of hoog. Foto's rechtstreeks van een camera of gsm zijn vaak 5 MB of meer en maken de site traag. Gratis verkleinen kan bv. op squoosh.app.

**Bestanden uploaden**
Open de repository op github.com, klik **Add file → Upload files**, sleep de aangepaste bestanden erin en klik **Commit changes**. Na 1 à 2 minuten staat de nieuwe versie online.

## Leuke extra's
- **Hartje** onderaan elke pagina: klikken kleurt het roze (wordt onthouden in de browser).
- **Strass-glinstering** over de foto's in de galerij als je er met de muis over gaat.
- **Icoontjes** op de homepagina kleuren goud als je erop klikt.
- **Geheim:** typ ergens op de site `roxy`, of tik 5 keer snel op het logo onderaan, voor een pluimenregen.

Wie op zijn toestel "minder beweging" heeft ingesteld, krijgt de bewegende effecten niet te zien.

## Google
De site is geverifieerd in Google Search Console. Dien daar eenmalig de sitemap in (menu **Sitemaps**, adres `sitemap.xml`), dan vindt Google alle pagina's sneller. Voeg je later een nieuwe pagina toe, zet ze dan ook in `sitemap.xml`.

## Eigen domeinnaam
Een eigen adres zoals `roxyryanentertainment.be` kan later gekoppeld worden via **Settings → Pages → Custom domain**. Het domein zelf moet je apart registreren (dat kost een paar euro per jaar). Pas daarna ook de adressen in `sitemap.xml` en in de `og:`- en `canonical`-regels bovenaan elke pagina aan.

## Contact
Er is geen invulformulier: bezoekers mailen of bellen rechtstreeks via de knoppen op Bookings en Contact (lcolignon@gmail.com, +32 497 19 88 57).
