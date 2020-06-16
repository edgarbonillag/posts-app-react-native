# Posts App - React Native

This is a sample React Native application using RN v0.62, Typescript and Redux. Data is retrieved from https://jsonplaceholder.typicode.com/ .

With this app the user can:

- See a list of different text posts.
- Navigate to another screen after tapping on a post on the lists. There is shown the detailed description of a specific post.
- See the information of the user that created the post.
- See the comments of the post.
- Mark the post as Favorite.
- Mark the post as Read (done automatically).
- Refresh the posts list retrieving data again from the server and setting it to its initial state.
- Switch between "All posts" and "Favorites".
- Delete a post from the list by swapping it to the left.
- Delete all posts by tapping the delete button on the bottom of the main screen.

The app includes several UX enhancements, like indicating the user when the posts, user, or comments data is being retrieved, when there's an error and when the lists are empty.

The app also has different layouts and styles for Android and iOS, as the provided designs requeired.

## Getting started

- First make sure to have `node`, `yarn` and `react-native-cli` installed on your machine.
- You will need a Mac in order to run the iOS app. In that case, make sure to have `cocoapods` installed.
- You also need to have Android Studio and XCode (if on Mac) installed.

After cloning the repository to your local machine, open a terminal on the project's root folder and execute the following command to install the needed `node_modules`:

```
$ yarn install
```

Then (if on Mac), execute this command to install the needed `Pods`:

```
$ cd ios && pod install
```

Finally, go back to the project's root folder:

```
cd ..
```

## Create the .env file

Create a `.env` file in project's root folder and write this inside the file:

```
API_URL=https://jsonplaceholder.typicode.com/
```

## Launch iOS

Execute:

```
$ react-native run-ios
``` 

or launch the app from XCode opening the .workspace file

## Launch Android

- Make sure to have an Android emulator running or a physical device connected to your machine. Then execute:

```
$ react-native run-android
```

## VSCode extensions

- Prettier
- ESLint
- TSLint
- Editorconfig

## Project's Architecture (based on Flux)

```
root
|__android        // Android Studio project
|__ios            // Folder containing XCode files and iOS native project
|__node_modules   // Libraries and dependencies
|__src            // Main React Native project files
  |__components     // Contains the shared components
  |__navigation     // Contains the navigation structuring
  |__screens        // Contains the screens
  |__services       // Contains the services related to API calls
  |__store          // Contains the Redux related files
    |__actions    
    |__reducers
    |__index.ts
  |__theme          // Contains general styling variables like colors
  |__utils          // Contains general functions of constants needed in the app
  |__types.ts       // Contains the types of the main data used in the app
|__App.tsx      // App Main file
|__index.js     // Entry file
|__ ...
|__ other files
|__ ...
```

## Libraries used

- React Native v0.62.2

- TypeScript v3.8.3

- `react-native-config`
This library is used to be able to access environmental variables defined in a `.env` file. On real projects, the `.env` is not committed to the repository and is a way to keep data safe, such as API's URLs, services Keys such as Google, Stripe, among other sensitive data.

- `redux` (along with `react-redux` and `redux-thunk`) 
Used for global state management on the app. Fits perfectly the Flux architechture.

- `styled-components`
Nice way to add styles to components and write then in a very intuitive and clean way.

- `react-navigation`
Used to add navigation to the app.

- `react-navigation-props-mapper`
Used to access the `react-navigation`'s screen params as props. 

- `react-native-vector-icons`
Used to add generic, predefined and public icons in the app.

- `react-native-gesture-handler`
Used to manage gestures made by the user on the screen. In the case of this project it is used for the "swipe to delete" feature. It is also internally used by `react-navigation`. 

- `eslint` and `prettier`
Used to find and fix problems in the code. Also, ensure consistency in code writing along the project.

- `husky` (along with `lint-staged`)
Used to run specific scripts at the moment a commit is done. In the case of this project, it is used to check that there are no TypeScript errors and then, using `lint-staged` automatically fixes issues related to `prettier`

:v: **Enjoy!**
