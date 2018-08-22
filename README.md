# F-Logger: Friendly Student Logger
## For educators, by educators

TODO: Describe the app

## Installation (Mac/Linux)

### MongoDB v4:

Run the following in your home directory (or wherever your working directory is):

(Linux)
```
wget https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-ubuntu1604-4.0.0-rc1.tgz
```

(Mac)
```
wget http://fastdl.mongodb.org/osx/mongodb-osx-ssl-x86_64-4.0.0-rc1.tgz
```
*You may also have to install `wget` first by running `brew install wget`*

Unzip the files with:

```
tar -xvzf mongodb-linux-x86_64-ubuntu1604-4.0.0-rc1.tgz
```

Rename the folder to `mongo4.0`:

(Linux)
```
mv mongodb-linux-x86_64-ubuntu1604-4.0.0-rc1 mongo4.0
```

(Mac)
```
mv mongodb-osx-ssl-x86_64-4.0.0-rc1 mongo4.0
```

Add the `mongo4.0/bin` directory to your PATH.  An example of how to do it (there are multiple ways) is by running:

```
PATH=$PATH:~/workspace/mongo4.0/bin/
```

Where `~` is the home directory, and `mongo4.0` is in a folder called `workspace` (which is in the home directory).

Try running a server with `mongod --smallfiles`.  If you see something like `[initandlisten] waiting for connections on port 27017` at the end, you know it worked!

### Development Server

Clone this repository:

```
git clone https://github.com/timmyichen/f-logger
```
*This copies all the files + all the git information from the linked repository, including all the commit histories and stuff.*

Install the node packages:

```
npm install
```
*This looks in the `package.json` file where all the required packages, or dependencies, are listed, along with their versions, and then installs them*

Run both your local mongoDB server and the dev server with `npm run dev`

Run the dev server by itself with `npm run dev-server`.
