# AI FAQ Assistant 🤖

A full-stack AI-powered FAQ assistant that uses OpenAI's GPT model to answer user questions in real-time. Built with **React**, **Node.js**, **Express**, and styled using **Tailwind CSS**.

---

##  Features

- Ask natural language questions
- Get AI-generated answers via OpenAI Chat API
- Chat-like interface with user/AI bubbles
- Mock fallback mode for testing without OpenAI quota
- Clean, responsive UI using Tailwind CSS

---

##  Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **AI API**: OpenAI (ChatGPT `gpt-3.5-turbo`)
- **Other**: Axios, Dotenv, CORS

---

##  Installation

### 1. Clone the repo
```bash
git clone https://github.com/yourusername/ai-faq-assistant.git
cd ai-faq-assistant
```

### 2. Setup the backend
```bash
cd server
npm install

# Create your .env file
echo "OPENAI_API_KEY=your_openai_key_here" > .env

# Run the backend
node index.js
```

### 3. Setup the frontend
```bash
cd ../client
npm install
npm start
```

> App runs on `http://localhost:3000` and connects to backend at `http://localhost:5000`

---

##  Mock Mode
If OpenAI API fails (e.g., quota exceeded), it returns a fallback mock answer so the app still functions.

---

## 📄 License
MIT — Free to use and adapt.
