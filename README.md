# Preksha Deshmukh - Personal Portfolio Website

A clean, professional personal website for Product Manager Preksha Deshmukh, showcasing her work, experience, and expertise.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, minimal design with smooth animations
- **Interactive Elements**: Hover effects, loading animations, and smooth scrolling
- **Dynamic Content**: Case studies and PRDs sections with dynamic content loading
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Professional Sections**:
  - About Me
  - What I Do (current role and responsibilities)
  - Case Studies (project showcases)
  - PRDs (Product Requirements Documents)
  - Resume download

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **JavaScript**: Interactive functionality and dynamic content
- **Font Awesome**: Icons for enhanced visual appeal

## File Structure

```
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── main.js         # JavaScript functionality
├── assets/             # Images and documents
│   ├── case-study-1.jpg
│   ├── case-study-2.jpg
│   ├── prds/
│   │   ├── ecommerce-prd.pdf
│   │   └── mobile-app-prd.pdf
│   └── Preksha_Deshmukh_Resume.pdf
└── README.md           # Project documentation
```

## Getting Started

1. Clone or download the project files
2. Open `index.html` in a web browser
3. For development, use a local server:
   ```bash
   python3 -m http.server 8000
   ```
   Then visit `http://localhost:8000`

## Customization

### Adding New Case Studies
Edit the `caseStudies` array in `js/main.js`:

```javascript
const caseStudies = [
    {
        title: "Your Project Title",
        description: "Project description",
        technologies: ["Tech1", "Tech2"],
        outcomes: ["Outcome 1", "Outcome 2"],
        image: "assets/your-image.jpg"
    }
];
```

### Adding New PRDs
Edit the `prds` array in `js/main.js`:

```javascript
const prds = [
    {
        title: "Your PRD Title",
        description: "PRD description",
        date: "Month Year",
        status: "Active/Completed",
        downloadLink: "assets/prds/your-prd.pdf"
    }
];
```

### Color Scheme
Modify CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
    --text-color: #2c3e50;
    --background-color: #ffffff;
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Features

- Optimized images and assets
- Smooth CSS animations
- Efficient JavaScript loading
- Mobile-first responsive design

## Contact

For questions or customizations, reach out to Preksha Deshmukh:
- Email: prekshad@gmail.com
- LinkedIn: [linkedin.com/in/preksha-deshmukh](https://linkedin.com/in/preksha-deshmukh)

---

© 2025 Preksha Deshmukh. All rights reserved.
