# Roxy Ryan Entertainment — website

Een statische website (HTML/CSS/JS, geen server nodig) klaar om **gratis** te hosten via **GitHub Pages**.

## Bestanden (bijgewerkt)
- `index.html` — Home
- `over-roxy.html` — Over Roxy
- `shows.html` — Shows
- `galerij.html` — Galerij
- `bookings.html` — Bookings (aanvraagformulier)
- `contact.html` — Contact
- `style.css`, `home.css`, `pages.css` — vormgeving
- `script.js` — menu, formulieren, lightbox
- `images/logo.png` — jouw logo

## Belangrijk: foto's toevoegen
Er staan nu overal nette **placeholders** ("Foto volgt") in plaats van echte foto's van Roxy, want ik heb daar geen toegang toe. Zet je eigen foto's in de map `images/` (bv. `images/roxy-1.jpg`) en vervang in de HTML-bestanden:
```html
<div class="hero-photo-placeholder">...</div>
```
door bijvoorbeeld:
```html
<img src="images/roxy-1.jpg" alt="Roxy Ryan">
```
Doe dit voor de hero-foto op Home, de bio-foto op "Over Roxy", de fotostrip op Home en de tegels in `galerij.html`.

## Gratis hosten via GitHub Pages
1. Maak een gratis account op [github.com](https://github.com) (als je er nog geen hebt).
2. Maak een nieuwe **repository**, bv. `roxy-ryan-website` (publiek, zonder README aan te vinken).
3. Upload alle bestanden uit deze map naar die repository:
   - makkelijkste manier: open de repository, klik **"Add file" → "Upload files"**, sleep alle bestanden en de `images`-map erin, en klik **Commit changes**.
4. Ga naar **Settings → Pages** in de repository.
5. Bij **Branch** kies je `main` en map `/ (root)`, klik **Save**.
6. Na 1–2 minuten is je site live op:
   `https://<jouw-gebruikersnaam>.github.io/roxy-ryan-website/`

Wil je een eigen domeinnaam (bv. `roxyryanentertainment.be`)? Dat kan later gratis gekoppeld worden via **Settings → Pages → Custom domain**, maar het domein zelf moet je apart registreren (kost geld) en koppelen bij je domeinregistrar.

## Let op: formulieren
Het bookingformulier en contactformulier tonen nu een bevestiging op het scherm, maar **versturen nog geen echte e-mail** — GitHub Pages host enkel statische bestanden, geen server. Om echte e-mails te ontvangen, kan je gratis diensten zoals [Formspree](https://formspree.io) of [Web3Forms](https://web3forms.com) koppelen (een paar regels aanpassen in het formulier volstaan). Zeg gerust als je hulp wil om dit in te stellen.
