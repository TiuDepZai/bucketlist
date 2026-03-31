# BucketList

A personal bucket list web application built with the **MERN stack** (MongoDB, Express, React, Node.js).  

Manage your life goals, add items, pick random goals, and track progress — all in a sleek, interactive interface.

---

## 🚀 Features

- Create and manage multiple **buckets** (categories of goals)  
- Add, remove, and mark **bucket items** as done  
- Pick a **random item** from a bucket for inspiration  
- **Glassy, modern UI** with hover effects and smooth transitions  
- Responsive design for **desktop and mobile**  
- Sticky headers and hover-scroll for better usability  

---

## 💻 Tech Stack

- **Frontend:** React, Tailwind CSS  
- **Backend:** Node.js, Express  
- **Database:** MongoDB (via Mongoose)  
- **API:** RESTful routes for buckets and items  
- **Extras:** Glassy buttons, skeleton loaders, hover-scroll lists  

---

## 📂 Project Structure
bucketlist/
├─ client/ # React frontend
│ ├─ src/
│ │ ├─ api/ # Axios setup
│ │ ├─ components/
│ │ ├─ screens/
│ │ └─ App.js
├─ server/ # Node/Express backend
│ ├─ models/
│ ├─ routes/
│ └─ server.js
├─ package.json
└─ README.md


---

## ⚡ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/bucketlist.git
cd bucketlist
```
2. Install dependencies

Backend:
```bash
cd server
npm install
```
Frontend:
```bash
cd ../client
npm install
```
3. Setup environment variables

Create a .env file in server/:
```bash
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

4. Run the project

Backend:
```bash
cd server
npm run dev
```
Frontend:
```bash
cd client
npm start
```
Frontend runs on http://localhost:3000
Backend runs on http://localhost:5000
🎨 Screenshots



📝 API Endpoints
Buckets
GET /api/buckets → Get all buckets
POST /api/buckets → Create new bucket
Items
GET /api/items?bucketId=<id> → Get items of a bucket
POST /api/items → Add new item
GET /api/items/random?bucketId=<id> → Pick a random item
🙌 Contributing

This is a personal hobby project, but contributions are welcome!

Fork the repo
Create your feature branch (git checkout -b feature/YourFeature)
Commit your changes (git commit -m 'Add some feature')
Push to the branch (git push origin feature/YourFeature)
Open a pull request

---
This project is MIT licensed