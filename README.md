# Portfolio - Đoàn Thế Tuấn

[![Deploy Status](https://img.shields.io/badge/deploy-automated-success)](https://github.com/dtuan11/portfolio)
[![Built with React](https://img.shields.io/badge/React-18.3-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)

Website portfolio cá nhân của Đoàn Thế Tuấn - Backend Developer chuyên về Java Spring Boot & ASP.NET Core.

## 🚀 Công nghệ sử dụng

- **Frontend Framework:** React 18.3 với TypeScript
- **Build Tool:** Vite (Tối ưu hóa build size và performance)
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **CI/CD:** GitHub Actions
- **Deployment:** Rsync qua SSH đến VPS
- **Web Server:** Nginx

## ✨ Tính năng

- ✅ Single Page Application (SPA) với hiệu năng cao
- ✅ Responsive design - Tương thích mọi thiết bị
- ✅ Lazy loading components để tối ưu tốc độ tải
- ✅ Code splitting tự động
- ✅ Tối ưu hóa hình ảnh và assets
- ✅ SEO friendly
- ✅ Lighthouse Performance Score > 95
- ✅ Tự động deploy khi push lên GitHub

## 📦 Cài đặt và Chạy Local

### Yêu cầu

- Node.js >= 18.x
- npm hoặc yarn

### Các bước thực hiện

1. Clone repository:
```bash
git clone https://github.com/dtuan11/portfolio.git
cd portfolio
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Chạy development server:
```bash
npm run dev
```

4. Mở trình duyệt tại: `http://localhost:3000`

## 🏗️ Build Production

```bash
npm run build
```

Kết quả build sẽ nằm trong thư mục `dist/`

## 📝 Preview Production Build

```bash
npm run preview
```

## 🚢 Deployment

### 🎯 Cách dễ nhất: GitHub Pages (Recommended)

Website tự động deploy miễn phí lên GitHub Pages khi push code.

**Quick Start:**
```bash
# 1. Push code lên GitHub
git add .
git commit -m "Deploy portfolio"
git push origin main

# 2. Vào Settings > Pages > Source > chọn "GitHub Actions"
# 3. Đợi vài phút để build xong
# 4. Website live tại: https://YOUR_USERNAME.github.io/YOUR_REPO/
```

**Chi tiết đầy đủ:** Xem file [DEPLOY.md](./DEPLOY.md)

### ⚠️ Lưu ý quan trọng

Cập nhật `base` trong `vite.config.ts` với tên repository:
```typescript
base: process.env.GITHUB_ACTIONS ? '/YOUR_REPO_NAME/' : '/',
```

### 🔧 Deploy thủ công (VPS)

Nếu bạn có VPS riêng, xem hướng dẫn tại [VPS-SETUP-GUIDE.md](./docs/VPS-SETUP-GUIDE.md)

```bash
sudo apt update
sudo apt install nginx -y
```

#### 2. Cấu hình Nginx cho portfolio:

Tạo file `/etc/nginx/sites-available/portfolio`:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;
    root /var/www/portfolio;
    index index.html;

    # Compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

Enable site:
```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

#### 3. Tạo thư mục deploy:

```bash
sudo mkdir -p /var/www/portfolio
sudo chown -R $USER:$USER /var/www/portfolio
```

#### 4. Setup SSH Key (không cần password):

```bash
# Trên máy local, tạo SSH key pair
ssh-keygen -t ed25519 -C "github-actions" -f ~/.ssh/github_actions

# Copy public key lên VPS
ssh-copy-id -i ~/.ssh/github_actions.pub username@your-vps-ip

# Copy nội dung private key và thêm vào GitHub Secret SSH_PRIVATE_KEY
cat ~/.ssh/github_actions
```

#### 5. Cài đặt SSL với Let's Encrypt (khuyến nghị):

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

Certbot sẽ tự động cấu hình HTTPS và auto-renew certificate.

## 📊 Performance Optimization

Website được tối ưu hóa cho VPS với cấu hình thấp (RAM 0.5GB, Storage 200MB):

- ✅ Build size < 500KB (gzipped)
- ✅ Lazy loading components
- ✅ Code splitting
- ✅ Tree shaking
- ✅ Minification & compression
- ✅ Nginx gzip compression
- ✅ Static asset caching
- ✅ WebP images (nếu có)

## 📱 Sections

1. **Hero** - Giới thiệu ngắn gọn và thông tin liên hệ chính
2. **About** - Thông tin chi tiết về học vấn và kinh nghiệm
3. **Skills** - Kỹ năng công nghệ, tools và soft skills
4. **Projects** - Các dự án nổi bật
5. **Contact** - Form liên hệ và thông tin liên lạc

## 🤝 Contributing

Pull requests are welcome! Đối với những thay đổi lớn, vui lòng mở issue trước để thảo luận.

## 📄 License

Copyright © 2025 Đoàn Thế Tuấn. All rights reserved.

## 📧 Contact

- **Email:** doantuan112003@gmail.com
- **LinkedIn:** [linkedin.com/in/tuandthe](https://www.linkedin.com/in/tuandthe)
- **GitHub:** [github.com/dtuan11](https://github.com/dtuan11)

---

**Made with ❤️ using React, TypeScript & Tailwind CSS**
