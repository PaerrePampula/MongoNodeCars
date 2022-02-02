# MongoNodeCars
 An example project demonstrating use of nosql database (mongodb) with a nodejs express server
 
# Usage tutorial for example project

Download from the releases, simply run "npm run dev" with npm installed when inside the folder with terminal.

Localhost serves the application, port is included in the index, so localhost:3000/{routing} where {routing} is the specific api route
 
# Creation tutorial for creating a similar project from scratch
Recommended tool: Visual Studio Code, or some other text tool or IDE, preferrably with terminal access

Other tools needed:

- Nodejs

- Npm (Node package manager). This is installed alongside nodejs, so install this through the nodejs installer

- A noSQL database, Mongodb is a good one. Register an account through their website. (https://www.mongodb.com/cloud/atlas/register) Shared cluster allows free use.


# Step one: Folder creation and initialization

Create a folder anywhere, find this folder with a terminal window, then run npm init in this folder, go with defaults with the creation parameters.

Select this folder in your chosen IDE or text/code editor.

We need a few extra npm packages to do things, so install express and body-parser with:

npm install express body-parser

you can also add in nodemon if you do not have this. Nodemon allows you to restart your server automatically, if you change your source code on-the-fly.

Body parser allows us to parse info easily from requests from client, express allows us to run a minimal nodejs web application, with only nodejs installed.

Your package.json file should like something liiike this:
![package.json screenshot, where "scripts" part only contains "test"](https://i.imgur.com/PdjwZgZ.png)

Add in a new line in "scripts", name it somehow, I name it "dev" and give it the value of "node index.js"

This means that "npm run dev" will run "node index.js". This index.js does not exist yet.

We add this because it simplifies running our node application.

# Step two: Starting off with the application

To start off, create some files, first of all we create the index.js file mentioned below, create this in the root folder

This will be our "main" on the project, and will for example use routing from another file and start the server as well.

This index js file should look something like this:
![A ready index.js file, should contain imports for body parser and express, with express and bodyparser both enabled, and with a listen server enabled](https://i.imgur.com/P9ifFGF.png)

File here:
https://github.com/PaerrePampula/MongoNodeCars/commit/c01fabb502d859537a6a8fd6f9798e3eb1a78df9#diff-e727e4bdf3657fd1d798edcd6b099d6e092f8573cba266154583a746bba0f346

At this point, we do not have any way to connect to our not-yet-existing database, this is why we need to run 

"npm install mongoose" (IN THE TERMINAL!) as well. This install an object library for Node.js and MongoDB, and this contains the .connect() method we need to create a connection.


# Step three: Mongodb database initialization

Once your mongodb cloud login is registered (atlas cloud platform), Create a shared cluster on the Amazon AWS platform on the mongo db atlas website.

Now wait until your mongodb cluster has finished initialization, this might take around three minutes.

Once complete, choose database access on the atlas website, then add a new database user with what ever authentication you want to provide. I choose username + password, remember this info for later.

Now choose network access from the sidebar. Since this is just a practise project, 0.0.0.0/0 (meaning any ip) should be fine for list of allowed entries. You can ofcourse add in your own public ipv4 address if you wish, but this is not necessary for a project like this.

We also need some more info from our cloud db. Go to the databases page, then press the connect button. Then press "connect your application".

The default driver with your version of node js should be fine.

Copy the connection string for later. \<password\> part should be replaced with your db user password, and the "myFirstDatabase" will also be replaced later.
 
Close this window, and select the cluster name, this should bring you to the cluster overview page, choose "Collections", then create a new database 

For my example project, I will create a database containing cars, so i will name my database cardb, and my collection will be named "cars". This ddatabase will contain your database information in a noSQL fashion.

I will add example data in my database by pressing "INSERT DOCUMENT"
![An example insert](https://i.imgur.com/f1zTvIX.png)

We will use this little example data to demonstrate a GET request from our database.

You can make your data anything you wish.

# Step four: Car model initialization for server api

We will create a model in our api next, like in the following screenshot:
![An example folder creation, with "models" folder, in it there is a "car.js" file](https://i.imgur.com/onr5ucv.png)

Then create the actual model, like in the following commit:
https://github.com/PaerrePampula/MongoNodeCars/commit/4d52597c8de38fb3a415d0098ce49eeb8d009a2e#diff-0cc9fbfc920247f81a75e30e9fd4c8903dddf0287d33b9956c7ceb4bdfb1ca60

In the new Schema({}) you can insert info that your database schema = model of a specific item in your database.
Specify the datatype and then other optional info.

module.exports allows you to use this schema outside this model file.

## Step five: Routing for api

We will create the routing for our api, to allow our clients to read our database from localhost

For this, create a new file called "routes.js"

This will contain our GET method only so far, but it should look something like this:

![An example of our initial routes.js](https://i.imgur.com/3jTPKUT.png)
Link to commit file: 
https://github.com/PaerrePampula/MongoNodeCars/commit/dc2ca1b3d1f34e8c1c60c68f45cde89d78ade9c1#diff-4b1f2573e5dc9454dfa3ab71722822457b86820e0f34409bc220e402999a0476


Then, our index.js file should also use this routing. Add in the routes object and also use it in the app object.
![](https://i.imgur.com/1HlKjFs.png)
Link to commit file:
https://github.com/PaerrePampula/MongoNodeCars/commit/5cf21bd43776d80b178b0c36743feb415d8d9990#diff-e727e4bdf3657fd1d798edcd6b099d6e092f8573cba266154583a746bba0f346


# Step six: Enabling DB connection

The mongoose module has not connected to the db yet, so lets add in this connection now:

![](https://i.imgur.com/avB8Ga1.png)
Link to commit file:
https://github.com/PaerrePampula/MongoNodeCars/commit/95ee36c3ebfa4b06a4b44cb005277480d70dead5#diff-e727e4bdf3657fd1d798edcd6b099d6e092f8573cba266154583a746bba0f346

The connection string should be the one copied from the atlas, replace the password part with your password and replace the myFirstDB part with your db name.

# Step seven: Testing our get API

Simply run the express server with "npm run dev", then go to localhost:PORT/cars, or whatever your routing is for the GET method

For example, my GET will return:
![](https://i.imgur.com/wcMkmUD.png)

Note that I have installed a chrome extension to make json responses a bit more human readable

# Step eight: Adding more CRUD operations to routing

Lets add some more CRUD operations. We will add a get operation for a specific id, deleting and updating.
Here is a link to the commit containing the new methods.
https://github.com/PaerrePampula/MongoNodeCars/commit/acbcd7ea91ae637d214ee9ec8afe8d36c2ded595#diff-4b1f2573e5dc9454dfa3ab71722822457b86820e0f34409bc220e402999a0476

# Final step: Testing extra crud operations
You cannot simply do these crud operations without creating some extra frontend, so to actually use these operations/routing,
install the desktop version of postman agent. (https://www.postman.com/downloads/)

Then in your workspace, you can create requests to these methods. You can change the method on the left side of the url
In the body tab, write raw data as JSON, then type in the values of your model.

If the model is typed correctly, you can insert new info to the database, which can be verified with a GET method.

You can also delete info with the DELETE method selected.
