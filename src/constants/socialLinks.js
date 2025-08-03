// Social Media Usernames and Links
export const SOCIAL_LINKS = {
  // GitHub
  GITHUB: {
    username: 'sudo-umair',
    url: 'https://github.com/sudo-umair',
  },

  // LinkedIn
  LINKEDIN: {
    username: 'sudo-umair',
    url: 'https://www.linkedin.com/in/sudo-umair',
  },

  // Email
  EMAIL: {
    address: 'muhammadumair523@gmail.com',
    url: 'mailto:muhammadumair523@gmail.com',
  },

  // Add more social platforms as needed
  MEDIUM: {
    username: 'sudo-umair', // Update this with actual Medium username
    url: 'https://medium.com/@sudo-umair',
  },

  YOUTUBE: {
    username: 'sudo-umair', // Update this with actual YouTube username
    url: 'https://youtube.com/@sudo-umair',
  },

  STACKOVERFLOW: {
    username: 'sudo-umair', // Update this with actual Stack Overflow username
    url: 'https://stackoverflow.com/users/sudo-umair',
  },

  DEVTO: {
    username: 'sudo-umair', // Update this with actual Dev.to username
    url: 'https://dev.to/sudo-umair',
  },
};

// Helper function to get social link by platform
export const getSocialLink = (platform) => {
  return SOCIAL_LINKS[platform.toUpperCase()]?.url || '';
};

// Helper function to get username by platform
export const getSocialUsername = (platform) => {
  return SOCIAL_LINKS[platform.toUpperCase()]?.username || '';
};
