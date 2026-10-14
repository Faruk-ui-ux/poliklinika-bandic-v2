# Poliklinika Bandić — landing page (v2, Soft UI)

Statični sajt bez build koraka. Ulazna tačka je `index.html`.

**Live:** https://faruk-ui-ux.github.io/poliklinika-bandic-v2/

Ovo je druga, alternativna vizuelna verzija koncepta (neumorfni "Soft UI" stil,
ljubičasti akcenat) — nezavisna od [poliklinika-bandic](https://github.com/Faruk-ui-ux/poliklinika-bandic)
(prva verzija, "berry" ružičasti stil).

## Struktura
- `index.html` — stranica
- `support.js` — runtime stranice (ne brisati)
- `ds-base.js` + `_ds/` — Soft UI stilovi i komponente (design sistem)
- `img/` — fotografije

## Objava na GitHub Pages
Već je uključeno za ovaj repozitorij (Settings → Pages → `main` / `(root)`).
Za novi repozitorij: uploaduj sadržaj ovog foldera u root, pa isto podesi.

Lokalno: otvori preko servera (npr. `npx serve .`), ne dvoklikom na fajl.

## Status / poznata ograničenja
Ovo je koncept, ne i produkcijska stranica:
- Kalendar i rezervacija termina su potpuno na frontend-u (nema backend-a) —
  kad posjetilac "potvrdi" termin, ta informacija se nigdje ne šalje.
- Linkovi "Politika privatnosti" i "Uslovi korištenja" u footeru su
  placeholderi (vode na vrh stranice).
- Scroll-reveal animacije sekcija koriste CSS `animation-timeline: view()`
  bez JS fallback-a (fallback postoji samo za browsere koji tu funkciju uopšte
  ne podržavaju). U najnovijim verzijama Chrome/Edge radi ispravno; vrijedi
  provjeriti u Safariju i Firefoxu prije javnog lansiranja.
- Cijene i imena doktora u sadržaju su primjer radi koncepta — provjeriti
  prije javnog lansiranja da odgovaraju stvarnim podacima klinike.
