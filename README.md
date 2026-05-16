# Easy Learn Suomi

A full-stack English to Finnish vocabulary learning application with an admin panel for managing word pairs and a student-facing view for browsing and practising vocabulary.

Live demo: https://pavithra-nodejs-test.herokuapp.com/

---

## What It Does

- Browse the full English to Finnish word list
- Admin panel to add, update, and delete word pairs
- Persistent storage via MySQL database
- State managed globally with Redux

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Redux, React Router DOM v6 |
| HTTP Client | Axios |
| UI | Bootstrap, Material UI (MUI) |
| Backend | Node.js, Express |
| Database | MySQL |
| Deployment | Heroku |

---

## Project Structure

```
Language_learning_App/
├── client/             # React frontend (built output)
├── public/             # Static files served by Express
├── server.js           # Express API server
├── package.json
└── Procfile            # Heroku deployment config
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/words` | Fetch all word pairs |
| POST | `/admin/add` | Add new English/Finnish word pair |
| PUT | `/admin/update` | Update a Finnish word by ID |
| DELETE | `/admin/delete/:id` | Delete a word pair by ID |

---

## Snapshots

Home page

![Home](https://user-images.githubusercontent.com/87486009/169625178-f1f515c3-4244-4fa2-bde5-9cd40e552b44.png)

Admin page

![Admin](https://user-images.githubusercontent.com/87486009/169625257-7228390b-3ca5-4f34-a0f9-015bc9187cfc.png)

User page

![User](https://user-images.githubusercontent.com/87486009/169625280-01aedc10-3ff3-4502-bf6c-25235ec9ac56.png)

---

## Run Locally

### Prerequisites

- Node.js 16+
- MySQL database

### Setup

1. Clone the repository

```bash
git clone https://github.com/spavythra/Language_learning_App.git
cd Language_learning_App
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file in the root

```env
HOST=your_mysql_host
USER=your_mysql_user
PASSWORD=your_mysql_password
DATABASE=your_database_name
PORT=8000
```

4. Set up the database table

```sql
CREATE TABLE words (
  id INT AUTO_INCREMENT PRIMARY KEY,
  Eng_word VARCHAR(255) NOT NULL,
  Fin_word VARCHAR(255) NOT NULL
);
```

5. Start the server

```bash
npm start
```

App runs at `http://localhost:8000`
