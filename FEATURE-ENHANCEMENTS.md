# 🚀 Hướng dẫn Mở rộng & Nâng cấp

## Các tính năng có thể thêm sau

### 1. Blog Section

#### Thêm Blog component:

```typescript
// src/components/Blog.tsx
import { useState, useEffect } from 'react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  image?: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  // Fetch posts from API or static data
  
  return (
    <section id="blog" className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Blog
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-gray-900 rounded-lg overflow-hidden">
              {/* Blog post card */}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
```

### 2. Testimonials/Reviews Section

```typescript
// src/components/Testimonials.tsx
const testimonials = [
  {
    name: "John Doe",
    position: "Tech Lead at Company X",
    content: "Great developer to work with...",
    avatar: "/avatars/john.jpg",
    rating: 5,
  },
  // more testimonials...
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 bg-gray-900">
      {/* Carousel or Grid of testimonials */}
    </section>
  );
};
```

### 3. Portfolio với Filtering

```typescript
// src/components/Projects.tsx
const [filter, setFilter] = useState('all');
const [filteredProjects, setFilteredProjects] = useState(projects);

const categories = ['all', 'web', 'mobile', 'backend'];

useEffect(() => {
  if (filter === 'all') {
    setFilteredProjects(projects);
  } else {
    setFilteredProjects(
      projects.filter(p => p.category === filter)
    );
  }
}, [filter]);

return (
  <div>
    {/* Filter buttons */}
    <div className="flex gap-4 mb-8">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => setFilter(cat)}
          className={filter === cat ? 'active' : ''}
        >
          {cat}
        </button>
      ))}
    </div>
    {/* Projects grid */}
  </div>
);
```

### 4. Dark/Light Mode Toggle

```typescript
// src/hooks/useTheme.ts
import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark';
    setTheme(saved);
    document.documentElement.classList.toggle('dark', saved === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return { theme, toggleTheme };
};

// Sử dụng trong Navbar
const { theme, toggleTheme } = useTheme();

<button onClick={toggleTheme}>
  {theme === 'dark' ? <FaSun /> : <FaMoon />}
</button>
```

Cập nhật `tailwind.config.js`:

```javascript
module.exports = {
  darkMode: 'class',
  // ... rest
}
```

### 5. Multi-language Support (i18n)

```bash
npm install i18next react-i18next
```

```typescript
// src/i18n/config.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        hero: {
          title: "Backend Developer | Java & .NET",
          // ...
        },
      },
    },
    vi: {
      translation: {
        hero: {
          title: "Lập trình viên Backend | Java & .NET",
          // ...
        },
      },
    },
  },
  lng: 'vi',
  fallbackLng: 'en',
});

export default i18n;
```

### 6. Contact Form với Backend

#### Option 1: Formspree (Đơn giản nhất)

```typescript
// src/components/Contact.tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  
  if (response.ok) {
    alert('Message sent successfully!');
  }
};
```

#### Option 2: EmailJS

```bash
npm install @emailjs/browser
```

```typescript
import emailjs from '@emailjs/browser';

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    formData,
    'YOUR_PUBLIC_KEY'
  ).then(() => {
    alert('Message sent!');
  });
};
```

### 7. Analytics & Tracking

#### Google Analytics

```html
<!-- index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 8. Loading Progress Bar

```bash
npm install nprogress
npm install --save-dev @types/nprogress
```

```typescript
// src/App.tsx
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const About = lazy(() => {
  NProgress.start();
  return import('./components/About').finally(() => NProgress.done());
});
```

### 9. Scroll-based Animations

```bash
npm install framer-motion
```

```typescript
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Content */}
    </motion.section>
  );
};
```

### 10. Image Gallery/Lightbox

```bash
npm install yet-another-react-lightbox
```

```typescript
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const [isOpen, setIsOpen] = useState(false);

<Lightbox
  open={isOpen}
  close={() => setIsOpen(false)}
  slides={[
    { src: "/images/project1.jpg" },
    { src: "/images/project2.jpg" },
  ]}
/>
```

### 11. Resume/CV Download

```typescript
// src/components/Hero.tsx
<a
  href="/resume.pdf"
  download
  className="btn-primary"
>
  <FaDownload /> Download CV
</a>
```

Đặt file PDF trong `public/resume.pdf`

### 12. Social Media Feed

```typescript
// Twitter/LinkedIn feed integration
// Using APIs or embedded widgets
```

### 13. Live Chat Widget

```typescript
// Tawk.to, Intercom, or Drift integration
// Add script to index.html
```

### 14. Page Views Counter

```bash
npm install react-countup
```

```typescript
import CountUp from 'react-countup';

<CountUp end={1000} suffix=" Projects" />
<CountUp end={50} suffix="+ Clients" />
```

### 15. Smooth Page Transitions

```bash
npm install react-router-dom
```

```typescript
// For multi-page setup
import { BrowserRouter, Routes, Route } from 'react-router-dom';
```

---

## Backend Integration

### Setup Backend API (Optional)

#### Node.js + Express Example:

```javascript
// server/index.js
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  
  // Send email using nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  await transporter.sendMail({
    from: email,
    to: process.env.EMAIL,
    subject: `Contact from ${name}`,
    text: message,
  });

  res.json({ success: true });
});

app.listen(3001, () => console.log('Server running'));
```

---

## Database Integration (For Blog/CMS)

### Option 1: Headless CMS

- **Contentful**
- **Strapi**
- **Sanity**
- **Ghost CMS**

### Option 2: Firebase

```bash
npm install firebase
```

```typescript
// src/firebase/config.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  // ... other config
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

---

## Performance Enhancements

### 1. Image Optimization

```bash
npm install vite-plugin-imagemin --save-dev
```

```typescript
// vite.config.ts
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.8, 0.9] },
      svgo: { plugins: [{ name: 'removeViewBox' }] },
      webp: { quality: 80 },
    }),
  ],
});
```

### 2. PWA Support

```bash
npm install vite-plugin-pwa --save-dev
```

```typescript
// vite.config.ts
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Portfolio - Đoàn Thế Tuấn',
        short_name: 'Portfolio',
        theme_color: '#0ea5e9',
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
```

---

## Testing

### Unit Tests

```bash
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom
```

```typescript
// src/components/__tests__/Hero.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from '../Hero';

describe('Hero', () => {
  it('renders name correctly', () => {
    render(<Hero />);
    expect(screen.getByText('Đoàn Thế Tuấn')).toBeInTheDocument();
  });
});
```

### E2E Tests

```bash
npm install --save-dev @playwright/test
```

```typescript
// tests/homepage.spec.ts
import { test, expect } from '@playwright/test';

test('homepage loads correctly', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('h1')).toContainText('Đoàn Thế Tuấn');
});
```

---

## Monitoring & Logging

### Sentry for Error Tracking

```bash
npm install @sentry/react
```

```typescript
// src/main.tsx
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  integrations: [new Sentry.BrowserTracing()],
  tracesSampleRate: 1.0,
});
```

---

## Deployment Alternatives

### 1. Vercel (Easiest)
```bash
npm install -g vercel
vercel
```

### 2. Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

### 3. GitHub Pages
```bash
npm install --save-dev gh-pages
```

Add to package.json:
```json
{
  "scripts": {
    "deploy": "gh-pages -d dist"
  }
}
```

---

**Keep building and improving! 🚀**
