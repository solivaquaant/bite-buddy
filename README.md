# Bite Buddy
From Our Kitchen to Your Doorstep...

## Description
**Bite Buddy** is a convenient and user-friendly website for ordering food from a variety of restaurants specializing in Asian cuisine. Our goal is to bring the flavors of Asia to your doorstep with just a few clicks.

## Getting Startet
### Installing
To install and run Bite Buddy locally, follow these steps:

1. Clone the repository:
```
https://github.com/solivaquaant/bite-buddy.git
```
2. Navigate to the `backend` directory and install the necessary dependencies:
```
cd backend
npm i express cors dotenv mongodb mongoose 
npm i ts-node typescript nodemon @types/express @types/cors @types/node --save-dev
```
- Create `.env` and your MongDB String:
```
MONGODB_CONNECTION_STRING = [add_yours]
```
3. Navigate to the `frontend` directory and install the necessary dependencies:
```
cd frontend
npm install -D tailwindcss postcss autoprefixer
```
- Create `.env` file and add:
```
VITE_AUTH0_DOMAIN=[add-yours]
VITE_AUTH0_CLIENT_ID=[add-yours]
VITE_AUTH0_CALLBACK_URI=http://localhost:5173
```

### Executing program
To start the development server, change diretory to `backend` and `frontend`, then run the following command:
```
npm run dev
```

## Help
If you encounter any issues, you can report the issue on [project's Github](https://github.com/solivaquaant/bite-buddy/issues) or contact to me.

## Authors
[Thái Trinh](https://github.com/solivaquaant)

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.
