# URLify - Modern URL Shortener

A fully client-side URL shortener built using Vite+React, TypeScript, and `localStorage`. This project enables you to generate short, shareable links and track their usage statistics. It also supports smooth scrolling between sections and redirection from shortened URLs to their original destinations.

---

## Features

- **Shorten URLs**: Transform long URLs into concise, memorable links.
- **Analytics**: Track the number of clicks for each shortened URL.
- **Local Storage**: No backend required; all data is stored in the browser's `localStorage`.
- **Redirection**: Shortened URLs dynamically redirect to the original destination.
- **Smooth Scrolling**: Navigate between app sections using smooth scrolling.
- **Responsive Design**: Optimized for all screen sizes.

---

## Demo

Check out a live demo of the project [here](https://urlify1.netlify.app/).

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/react-url-shortener.git
   cd react-url-shortener
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`.

---

## Usage

1. Enter a long URL in the input field.
2. Click the "Shorten" button to generate a short URL.
3. Copy the short URL and share it with others.
4. Visit the short URL to be redirected to the original URL.

---

## Navigation

- **Home**: Transform URLs and view analytics.
- **Sections**:
  - `Hero Section`: Introductory content and URL shortener form.
  - `URL List`: View all shortened URLs and copy links.
  - `Analytics`: Track click counts for each link.

---

## How It Works

1. **Short URL Generation**:
   - A unique ID is generated for each original URL.
   - The shortened URL format is: `https://urlify1.netlify.app/#/unique-id`.

2. **Redirection**:
   - When a shortened URL is visited, the app fetches the original URL from `localStorage` and redirects.

3. **Smooth Scrolling**:
   - The app uses `react-router-hash-link` for smooth navigation between sections.

---

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          // Navigation header
│   ├── Footer.tsx          // Footer component
│   ├── UrlForm.tsx         // URL input form
│   ├── UrlList.tsx         // List of shortened URLs
│   ├── Analytics.tsx       // Analytics dashboard
│   ├── RedirectPage.tsx    // Handles redirection
|   ├── SEOHead.tsx         // SEO MetaData
│   └── HowItWorks.tsx      // Explains how the app works
├── types/
|   └── url.ts              // URL Data Model
├── utils/
│   └── storage.ts          // LocalStorage helpers
├── App.tsx                 // Main app component
├── index.css               // Global Styling
└── main.tsx               // Entry point
```

---

## Technologies Used

- **React**: Frontend framework
- **TypeScript**: Strongly-typed JavaScript
- **Framer Motion**: Animations
- **React Router**: Routing and navigation
- **Tailwind CSS**: Styling
- **LocalStorage**: Data storage

---

## Future Enhancements

- Add a backend for centralized storage and analytics.
- Support custom short URL aliases.
- Implement expiration for shortened URLs.
- Add QR code generation for shortened URLs.

---

## Contributing

Contributions are welcome! If you'd like to improve this project:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add feature name"
   ```
4. Push to your fork:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

---

## Acknowledgments

- Inspired by common URL shortener tools.
- Icons provided by [Lucide Icons](https://lucide.dev/).

---
