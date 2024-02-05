# music-app  
## Table of Contents  
[Introduction](#introduction)  
[Implemented Features](#implemented-features)  
[Deployments](#deployments)  
[Running Backend locally  ](#running-backend-locally)  
[Running the Frontend locally](#running-the-frontend-locally)  
[Tech Stack](#tech-stack)  
[Authors](#authors)  
[Licensing](#licensing)  

## Introduction  
An app that is built for the Addis Software internship test. It can help view a list of saved songs. It also supports adding, updating, and deletion of a song. Moreover it also displays stats of songs, albums, artists and genres. Searching by
different filters is also supported.  
[Back to Top](#table-of-contents) 

## Demo Video  
[![Demo video for music-app]()]()
## Implemented Features  
- [x] View list of songs
- [x] Add a new song  
- [x] Update a song
- [x] Delete a song  
- [x] View total number of songs, albums, artists, and genres in the system
- [x] View how many songs and albums each artist has
- [x] View how many songs each album has
- [x] View how many songs each genre has
- [x] Search using different filters, search via title, genre, album, and artist  
[Back to Top](#table-of-contents) 

## Deployments   
Frontend is deployed on vercel [Deployment link](https://addis-software-internship-test.vercel.app/)  
Backend is deployed on render [Deployment link](https://addissoftwareinternshiptest-reid-t-w.onrender.com/api/v1)  
[Back to Top](#table-of-contents) 

## Running Backend locally  
### Using docker
Clone the repo  
```bash
    git clone https://github.com/Reid-T-W/AddisSoftwareInternshipTest.git  
```
Cd into the backend directory  
```bash
    cd backend  
```

Setup your .env file using the example specified in the .env.example file  
(i.e. as the app makes use of MongoDB Atlas you will need to create a database on MongoDB Atlas and use that uri in your .env file)    

run docker compose up  
```bash
    docker compose up  
```  
[Back to Top](#table-of-contents) 

## Running the Frontend locally
Clone the repo  
```bash
    git clone https://github.com/Reid-T-W/AddisSoftwareInternshipTest.git  
```
cd into the music-app directory  
```bash
cd music-app
```  
Setup your .env file using the example specified in the .env.example file  
  
Install dependencies  
```bash
npm install
```
Run  
```bash
npm start
```  
[Back to Top](#table-of-contents) 
## Tech Stack
### Frontend
- ReactJS
- Redux Toolkit  
- Typescript  
- Redux-Saga  
- Emotion and Styled systems   

### Backend
- ExpressJS  
- MongoDB (MongoDB Atlas)
- Mongoose  
- Docker   
[Back to Top](#table-of-contents) 
## Authors  
Rediet Tadesse [Linkedin](https://www.linkedin.com/in/rediet-tadesse-43209013b/)   
[Back to Top](#table-of-contents) 

## Licensing  
Licensed under the Apache License 2.0  
[Back to Top](#table-of-contents) 