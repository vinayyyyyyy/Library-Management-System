# 📚 Library Management API

A RESTful API for managing books and borrowing transactions in a library environment. Built with Express.js, TypeScript, and MongoDB (via Mongoose), the project uses a modular folder pattern—grouping configuration, feature modules, routing, and utilities—to keep concerns isolated and the codebase scalable.

---

## 🚀 Live Demo

[Server Live Link](https://library-management-system-nine-omega.vercel.app)

---

## 📖 Postman Documentation

[Postman API Documentation](https://documenter.getpostman.com/view/40732284/2sB3BKG8qb)

---

## 🔧 Tech Stack

- TypeScript
- Node.js with Express
- MongoDB via Mongoose
- pnpm for package management
- dotenv for environment variables

---

## ✨ Features

- Create, read, update and delete books
- Filter and sort book listings
- Borrow books with business-logic checks
- Automatic copy count updates and availability toggling
- Aggregation pipeline summary of all borrows
- Mongoose static methods and middleware

---

## 🚧 Environment Variables

Create a `.env` file in your project root with the following:

```
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/library?retryWrites=true&w=majority

PORT=8080
```

---

## ⚙️ Installation & Running Locally

1. Clone the repo

   ```bash
   git clone https://github.com/your-username/library-management-api.git

   cd library-management-api
   ```

2. Install dependencies

   ```bash
   pnpm install
   ```

3. Build the TypeScript code

   ```bash
   pnpm build
   ```

4. Start the server

   ```bash
   pnpm start
   ```

5. The API will be available at
   ```
   http://localhost:8080
   ```

---

## Folder Structure

```
library-management-api/
├── .env                   # Environment variables
├── .gitignore             # Git exclusions
├── README.md              # Project overview and setup
├── metadata.json          # Project metadata
├── package.json           # NPM scripts and dependencies
├── pnpm-lock.yaml         # Locked dependency tree
├── src/
│  ├── app.ts              # Express app setup (middleware, routes, error handling)
│  ├── app/
│  │   ├── config/
│  │   │   └── index.ts    # Load .env, configure database URI and port
│  │   ├── modules/
│  │   │   ├── books/      # Books feature module
│  │   │   │   ├── books.interface.ts  # Book DTOs and TypeScript types
│  │   │   │   ├── books.model.ts      # Mongoose schema and model
│  │   │   │   ├── books.controller.ts # CRUD logic for books
│  │   │   │   └── books.route.ts      # /books endpoints and validation
│  │   │   └── borrow/     # Borrowing feature module
│  │   │       ├── borrow.interface.ts
│  │   │       ├── borrow.model.ts
│  │   │       ├── borrow.controller.ts
│  │   │       └── borrow.route.ts
│  │   └── routes/
│  │       └── index.ts    # Aggregate feature routers under /api
│  ├── utils/
│  │   └── generateISBN.ts # Helper to produce random, valid ISBNs
│  └── server.ts           # HTTP server bootstrap (listen on configured port)
└── tsconfig.json          # TypeScript compiler options
```

---

## Key Components

- **Configuration (`src/app/config`)**  
  Centralizes environment loading and database connection setup.

- **Modules (`src/app/modules`)**  
  Each feature (books, borrow) lives in its own folder with:

  - Interface definitions for request/response shapes.
  - Mongoose models for data structure and validation.
  - Controllers encapsulating business logic.
  - Route definitions mapping HTTP methods to controller actions.

- **Routing (`src/app/routes/index.ts`)**  
  Mounts all module routers on a common `/api` path for consistent URL structure.

- **App Initialization (`src/app.ts`)**  
  Applies global middleware (JSON parsing, CORS), mounts routers, and handles errors.

- **Server Bootstrap (`src/server.ts`)**  
  Imports the configured Express app and starts listening on the port defined in `.env`.

- **Utilities (`src/utils`)**  
  Houses shared helper functions like ISBN generation to keep modules focused on core logic.

#### Enjoy building and extending this library management API!
