# Engymo website

Website for **Engymo**, a digital agency that works only with gyms and training centres: karate, martial arts and Taekwondo academies. Marketing is the core service, alongside gym management systems, accounting systems, photography, videography, websites and social media content.

## What's here

| Path | What it is |
|---|---|
| `index.html` | The full one-page site: HTML, CSS and JavaScript in one file |
| `img/` | Logo, icon and the six site photos, compressed for the web |
| `robots.txt` | Lets search engines crawl the site and points them to the sitemap |
| `sitemap.xml` | Sitemap for Google Search Console |

No build step and no dependencies. Fonts (Outfit and Inter) load from Google Fonts.

## Run it locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Deploy

Any static host works: GitHub Pages, Vercel, Netlify or Hostinger. Upload the folder as it is and point `engymo.com` at it.

## Before going live

- **Contact form:** the form validates and shows a success message, but it does not send anywhere yet. Connect it to email, WhatsApp or a CRM (for example Formspree, a Google Apps Script, or your own API) in the `submit` handler at the bottom of `index.html`.
- **Placeholders** to fill in the FAQ: monthly price `[PKR ____]`, contract terms and the cities where you shoot.
- **Domain:** the canonical URL, social sharing image and sitemap assume `https://engymo.com/`. Change them if the site lives elsewhere.

## Contact

- WhatsApp: +92 341 1236082
- Email: contact@engymo.com
