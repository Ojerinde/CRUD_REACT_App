# CRUDify APP

***1400px***

![image](https://user-images.githubusercontent.com/104495751/190288960-58700845-da49-4ff0-a01b-9ff3c7fd6dfb.png)

***400px***

![image](https://user-images.githubusercontent.com/104495751/190288770-8572a046-c8ba-4518-997b-81e5dde8c58b.png)

## Introduction

As a student of AltSchool Africa, CRUDify APP is an application I built using many of the React concepts 
I was taught and some concepts which I reserched on.

Currently, the application does not make use of any database but hardcoded lists of phones.

The application does the following,
* Displays phones
* Creates phone
* Updates phone
* Deletes phone

## Main Files: Project Structure

```
├── README.md
├── public
│   ├── index.htnl
├── .gitignore
├── package.json
└── src
│   ├── Assets
│   ├── Components
│   ├── Store
│   ├── App.js
│   ├── index.js
│   └── config
```

## Getting Started

### Pre-requisites and Local Development 

The prerequite tool for local development is:
* Node

### Frontend
The app is built with React so there is need to install the frontend dependencies using Node.js and NPM

You can confirm if Node.js and NPM is installed successfully using the codes below

```
node -v
npm -v
```

From the frontend folder, run the following commands to start the client: 

```
npm install # run this once to install dependencies
npm start 
```

By default, the frontend will run on `localhost:3000`. 

### Authentication
On the first page, there is a sign in button, clicking on it will redirect you to a page where you will verify 
gmail account.

The application make use of firebase authentication and so you will have to verify your gmail account before you can access the application

## How the APP works
* Header :
  * This is where you navigate to all the pages of the application
  
  ![image](https://user-images.githubusercontent.com/104495751/190289266-dc11473d-7d28-4f21-87a1-935c5d29ea74.png)

* Home Page: 
  * This is the default page
  * Phones are displayed and are paginated in group of 1
  * You can search for a phone with its name or search using a letter in the phone name.
  * The sign out button to logout of the application.

* Create Page:
  * This is where you create a phone
  
* Update Page:
  * This is where you update a phone using its ID and also passing new details
  
* Delete Page:
  * This is where you delete  a phone using its ID
  
## Deployment
The app is deployed on Firebase

## Author
Joel Ojerinde

## Acknowledgements 
AltSchool Africa
