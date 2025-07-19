# Koru Impact - Professional Website

A clean, professional, and maintainable static website for Koru Impact, built with modern web development practices and optimized for Google Cloud deployment.

## 🚀 Project Overview

Koru Impact is a catalyst for sustainable human & organizational flourishing, offering integrated solutions through a four-pillar ecosystem:
- **Social Science Research** - Rigorous research on well-being in Turkish cultural context
- **B2B Well-being Services** - Bespoke programs enhancing psychological safety
- **Professional Education** - Thought leadership platform upskilling professionals
- **UN SDG Consulting** - Aligning corporate strategy with global goals

## 📁 Project Structure

```
Koru-Impact-master/
├── css/
│   └── style.css              # External stylesheet with all CSS
├── js/
│   ├── navigation.js          # Navigation and active page management
│   ├── components.js          # Header/footer component loading
│   └── forms.js              # Form handling and validation
├── components/
│   ├── header.html            # Reusable header component
│   └── footer.html            # Reusable footer component
├── index.html                 # Home page
├── about.html                 # About Us page
├── services.html              # Services page
├── contact.html               # Contact page
└── README.md                  # Project documentation
```

## 🎨 Design Features

### Typography
- **Headings**: Lato (Sans-serif) - Clean, modern, professional
- **Body Text**: Libre Baskerville (Serif) - Elegant, readable, trustworthy

### Color Palette
- **Primary Blue**: #2563EB - Trust, professionalism, stability
- **Primary Green**: #16A34A - Growth, sustainability, harmony
- **Accent Gold**: #FBBF24 - Energy, optimism, success
- **Text Gray**: #1F2937 - Readability, sophistication

### Responsive Design
- Mobile-first approach
- Responsive grid layouts
- Optimized for all device sizes
- Touch-friendly navigation

## 🛠 Technical Implementation

### Architecture
- **Component-Based**: Reusable header and footer components
- **Modular JavaScript**: Organized, maintainable JS modules
- **Custom CSS**: Clean, maintainable external stylesheet (no Tailwind CSS)
- **Semantic HTML**: SEO-friendly and accessible markup
- **Progressive Enhancement**: Works without JavaScript

### Key Features
- **Navigation**: Fixed header with mobile-responsive menu and active page detection
- **Hero Sections**: Engaging gradient backgrounds with clear CTAs
- **Card Layouts**: Clean, organized content presentation
- **Contact Form**: Functional form with real-time validation
- **Modular JavaScript**: Organized, maintainable code structure
- **SEO Optimized**: Meta tags, Open Graph, semantic structure

### CSS Organization
```css
/* Well-organized CSS structure */
├── CSS Reset & Base Styles
├── Typography
├── Color Variables
├── Layout & Containers
├── Navigation
├── Hero Sections
├── Buttons
├── Sections
├── Grids
├── Cards
├── Value Items
├── Service Icons & Features
├── FAQ Cards (Equal Height)
├── Footer
├── Utility Classes
├── Responsive Utilities
├── Animations & Transitions
└── Print Styles
```

## 🚀 Deployment

### Google Cloud Ready
- All assets use relative paths
- Optimized for static hosting
- No server-side dependencies
- Fast loading times

### Live Reload Compatibility
- All HTML files have proper `<head>` and `<body>` tags
- Template structure available in `template.html`
- Compatible with Live Server and similar development tools

### Deployment Options
1. **Firebase Hosting** (Recommended)
   ```bash
   npm install -g firebase-tools
   firebase login
   firebase init hosting
   firebase deploy
   ```

2. **Google Cloud Storage**
   - Upload files to Cloud Storage bucket
   - Configure for static website hosting

3. **Traditional Web Server**
   - Upload files to any web server
   - Configure for static file serving

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Customization

### Colors
Update CSS variables in `css/style.css`:
```css
:root {
    --primary-blue: #2563EB;
    --primary-green: #16A34A;
    --accent-gold: #FBBF24;
    /* ... other colors */
}
```

### Content
- Update text content in HTML files
- Replace placeholder images with actual assets
- Modify contact information in `contact.html`

### Components
- Header: Edit `components/header.html`
- Footer: Edit `components/footer.html`
- All pages automatically include these components

## 📊 Performance

### Optimizations
- Minified CSS (recommended for production)
- Optimized images (WebP format recommended)
- Efficient CSS selectors
- Minimal JavaScript footprint
- Fast loading times

### Best Practices
- Semantic HTML structure
- Accessible navigation
- Mobile-responsive design
- SEO-optimized content
- Clean, maintainable code

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across different browsers
5. Submit a pull request

## 📄 License

© 2025 Koru Impact. All rights reserved.

## 📞 Support

For technical support or questions about the website:
- Email: info@koruimpact.org
- Phone: +90 (212) 555-0123

---

**Built with ❤️ for sustainable organizational flourishing** 
