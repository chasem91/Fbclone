# Fbclone

[Heroku link][heroku] **Note:** Link to Fbclone

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Fbclone is a web application inspired by Facebook built using Ruby on Rails and React/Redux. By the end of week 9, this site will include the following:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Profiles
- [ ] Friending
- [ ] Comments/posting on each others' walls
- [ ] News Feed

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Redux Structure][redux-structure]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-heirarchy.md
[redux-structure]: docs/redux-structure.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

- [ ] New Rails project
- [ ] `User` model/migration
- [ ] Back end authentication (session/password)
- [ ] `StaticPages` controller and root view
- [ ] Webpack & react/redux modules
- [ ] `APIUtil` to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] User signup/signin components
- [ ] Blank landing component after signup/signin
- [ ] Style signup/signin components
- [ ] Seed users
- [ ] Review phase 1

### Phase 2: Users Model, API, and components (2 days)

**Objective:** Users can be created, edited and destroyed through
the API.

- [ ] `User` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for users (`UsersController`)
- [ ] JBuilder views for notes
- Note components and respective Redux loops
  - [ ] `UsersIndex`
  - [ ] `UserForm`
- [ ] Seed notes

### Bonus Features (TBD)
- [ ] Notifications
- [ ] Likes
- [ ] Comments on a comment
- [ ] Search
- [ ] Messaging
- [ ] Pictures/albums
