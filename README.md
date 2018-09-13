# F-Logger: Friendly Student Logger
## For educators, by educators

TODO: Describe the app

## Installation (Mac/Linux)

### MongoDB v4:


Create a new directory for MongoDB in your home directory and navigate to it
```
mkdir ~/mongo-server
cd ~/mongo-server
```

#### Mac

Once in your `mongo-server` directory, run the following:

```
wget http://fastdl.mongodb.org/osx/mongodb-osx-ssl-x86_64-4.0.0-rc1.tgz
```
*You may also have to install `wget` first by running `brew install wget`*

Unzip the files with:

```
tar -xvzf mongodb-osx-ssl-x86_64-4.0.0-rc1.tgz
```

Rename the folder to `mongo4.0`:

```
mv mongodb-osx-x86_64-4.0.0-rc1 mongo4.0
```

Make a directory for the data itself:

```
mkdir ~/mongo-server/data
```

Try running a server with `~/mongo-server/mongo4.0/bin/mongod --smallfiles --dbpath ~/mongo-server/data`.  If you see something like `[initandlisten] waiting for connections on port 27017` at the end, you know it worked!  Press CTRL+C to close the server.

#### Linux

Once in your `mongo-server` directory, run the following:

Run the following in your home directory (or wherever your working directory is):

```
wget https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-ubuntu1604-4.0.0-rc1.tgz
```

Unzip the files with:

```
tar -xvzf mongodb-linux-x86_64-ubuntu1604-4.0.0-rc1.tgz
```

Rename the folder to `mongo4.0`:

```
mv mongodb-linux-x86_64-ubuntu1604-4.0.0-rc1 mongo4.0
```

Make a directory for the data itself:

```
mkdir ~/mongo-server/data
```

Try running a server with `~/mongo-server/mongo4.0/bin/mongod --smallfiles --dbpath ~/mongo-server/data`.  If you see something like `[initandlisten] waiting for connections on port 27017` at the end, you know it worked!  Press CTRL+C to close the server.

### Development Server

Clone this repository:

```
git clone https://github.com/timmyichen/f-logger
```
*This copies all the files + all the git information from the linked repository, including all the commit histories and stuff.*

Navigate to your f-logger folder:

```
cd f-logger
```

Install the node packages (make sure you're running the latest version of node.js):

```
npm install
```
*This looks in the `package.json` file where all the required packages, or dependencies, are listed, along with their versions, and then installs them*

Run both your local mongoDB server and the dev server with `npm run dev`

Run the dev server by itself with `npm run dev-server`.

## Want to contribute?  Look at the docs for more guides.