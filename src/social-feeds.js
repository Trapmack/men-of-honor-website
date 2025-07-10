// Social Media Feed Manager
// This module handles loading and displaying social media content

import { CONFIG, DEFAULT_NEWSLETTER_CONTENT, DEFAULT_SOCIAL_CONTENT } from './config.js'

class SocialMediaManager {
  constructor() {
    this.initializeFeeds()
  }

  // Initialize social media feeds
  initializeFeeds() {
    // Wait for DOM elements to be available
    setTimeout(() => {
      this.facebookFeed = document.getElementById('facebook-feed')
      this.linkedinFeed = document.getElementById('linkedin-feed')
      
      if (this.facebookFeed && this.linkedinFeed) {
        this.loadFacebookContent()
        this.loadLinkedInContent()
      }
    }, 100)
  }

  // Load Facebook content
  loadFacebookContent() {
    const posts = DEFAULT_SOCIAL_CONTENT.facebook
    this.renderSocialPosts(this.facebookFeed, posts, 'facebook')
  }

  // Load LinkedIn content
  loadLinkedInContent() {
    const posts = DEFAULT_SOCIAL_CONTENT.linkedin
    this.renderSocialPosts(this.linkedinFeed, posts, 'linkedin')
  }

  // Render social media posts
  renderSocialPosts(container, posts, platform) {
    if (!container || !posts) return

    // Clear loading state
    container.innerHTML = ''

    posts.forEach(post => {
      const postElement = document.createElement('div')
      postElement.className = 'social-post'
      
      postElement.innerHTML = `
        <div class="social-post-header">
          <div class="social-post-avatar">MH</div>
          <div class="social-post-meta">
            <div class="social-post-author">${post.author}</div>
            <div class="social-post-date">${post.date}</div>
          </div>
        </div>
        <div class="social-post-content">${post.content}</div>
        ${post.image ? `<img src="${post.image}" alt="Post image" class="social-post-image">` : ''}
        <div class="social-post-engagement">
          <span>👍 ${post.likes} likes</span>
          <span>💬 ${post.comments} comments</span>
          <span>🔄 ${post.shares} shares</span>
        </div>
      `
      
      container.appendChild(postElement)
    })
  }
}

class NewsletterManager {
  constructor() {
    this.loadContent()
  }

  loadContent() {
    // Wait for DOM elements to be available
    setTimeout(() => {
      this.newsletterGrid = document.getElementById('newsletter-grid')
      
      if (this.newsletterGrid) {
        this.loadNewsletterContent()
      }
    }, 100)
  }

  loadNewsletterContent() {
    // Newsletter data based on the beehiiv archive structure
    const newsletters = DEFAULT_NEWSLETTER_CONTENT
    
    // Clear loading state
    this.newsletterGrid.innerHTML = ''
    
    // Create newsletter items
    newsletters.forEach(newsletter => {
      const newsletterItem = document.createElement('div')
      newsletterItem.className = 'newsletter-item'
      
      newsletterItem.innerHTML = `
        <div class="newsletter-header">
          <div class="newsletter-date">${newsletter.date}</div>
          <h3 class="newsletter-title">
            <a href="${newsletter.link}" target="_blank">${newsletter.title}</a>
          </h3>
          <p class="newsletter-excerpt">${newsletter.excerpt}</p>
        </div>
        <div class="newsletter-actions">
          <a href="${newsletter.link}" class="newsletter-cta" target="_blank">Read Article</a>
        </div>
      `
      
      this.newsletterGrid.appendChild(newsletterItem)
    })
  }
}

// Initialize managers when called
const initializeSocialFeeds = () => {
  // Wait for DOM to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        new SocialMediaManager()
        new NewsletterManager()
      }, 500)
    })
  } else {
    // DOM is already loaded
    setTimeout(() => {
      new SocialMediaManager()
      new NewsletterManager()
    }, 500)
  }
}

export { SocialMediaManager, NewsletterManager, initializeSocialFeeds }
