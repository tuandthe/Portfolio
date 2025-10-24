# 📟 Cheat Sheet - Các Lệnh Hữu Ích

## 🚀 NPM Commands

### Development
```bash
# Khởi động dev server
npm run dev

# Khởi động với port cụ thể
npm run dev -- --port 3001

# Xóa cache và khởi động lại
rm -rf node_modules/.vite && npm run dev
```

### Build & Preview
```bash
# Build production
npm run build

# Preview build locally
npm run preview

# Build và preview
npm run build && npm run preview
```

### Code Quality
```bash
# Chạy ESLint
npm run lint

# Fix ESLint errors tự động
npm run lint -- --fix

# Type check (TypeScript)
npx tsc --noEmit
```

### Dependencies
```bash
# Cài đặt dependencies
npm install

# Cài đặt package mới
npm install package-name

# Cài đặt dev dependency
npm install --save-dev package-name

# Update dependencies
npm update

# Check outdated packages
npm outdated

# Audit security
npm audit
npm audit fix
```

---

## 🐙 Git Commands

### Basic Operations
```bash
# Initialize git
git init

# Check status
git status

# Add files
git add .
git add filename.tsx

# Commit
git commit -m "commit message"

# Push to GitHub
git push origin main
git push -u origin main  # First time

# Pull latest changes
git pull origin main
```

### Branching
```bash
# Create new branch
git checkout -b feature/new-feature

# Switch branch
git checkout main

# List branches
git branch

# Delete branch
git branch -d feature-name

# Merge branch
git checkout main
git merge feature/new-feature
```

### Undo Changes
```bash
# Undo unstaged changes
git checkout -- filename.tsx

# Undo staged changes
git reset HEAD filename.tsx

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1
```

### Remote
```bash
# Add remote
git remote add origin https://github.com/username/repo.git

# View remotes
git remote -v

# Change remote URL
git remote set-url origin https://github.com/username/new-repo.git
```

### Tags
```bash
# Create tag
git tag v1.0.0

# Push tags
git push --tags

# Delete tag
git tag -d v1.0.0
git push origin :refs/tags/v1.0.0
```

---

## 🖥️ VPS Commands

### SSH
```bash
# Connect to VPS
ssh username@vps-ip

# Connect with specific key
ssh -i ~/.ssh/key_name username@vps-ip

# Copy file to VPS
scp local-file.txt username@vps-ip:/remote/path/

# Copy directory to VPS
scp -r local-directory username@vps-ip:/remote/path/
```

### Nginx
```bash
# Test configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx

# Restart Nginx
sudo systemctl restart nginx

# Stop Nginx
sudo systemctl stop nginx

# Start Nginx
sudo systemctl start nginx

# Check status
sudo systemctl status nginx

# View error logs
sudo tail -f /var/log/nginx/error.log

# View access logs
sudo tail -f /var/log/nginx/access.log

# Edit config
sudo nano /etc/nginx/sites-available/portfolio
```

### System Monitoring
```bash
# Check disk usage
df -h

# Check specific directory size
du -sh /var/www/portfolio

# Check RAM usage
free -h

# Check CPU usage
top
htop  # (if installed)

# Check running processes
ps aux | grep nginx

# Check system info
uname -a
```

### File Operations
```bash
# List files with details
ls -la

# Create directory
mkdir -p /var/www/portfolio

# Remove directory
rm -rf /path/to/directory

# Change permissions
chmod 755 /path/to/file

# Change owner
sudo chown -R user:user /path/to/directory

# View file content
cat filename
less filename  # Scrollable
tail -n 50 filename  # Last 50 lines
```

### SSL/Certbot
```bash
# Install certificate
sudo certbot --nginx -d domain.com -d www.domain.com

# Renew certificates
sudo certbot renew

# Test renewal
sudo certbot renew --dry-run

# List certificates
sudo certbot certificates

# Delete certificate
sudo certbot delete --cert-name domain.com
```

---

## 🔍 Troubleshooting Commands

### Check Port Usage
```bash
# Windows (PowerShell)
netstat -ano | findstr :3000

# Linux/Mac
lsof -i :3000
netstat -tuln | grep 3000

# Kill process on port
# Windows
taskkill /PID <PID> /F

# Linux/Mac
kill -9 <PID>
```

### Clear Cache
```bash
# NPM cache
npm cache clean --force

# Vite cache
rm -rf node_modules/.vite

# Browser cache
# Chrome: Ctrl+Shift+Delete
# Firefox: Ctrl+Shift+Delete
```

### Fix Node Modules
```bash
# Remove and reinstall
rm -rf node_modules package-lock.json
npm install

# Or use npm ci (faster, uses lock file)
rm -rf node_modules
npm ci
```

---

## 🌐 Browser DevTools

### Chrome/Edge DevTools
```
F12 - Open DevTools
Ctrl+Shift+C - Inspect element
Ctrl+Shift+M - Toggle device toolbar (mobile view)
Ctrl+Shift+P - Command palette
Ctrl+R - Reload page
Ctrl+Shift+R - Hard reload (clear cache)
```

### Lighthouse Test
```
F12 → Lighthouse tab → Generate report
```

---

## 📦 Useful One-liners

### Count Lines of Code
```bash
# All TypeScript files
find src -name "*.tsx" -o -name "*.ts" | xargs wc -l

# Specific file types
find . -name "*.tsx" | xargs wc -l
```

### Find and Replace in Files
```bash
# Find text in files
grep -r "search text" src/

# Find and replace (use with caution!)
find src/ -type f -exec sed -i 's/old-text/new-text/g' {} +
```

### Compress Build
```bash
# Create zip of dist folder
zip -r dist.zip dist/

# Create tar.gz
tar -czf dist.tar.gz dist/
```

### Quick Backup
```bash
# Backup VPS directory
ssh user@vps "tar -czf - /var/www/portfolio" > backup-$(date +%Y%m%d).tar.gz
```

---

## 🔐 SSH Key Management

### Generate SSH Key
```bash
# Ed25519 (recommended)
ssh-keygen -t ed25519 -C "your_email@example.com"

# RSA (older systems)
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

### Copy SSH Key to Server
```bash
# Automatic
ssh-copy-id -i ~/.ssh/id_ed25519.pub user@vps-ip

# Manual
cat ~/.ssh/id_ed25519.pub | ssh user@vps-ip "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
```

### Test SSH Connection
```bash
ssh -T git@github.com  # Test GitHub
ssh -v user@vps-ip     # Verbose mode for debugging
```

---

## 📊 Performance Testing

### Lighthouse CLI
```bash
# Install
npm install -g lighthouse

# Run test
lighthouse http://your-domain.com --view

# Save report
lighthouse http://your-domain.com --output html --output-path ./report.html
```

### Check Website Speed
```bash
# cURL timing
curl -o /dev/null -s -w 'Total: %{time_total}s\n' http://your-domain.com
```

---

## 🎯 Deployment

### Manual Deploy
```bash
# Build locally
npm run build

# SCP to VPS
scp -r dist/* user@vps-ip:/var/www/portfolio/

# Or use rsync
rsync -avz --delete dist/ user@vps-ip:/var/www/portfolio/
```

### Check GitHub Actions
```bash
# View workflow runs
gh run list  # (requires GitHub CLI)

# View specific run
gh run view <run-id>
```

---

## 🛠️ Utilities

### JSON Pretty Print
```bash
# Format JSON file
cat package.json | python -m json.tool

# Or use jq (if installed)
cat package.json | jq .
```

### Get Public IP
```bash
# Your IP
curl ifconfig.me
curl icanhazip.com

# VPS IP
ssh user@vps-ip "curl ifconfig.me"
```

### Check DNS
```bash
# Check DNS records
nslookup your-domain.com
dig your-domain.com

# Check propagation
curl https://dnschecker.org
```

---

## 📱 Mobile Testing

### Using Chrome DevTools
```
1. F12 → Toggle device toolbar (Ctrl+Shift+M)
2. Select device (iPhone, Android)
3. Test responsive design
```

### Remote Debugging (Android)
```
1. Enable USB debugging on Android
2. Connect device via USB
3. Chrome: chrome://inspect
4. Select device and inspect
```

---

## 💡 Quick Fixes

### Port Already in Use
```bash
# Kill process on port 3000
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Linux/Mac
lsof -i :3000
kill -9 <PID>
```

### Permission Denied
```bash
# Fix npm permissions
sudo chown -R $USER ~/.npm
sudo chown -R $USER /usr/local/lib/node_modules

# Fix VPS permissions
sudo chown -R $USER:$USER /var/www/portfolio
```

### Git Push Rejected
```bash
# Pull first
git pull origin main --rebase
git push origin main
```

---

## 📚 Documentation Links

- React: https://react.dev/
- TypeScript: https://www.typescriptlang.org/docs/
- Tailwind: https://tailwindcss.com/docs
- Vite: https://vitejs.dev/guide/
- Nginx: https://nginx.org/en/docs/
- Let's Encrypt: https://letsencrypt.org/docs/

---

**Bookmark this page for quick reference! 🔖**
