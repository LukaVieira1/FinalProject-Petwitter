# Petwitter

Petwitter is a Twitter-like application for pets, where users can log in, register, tweet, and access user profiles.

https://petwitter.vercel.app/

## Prerequisites

Ensure the following tools are installed on your machine:

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

## Running the Application

Follow the steps below to get the project up and running.

1. Download the [Back-End project](https://github.com/LukaVieira1/FinalProject-Petwitter-BackEnd) to your machine and create a GitHub repository based on it.
2. Execute the following commands to set up the back-end:

```bash
# Install dependencies
$ yarn
# Start the server
$ yarn dev
```

3. Clone the front-end repository to your machine and install its dependencies:

```bash
# Install dependencies
$ yarn
```

4. At the root of the "FinalProject-Petwitter-FrontEnd" directory, create a `.env.local` file and add the environment variable "REACT_APP_API_URL" with the API link. In this project, use "REACT_APP_API_URL=http://localhost:3000".
5. Run the front-end project on a port other than 3000, as it will already be in use. If you are using Visual Studio Code, it will prompt you to run the project on a different port when you try to start it:

```bash
# Start the project
$ yarn start
```

## Project Structure

```
FinalProject-Petwitter-FrontEnd/
├── public/ # Static files like HTML, logos, etc.
├── src/
│ ├── components/ # Reusable React components
│ ├── context/ # Contexts for global state management
│ ├── routes/ # Application routes
│ ├── services/ # Services for API communication
│ ├── App.js # Root React component
│ ├── index.js # React entry point
├── .env.local # Local environment variables
├── package.json # Dependency management and scripts
└── yarn.lock # Lock file to ensure dependency versions
```
