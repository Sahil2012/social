# 🧠 Social.ai : Social Media Analytics Platform

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [System Architecture](#system-architecture)
3. [Deployment](#deployment)
4. [Frontend Implementation](#frontend-implementation)
5. [Backend Implementation](#backend-implementation)
6. [LangFlow Integration](#langflow-integration)

---

## 🚀 Project Overview

### 🎯 Objective

The goal of this project is to build an analytics module that analyzes engagement data from mock social media accounts using Langflow and DataStax integration.

### 🔑 Core Components

- **DataStax Astra DB**: Database for efficient data storage and retrieval
- **Langflow**: Workflow creation and GPT integration
- **React.js**: Frontend framework
- **Node.js**: Proxy backend
- **Google Gemini**: AI-powered insights generation

### ⭐ Key Features

- Real-time social media analytics
- GPT-powered insights generation
- AI-powered chatbot
- Custom metric tracking
- Post performance analysis
- Engagement metrics calculation

---

## 🏗️ System Architecture

The system is designed with a microservices-based architecture consisting of:

1. **Frontend**: Built using React.js for a dynamic and interactive user interface.
2. **Backend**: A Node.js proxy server that handles API requests and WebSocket connections.
3. **Database**: DataStax Astra DB for managing data storage and retrieval efficiently.
4. **AI Integration**: Langflow for creating workflows and integrating with Google Generative AI.

---

## 🌐 Deployment

### 📡 Live Application

- **Production URL**: [https://super-rookie-assignment-social-ai.vercel.app](https://super-rookie-assignment-social-ai.vercel.app)
- **🎥 YouTube Video**: [https://www.youtube.com/watch?v=HvGaHkaEa80](https://www.youtube.com/watch?v=HvGaHkaEa80)
- **Platform**: Vercel (Frontend) | Render (Backend)
- **Status**: ✅ Active

### 🛠️ Deployment Infrastructure

- **Frontend**: React.js hosted on Vercel
- **Database**: DataStax Astra DB
- **AI Integration**: Langflow and Google Gemini

---

## 🔧 Backend Implementation

The backend is built using **Node.js** and acts as a proxy server to manage API requests and WebSocket connections.

### 🔄 WebSocket Management

- **Unique requestId assignment**
- **Connection tracking**
- **Real-time data streaming**
- **Error handling**

### 📡 API Endpoints

1. **Chat Endpoint**
   - Handles client requests
   - Forwards to Langflow API
   - Streams responses
   - Error management

---

## 🤖 LangFlow Integration

LangFlow is used to create an **end-to-end AI-powered flow** that transforms raw data into actionable insights using:

- **Google Generative AI**
- **NVIDIA Embeddings**
- **DataStax Astra DB**

### 📋 Flow Breakdown

#### 1️⃣ File Upload (MOCK_DATA.csv)

- The file upload serves as the primary data source.
- Any CSV file with relevant data can be used.

#### 2️⃣ Split Text

- The uploaded file is divided into smaller chunks for easier processing.
  - **Chunk Size**: 300 characters
  - **Chunk Overlap**: 50 characters

#### 3️⃣ Astra DB Integration

- The processed chunks are stored in **Astra DB** for efficient data retrieval.

#### 4️⃣ NVIDIA Embeddings

- Text chunks are converted into vector representations using **NVIDIA's Embedding Models**.

#### 5️⃣ Prompt Creation

- A structured prompt is created to guide the AI response.

#### 6️⃣ Google Generative AI

- The **Google Generative AI** component generates insightful content.
  - Model used: `gpt-1.5-pro`

#### 7️⃣ Chat Output

- The generated content is displayed in a **chat format**.

---
