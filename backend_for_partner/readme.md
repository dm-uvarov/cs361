#  Backend microserviceservice for Skyelar's project.

service accept GET HTTP request with '/random' in URL, and return random string with random characters numbers, letters, from 1 to 255 as s respond message with code 200.

## setup 
* fork and clone.
* make "npm install" (node 18 should be installed first)
* create file ".env" in project folder, and specify port number as follow example "PORT=3050" (change port if needed)

## run 
* run with "npm start" command 

## use
* in local enviroment make a Get http request with a postman or any preffered way with following url: "http://localhost:[your port number]/random" 
* response will contains random string like :
"{"rs":"Iq1iBrWgI9lFsbW32vbWmp2FOouxn46hJRnhIOuEU5o4xNvF8uTpQ8wojAbbRpoiZb4YlnfLwpuMj9sWksBT"}
"