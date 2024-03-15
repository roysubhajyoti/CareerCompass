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
