Directory tree:
```bash
├───backend - ExpressJS Back-end home directory
│   ├───models
│   └───routes
├───Docker - Generic docker related files
└───frontend - ReactJS Front-end home directory
    ├───public
    └───src
        └───components
```
This project solution considers the dedicated docker containers for frontend, backend and mongodb database. Complete solution can be started with the docker-compose. See the steps below:

1. Clone this repo.
2. Open this project home directory.
3. Build image for front-end:
```bash
cd frontend
docker build -t frontend-react .
```
3. Build image for back-end:
```bash
cd ../backend
docker build -t backend-express .
```
4. Start project solution using the predifned docker-compose:
```bash
cd ../Docker
docker-compose up -d
```
