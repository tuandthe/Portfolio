# 🎉 SETUP HOÀN TẤT!

Portfolio website của bạn đã sẵn sàng để deploy!

## 📋 Checklist trước khi deploy

- [x] ✅ Code đã được commit
- [ ] ⚠️ Cập nhật tên repository trong `vite.config.ts`
- [ ] 🔗 Tạo repository trên GitHub
- [ ] 📤 Push code lên GitHub
- [ ] ⚙️ Enable GitHub Pages

---

## 🚀 Các bước deploy (5 phút)

### Bước 1: Tạo GitHub Repository

1. Vào https://github.com/new
2. Đặt tên repository (ví dụ: `portfolio` hoặc `my-website`)
3. Chọn **Public**
4. **KHÔNG** tích "Add a README file"
5. Click **Create repository**

### Bước 2: Cập nhật base path

**⚠️ QUAN TRỌNG!** Mở file `vite.config.ts` và thay đổi:

```typescript
// Thay 'Portfolio' bằng tên repository của bạn
base: process.env.GITHUB_ACTIONS ? '/YOUR_REPO_NAME/' : '/',
```

Ví dụ: Nếu repo tên là `portfolio`:
```typescript
base: process.env.GITHUB_ACTIONS ? '/portfolio/' : '/',
```

Sau đó commit lại:
```bash
git add vite.config.ts
git commit -m "Update base path"
```

### Bước 3: Push code lên GitHub

```bash
# Thay YOUR_USERNAME và YOUR_REPO bằng thông tin của bạn
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

### Bước 4: Enable GitHub Pages

1. Vào repository trên GitHub
2. Click **Settings** (tab trên cùng)
3. Click **Pages** (menu bên trái)
4. Trong **Source**, chọn **GitHub Actions**
5. Save

### Bước 5: Đợi deploy xong

1. Vào tab **Actions**
2. Xem workflow "Deploy to GitHub Pages" đang chạy
3. Đợi ~2 phút để build xong (icon ✅ màu xanh)
4. Website của bạn live tại:
   ```
   https://YOUR_USERNAME.github.io/YOUR_REPO/
   ```

---

## 🎊 Xong rồi!

Website của bạn đã online! Mỗi khi push code mới, GitHub sẽ tự động deploy lại.

### Cập nhật website

```bash
# Sửa code
git add .
git commit -m "Update content"
git push

# GitHub tự động deploy sau 1-2 phút
```

### Troubleshooting

**❌ Page 404 hoặc CSS không load?**
- Kiểm tra `base` trong `vite.config.ts` đúng tên repo chưa
- Đảm bảo tên repo viết đúng cả hoa/thường

**❌ Build failed?**
- Xem logs trong tab Actions
- Kiểm tra `npm run build` chạy được local không

**❌ Custom domain?**
- Tạo file `public/CNAME` với nội dung: `yourdomain.com`
- Cấu hình DNS trỏ về GitHub Pages

---

## 📞 Cần trợ giúp?

- 📖 Đọc [DEPLOY.md](./DEPLOY.md) để biết chi tiết
- 🐛 Check tab **Actions** trên GitHub nếu có lỗi
- 💡 Build local với `npm run build` để test

**Chúc mừng bạn đã có website online! 🚀**
