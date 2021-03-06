[![Build Status](https://travis-ci.org/JoOCon/event-mapper-fe.svg?branch=master)](https://travis-ci.org/JoOCon/event-mapper-fe)

# Event Mapper

Event Mapper is a map application that allows users to find events near their area. Users sign-in through Google and are taken to a map home page where they can view multiple events nearby.  Users can view the events information (name, venue, address, date, distance, picture, etc...) and save/remove an event to their watchlist. WIP includes, sharing of events with frineds and a purchace interface for buying tickets through the TicketMaster API.

## Technologies
* React, React-Router
* Redux
* [React-mapbox-gl](https://github.com/alex3165/react-mapbox-gl/blob/master/docs/API.md)
* [Ruby on Rails](https://github.com/SSchwartz214/event_mapper_api)

## APIs
* Google O-Auth
* [Mapbox API](https://www.mapbox.com/mapbox-gl-js/api/)
* [TicketMaster API](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/)
* [DarkSky API](https://darksky.net/dev/docs)

## Set Up
Clone down this [Repo](https://github.com/JoOCon/event-mapper-fe.git)
* Install dependencies `npm install`
* Run server `npm start`
* eslint `npm run eslint`

* Run tests || test coverage`npm test || npm test -- --coverage`

### Contributors
* [Joel O'Connor](https://github.com/JoOCon)
* [Paul Kim](https://github.com/sojurner)
* [Seth Schwartz(BE)](https://github.com/SSchwartz214)

## Results
![event-mapper-fe-2](https://user-images.githubusercontent.com/35910428/47851268-c042b000-dd9d-11e8-8b8c-3e33278c958d.gif)

![event-mapper-3](https://user-images.githubusercontent.com/35910428/47851253-b3be5780-dd9d-11e8-9eaa-17592d6b57d7.gif)
