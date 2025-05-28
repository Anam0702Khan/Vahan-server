# Vehicle Challan Dashboard

A full-stack application that helps to search and view vehicle challan details. Users can input a vehicle number, view the associated challans, and see the last five search records.

##  Features

-  Insert vehicle numbers and fetch challan details
-  Display previous five vehicle search history
-  List multiple challans per vehicle
-  Real-time UI updates with TailwindCSS and React
-  RESTful API using Express & MongoDB

-  ###  Frontend
- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)

###  Backend
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB (with Mongoose)](https://mongoosejs.com/)
- [Render](https://render.com/) for deployment

  ##  Live URLs

| Platform   | Link |
|------------|------|
|  Frontend (Vercel/Netlify) | [https://symphonious-moxie-f371ea.netlify.app/] |
|  Backend (Render)  | [(https://vahann.onrender.com/)] |

## Local Setup Instructions

### 1. Clone the repository

```bash
git clone [(https://github.com/Anam0702Khan/Vahan-client] [https://github.com/Anam0702Khan/Vahan-server]
cd your-repo-name

## For Backend
cd server
npm install
Create env file in your server folder and add these variables
MONGO_URL=your-mongodb-connection-uri
After this write this command npm start your application will start running

## For Frontend
cd client
npm install
Write this command it will start running npm run dev
