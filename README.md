# HNC – Habib Naveed Confectionery CSP

## GitHub Pages Upload

Is ZIP mein ye files hain:

1. `index.html` — main app
2. `manifest.webmanifest` — PWA/app settings
3. `sw.js` — offline cache aur app update handling
4. `icon-192.png` — app icon
5. `icon-512.png` — app icon
6. `README.md` — ye instructions

## GitHub par upload karne ka tareeqa

1. Apni GitHub repository open karein.
2. Purani app ki files ko replace karein.
3. ZIP ko GitHub Pages ki root location mein extract karke **files upload** karein.
4. `index.html` root mein hona chahiye.
5. GitHub Pages ko refresh/redeploy hone dein.
6. Mobile mein app ko dobara open karein.

## App behavior

- Dashboard par New Order automatically open nahi hoga.
- Dashboard se **New Order** par click karne se New Order page khulega.
- New Order page khulte hi **Customer Name** field par focus hoga.
- Order complete hone ke baad app **Dashboard** par wapas jayegi.
- App ka icon **Star ⭐** style ka hai.

## Important

Agar mobile mein purani installed PWA/cache nazar aaye to app ko ek dafa close karke dobara open karein. Zarurat par installed purani app remove karke GitHub Pages se app dobara install karein.

### Product Search
- New Order mein Product Name ab Customer Search ki tarah searchable hai.
- Jo product save hota hai woh next order mein Product search bar mein show hota hai.
- Saved product select karne par us ka latest saved Rate automatically aa jata hai.

### Forward SMS
My Saved Orders mein Forward button customer name, order number, product name, Qty, Rate aur total amount ke sath SMS composer kholta hai. Target number: 03093609377.

### Icon
Simple white star icon. No yellow star and no HN text.
