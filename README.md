# API Frontend

This project is a ready-to-use frontend app made with ReactJS to be able to test your APIs quickly.
It is customizable to accept text, json, images or files as input and to return text, json, images or files as output.

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
REACT_APP_INPUT_TYPE="image"
REACT_APP_OUTPUT_TYPE="image"
```

Replace the input and output types with one of the following depending on your use-case:
- image
- json
- text
- file
