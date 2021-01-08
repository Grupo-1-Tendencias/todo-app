# todo-app

Group 1 Todo App

## Installing Docker

Install Docker following the instructions [here](https://docs.docker.com/get-docker/). Additionally, you can also follow this [tutorial](https://docs.docker.com/get-started/) to get a better understanding of how Docker works.

### Installing Docker on Windows 10 Home (IMPORTANT)

If you have Windows 10 Home Edition, please follow [this instructions](https://docs.docker.com/docker-for-windows/install-windows-home/) to install Docker. Docker for Windows 10 Home uses a full Linux backend through WSL2, which you **have** to have installed beforehand. Follow this [tutorial](https://www.omgubuntu.co.uk/how-to-install-wsl2-on-windows-10) to install WSL2 on your machine.

## Installing the project

Docker enables project collaborators to install and run the project without directly installing the dependencies and framework required (Node, MongoDB, Nginx) on their machines. Instead, by just installing Docker and running the project's container(s), they can start developing in no time.

Once you have Docker installed on your computer, open a terminal session on the project directory and follow the instructions below. If you're on Windows, please read [this note](#important-note-for-docker-on-windows) on how to correctly run Docker on this OS.

## Services URL

| Service  | Local URL             | Staging URL                                      | Production URL                           |
| -------- | --------------------- | ------------------------------------------------ | ---------------------------------------- |
| Backend  | http://localhost:5000 | https://g1-todo-app-server-staging.herokuapp.com | https://g1-todo-app-server.herokuapp.com |
| Frontend | http://localhost:3000 | https://g1-todo-app-staging.herokuapp.com        | https://g1-todo-app.herokuapp.com        |

## Start the development containers

The development containers enable the collaborators to develop the app with hot reloading of both the backend and the client, so whenever you make a change to either of them, the matching container will automatically reload and integrate the new changes, without having to manually restart that container every time.

To start the dev containers:

Open the project directory on the terminal (if you're on Windows follow the steps below instead):

```bash
cd /path/to/todo-app
```

### Important note for Docker on Windows

For the best performance while using Docker on Windows, is very important to have the project on the WSL filesystem and to run Docker and Docker Compose inside WSL. Otherwise, hot reloading won't work properly.

Be sure to open the project inside WSL by opening a WSL session:

```bash
wsl
cd ~/ # the WSL home directory
# You could open a nested directory like the Desktop using:
cd ~/Desktop
git clone <GITHUB_REPO_URL>
cd ~/<PROJECT_PATH>/todo-app
```

After opening the project on the terminal, run the development containers using `docker-compose`:

```bash
docker-compose up -d
```

This command will spin up both the backend and the client servers simultaneously. Also, any changes made will restart the servers automatically.

If you want to stop the servers just run:

```bash
docker-compose down
```

## Start the production containers

The production containers are useful when you want to see how the app will run in the exact same environment as the production server without having to wait for them to be deployed first. It doesn't have hot reloading tho.

To start the production containers run this in your terminal:

```bash
docker-compose -f ./docker-compose.prod.yml up -d
```

To stop the containers:

```bash
docker-compose down
```

## Removing unused containers & images

From time to time it's best to remove any container or image that's no longer being used and is still occupying space on your machine storage. To do this, run the following commands:

```bash
# Be sure to run this inside the project directory
docker-compose down --remove-orphans --rmi all
docker image prune -af
```

The first command first stop any running containers and then remove any containers that are not being used as well as their images. The second one is removing any images that have might been still left.
