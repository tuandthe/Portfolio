# Hướng dẫn Cấu hình VPS Pro 01 cho Portfolio

## Thông số VPS Pro 01
- **CPU:** 1 Core
- **RAM:** 0.5GB
- **Storage:** 200MB
- **OS:** Ubuntu 22.04

## Bước 1: Kết nối VPS

```bash
ssh username@your-vps-ip
```

## Bước 2: Update hệ thống

```bash
sudo apt update && sudo apt upgrade -y
```

## Bước 3: Cài đặt Nginx

```bash
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
```

## Bước 4: Cấu hình Firewall

```bash
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
sudo ufw enable
```

## Bước 5: Tạo thư mục deploy

```bash
sudo mkdir -p /var/www/portfolio
sudo chown -R $USER:$USER /var/www/portfolio
sudo chmod -R 755 /var/www/portfolio
```

## Bước 6: Cấu hình Nginx

Tạo file cấu hình mới:

```bash
sudo nano /etc/nginx/sites-available/portfolio
```

Thêm nội dung sau:

```nginx
server {
    listen 80;
    listen [::]:80;
    
    server_name your-domain.com www.your-domain.com;
    
    root /var/www/portfolio;
    index index.html;

    # Gzip Compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json application/javascript;

    # Security Headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    # Deny access to hidden files
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }
}
```

Enable site và reload Nginx:

```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## Bước 7: Setup SSH Key cho GitHub Actions

### Trên máy local:

```bash
# Tạo SSH key mới cho GitHub Actions
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/github_actions_portfolio

# Hiển thị public key
cat ~/.ssh/github_actions_portfolio.pub
```

### Trên VPS:

```bash
# Thêm public key vào authorized_keys
mkdir -p ~/.ssh
chmod 700 ~/.ssh
nano ~/.ssh/authorized_keys
# Paste public key vào file này

chmod 600 ~/.ssh/authorized_keys
```

### Trên GitHub Repository:

1. Vào **Settings** → **Secrets and variables** → **Actions**
2. Thêm các secrets sau:
   - `HOST`: Địa chỉ IP của VPS (VD: 123.45.67.89)
   - `USERNAME`: Tên user SSH (VD: ubuntu)
   - `SSH_PRIVATE_KEY`: Nội dung của file `~/.ssh/github_actions_portfolio` (private key)

```bash
# Lấy nội dung private key để copy vào GitHub Secret
cat ~/.ssh/github_actions_portfolio
```

## Bước 8: Test SSH Connection từ Local

```bash
ssh -i ~/.ssh/github_actions_portfolio username@your-vps-ip
```

## Bước 9: Cài đặt SSL với Let's Encrypt (Khuyến nghị)

```bash
# Cài đặt Certbot
sudo apt install certbot python3-certbot-nginx -y

# Lấy SSL certificate (thay your-domain.com bằng domain thực)
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Certbot sẽ tự động:
# - Lấy certificate
# - Cấu hình Nginx cho HTTPS
# - Setup auto-renewal
```

Kiểm tra auto-renewal:

```bash
sudo certbot renew --dry-run
```

## Bước 10: Tối ưu hóa cho VPS cấu hình thấp

### Giảm log để tiết kiệm dung lượng:

```bash
sudo nano /etc/nginx/nginx.conf
```

Thêm vào block `http`:

```nginx
access_log off;
error_log /var/log/nginx/error.log crit;
```

### Giảm worker processes:

```nginx
worker_processes 1;
worker_connections 256;
```

### Reload Nginx:

```bash
sudo systemctl reload nginx
```

## Bước 11: Monitoring (Optional)

### Kiểm tra disk usage:

```bash
df -h
```

### Kiểm tra RAM usage:

```bash
free -h
```

### Kiểm tra Nginx status:

```bash
sudo systemctl status nginx
```

### Xem logs:

```bash
# Error logs
sudo tail -f /var/log/nginx/error.log

# Access logs (nếu bật)
sudo tail -f /var/log/nginx/access.log
```

## Bước 12: Test Deployment

1. Push code lên GitHub branch `main`
2. Kiểm tra GitHub Actions trong tab **Actions**
3. Sau khi deploy thành công, truy cập: `http://your-domain.com`

## Troubleshooting

### Nếu deploy failed:

```bash
# Kiểm tra quyền thư mục
ls -la /var/www/portfolio

# Kiểm tra Nginx config
sudo nginx -t

# Kiểm tra Nginx logs
sudo tail -100 /var/log/nginx/error.log

# Restart Nginx
sudo systemctl restart nginx
```

### Nếu SSH không connect được:

```bash
# Kiểm tra SSH service
sudo systemctl status ssh

# Kiểm tra firewall
sudo ufw status

# Test SSH connection với verbose
ssh -vvv -i ~/.ssh/github_actions_portfolio username@your-vps-ip
```

### Nếu thiếu dung lượng:

```bash
# Xóa cache cũ
sudo apt clean
sudo apt autoremove -y

# Xóa old logs
sudo journalctl --vacuum-time=7d
```

## Security Checklist

- [x] Firewall enabled (UFW)
- [x] SSH key-based authentication
- [x] Disable password authentication (optional nhưng khuyến nghị)
- [x] SSL/HTTPS enabled
- [x] Security headers configured
- [x] Hidden files denied
- [x] Regular updates

### Disable password authentication (Khuyến nghị):

```bash
sudo nano /etc/ssh/sshd_config
```

Sửa dòng sau:

```
PasswordAuthentication no
```

Restart SSH:

```bash
sudo systemctl restart ssh
```

---

## 📞 Support

Nếu gặp vấn đề, liên hệ:
- Email: doantuan112003@gmail.com
- GitHub Issues: https://github.com/dtuan11/portfolio/issues
