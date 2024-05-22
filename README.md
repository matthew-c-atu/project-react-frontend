# REACT FRONTEND
![image](https://github.com/matthew-c-atu/project-react-frontend/assets/148288884/d4d50759-7ee5-4040-9ce3-373684c57266)

The ReactJS frontend service for the final project music player web app.
Uses React and Vite.


# USAGE
The below steps describe how to run the entire suite of services in order to run the web app locally.

1. Download the react-frontend repo from https://github.com/matthew-c-atu/project-react-frontend
   Use a static HTTP server program to serve the dist/ folder.
   
   Recommended: `serve` (https://formulae.brew.sh/formula/serve) 
   Serve the react-frontend on port 9000.
   For example: `serve -l 9000 dist/`
   
2. Download the audio-streamer repo from https://github.com/matthew-c-atu/project-audio-streamer
   Run the audio-streamer binary (it will be ran on port 9001).
   
3. Download the database repo from https://github.com/matthew-c-atu/project-database
   Run the database binary (it will be ran on port 9002).


To add more songs to the audio-streamer service, run the `convert.sh` script located in https://github.com/matthew-c-atu/project-audio-streamer.
Run `convert.sh -h` or `convert.sh --help` to see its usage.

### IMPORTANT
Make sure the audio-streamer is ran BEFORE the database. 
The database serivce makes a connection to the audio-streamer services at startup to populate the database, so if it does not detect the audio-streamer running on port 9001, then it will panic and exit the program.

