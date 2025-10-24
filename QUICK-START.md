# Quick Start Guide

## 🚀 Khởi động nhanh dự án

### 1. Cài đặt Dependencies

```bash
npm install
```

### 2. Chạy Development Server

```bash
npm run dev
```

Mở trình duyệt tại: http://localhost:3000

### 3. Build Production

```bash
npm run build
```

### 4. Preview Production Build

```bash
npm run preview
```

## 📋 Scripts có sẵn

| Script | Mô tả |
|--------|-------|
| `npm run dev` | Chạy development server với hot reload |
| `npm run build` | Build production-ready application |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Kiểm tra code với ESLint |

## 🔧 Cấu hình môi trường

### Yêu cầu hệ thống
- Node.js >= 18.x
- npm >= 9.x

### VS Code Extensions (Khuyến nghị)

Khi mở dự án, VS Code sẽ gợi ý cài các extensions sau:
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- ES7+ React/Redux/React-Native snippets

## 📁 Cấu trúc thư mục

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/                     # Static assets
├── src/
│   ├── components/             # React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── LoadingSpinner.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── data/
│   │   └── profileData.ts      # Dữ liệu cá nhân
│   ├── types/
│   │   └── index.ts            # TypeScript types
│   ├── App.tsx                 # Main App component
│   ├── index.css               # Global styles
│   └── main.tsx                # Entry point
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## ✏️ Tùy chỉnh nội dung

### Cập nhật thông tin cá nhân

Mở file `src/data/profileData.ts` và cập nhật thông tin của bạn:

```typescript
export const profileData: ProfileData = {
  personalInfo: {
    fullName: "Tên của bạn",
    title: "Chức danh",
    email: "email@example.com",
    // ... các thông tin khác
  },
  // ... các phần khác
};
```

### Thêm/Sửa dự án

Trong file `src/data/profileData.ts`, tìm phần `projects` và cập nhật:

```typescript
projects: [
  {
    name: "Tên dự án",
    duration: "01/2024 - 03/2024",
    techStack: ["React", "Node.js", "MongoDB"],
    description: "Mô tả ngắn gọn về dự án",
    features: [
      "Tính năng 1",
      "Tính năng 2",
    ],
    github: "https://github.com/username/repo",
  },
]
```

### Thay đổi màu sắc

Mở file `tailwind.config.js` và cập nhật color palette:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Thay đổi màu chủ đạo tại đây
        500: '#0ea5e9',
        600: '#0284c7',
        // ...
      },
    },
  },
}
```

## 🚢 Deployment

### Setup GitHub Repository

1. Tạo repository mới trên GitHub
2. Push code lên repository:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/portfolio.git
git push -u origin main
```

### Setup GitHub Secrets

Vào **Settings** → **Secrets and variables** → **Actions** và thêm:

1. `HOST` - Địa chỉ IP VPS của bạn
2. `USERNAME` - Username SSH
3. `SSH_PRIVATE_KEY` - Private SSH key (xem VPS-SETUP-GUIDE.md)

### Tự động Deploy

Sau khi setup xong, mỗi lần push lên branch `main`, website sẽ tự động deploy lên VPS.

## 🐛 Troubleshooting

### Port 3000 đã được sử dụng

```bash
# Thay đổi port trong vite.config.ts
server: {
  port: 3001,  // Thay đổi port
}
```

### Build errors

```bash
# Xóa node_modules và reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors

```bash
# Clear cache và restart
npm run build
```

## 📚 Tài liệu tham khảo

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

## 💡 Tips

### Performance Optimization

- Sử dụng WebP format cho hình ảnh
- Lazy load images với `loading="lazy"`
- Minify CSS/JS khi build
- Enable gzip compression trên Nginx

### SEO Optimization

- Thêm meta tags trong `index.html`
- Sử dụng semantic HTML
- Thêm alt text cho images
- Tạo sitemap.xml

### Accessibility

- Sử dụng aria-labels
- Đảm bảo contrast ratio tốt
- Hỗ trợ keyboard navigation
- Test với screen readers

---

**Happy Coding! 🎉**
