# random_image_and_joke_generator

## Description
This Node.js server built with Express.js fetches a random image from the Unsplash API using an access key stored in a .env file. It listens on port 4000 and handles requests for a random image endpoint.

## Setup

1) Clone the repository.

2) Run npm install to install dependencies.

3) Create a .env file in the root directory with the following content:
    ```
    UNSPLASH_ACCESS_KEY=YOUR_UNSPLASH_ACCESS_KEY
    API_NINJA_X_API_KEY = YOUR_API_NINJA_X_API_KEY
    ```

4) Replace `YOUR_UNSPLASH_ACCESS_KEY` with your actual Unsplash access key.

5) Replace `YOUR_API_NINJA_X_API_KEY` with your actual Api ninja x_api_key

6) Run the server using `npm start`

## Endpoints

- ### GET /random-image
    - Fetches a random image from the Unsplash API.
    - Requires a valid Unsplash access key.
    - Returns an object with URLs of the random image.

- ### GET /dad-joke
    - Fetches a random dad joke from the api ninja api
    - Require a valid Api ninja access key
    - Returns an object with a random dad joke
## Error Handling

- If an internal server error occurs, a 500 status with a message will be returned.

- For any other routes not defined, a 404 status with a "PAGE NOT FOUND" message will be returned.

## Dependencies

- Express.js
- Axios
- dotenv

## Environment Variables

- UNSPLASH_ACCESS_KEY: Your Unsplash access key.

## Running the Server

To start the server, run `npm start`. The server will be up and running at port 4000.