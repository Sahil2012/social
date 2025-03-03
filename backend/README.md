# Express Backend Setup

This repository contains the backend for the **SuperRookie Assignment - Social AI** project. It uses **Express.js** as the web framework and includes environment variable configuration for sensitive data.

## Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v14.x or later)
- **npm** (v6.x or later)
- A terminal or command-line interface

## Clone the Repository

To get started, clone the repository using the following command:

```bash
git clone https://github.com/ItsHrishi/superRookie-assignment-social-ai.git
cd superRookie-assignment-social-ai/backend
```

## Installation

Install the dependencies required for the project:

```bash
npm install
```

## Environment Variables

This project uses environment variables for sensitive data. Create a `.env` file in the `backend` directory and add the following variables:

```env
LANGFLOW_TOKEN=<your-langflow-token>
PORT=3000
```

Replace `<your-langflow-token>` with your actual token. Ensure the `PORT` value matches your desired port.

## Usage

Start the development server:

```bash
npm start
```

By default, the server runs on `http://localhost:3000`. You can customize the port by modifying the `PORT` value in your `.env` file.

## Scripts

- **Start the server:**
  ```bash
  npm start
  ```
- **Run in development mode:**
  ```bash
  npm run dev
  ```

## Dependencies

The project uses the following main dependencies:

- **Express**: Web framework for Node.js
- **dotenv**: Loads environment variables from a `.env` file

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

### Notes

- Ensure you do not commit the `.env` file or sensitive data to version control.
- For additional configurations or features, consult the [Express documentation](https://expressjs.com/).
