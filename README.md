# $tock^

Stock Up is a simple stock trading app built for a technical assessment.

A user can create an account and portfolio, search for stocks by ticker symbol,
purchase shares, and view a transaction record. The app uses [Alpha Vantage Stocks API](https://www.alphavantage.co/support/#support) to fetch stock prices every 60 seconds and
provide current prices for a dynamically rendered portfolio that displays ticker symbol,
shares, and current stock price, colorized to indicate performance. The application
uses authorization for a secure user experience. Due to frequency limitations from
the stocks API, there are some loading issues if user activity is frequent or volumous.
That issue and other needed refactors will be done at a future date.

## Deployed Site

  [$tock^ - The Premiere Stock Portfolio Simulator](https://stockup-client-deploy.herokuapp.com/) 

## Screenshot  

<img 
  src="stockup-client/public/stockupScreenshot.png" 
  alt="StockUp Screenshot" 
  width="1350" 
/>

## Author
  - Dan Romans | [dangrammer](https://github.com/dangrammer)

## Languages/Libraries:

Front End (Client):

  - HTML5 (JSX)
  - CSS3 (customized - no templates)
  - ES6 JavaScript
  - React ^16.13.1 
  - React-Dom ^16.13.1 
  - React-Redux ^7.2.0 
  - React-Router ^5.2.0 
  - React-Router-Dom ^5.2.0 
  - React-Scripts ^3.4.0 
  - Redux ^4.0.5 
  - Redux-thunk ^4.0.5 
  - Redux-Devtools-Extension ^2.13.8

Back End (API):

### Ruby Version
  - ruby 2.6.1

### Rails Version
  - rails ~> 6.0.1

### Database
  - postgreSQL

### Gem Dependencies
  - fast_jsonapi
  - rack-cors
  - bcrypt ~> 3.1.7
  - jwt ~> 2.2, >= 2.2.1
  - dotenv-rails

## How To Install and Run 

  1. fork (optional) then clone or download this repository to local machine

### Back End (API)

  2. use text editor and/or terminal to navigate into `stockup-api` directory
  3. run `bundle install` (or `bundle i`) in terminal to install necessary dependencies
  4. run `rails db:create` in terminal to create database
  5. run `rails db:migrate` in terminal to initialize database
  6. create secret key:
      - create a `.env` file in root directory
      - write secret key for JWT in `.env` file:
        ```
        JWT_SECRET_KEY=KEY_HERE
        # see note below
        ```
  7. run `rails s` in terminal to run server in browser at http://localhost:3000/

  *_Note:_ `KEY_HERE` _should be characters of your choice. **Always include**
  `.env` **file in** `.gitignore` **file**.

### Front End (Client)

  8. use text editor and/or terminal to navigate into `stockup-client` directory
  9. run `npm install` (or `npm i`) in terminal to install necessary dependencies
  10. create secret key:
      - create a `.env` file in root directory
      - write secret key for Alpha Vantage Stocks API in `.env` file:
        ```
        REACT_APP_API_KEY=KEY_HERE
        ```

  *_Note:_ `KEY_HERE` should be an individually assigned key from [Alpha Vantage Stocks API](https://www.alphavantage.co/support/#support)._ **Always include** `.env` **file in** `.gitignore` **file**.

  11. run `npm start` in terminal to launch the app in browser

  *_Note: If backend server is already running, it will be running on http://localhost:3000/. After 
  running_ `npm start`_, follow prompt and enter_ `y` _in terminal to run frontend on alternate port._
