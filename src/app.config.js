/**
 * Global application config file
 */
const appConfig = {
  postsPerPage: 9,
  /**
   * Displays a default Featured Image when a Post does not have one
   */
  archiveDisplayFeaturedImage: true,
  themeColor: 'blue',
  /**
   * @type {[key: 'twitterUrl' | 'facebookUrl' | 'instagramUrl' | 'youtubeUrl' | 'githubUrl' | 'linkedinUrl']: string}
   */
  socialLinks: {
    twitterUrl: 'https://twitter.com/wpengine',
    facebookUrl: 'https://www.facebook.com/azzajm/',
    instagramUrl: 'https://www.instagram.com/aaronmccann95/',
    youtubeUrl: 'https://youtube.com/wpengine',
    githubUrl: 'https://github.com/AaronWPTech',
    linkedinUrl: 'https://www.linkedin.com/in/aaron-mccann-a8730b190/',
  },
};

export default appConfig;
