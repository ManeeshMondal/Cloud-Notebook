# The Cloud Notebook




Repository for a online notebook where you can store your important notes in your secure account.

## Screenshots

#### Starting page
![WhatsApp Image 2023-02-13 at 21 53 04](https://user-images.githubusercontent.com/93001043/219706145-fee2eb33-d27e-47d5-b834-157fb2d91ff1.jpg)
#### Footer
![WhatsApp Image 2023-02-13 at 21 53 33](https://user-images.githubusercontent.com/93001043/219706792-82f472ca-a9d8-47d5-85f4-3d1a88a9ec1d.jpg)
#### Login page
![WhatsApp Image 2023-02-13 at 21 54 05](https://user-images.githubusercontent.com/93001043/219706800-55f267d7-d8a3-442c-9801-bfc92b2edb02.jpg)
#### Signup Page
![WhatsApp Image 2023-02-13 at 21 54 32](https://user-images.githubusercontent.com/93001043/219706803-acc86367-18d2-46f3-a1c1-60a9bf169160.jpg)
#### Home page(Where user can add notes)
![WhatsApp Image 2023-02-13 at 22 11 17](https://user-images.githubusercontent.com/93001043/219706806-b02852c7-6e93-4cbd-ae9b-a331a871f21e.jpg)
#### Notes page
![WhatsApp Image 2023-02-17 at 21 56 13](https://user-images.githubusercontent.com/93001043/219709553-4933bdd0-daa6-414f-8b64-58bf8fc3e4fb.jpg)
#### Edit Note page
![WhatsApp Image 2023-02-17 at 21 56 46](https://user-images.githubusercontent.com/93001043/219709558-305359fa-0e54-4c00-b99b-b5558dc6cd20.jpg)


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

#### Starting page
![WhatsApp Image 2023-02-13 at 21 53 04](https://user-images.githubusercontent.com/93001043/219706145-fee2eb33-d27e-47d5-b834-157fb2d91ff1.jpg)
#### Footer
![WhatsApp Image 2023-02-13 at 21 53 33](https://user-images.githubusercontent.com/93001043/219706792-82f472ca-a9d8-47d5-85f4-3d1a88a9ec1d.jpg)
#### Login page
![WhatsApp Image 2023-02-13 at 21 54 05](https://user-images.githubusercontent.com/93001043/219706800-55f267d7-d8a3-442c-9801-bfc92b2edb02.jpg)
#### Signup Page
![WhatsApp Image 2023-02-13 at 21 54 32](https://user-images.githubusercontent.com/93001043/219706803-acc86367-18d2-46f3-a1c1-60a9bf169160.jpg)
#### Home page(Where user can add notes)
![WhatsApp Image 2023-02-13 at 22 11 17](https://user-images.githubusercontent.com/93001043/219706806-b02852c7-6e93-4cbd-ae9b-a331a871f21e.jpg)
#### Notes page
![WhatsApp Image 2023-02-17 at 21 56 13](https://user-images.githubusercontent.com/93001043/219709553-4933bdd0-daa6-414f-8b64-58bf8fc3e4fb.jpg)
#### Edit Note page
![WhatsApp Image 2023-02-17 at 21 56 46](https://user-images.githubusercontent.com/93001043/219709558-305359fa-0e54-4c00-b99b-b5558dc6cd20.jpg)


