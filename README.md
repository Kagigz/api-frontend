# API Frontend

This project is a ready-to-use front-end app made with ReactJS to be able to test your APIs quickly.
It can accept several input and output types, and is very easily configurable. Simply set the input and output types as well as your API endpoint in the environment variables, and you're ready to go.

![demo gif 1](https://github.com/Kagigz/api-frontend/tree/master/demo/demo1.gif)

![demo gif 2](https://github.com/Kagigz/api-frontend/tree/master/demo/demo2.gif)

There's a light and a dark theme available, and you can easily create your own theme: just add a new theme file with the colors of your choosing.

## How to use

- Download or clone this repository
- Create an .env file to define settings (see below)
- Run `yarn start` or `npm install` then `npm start` to start the project in development mode
- The app will be running at [http://localhost:3000](http://localhost:3000)
- Run `yarn build` or `npm build` to build the app for production usage

### Environment variables

Create an .env file with the following settings:

```
REACT_APP_API_URL="<YOUR_API_ENDPOINT>"
REACT_APP_API_KEY_HEADER_NAME="<YOUR_API_KEY_HEADER_NAME>" // OPTIONAL
REACT_APP_API_KEY="<YOUR_API_KEY>" // OPTIONAL
REACT_APP_INPUT_TYPE="<INPUT_TYPE>"
REACT_APP_OUTPUT_TYPE="<OUTPUT_TYPE>"
```

Set the input and output types to one of the following depending on your use case:
- image
- json
- text
- file
- audio *available soon*
- video *available soon*
