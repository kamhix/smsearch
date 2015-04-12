# SMSearch

## What is it ?

Short Message Search (or SMSearch) is a search service aimed at mobile users with no access to internet. SMSearch want to bridge the gap between data and the ones needing it. Users simply have to send their query by SMS to receive meaningful informations by the same means. Right now, the service is focused on consumable goods, providing descriptions, prices, tips and other insights. The informations collected in the database are based on real-life observations, obtained with close cooperation with productors and sellers.

## Installation

### Clone the repo

    $ git clone 
    $ cd 

### Install dependencies

    $ npm install

### Install MongoDB

Please download the lastest version of MongoDB at http://www.mongodb.org/downloads
and follow the installation guide at http://docs.mongodb.org/manual/installation/
to install properly MongoDB according to your operating system.

### Run project

    $ node server/server.js

### Pull changes

    $ git pull origin master

### Add environment variables

    $ cp env .env

Edit .env.

### Code

Create a branch to add a new feature, bug fix or any other change:

    $ git checkout -b your-branch-name

Start coding. Write tests as necessary. Then push to origin.

    $ git push origin your-branch-name

### Update dependencies to their latest version

    $ npm update

### Install a new dependency

Add the package name and version number to package.json and run:

    $ npm install

### Check in

    $ git add <your files>
    $ git commit -m "your commit message"
