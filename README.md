# music-app  
## Table of Contents  
[Introduction](#introduction)  
[Implemented Features](#implemented-features)  
[Deployments](#deployments)  
[Running Backend locally  ](#running-backend-locally)  
[Running the Frontend locally](#running-the-frontend-locally)  
[Implemented Features](https://github.com/Reid-T-W/ReConnect#implemented-features)  
[Tech Stack](#tech-stack)
[Authors](#authors)
[Licensing](#licensing)

## Introduction  
An app that is built for the Addis Software internship test. It can help view a list of saved songs. It also supports adding, updating, and deletion of a song. Moreover it also displays stats of songs, albums, artists and genres. Searching by
different filters is also supported.
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

## Deployments
[Back to Top](#table-of-contents)  
Frontend is deployed on vercel [Deployment link](https://addis-software-internship-test.vercel.app/)  
Backend is deployed on render [Deployment link](https://addissoftwareinternshiptest-reid-t-w.onrender.com/api/v1)  

## Running Backend locally  
### Using docker
Clone the repo  
```bash
    git clone https://github.com/Reid-T-W/AddisSoftwareInternshipTest.git  
```
cd into the backend directory  
```bash
    cd backend  
```
run docker compose up  
```bash
    docker compose up  
```

## Running the Frontend locally
Clone the repo  
```bash
    git clone https://github.com/Reid-T-W/AddisSoftwareInternshipTest.git  
```
cd into the music-app directory  
```bash
cd music-app
```
Install dependencies  
```bash
npm install
```
Run  
```bash
npm start
```
## Tech Stack
### Frontend
- ReactJS
- Redux Toolkit  
- Typescript  
- Redux-Saga  
- Emotion and Styled systems  

### Backend
- ExpressJS  
- MongoDB
- Mongoose  
- Docker  
## Authors  
Rediet Tadesse [Linkedin](https://www.linkedin.com/in/rediet-tadesse-43209013b/)  

## Licensing  
Licensed under the Apache License 2.0  