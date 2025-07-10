// Configuration for social media and newsletter content
// Update these values to customize the content displayed on the website

export const CONFIG = {
  // Newsletter configuration
  newsletter: {
    beehiivUrl: 'https://mens-newsletter-f29b3d.beehiiv.com/',
    autoRefresh: true,
    refreshInterval: 3600000, // 1 hour in milliseconds
    maxPosts: 6
  },
  
  // Social media configuration
  social: {
    facebook: {
      pageUrl: 'https://www.facebook.com/mohneohio',
      autoRefresh: true,
      refreshInterval: 1800000, // 30 minutes in milliseconds
      maxPosts: 5
    },
    linkedin: {
      companyUrl: 'https://www.linkedin.com/company/79634553/',
      autoRefresh: true,
      refreshInterval: 1800000, // 30 minutes in milliseconds
      maxPosts: 5
    }
  },
  
  // API endpoints (when available)
  api: {
    newsletter: null, // Add newsletter API endpoint when available
    facebook: null,   // Add Facebook API endpoint when available
    linkedin: null    // Add LinkedIn API endpoint when available
  }
}

// Default newsletter content (fallback when API is not available)
export const DEFAULT_NEWSLETTER_CONTENT = [
  {
    title: 'Men of Honor Social Club July 2025 Newsletter',
    date: 'July 10, 2025',
    excerpt: 'Summer updates including our latest scholarship recipients, Junior Cadet program achievements, and upcoming community events.',
    link: 'https://mens-newsletter-f29b3d.beehiiv.com/p/men-of-honor-social-club-july-2025'
  },
  {
    title: 'Men of Honor Social Club June 2025 Newsletter',
    date: 'June 16, 2025',
    excerpt: 'Stay updated with our latest community initiatives, Junior Cadet program developments, and upcoming events for the summer season.',
    link: 'https://mens-newsletter-f29b3d.beehiiv.com/p/men-of-honor-social-club-9b68'
  },
  {
    title: 'Men of Honor Social Club May 2025 Newsletter',
    date: 'May 29, 2025',
    excerpt: 'Discover our recent scholarship recipients, community service projects, and important updates from the Men of Honor Social Club.',
    link: 'https://mens-newsletter-f29b3d.beehiiv.com/p/men-of-honor-social-club'
  },
  {
    title: 'Spring Community Update',
    date: 'April 15, 2025',
    excerpt: 'Read about our spring initiatives, new member spotlights, and upcoming community events that embody our values of honor and service.',
    link: 'https://mens-newsletter-f29b3d.beehiiv.com/p/men-of-honor-social-club-0a86504ec67cf504'
  },
  {
    title: 'Junior Cadets Program Highlights',
    date: 'March 20, 2025',
    excerpt: 'Celebrating the achievements of our Junior Cadets and the impact of our youth development programs in the community.',
    link: 'https://mens-newsletter-f29b3d.beehiiv.com/'
  },
  {
    title: 'Foundation Impact Report',
    date: 'February 28, 2025',
    excerpt: 'Learn about the Men of Honor Foundation\'s impact on scholarships, community development, and supporting the next generation of leaders.',
    link: 'https://mens-newsletter-f29b3d.beehiiv.com/'
  }
]

// Default social media content (fallback when API is not available)
export const DEFAULT_SOCIAL_CONTENT = {
  facebook: [
    {
      author: 'Men of Honor',
      date: '2 days ago',
      content: 'Proud to announce our latest scholarship recipients! These young men exemplify the values of honor, strength, and integrity that our organization stands for. 🎓 #MenOfHonor #Scholarships #CommunitySupport',
      image: null,
      likes: 24,
      comments: 8,
      shares: 3
    },
    {
      author: 'Men of Honor',
      date: '1 week ago',
      content: 'Our Junior Cadets program continues to make a positive impact in the community. This weekend, our cadets volunteered at the local food bank, demonstrating the importance of service and giving back. 🤝 #JuniorCadets #CommunityService #Leadership',
      image: null,
      likes: 42,
      comments: 15,
      shares: 7
    },
    {
      author: 'Men of Honor',
      date: '2 weeks ago',
      content: 'Thank you to everyone who attended our monthly fellowship meeting. Great discussions on leadership, character development, and how we can better serve our community. The bonds of brotherhood continue to strengthen! 💪 #Fellowship #Leadership #Brotherhood',
      image: null,
      likes: 31,
      comments: 12,
      shares: 4
    }
  ],
  linkedin: [
    {
      author: 'Men of Honor Social Club',
      date: '3 days ago',
      content: 'Leadership development is at the core of our mission. Through our programs, we\'re helping young men develop the skills, character, and integrity needed to become tomorrow\'s leaders. #Leadership #CharacterDevelopment #YouthPrograms',
      image: null,
      likes: 18,
      comments: 5,
      shares: 2
    },
    {
      author: 'Men of Honor Social Club',
      date: '1 week ago',
      content: 'The Men of Honor Foundation is proud to support educational initiatives that align with our values. Education is a powerful tool for developing strong, principled men who will make a positive impact in their communities. #Education #Foundation #CommunityImpact',
      image: null,
      likes: 25,
      comments: 7,
      shares: 5
    },
    {
      author: 'Men of Honor Social Club',
      date: '2 weeks ago',
      content: 'Honor, strength, integrity - these aren\'t just words to us, they\'re principles we live by every day. Join us in building a community of men committed to these timeless values. #Honor #Strength #Integrity #Community',
      image: null,
      likes: 35,
      comments: 11,
      shares: 8
    }
  ]
}
