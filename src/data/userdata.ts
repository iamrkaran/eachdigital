
// Sample user data
const sampleUser: User = {
  id: '1',
  username: 'sampleUser',
  email: 'user@example.com',
  profilePicture: '/images/extra/1.png',
  followers: 1000,
  following: 500,
  posts: 50,
  bio: 'Social media enthusiast',
  onboardingCompleted: false,
  customizableDashboard: {
    backgroundColor: '#ffffff',
    theame: 'Default Theme ',
    widgets: [
      {
        id: 'w1',
        type: 'Weather' as WidgetType,
        title: 'Weather Forecast',
        content: 'Sunny with a high of 75°F',
      },
      {
        id: 'w2',
        type: 'News' as WidgetType,
        title: 'Latest News',
        content: 'Top headlines from around the world',
      },
      {
        id: 'w3',
        type: 'Calendar' as WidgetType,
        title: 'Upcoming Events',
        content: 'Check your upcoming events and appointments',
      },
    ],
  },
};

export default sampleUser;
