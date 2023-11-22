# Profile and Posts Display App

This React app showcases a social media profile with a dynamic posts feed. It's designed to display a user's profile picture, follower stats, and a list of posts with engagement metrics.

## Live Server Link

The application is hosted on Netlify. You can view the live version here:
[https://gleeful-faun-c6c006.netlify.app/](https://gleeful-faun-c6c006.netlify.app/)

## Features

- Dynamic user profile card with follower and following counts.
- List of posts displaying engagement icons and stats.
- Responsive design for various screen sizes.

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **FontAwesome & Remix Icon**: Icon libraries used for adding interactive icons to the web application.

## Data Integration

The application utilizes a `data.json` file to dynamically load user profile and posts data. This JSON file acts as a mock database, holding the structured data that the React components consume and render. By using a JSON file for this purpose, the application simulates fetching and displaying data from an API or a real database.

## Main Components

- `ProfileCard`: Displays the top header section with navigation.
- `Profile`: Renders the user's profile information and statistics, populated from `data.json`.
- `Post`: Lists all the posts with titles, excerpts, and interactive icons, with content served from `data.json`.

## Setup and Installation

To get this project up and running on your local machine, follow these steps:

```bash
# Clone the repository
git clone https://github.com/Nisharaibxr/terribly-tiny-tales-task.git

# Navigate to the project directory
cd terribly-tiny-tales-task

# Install dependencies
npm install

# Start the development server
npm start
