# Interactive Personal Portfolio

## 📌 Overview
This project is an **interactive personal portfolio** built with **Next.js**, **React**, **Tailwind CSS**, and **Firebase Firestore**.  
Unlike a static portfolio, this one allows **real-time updates** and **dynamic project documentation** through an admin section.

### Features
- **Landing Page**: Introduction with profile info and quick navigation.
- **Projects Section**: Each project includes overview, requirements, visuals, use cases, and demo links.
- **Admin Section**: Secure area to add/edit project documentation, upload demos, and control project visibility.
- **Contact Section**: Chatbot for FAQs or option to contact directly.

This portfolio acts as a **living README** of your professional work.

---

## ✅ Requirements

### Technical Requirements
- **Frontend**
  - Next.js (React framework with App Router & SSR)
  - TypeScript (type safety and scalability)
  - Tailwind CSS (styling and responsive design)

- **Backend / Database**
  - Firebase Firestore (store project docs, messages, and chat history)
  - Firebase Authentication (secure admin access)

- **Optional Enhancements**
  - Firebase Storage (upload demos, images, videos, or PDFs)
  - Chatbot integration (Dialogflow or custom Firestore-powered bot)

---

### Functional Requirements
1. **Landing Page**
   - Show intro, profile info, and quick navigation.

2. **Projects Section**
   - Display all projects dynamically from Firestore.
   - Each project contains:
     - Overview  
     - Requirements  
     - Ads/visuals (optional)  
     - Demo links/media  
     - Use cases  
   - Filter and search projects by category/tech stack.

3. **Admin Section**
   - Secure login with Firebase Auth.
   - Add/edit/remove project documentation.
   - Upload demos/media.
   - Toggle project visibility.

4. **Contact Section**
   - Chatbot for FAQs or initial conversation.
   - Option to send direct message (stored in Firestore or sent via email).

---

### Non-Functional Requirements
- Responsive design (mobile-first).
- Clean, modern UI using Tailwind.
- Scalable Firestore collections for projects and messages.
- Secure authentication for admin.
- Fast load times with Next.js optimizations.

