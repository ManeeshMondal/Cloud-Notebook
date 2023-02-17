# The Cloud Notebook




Repository for a online notebook where you can store your important notes in your secure account.


## Run Locally

Clone the project

```bash
  git clone https://github.com/ManeeshMondal/Cloud-Notebook
```

Go to the project directory

```bash
  cd Cloud-Notebook
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm  start
```


## API Reference

 #### index.js - It is the main file which runs the server.
 #### db.js- It is the file where database connection is made.
 #### routes - This folder contains routers for API end points. It contains auth.js (/account) and notes.js (/users) files which have API endpoints.


- auth.js

| URL | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `/api/auth/creatUser` | `POST` | name,email,password |
| `/api/auth/login `|`POST` |email,password  |
| `api/auth/getUser` | `GET` |email,password  |


-  notes.js

| URL | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `/api/notes/fetchallnotes` | `GET` |email,password |
| `/api/notes/addnote `|`POST` |title(required),Description(required),tag  |
| `api/notes/updatenote/:id` | `PUT` |title,Description,tag    |
| `api/notes/deletenote/:id` | `DELETE` |  None  |

#### models - This folder contains User.js and Notes.js files which have schema designs for user bequest and user info.
 - Notes.js
    - user- User's ID
    - title- Notes title
    - description- Notes description
    - tag- Notes tag
    - date- Submission date of the Notes
 - User.js
    - name- User name
    - email- User email
    - password- User password
    - date- Date the account has been created
  #^ two spaces
#### middleware
- fetchUser.js-This file contains middlewares for user authentication and generating jwt token


## Features

- User authentication using JWT
- Able to store personal notes in personal account
- User can update their notes
- Data privacy


## Screenshots

![App Screenshot](https://drive.google.com/file/d/1O7Oa9wC8bMuz2zSssWVaaOWhABtonnqf/view?usp=sharing)

