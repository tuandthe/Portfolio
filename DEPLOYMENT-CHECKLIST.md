# ✅ Checklist Trước Khi Deploy

## 📋 Chuẩn bị Code

### Nội dung & Dữ liệu
- [x] Cập nhật thông tin cá nhân trong `src/data/profileData.ts`
- [x] Kiểm tra tất cả links (GitHub, LinkedIn, Email)
- [x] Kiểm tra số điện thoại và địa chỉ
- [x] Đảm bảo tất cả dự án có mô tả đầy đủ
- [ ] Thêm hình ảnh dự án (nếu có) vào `public/`
- [ ] Tối ưu hóa hình ảnh (WebP format, < 100KB mỗi ảnh)

### Code Quality
- [x] Chạy `npm run lint` và fix tất cả errors
- [x] Test build thành công: `npm run build`
- [x] Test local: `npm run dev`
- [x] Kiểm tra responsive trên mobile/tablet/desktop
- [x] Test tất cả links và buttons
- [x] Kiểm tra form contact hoạt động
- [x] Test smooth scroll giữa các sections

### SEO & Meta Tags
- [x] Cập nhật title trong `index.html`
- [x] Thêm meta description
- [x] Thêm meta keywords
- [ ] Thêm Open Graph tags (cho social media sharing)
- [ ] Thêm favicon (thay thế `/vite.svg`)
- [ ] Tạo sitemap.xml (optional)
- [ ] Tạo robots.txt (optional)

---

## 🐙 GitHub Setup

### Repository
- [ ] Tạo repository mới trên GitHub: `portfolio`
- [ ] Set repository visibility (Public/Private)
- [ ] Thêm description và topics
- [ ] Enable Issues (nếu cần)

### Git Commands
```bash
# Initialize git
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit: Complete portfolio website with React, TypeScript, Tailwind CSS"

# Rename branch to main
git branch -M main

# Add remote
git remote add origin https://github.com/USERNAME/portfolio.git

# Push to GitHub
git push -u origin main
```

### GitHub Secrets
- [ ] Vào Settings → Secrets and variables → Actions
- [ ] Thêm `HOST` (VPS IP address)
- [ ] Thêm `USERNAME` (SSH username)
- [ ] Thêm `SSH_PRIVATE_KEY` (nội dung private key)

---

## 🖥️ VPS Setup

### 1. Kết nối VPS
- [ ] SSH vào VPS: `ssh username@your-vps-ip`
- [ ] Test connection thành công

### 2. Update System
```bash
sudo apt update && sudo apt upgrade -y
```

### 3. Install Nginx
```bash
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
```

### 4. Firewall
```bash
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
sudo ufw enable
```

### 5. Create Deploy Directory
```bash
sudo mkdir -p /var/www/portfolio
sudo chown -R $USER:$USER /var/www/portfolio
sudo chmod -R 755 /var/www/portfolio
```

### 6. Nginx Configuration
- [ ] Tạo file: `/etc/nginx/sites-available/portfolio`
- [ ] Copy config từ `VPS-SETUP-GUIDE.md`
- [ ] Thay `your-domain.com` bằng domain thực
- [ ] Enable site:
```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 7. SSH Key Setup
- [ ] Generate SSH key trên local: `ssh-keygen -t ed25519`
- [ ] Copy public key lên VPS: `ssh-copy-id`
- [ ] Test SSH connection với key
- [ ] Lưu private key vào GitHub Secret

### 8. SSL Certificate (Khuyến nghị)
```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```
- [ ] Verify SSL certificate installed
- [ ] Test auto-renewal: `sudo certbot renew --dry-run`

### 9. Domain Setup (Nếu có domain)
- [ ] Point A record to VPS IP
- [ ] Point CNAME www to domain
- [ ] Wait for DNS propagation (có thể mất 24-48h)
- [ ] Test domain trên trình duyệt

---

## 🚀 Deployment Test

### First Deployment
- [ ] Push code lên GitHub branch `main`
- [ ] Check GitHub Actions workflow (tab Actions)
- [ ] Verify Build job completed ✅
- [ ] Verify Deploy job completed ✅
- [ ] Check logs nếu có lỗi

### Verify Website
- [ ] Mở website: `http://your-domain.com` hoặc `http://vps-ip`
- [ ] Kiểm tra tất cả sections load đúng
- [ ] Test navigation menu
- [ ] Test smooth scroll
- [ ] Test responsive (mobile view)
- [ ] Test tất cả links external
- [ ] Test contact form

### Performance Check
- [ ] Chạy Google Lighthouse test
- [ ] Performance score > 95
- [ ] Accessibility score > 90
- [ ] Best Practices > 95
- [ ] SEO score > 90

---

## 🔧 Post-Deployment

### Monitoring
- [ ] Kiểm tra VPS disk usage: `df -h`
- [ ] Kiểm tra RAM usage: `free -h`
- [ ] Check Nginx status: `sudo systemctl status nginx`
- [ ] Monitor error logs: `sudo tail -f /var/log/nginx/error.log`

### Optimization
- [ ] Enable Gzip compression trong Nginx (đã có trong config)
- [ ] Setup browser caching (đã có trong config)
- [ ] Optimize images nếu cần
- [ ] Minify CSS/JS (đã tự động với Vite)

### Backup
- [ ] Backup VPS configuration
- [ ] Backup Nginx config files
- [ ] Document SSH keys location
- [ ] Save GitHub Secrets (an toàn)

---

## 📱 Testing Checklist

### Desktop (Chrome, Firefox, Safari, Edge)
- [ ] Hero section displays correctly
- [ ] Navigation works
- [ ] All sections visible
- [ ] Smooth scroll works
- [ ] Hover effects work
- [ ] Contact form submits
- [ ] All links open correctly

### Mobile (iOS Safari, Android Chrome)
- [ ] Responsive layout correct
- [ ] Hamburger menu works
- [ ] Touch scrolling smooth
- [ ] Text readable
- [ ] Buttons touchable
- [ ] Contact form usable

### Tablet
- [ ] Layout adapts correctly
- [ ] All features work

---

## 📊 Analytics Setup (Optional)

- [ ] Setup Google Analytics
- [ ] Add GA tracking code to `index.html`
- [ ] Verify tracking works
- [ ] Setup goals/events

---

## 🎯 Final Checks

### Content
- [ ] No typos trong text
- [ ] All information accurate
- [ ] Professional tone
- [ ] Consistent formatting

### Technical
- [ ] No console errors
- [ ] No 404 errors
- [ ] All assets load
- [ ] HTTPS working
- [ ] Fast load time

### Security
- [ ] SSH key authentication only
- [ ] Firewall enabled
- [ ] SSL certificate valid
- [ ] Security headers configured

---

## 📝 Documentation

- [ ] README.md complete
- [ ] QUICK-START.md clear
- [ ] VPS-SETUP-GUIDE.md detailed
- [ ] All commands tested
- [ ] Screenshots added (optional)

---

## 🎉 Launch!

- [ ] Make final git commit
- [ ] Tag release: `git tag v1.0.0`
- [ ] Push to GitHub: `git push --tags`
- [ ] Share website link on LinkedIn
- [ ] Update GitHub profile with website link
- [ ] Update LinkedIn profile with website link
- [ ] Share on social media (optional)

---

## 📞 Troubleshooting

Nếu có vấn đề, tham khảo:
- `VPS-SETUP-GUIDE.md` - Troubleshooting section
- GitHub Actions logs
- Nginx error logs: `/var/log/nginx/error.log`
- Browser console (F12)

---

## ✅ Checklist Summary

- [ ] Code ready & tested
- [ ] GitHub repository created
- [ ] GitHub Secrets configured
- [ ] VPS setup complete
- [ ] Nginx configured
- [ ] SSL installed
- [ ] Domain configured (if applicable)
- [ ] First deployment successful
- [ ] Website verified working
- [ ] Performance optimized
- [ ] Documentation complete
- [ ] Ready to launch! 🚀

---

**Good luck with your portfolio launch! 💪**
