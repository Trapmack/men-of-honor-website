import './style.css'
import { initializeSocialFeeds } from './social-feeds.js'

// Main app content
const app = document.querySelector('#app')

// Website content
const websiteContent = `
  <header class="header" id="header">
    <nav class="nav container">
      <a href="#" class="logo">Men of Honor</a>
      <ul class="nav-list" id="nav-list">
        <li><a href="#home" class="nav-link active">Home</a></li>
        <li><a href="#about" class="nav-link">About</a></li>
        <li><a href="#programs" class="nav-link">Programs</a></li>
        <li><a href="#newsletter" class="nav-link">Newsletter</a></li>
        <li><a href="#social" class="nav-link">Social</a></li>
        <li><a href="#foundation" class="nav-link">Foundation</a></li>
        <li><a href="#contact" class="nav-link">Contact</a></li>
      </ul>
      <button class="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="Toggle navigation">
        ☰
      </button>
    </nav>
  </header>

  <main>
    <section class="hero" id="home">
      <div class="container">
        <div class="hero-content fade-in-up">
          <h1>Men of Honor</h1>
          <p class="hero-subtitle">Social Club</p>
          <p class="hero-description">
            A community of men aspiring to live with honor, strength, and integrity. 
            We gather in fellowship, support our communities, and develop the next generation of men.
          </p>
          <div class="hero-actions">
            <a href="#programs" class="btn">Our Programs</a>
            <a href="https://donorbox.org/men-of-honor-foundation-donation" class="btn btn-secondary" target="_blank">Support Our Cause</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section mission" id="about">
      <div class="container">
        <h2 class="section-title">Our Mission</h2>
        <div class="mission-content">
          <p class="mission-statement">
            "Our mission is to gather in fellowship, support our communities, and develop the next generation of men. 
            Members of the Men of Honor Social Club believe all humans are created equal and endowed with certain 
            unalienable rights."
          </p>
          <p class="section-subtitle">
            Chief among those rights are Life, Liberty, the Pursuit of Happiness, and those expressed in the Bill of Rights. 
            Members will, to the best of their ability, defend those rights.
          </p>
          
          <div class="mission-values">
            <div class="value-item">
              <div class="value-icon">🛡️</div>
              <h3 class="value-title">Honor</h3>
              <p>Living with integrity and moral courage in all aspects of life</p>
            </div>
            <div class="value-item">
              <div class="value-icon">💪</div>
              <h3 class="value-title">Strength</h3>
              <p>Building physical, mental, and spiritual resilience</p>
            </div>
            <div class="value-item">
              <div class="value-icon">🤝</div>
              <h3 class="value-title">Fellowship</h3>
              <p>Creating lasting bonds through shared values and experiences</p>
            </div>
            <div class="value-item">
              <div class="value-icon">🌟</div>
              <h3 class="value-title">Service</h3>
              <p>Supporting our communities and those in need</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section programs" id="programs">
      <div class="container">
        <h2 class="section-title">Our Programs</h2>
        <p class="section-subtitle">
          We offer various programs designed to develop character, build community, and support the next generation of leaders.
        </p>
        
        <div class="programs-grid">
          <div class="program-card">
            <div class="program-header">
              <h3 class="program-title">Junior Cadets</h3>
              <p class="program-subtitle">Youth Development Program</p>
            </div>
            <div class="program-body">
              <p class="program-description">
                Our Junior Cadets program focuses on developing young men aged 12-18 through mentorship, 
                character building, and leadership training.
              </p>
              <ul class="program-features">
                <li>Leadership development workshops</li>
                <li>Mentorship with experienced members</li>
                <li>Community service projects</li>
                <li>Character building activities</li>
                <li>Physical fitness training</li>
              </ul>
              <a href="#contact" class="btn">Learn More</a>
            </div>
          </div>

          <div class="program-card">
            <div class="program-header">
              <h3 class="program-title">Scholarships</h3>
              <p class="program-subtitle">Educational Support</p>
            </div>
            <div class="program-body">
              <p class="program-description">
                The Men of Honor Scholarship program provides financial assistance to deserving students 
                who demonstrate our values and commitment to excellence.
              </p>
              <ul class="program-features">
                <li>Merit-based scholarships</li>
                <li>Need-based financial aid</li>
                <li>Mentorship opportunities</li>
                <li>Career guidance</li>
                <li>Networking support</li>
              </ul>
              <a href="#contact" class="btn">Apply Now</a>
            </div>
          </div>

          <div class="program-card">
            <div class="program-header">
              <h3 class="program-title">Community Service</h3>
              <p class="program-subtitle">In The Community</p>
            </div>
            <div class="program-body">
              <p class="program-description">
                We actively engage in community service projects that make a positive impact on our local communities 
                and support those in need.
              </p>
              <ul class="program-features">
                <li>Local charity support</li>
                <li>Volunteer opportunities</li>
                <li>Community events</li>
                <li>Educational workshops</li>
                <li>Emergency assistance</li>
              </ul>
              <a href="#contact" class="btn">Get Involved</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section contact" id="contact">
      <div class="container">
        <h2 class="section-title">Get In Touch</h2>
        <p class="section-subtitle">
          Ready to join our community or learn more about our programs? We'd love to hear from you.
        </p>
        
        <div class="contact-content">
          <div class="contact-info">
            <h3>Contact Information</h3>
            <p>
              <strong>Email:</strong> info@menofhonor.club
            </p>
            <p>
              <strong>Newsletter:</strong> 
              <a href="https://mens-newsletter-f29b3d.beehiiv.com/" target="_blank">Subscribe Here</a>
            </p>
            <p>
              <strong>Podcast:</strong> Listen to our podcast for insights and discussions on honor, leadership, and community.
            </p>
            
            <h3>Additional Resources</h3>
            <ul>
              <li><a href="https://menofhonor.club/calendar" target="_blank">Events Calendar</a></li>
              <li><a href="https://menofhonor.club/podcast" target="_blank">Podcast</a></li>
              <li><a href="https://menofhonor.club/friends" target="_blank">Friends & Partners</a></li>
            </ul>
          </div>
          
          <form class="contact-form" id="contact-form">
            <div class="form-group">
              <label for="name">Name *</label>
              <input type="text" id="name" name="name" required>
            </div>
            
            <div class="form-group">
              <label for="email">Email *</label>
              <input type="email" id="email" name="email" required>
            </div>
            
            <div class="form-group">
              <label for="subject">Subject</label>
              <input type="text" id="subject" name="subject">
            </div>
            
            <div class="form-group">
              <label for="message">Message *</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            
            <button type="submit" class="btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>

    <section class="section newsletter" id="newsletter">
      <div class="container">
        <h2 class="section-title">Newsletter</h2>
        <p class="section-subtitle">
          Stay updated with our latest news, events, and community activities. 
          Subscribe to our newsletter to keep up to speed on the Club.
        </p>
        
        <div class="newsletter-grid" id="newsletter-grid">
          <div class="loading">
            <div class="loading-spinner"></div>
            Loading newsletter articles...
          </div>
        </div>
        
        <div class="text-center">
          <a href="https://mens-newsletter-f29b3d.beehiiv.com/subscribe" class="newsletter-subscribe" target="_blank">
            Subscribe to Newsletter
          </a>
        </div>
      </div>
    </section>

    <section class="section social-media" id="social">
      <div class="container">
        <h2 class="section-title">Connect With Us</h2>
        <p class="section-subtitle">
          Follow our social media channels to stay connected with our community and see what we're up to.
        </p>
        
        <div class="social-grid">
          <div class="social-feed">
            <h3>
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%231877f2'%3E%3Cpath d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'/%3E%3C/svg%3E" alt="Facebook" class="social-icon">
              Facebook Updates
            </h3>
            <div id="facebook-feed">
              <div class="loading">
                <div class="loading-spinner"></div>
                Loading Facebook posts...
              </div>
            </div>
            <a href="https://www.facebook.com/mohneohio" class="social-follow-btn" target="_blank">
              Follow on Facebook
            </a>
          </div>
          
          <div class="social-feed">
            <h3>
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%230077b5'%3E%3Cpath d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/%3E%3C/svg%3E" alt="LinkedIn" class="social-icon">
              LinkedIn Updates
            </h3>
            <div id="linkedin-feed">
              <div class="loading">
                <div class="loading-spinner"></div>
                Loading LinkedIn posts...
              </div>
            </div>
            <a href="https://www.linkedin.com/company/men-of-honor-social-club/" class="social-follow-btn" target="_blank">
              Follow on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="foundation">
      <div class="container">
        <h2 class="section-title">Men of Honor Foundation</h2>
        <p class="section-subtitle">
          Supporting our mission through charitable giving and community outreach.
        </p>
        
        <div class="mission-content">
          <p class="mission-statement">
            The Men of Honor Foundation supports our Junior Cadet and Scholarship programs, 
            helping to develop the next generation of men with honor, strength, and integrity.
          </p>
          
          <div class="hero-actions">
            <a href="https://donorbox.org/men-of-honor-foundation-donation" class="btn" target="_blank">Donate Now</a>
            <a href="#contact" class="btn btn-secondary">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h4>Men of Honor</h4>
          <p>A community of men aspiring to live with honor, strength, and integrity.</p>
        </div>
        
        <div class="footer-section">
          <h4>Programs</h4>
          <ul>
            <li><a href="#programs">Junior Cadets</a></li>
            <li><a href="#programs">Scholarships</a></li>
            <li><a href="#programs">Community Service</a></li>
            <li><a href="#foundation">Foundation</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>Stay Connected</h4>
          <ul>
            <li><a href="#newsletter">Newsletter</a></li>
            <li><a href="#social">Social Media</a></li>
            <li><a href="https://mens-newsletter-f29b3d.beehiiv.com/" target="_blank">Newsletter Archive</a></li>
            <li><a href="https://www.facebook.com/mohneohio" target="_blank">Facebook</a></li>
            <li><a href="https://www.linkedin.com/company/men-of-honor-social-club/" target="_blank">LinkedIn</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a href="https://donorbox.org/men-of-honor-foundation-donation" target="_blank">Donate</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#foundation">Foundation</a></li>
            <li><a href="#programs">Get Involved</a></li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2025 Men of Honor Social Club. All rights reserved.</p>
      </div>
    </div>
  </footer>
`

// Initialize the website
app.innerHTML = websiteContent

// JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle')
  const navList = document.getElementById('nav-list')
  
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      navList.classList.toggle('active')
    })
  }
  
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.nav-link')
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault()
      const targetId = this.getAttribute('href').substring(1)
      const targetElement = document.getElementById(targetId)
      
      if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight
        const targetPosition = targetElement.offsetTop - headerHeight
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        })
        
        // Close mobile menu if open
        navList.classList.remove('active')
        
        // Update active link
        navLinks.forEach(nav => nav.classList.remove('active'))
        this.classList.add('active')
      }
    })
  })
  
  // Header scroll effect
  const header = document.getElementById('header')
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      header.classList.add('scrolled')
    } else {
      header.classList.remove('scrolled')
    }
  })
  
  // Contact form handling
  const contactForm = document.getElementById('contact-form')
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault()
      
      // Get form data
      const formData = new FormData(this)
      const name = formData.get('name')
      const email = formData.get('email')
      const subject = formData.get('subject') || 'Website Contact'
      const message = formData.get('message')
      
      // Simple validation
      if (!name || !email || !message) {
        alert('Please fill in all required fields.')
        return
      }
      
      // Create mailto link (you can replace this with actual form submission)
      const mailtoLink = `mailto:info@menofhonor.club?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`
      
      // Show success message
      alert('Thank you for your message! We will get back to you soon.')
      
      // Open email client
      window.location.href = mailtoLink
      
      // Reset form
      this.reset()
    })
  }
  
  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  }
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up')
      }
    })
  }, observerOptions)
  
  // Observe sections for animation
  const sections = document.querySelectorAll('.section')
  sections.forEach(section => {
    observer.observe(section)
  })
  
  // Observe program cards
  const programCards = document.querySelectorAll('.program-card')
  programCards.forEach(card => {
    observer.observe(card)
  })
  // Initialize social feeds
  initializeSocialFeeds()
})

// Export for potential module use
export { websiteContent }
