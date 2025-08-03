# Social Links Constants

This directory contains centralized constants for all social media usernames and links used throughout the portfolio application.

## Usage

### Import the constants

```javascript
import { SOCIAL_LINKS, getSocialLink, getSocialUsername } from '../constants/socialLinks';
```

### Access social links directly

```javascript
// Get GitHub URL
const githubUrl = SOCIAL_LINKS.GITHUB.url;

// Get LinkedIn username
const linkedinUsername = SOCIAL_LINKS.LINKEDIN.username;

// Get email address
const emailAddress = SOCIAL_LINKS.EMAIL.address;
```

### Use helper functions

```javascript
// Get social link by platform name
const githubUrl = getSocialLink('github');
const linkedinUrl = getSocialLink('linkedin');

// Get username by platform name
const githubUsername = getSocialUsername('github');
```

## Available Platforms

- **GITHUB**: GitHub profile
- **LINKEDIN**: LinkedIn profile
- **EMAIL**: Email address
- **MEDIUM**: Medium blog (if applicable)
- **YOUTUBE**: YouTube channel (if applicable)
- **STACKOVERFLOW**: Stack Overflow profile (if applicable)
- **DEVTO**: Dev.to profile (if applicable)

## Adding New Platforms

To add a new social platform:

1. Add the platform to the `SOCIAL_LINKS` object:

```javascript
NEW_PLATFORM: {
  username: 'your-username',
  url: 'https://platform.com/your-username'
}
```

2. Update the username and URL with your actual information
3. Use the constants in your components

## Benefits

- **Centralized Management**: All usernames and links are in one place
- **Easy Updates**: Change usernames once, updates everywhere
- **Consistency**: Ensures all components use the same usernames
- **Type Safety**: Clear structure for social media data
- **Maintainability**: Easy to add new platforms or modify existing ones
