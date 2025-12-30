# MetisNova - Quick Start Guide

## 🚀 Getting Started in 5 Minutes

### Step 1: Install Dependencies
```bash
cd my-react-app
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

The app will open at `http://localhost:5173`

### Step 3: Build for Production
```bash
npm run build
```

Output files will be in the `dist/` folder.

---

## 📖 What's Changed?

### ✨ New Sections Added
1. **Vision** - Company vision and core values
2. **About** - Company background and expertise
3. **Why Choose** - 6 key differentiators
4. **Approach** - 5-step methodology
5. **Industries** - 5 industries served
6. **Careers** - Job opportunities
7. **Contact** - Contact form and information

### 🎨 Redesigned Sections
- **Header** - New navigation menu with more links
- **Hero** - Updated copy to match brand
- **Services** - Reorganized into Core Software & AI Services (11 total)
- **Footer** - Completely redesigned with SEO content
- **Tech Stack** - Improved styling and layout
- **Process** - Converted to testimonials carousel

### 📱 Styling Improvements
- Better responsive design
- Consistent color scheme (gray + purple)
- Improved typography hierarchy
- Enhanced spacing and alignment
- Better hover states and animations

---

## 🔍 SEO Improvements

✅ Meta tags in index.html  
✅ JSON-LD schema markup  
✅ Semantic HTML structure  
✅ Mobile-first responsive design  
✅ Proper heading hierarchy  
✅ Accessibility compliance  

---

## 📋 File Locations

| Component | File |
|-----------|------|
| Header | `src/components/Header.jsx` |
| Hero | `src/components/Hero.jsx` |
| Vision | `src/components/Vision.jsx` |
| About | `src/components/About.jsx` |
| Why Choose | `src/components/WhyChoose.jsx` |
| Services | `src/components/Services.jsx` |
| Approach | `src/components/Approach.jsx` |
| Industries | `src/components/Industries.jsx` |
| Careers | `src/components/Careers.jsx` |
| Contact | `src/components/Contact.jsx` |
| Tech Stack | `src/components/TechStack.jsx` |
| Testimonials | `src/components/Process.jsx` |
| Footer | `src/components/Footer.jsx` |

---

## ✏️ How to Edit Content

### Update Text Content
Open the component file and edit the text directly:
```jsx
<h2>Your new heading here</h2>
<p>Your new paragraph here</p>
```

### Add/Remove Services
Edit `src/components/Services.jsx`:
```jsx
const services = [
  {
    category: "Core Software Development",
    title: "Your Service",
    description: "Your description"
  },
  // Add more services here
]
```

### Change Colors
Tailwind classes are used throughout. Common examples:
- Background: `bg-white`, `bg-gray-50`, `bg-gray-900`
- Text: `text-gray-900`, `text-gray-600`
- Accents: `text-purple-600`, `bg-purple-100`

To change globally, update `tailwind.config.js` or the CSS classes.

### Update Links
Edit `src/components/Header.jsx` and `src/components/Footer.jsx`:
```jsx
<a href="#section-id">Link Text</a>
```

---

## 🎨 Customization Tips

### Colors
The site uses:
- **Primary:** Gray scale (900, 700, 600, 50)
- **Accent:** Purple (600, 500) and Blue (600)
- **Backgrounds:** White, Gray-50

### Typography
- Headings use `font-bold` with size classes
- Body text uses `text-gray-600`
- Links use `text-purple-600`

### Spacing
Consistent use of:
- `py-20` (vertical padding)
- `px-6` (horizontal padding)
- `gap-6`, `gap-8` (element spacing)
- `mb-6`, `mb-12` (margin bottom)

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop 'dist' folder to Netlify
```

### GitHub Pages
Update `vite.config.js` with your repo name, then:
```bash
npm run build
git add dist
git commit -m "Deploy"
git push
```

### AWS S3 + CloudFront
```bash
npm run build
# Upload dist folder to S3 bucket
```

---

## 📞 Contact Information

- **General:** contact@metisnova.com
- **Careers:** careers@metisnova.com
- **Website:** https://www.metisnova.com

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Build Errors
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Images Not Loading
Check that image paths in components match actual files in `/public` or `/src/assets`

### Styles Not Applied
Make sure Tailwind is imported in `index.css` and component classes are spelled correctly.

---

## 📚 Documentation Files

- `METISNOVA_GUIDE.md` - Detailed project guide
- `CHANGELOG.md` - Complete list of changes
- `STRUCTURE.md` - Component structure and content map
- `README.md` - Original project README

---

## 🎯 Next Steps

1. ✅ Review all sections and content
2. ✅ Test on mobile devices
3. ✅ Update images and logos
4. ✅ Connect contact form to backend
5. ✅ Set up analytics
6. ✅ Deploy to production

---

**Happy coding! 🚀**

For questions, refer to the documentation files or check component code directly.
