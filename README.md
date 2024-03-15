# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# How to Fork the Repo

This repository contains [description of your repository]. In order to fork this repository and start contributing, follow the steps below:

## Prerequisites

Before forking this repository, ensure that you have Node.js installed on your system.

- [Node.js](https://nodejs.org/en/): Make sure you have Node.js installed. You can download and install Node.js from [here](https://nodejs.org/en/download/).

## Forking the Repository

1. **Navigate to the Repository**

2. **Fork the Repository**: Click on the "Fork" button located at the top-right corner of the repository page. This will create a copy of the repository in your GitHub account.

3. **Clone the Forked Repository**: Once the repository is forked, you need to clone it to your local machine. Open a terminal and execute the following command, replacing `<username>` with your GitHub username:

   ```bash
   git clone https://github.com/<username>/repository-name.git
   ```

# Installing Dependencies

After cloning the repository, navigate to the project directory in your terminal and install the dependencies using npm (Node Package Manager). Run the following command:

```bash
npm install
```

### This command will install all the required dependencies specified in the package.json file.

Contributing
Now that you have forked and cloned the repository and installed the dependencies, you are ready to start contributing. Make your changes, commit them, and push to your forked repository. Finally, create a pull request to merge your changes into the original repository.

## Then run below command

```bash
   npm run dev
```

If you encounter any issues or have questions, feel free to open an issue or reach out to the maintainers.

# Backend run guildlines

### Run the following command:

```bash
    cd backend
```

### Then run

```bash
    npm i
```

### all the nodemodules and all the dependency packages will be installed.

### Now before Running the backend Insert data to your MongoDb databse through following code snippits

```bash
index.js
const mongoose = require("mongoose");
const Education = require("./Education");

// Connect to your own db MongoDB
mongoose
  .connect(
    "mongodb+srv://<Username>:<password>@cluster0.tj7olde.mongodb.net/Career_Compass_test"
  )
  .then(() => {
    console.log("Connected to MongoDB");

    // Sample education data
    const educationData = [ here the whole data of CareerCompass.json will come]
    // Insert education data to the database
    Education.insertMany(educationData)
      .then(() => {
        console.log("Education data inserted successfully");
      })
      .catch((error) => {
        console.error("Error inserting education data:", error);
      });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

```

### Do the above step in a differnet project altogether , copy above code and education.js file code initialize a completely new node.js project and run it .

## After that run this backend

```bash
cd backend
```

```bash
npm start
```

## After this run the following command to run server backend
```bash
cd backend/server
```

```bash
npm start
```

## RUN Frontend normally in a diff terminal

### Happy coding! 🚀
