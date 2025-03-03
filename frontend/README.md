# Frontend Setup for Social AI Project

This repository contains the **frontend** setup for the Social AI project. Follow the instructions below to set up and run the application locally.

---

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v16 or later)
- **npm** or **yarn** (package manager)

---

## Installation

### Step 1: Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/ItsHrishi/superRookie-assignment-social-ai.git
cd superRookie-assignment-social-ai/frontend
```

### Step 2: Install Dependencies

Install the required dependencies using npm or yarn:

```bash
npm install
# or
yarn install
```

---

## Folder Structure

The project follows a modular folder structure for scalability:

```
src/
├── components/         # Reusable UI components
├── assets/             # Static assets (images, fonts, etc.)
├── utils/              # Utility functions
├── context/            # React context for state management
├── App.tsx             # Main app component
├── main.tsx            # Entry point
```

---

## Running the Application

### Start the Development Server

To run the application in development mode:

```bash
npm run dev
# or
yarn dev
```

The application will be available at [http://localhost:5173](http://localhost:5173).

### Building for Production

To create a production-ready build of the application:

```bash
npm run build
# or
yarn build
```

The build output will be generated in the `src/` directory.

---

## Customization

### Add Environment Variables

Create a `.env` file in the root directory for any environment-specific configuration (e.g., API endpoints). Example:

```env
VITE_BACKEND_URL=https://your-api-url.com
```
