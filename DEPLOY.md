# 🚀 Hướng dẫn Deploy lên GitHub Pages

## Bước 1: Đẩy code lên GitHub

```bash
# Khởi tạo Git repository (nếu chưa có)
git init

# Thêm tất cả files
git add .

# Commit
git commit -m "Initial commit - Portfolio website"

# Thêm remote repository (thay YOUR_USERNAME và YOUR_REPO)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push lên GitHub
git branch -M main
git push -u origin main
```

## Bước 2: Cấu hình GitHub Pages

1. Vào repository trên GitHub
2. Click vào **Settings** (góc phải)
3. Tìm menu **Pages** bên trái
4. Trong mục **Source**, chọn **GitHub Actions**
5. Save

## Bước 3: Deploy tự động

Sau khi push code, GitHub Actions sẽ tự động:
1. ✅ Build ứng dụng
2. ✅ Deploy lên GitHub Pages
3. ✅ Website sẽ có tại: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

## Kiểm tra tiến trình Deploy

1. Vào tab **Actions** trên GitHub
2. Xem workflow "Deploy to GitHub Pages"
3. Đợi build xong (khoảng 1-2 phút)
4. Website của bạn đã live! 🎉

## Cập nhật website

Mỗi khi bạn push code mới:

```bash
git add .
git commit -m "Update portfolio"
git push
```

GitHub Actions sẽ tự động deploy lại!

## Lưu ý quan trọng

⚠️ **Cập nhật base path trong `vite.config.ts`:**

Thay đổi dòng này với tên repository của bạn:
```typescript
base: process.env.GITHUB_ACTIONS ? '/YOUR_REPO_NAME/' : '/',
```

Ví dụ: Nếu repo tên là "portfolio", thì:
```typescript
base: process.env.GITHUB_ACTIONS ? '/portfolio/' : '/',
```

## Kiểm tra local trước khi deploy

```bash
# Build local
npm run build

# Preview build
npm run preview
```

## Custom Domain (Optional)

Nếu muốn dùng domain riêng:

1. Tạo file `public/CNAME` với nội dung: `yourdomain.com`
2. Cấu hình DNS của domain trỏ đến GitHub Pages
3. Trong Settings > Pages, thêm custom domain

---

🎊 **Chúc mừng! Website của bạn đã online!**
