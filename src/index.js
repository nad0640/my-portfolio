import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./pages/landing/hero.css";
import "./pages/landing/about.css";
import "./pages/portfolio/portfolio.css";
import "./pages/resume/resume.css";
import "./pages/contact/contact.css";
import "./pages/404/pageNotFound.css";

import App from "./App";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


//  {
//    "title": "Planner",
//    "image": "./projectImages/planner.png",
//    "technologies": ["JavaScript", "Moment", "Bootstrap", "HTML", "CSS"],
//    "description": "Introducing the Daily Planner App – Your Ultimate Day Organizer\nElevate your productivity and seize each moment with the Daily Planner App – your reliable companion in maximizing every minute. Bid farewell to those memory lapses concerning crucial appointments and meetings. This app stands as your dependable aide, offering a streamlined and effective method to manage your schedule, particularly during those intense 9-to-5 stretches!\nAnd hold on tight, because the magic doesn't stop there. This ingenious app understands the significance of ambiance – it adapts its colors to correspond with the time of day. Now that's what you call setting the perfect atmosphere! But wait, there's more – your to-dos? They're here to stay, securely stored and readily accessible whenever you require them. It's time to conquer your day like a true champion! 📝 ✅",
//    "deployed": "https://eric-planner-work-red.vercel.app",
//    "bgcolor": "#3e67ff",
//    "id": "6"
//  },
//  {
//    "title": "ChatBot",
//    "image": "./projectImages/chatbot.png",
//    "technologies": ["Php", "HTML", "CSS","Mysql"],
//    "description": "The Cloud-Based Student Information Chatbot System is a web application powered by AI that understands and responds to student queries about college activities. It accepts queries in various formats, uses AI for accurate responses, and allows users to flag incorrect answers. Admins can review and edit flagged responses. The system offers a user-friendly interface that mimics human interaction. It's deployed on a cloud platform like AWS or GCP for easy access and scalability.",
//    "deployed": "https://edgier-basis.000webhostapp.com/index.php",
//    "bgcolor": "#f85781",
//    "id": "4"
//  }