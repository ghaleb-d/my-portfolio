# Ghaleb’s Personal Portfolio Website

This repository hosts my personal portfolio website built with **Next.js** (App Router), **Tailwind CSS**, and **React Icons**. It showcases my background, skills, experience, and ongoing projects, and provides a contact form with direct email delivery and a Calendly scheduler.

---

## 🔍 Features

* **Responsive Design**: Fully mobile‑friendly using Tailwind CSS.
* **Dynamic Pages**:

  * **About**: Overview and bio.
  * **Skills**: Technical, Cybersecurity, Web Tech & Frameworks, DevOps & Tools, Databases, Spoken Languages.
  * **Experience**: Timeline of roles with rich bullet points and links.
  * **Ongoing Projects**: Live projects with details.
  * **Contact**: Client‑validated form sending emails via a serverless API, plus an embedded Calendly widget.
* **Email Delivery**: Uses a Next.js API route and Nodemailer, authenticated via Google SMTP App Password for secure mail sending.
* **Calendly Inline**: Book meetings directly from the page.

---

## 🛠 Tech Stack

* **Framework**: Next.js 15 (App Router)
* **Styling**: Tailwind CSS
* **Fonts**: Montserrat via `next/font`
* **Icons**: React Icons (Font Awesome)
* **Email**: Nodemailer with Google SMTP, Netlify Functions
* **Scheduler**: `react-calendly` InlineWidget
* **Deployment**: Netlify with custom GoDaddy domain

----------
🧪 Testing

Unit Tests: Validation utilities (validateName, validateEmail, validateSubject, validateMessage) are covered by Jest tests in __tests__/validation.test.ts.

Run Tests: Execute npm test to run all unit tests and ensure validation logic is correct.

----------
## 🚀 Getting Started

### Prerequisites

* Node.js v16+ and npm (or yarn/pnpm)

### Installation

```bash
git clone https://github.com/ghaleb-d/portfolio-website.git
cd portfolio-website
npm install
```

### Environment Variables

Create a file `.env.local` (this is ignored by Git) at the project root:

```dotenv
# Google SMTP settings using an App Password\SMTP_HOST=smtp.gmail.com

SMTP_USER=your.email@yourdomain.com
SMTP_PASS=YOUR_16_CHAR_APP_PASSWORD
CONTACT_EMAIL=your.email@yourdomain.com
```

Replace the placeholders with your own values.

### Run Locally

```bash
npm run dev
```

Open (http://localhost:3000) in your browser.


---

## 🙌 Contributing

Contributions, issues, and feature requests are welcome! Feel free to open an issue or submit a pull request.

---

## 📄 License

All rights reserved. Unauthorized copying, distribution, or modification of this project is prohibited. Feel free to contact me through the website
