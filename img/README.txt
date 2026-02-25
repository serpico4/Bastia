CARTELLA IMMAGINI – La Bastia
==============================

Inserisci qui le tue foto reali del ristorante.
Usa i nomi file indicati di seguito per sostituire automaticamente
i placeholder Unsplash presenti nel codice.

FILE ATTESI
-----------

  hero-spaghetti.jpg
    → Foto degli spaghetti allo scoglio vista dall'alto (hero homepage)
    → Dimensioni consigliate: 1920×1080 px, JPG ottimizzato

  spaghetti-scoglio.jpg
    → Foto del piatto per la sezione "Specialità" (home)
    → Dimensioni consigliate: 800×800 px, JPG

  sala.jpg
    → Foto della sala interna del ristorante (sezione "Chi siamo")
    → Dimensioni consigliate: 900×600 px, JPG

COME AGGIUNGERE LE IMMAGINI
----------------------------
1. Salva le foto in questa cartella con i nomi indicati sopra.
2. In css/home.css, la riga "background-image" nella classe .hero-bg
   usa già il percorso ../img/hero-spaghetti.jpg come prima scelta.
   Se il file è presente, l'URL Unsplash non verrà usato.
3. In index.html, nelle tag <img>, sostituisci l'attributo src:
     src="https://images.unsplash.com/..."
   con:
     src="img/sala.jpg"   (o il nome file appropriato)

FORMATI SUPPORTATI
-------------------
JPG / JPEG  →  consigliato per fotografie
PNG         →  per immagini con trasparenza
WebP        →  formato moderno, file più leggero (consigliato)

OTTIMIZZAZIONE
--------------
Prima di caricare online, ottimizza le immagini con:
  - https://squoosh.app  (gratuito, online)
  - https://tinypng.com  (gratuito, online)
