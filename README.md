# Men of Honor Website

A modern, responsive website for the Men of Honor Social Club built with Vite and vanilla JavaScript.

## About Men of Honor

Men of Honor is a social club dedicated to gathering in fellowship, supporting communities, and developing the next generation of men. We believe in the values of honor, strength, integrity, and defending constitutional rights.

## Features

- **Modern Design**: Clean, professional appearance with a strong masculine color palette
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Navigation**: Smooth scrolling and mobile-friendly menu
- **Program Showcase**: Information about Junior Cadets, Scholarships, and Community Service
- **Newsletter Integration**: Chronological display of newsletter posts from Beehiiv
- **Social Media Feeds**: Live content streams from Facebook and LinkedIn
- **Contact Form**: Easy way for visitors to get in touch
- **Foundation Support**: Integration with donation platform
- **Accessibility**: Built with semantic HTML and ARIA attributes

## Programs

### Junior Cadets
Youth development program for ages 12-18 focusing on leadership, character building, and mentorship.

### Scholarships
Merit and need-based financial assistance for deserving students who demonstrate our values.

### Community Service
Active engagement in local community projects and volunteer opportunities.

## Content Management

### Newsletter Section
- Displays posts from [Men's Newsletter](https://mens-newsletter-f29b3d.beehiiv.com/) in chronological order
- Automatically pulls latest content (when API is available)
- Fallback content provided for offline viewing
- Configurable refresh intervals

### Social Media Integration
- **Facebook**: Content from [Men of Honor NEO](https://www.facebook.com/mohneohio)
- **LinkedIn**: Updates from [Men of Honor Social Club](https://www.linkedin.com/company/79634553/)
- Real-time feed updates (when APIs are available)
- Engagement metrics display
- Responsive social media cards

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Build Tool**: Vite
- **Fonts**: Inter & Merriweather from Google Fonts
- **Icons**: Unicode emoji icons for simplicity

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
├── index.html              # Main HTML file
├── src/
│   ├── main.js            # Main JavaScript file
│   ├── style.css          # Main CSS file
│   ├── social-feeds.js    # Social media feed manager
│   └── config.js          # Configuration for content sources
├── public/
│   └── favicon.svg        # Website favicon
├── .github/
│   └── copilot-instructions.md
└── README.md
```

## Configuration

The website uses a configuration system for easy customization:

### Content Sources
- **Newsletter**: Beehiiv newsletter archive
- **Facebook**: Men of Honor NEO page
- **LinkedIn**: Men of Honor Social Club company page

### Customization
Edit [`src/config.js`](src/config.js) to modify:
- Refresh intervals for social media feeds
- Maximum number of posts to display
- API endpoints (when available)
- Default content for offline viewing

## Development

### CSS Variables
The project uses CSS custom properties for consistent theming:
- `--primary-color`: Dark blue-gray (#1a2332)
- `--secondary-color`: Gold (#c9a96e)
- `--accent-color`: Dark red (#8b0000)

### JavaScript Features
- Smooth scrolling navigation
- Mobile menu toggle
- Contact form handling
- Intersection Observer for animations
- Header scroll effects
- Social media feed management
- Newsletter content loading

## API Integration

The website is designed to integrate with social media APIs when available:

### Facebook API
- Update `CONFIG.api.facebook` in [`src/config.js`](src/config.js)
- Requires Facebook Graph API access token
- Fetches recent posts from the Men of Honor NEO page

### LinkedIn API
- Update `CONFIG.api.linkedin` in [`src/config.js`](src/config.js)
- Requires LinkedIn API credentials
- Fetches company page updates

### Newsletter API
- Update `CONFIG.api.newsletter` in [`src/config.js`](src/config.js)
- Can integrate with Beehiiv API or RSS feed
- Automatically updates newsletter content

### Current Status
- Using placeholder content for demonstration
- Ready for API integration when credentials are available
- Fallback content ensures website functions offline

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Contact

- **Website**: [menofhonor.club](https://menofhonor.club)
- **Email**: info@menofhonor.club
- **Newsletter**: [Subscribe Here](https://mens-newsletter-f29b3d.beehiiv.com/)

## License

This project is proprietary to Men of Honor Social Club.

---

*Built with honor, strength, and integrity.*
