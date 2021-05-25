![Working Demo](https://github.com/gryffindor-2020/Mausam/blob/main/image.jpg)

# Mausam -Weather App

It is a weather App used to view temperature, visibility and air quality index.
It is deployed on Heroku :
http://mausamsite.herokuapp.com/

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Features](#features)

## General info

Mausam as the name suggests is a weather App used to view Temperature, Visibilty, Wind Status, Humidity and many more. It works on a weather API to retrieve data. It also has a search bar in which by typing the name you can view weather of any city. By default the weather is displayed based on your IP Address.

## Technologies

Mausam is created with:

- React JS: 16.13.1
- Redux: 4.0.5
- SASS: 4.14.1

## Setup

To run this project, install it locally using npm:

```
$ cd ../Mausam
$ npm install
$ npm run dev
```

## Features

Instead of a default city for every user, first time the app loads, city will be set to the city fetched by using user's IP Address.
Search Bar fetches results according to the query entered by user without reloading the entire page. Also, the search bar is optimised to wait till the user has stopped typing, only then the API call is fired. Therefore, decreasing the API calls.
This entire app is responsive and is made without help of any external library like Bootstrap and purely with CSS.
