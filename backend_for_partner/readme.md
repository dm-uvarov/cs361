#  Backend microserviceservice for Skyelar's project.

service accept GET HTTP request with '/random' in URL, and return random string with random characters numbers, letters, from 1 to 50 as s respond message with code 200.

## Setup 
* fork and clone.
* make `npm install` (node 18 should be installed first)
* create file `.env` in project folder, and specify port number as follow example "PORT=3050" (change port if needed)

## Run 
* run with `npm start` command 

## Usage
* How to request data: in local enviroment make a Get http request with a postman or any preffered way with following url: `http://localhost:[your port number]/random` 
* you can make a request using following command in javascript: `fetch("http://localhost:3000/random").then(r=>r.json()).then(console.log)`  
* How to recieve data: response promise on above request  will contains random string like :
`{"rs":"Iq1iBrWgI9lFsbW32vbWmp2FOouxn46hJRnhIOuEU5o4xNvF8uTpQ8wojAbbRpoiZb4YlnfLwpuMj9sWksBT"}
`

## UML Sequence Diagram


## upd: docker image added.
