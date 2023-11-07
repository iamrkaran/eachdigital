type User = {
    id: string; // Unique user ID
    username: string; // User's username
    email: string; // User's email address
    profilePicture: string; // URL to the user's profile picture
    followers: number; // Number of followers
    following: number; // Number of users being followed
    posts: number; // Number of posts created by the user
    bio: string; // User's bio or description
    isOnBoardingCompleted: boolean; // Whether the user has completed the onboarding process
    customizableDashboard: CustomizableDashboard;
  }
  
  type CustomizableDashboard = {
    backgroundColor: string; // Background color of the dashboard
    theame: string; // The name of the theme applied to the dashboard
    widgets: Widget[]; // Array of widgets on the dashboard
  }
  
  type Widget = {
    id: string; // Unique widget ID
    type: WidgetType; // Type of the widget (e.g., "Weather", "News", "Calendar")
    title: string; // Title of the widget
    content: string; // Content or data displayed by the widget
  }
  
  type WidgetType = "Weather" | "News" | "Calendar"; // Define possible widget types

  
