# Redux Structure

The application's state is organized by data type. Under each data type, there
may be sub-states. Each action is listed with the sequence of events that
results from its invocation, ending with the API or a reducer. Subscribed
components, i.e. containers, are listed at the end.

Using this document, you should be able to trace an **action** starting with
where it was invoked, through the **API**/**reducer** involved, and finally to
the **components** that update as a result. Once you start implementing your
Redux structure, you'll need to do the same.

## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `SignupForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `Navbar` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from `Navbar` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.
* `fetchCurrentUser`
  0. invoked from `App` in `didMount`
  0. `GET /api/session` is called.
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` stores `currentUser` in the application's state.
* `removeCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` removes `currentUser` from the application's state.

## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. the `ErrorReducer` stores the `form` in the application's state; `errors` are mapped to their respective forms
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. the `ErrorReducer` removes `errors` for a given `form` in the application's state.

## Friend Cycles

### Friends API Request Actions

* `fetchAllFriends`
  0. invoked from `FriendsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/friends` is called.
  0. `receiveAllFriends` is set as the success callback.

* `addFriend`
  0. invoked from add friend button `onClick`
  0. `POST /api/friends` is called.
  0. `receiveSingleFriend` is set as the success callback.

* `fetchSingleFriend`
  0. invoked from `FriendDetail` `didMount`/`willReceiveProps`
  0. `GET /api/friends/:id` is called.
  0. `receiveSingleFriend` is set as the success callback.

* `destroyFriend`
  0. invoked from delete friend button `onClick`
  0. `DELETE /api/friends/:id` is called.
  0. `removeFriend` is set as the success callback.

### Friends API Response Actions

* `receiveAllFriends`
  0. invoked from an API callback
  0. the `FriendReducer` updates `friends` in the application's state.

* `receiveSingleFriend`
  0. invoked from an API callback
  0. the `FriendReducer` updates `friends[id]` in the application's state.

* `removeFriend`
  0. invoked from an API callback
  0. the `FriendReducer` removes `friends[id]` from the application's state.

## Profile Cycles

### Profiles API Request Actions

* `fetchAllProfiles`
  0. invoked from `ProfilesIndex` `didMount`/`willReceiveProps`
  0. `GET /api/profiles` is called.
  0. `receiveAllProfiles` is set as the success callback.

* `createProfile`
  0. invoked from new profile button `onClick`
  0. `POST /api/profiles` is called.
  0. `receiveSingleProfile` is set as the callback.

* `fetchSingleProfile`
  0. invoked from `ProfileDetail` `didMount`/`willReceiveProps`
  0. `GET /api/profiles/:id` is called.
  0. `receiveSingleProfile` is set as the success callback.

* `updateProfile`
  0. invoked from `ProfileForm` `onSubmit`
  0. `POST /api/profiles` is called.
  0. `receiveSingleProfile` is set as the success callback.

* `destroyProfile`
  0. invoked from delete profile button `onClick`
  0. `DELETE /api/profiles/:id` is called.
  0. `removeProfile` is set as the success callback.

### Profiles API Response Actions

* `receiveAllProfiles`
  0. invoked from an API callback.
  0. The `Profile` reducer updates `profiles` in the application's state.

* `receiveSingleProfile`
  0. invoked from an API callback.
  0. The `Profile` reducer updates `profiles[id]` in the application's state.

* `removeProfile`
  0. invoked from an API callback.
  0. The `Profile` reducer removes `profiles[id]` from the application's state.

## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `FriendSearchBar` `onChange` when there is text
  0. `GET /api/friends` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the success callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. The `SearchSuggestion` reducer updates `suggestions` in the application's state.

* `removeSearchSuggestions`
  0. invoked from `FriendSearchBar` `onChange` when empty
  0. The `SearchSuggestion` reducer resets `suggestions` in the application's state.
