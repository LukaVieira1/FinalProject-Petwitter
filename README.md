# Petwitter
Petwitter is an application that works as a Twitter for pets, where users can log in, register, tweet, and access user profiles.

You can access a demo [here](https://petwitter.lukavieira.tech/)

## Prerequisites
Make sure you have the following tools installed on your machine:
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

## Running the Application
To start the project, follow the steps below:

1. Download the [Back-End project](https://github.com/LukaVieira1/FinalProject-Petwitter-BackEnd) to your machine and create a repository on GitHub based on it.
2. Execute the following commands:
   ```bash
   # Install dependencies
   $ yarn
   # Start the server
   $ yarn dev
```bash
# Instalar as dependências
$ yarn
# Executar o server
$ yarn dev
```
3. Clone the Front-End project to your machine and execute the following commands:
```bash
# Install dependencies
$ yarn
```

4. Create a .env-local file at the root of the "FinalProject-Petwitter-FrontEnd" folder and add the following environment variable:
```bash
REACT_APP_API_URL=http://localhost:3000
```

6. Run the project on a port other than 3000, as it will already be in use (if you're using VSCode, it will prompt you to run the project on a different port):
```bash
# Start the project
$ yarn start
```
