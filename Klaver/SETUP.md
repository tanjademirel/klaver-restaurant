# Klaver — Restaurant website met Sanity CMS

Dit is een voorbeeld-website (Next.js) waarvan de inhoud — naam, slogan,
foto's, openingstijden, menu — beheerd wordt via **Sanity**, een gratis
headless CMS met een klik-en-typ dashboard. Geen code nodig om content
aan te passen.

Zonder een eigen Sanity-project toont de site automatisch voorbeeldcontent,
zodat je meteen kunt zien hoe het eruitziet. Volg de stappen hieronder om
het te koppelen aan je eigen, echte Sanity-project.

---

## Stap 1 — Maak een gratis Sanity-account

1. Ga naar https://www.sanity.io en klik op "Get started" / "Sign up".
2. Maak een account (kan met Google/GitHub of e-mail).
3. Je krijgt een gratis plan, ruim voldoende voor een paar klantsites.

## Stap 2 — Maak een nieuw Sanity-project aan

1. Klik in het Sanity-dashboard op "Create new project".
2. Geef het een naam, bijvoorbeeld "Klaver Restaurant".
3. Kies dataset-naam `production` (standaard, gewoon laten staan).
4. Noteer het **Project ID** dat je nu krijgt — dat heb je in stap 3 nodig.

## Stap 3 — Koppel het project ID aan de website

1. Kopieer het bestand `.env.example` naar een nieuw bestand genaamd `.env.local`.
2. Vul je eigen Project ID in:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=abc12345
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

## Stap 4 — Zet het Sanity-dashboard (Studio) online

Dit is het scherm waarin jij en je klant straks klikken en typen.

1. Installeer afhankelijkheden: `npm install`
2. Log in via de command line: `npx sanity login`
3. Zet het dashboard online: `npm run sanity:deploy`
4. Kies een naam, bijvoorbeeld `klaver-restaurant` — je krijgt dan een
   eigen adres zoals `https://klaver-restaurant.sanity.studio`
5. Open die link: dit is het dashboard waar jij of je klant in kan klikken
   en typen om de website-inhoud aan te passen. Geen code nodig.

## Stap 5 — Vul de eerste content in

1. Open het dashboard-adres uit stap 4.
2. Klik op "Restaurant Instellingen" → vul naam, slogan, tekst, foto's,
   openingstijden in.
3. Klik op "Menu item" → "+ Create" om gerechten toe te voegen.
4. Alles wat je hier invult/wijzigt, verschijnt automatisch op de website
   (de site haalt elke keer de meest recente versie op).

## Stap 6 — Test de website lokaal

```
npm run dev
```

Open http://localhost:3000 — je zou nu je eigen ingevulde content moeten
zien in plaats van de voorbeeldtekst.

## Stap 7 — Zet de website live (GitHub + Vercel)

1. Maak een nieuwe, lege repository aan op GitHub.
2. Push deze projectmap naar die repository.
3. Ga naar https://vercel.com, log in met je GitHub-account.
4. Klik "Add New Project", kies je repository.
5. Vercel vraagt om environment variables: vul hier dezelfde twee waarden
   in als in je `.env.local` (Project ID en dataset).
6. Klik "Deploy" — binnen een paar minuten is de site live op een
   `*.vercel.app` adres.
7. Wil je je eigen domeinnaam (bijv. restaurantklaver.nl)? Ga in Vercel
   naar "Settings → Domains" en volg de instructies om je domein te
   koppelen (dit vraagt om een kleine wijziging bij je domeinregistrar,
   Vercel laat precies zien welke).

---

## Hoe dit zich uitbreidt naar meerdere klantsites

Voor elke nieuwe klant herhaal je dit patroon:

- Eén nieuw Sanity-project per klant (of: één Sanity-project met meerdere
  "datasets", één per klant — handig als je het overzicht centraal wilt
  houden onder jouw eigen Sanity-account).
- Eén nieuwe website-codebase (een kopie van dit project, aangepast qua
  ontwerp/velden voor die klant).
- Eén Vercel-deployment, gekoppeld aan het juiste Sanity-project en het
  juiste domein van de klant.

Jij blijft dan de eigenaar van alle Sanity-projecten (en kan zelf overal
bij), en geeft je klant alleen toegang tot hun eigen dashboard-link.
