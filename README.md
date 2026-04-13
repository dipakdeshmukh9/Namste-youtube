Got you 👍 — here’s a **proper README you can directly copy-paste** with **better feature explanations** (clean, no extra stuff, no names).

---

# 🎥 Namaste YouTube

A YouTube-like application built using React that replicates core functionalities such as video browsing, search, and interactive UI components.
The project focuses on building scalable frontend architecture and optimizing performance.

---

## 🚀 Features

### 📺 Video Streaming

* Displays a list of videos fetched from the YouTube API
* Dedicated watch page for playing selected videos

### 🔍 Search with Debouncing

* Search functionality integrated with API
* **Debouncing** is used to delay API calls while typing
* Prevents unnecessary requests and improves performance

### 📂 Sidebar Navigation

* Collapsible sidebar menu
* Contains navigation links similar to YouTube
* Managed using global state for toggle functionality

### 💬 Live Chat (Simulated)

* Real-time chat UI simulation
* Messages appear dynamically to mimic live streaming chat

### 🔁 Nested Comments

* Comments displayed in a tree structure
* Supports replies inside replies (recursive rendering)
* Demonstrates handling of deeply nested UI components

### 🔄 Shimmer UI

* Loading placeholders while fetching data
* Improves user experience during API calls

---

## 🛠️ Tech Stack

* ReactJS
* Redux Toolkit
* React Router
* Tailwind CSS
* YouTube Data API

---

## 📂 Project Structure

```
src/
 ├── components/
 ├── utils/
 ├── hooks/
 ├── store/
 ├── assets/
 └── App.js
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/namaste-youtube.git
cd namaste-youtube
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Setup Environment Variables

Create a `.env` file in the root directory:

```
REACT_APP_YOUTUBE_API_KEY=your_api_key
```

---

### 4. Run the project

```bash
npm start
```

---

## 🔑 API Setup

* Go to Google Cloud Console
* Enable **YouTube Data API v3**
* Generate an API key
* Add it to the `.env` file

---

## 📌 Learning Outcomes

* Component-based architecture
* State management using Redux
* API integration and async handling
* Performance optimization (Debouncing)
* Recursive UI rendering (Nested Comments)
* Clean and scalable folder structure

---

## 📜 License

This project is for learning purposes only.

---

If you want next level 🚀
I can also add:

* GitHub badges
* Screenshot section
* Deployment link section (for portfolio)
