# 🎨 Hướng dẫn Tùy chỉnh Giao diện & Theme

## Thay đổi Màu sắc Chủ đạo

### 1. Tailwind Config (Khuyến nghị)

Mở file `tailwind.config.js` và thay đổi màu trong `theme.extend.colors`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',   // Lightest
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9',  // Base color
        600: '#0284c7',  // Darker
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e',  // Darkest
      },
    },
  },
}
```

### 2. Các màu phổ biến

#### Blue Theme (Mặc định)
```javascript
primary: {
  500: '#0ea5e9', // Sky blue
  600: '#0284c7',
}
```

#### Purple Theme
```javascript
primary: {
  500: '#8b5cf6', // Purple
  600: '#7c3aed',
}
```

#### Green Theme
```javascript
primary: {
  500: '#10b981', // Emerald
  600: '#059669',
}
```

#### Orange Theme
```javascript
primary: {
  500: '#f59e0b', // Amber
  600: '#d97706',
}
```

#### Red Theme
```javascript
primary: {
  500: '#ef4444', // Red
  600: '#dc2626',
}
```

## Thay đổi Background Colors

### Dark Theme (Mặc định)

Trong `src/index.css`:

```css
body {
  @apply bg-gray-900 text-gray-100;
}
```

### Light Theme

```css
body {
  @apply bg-gray-50 text-gray-900;
}
```

Sau đó cần cập nhật các components:

```typescript
// Hero.tsx - thay đổi từ:
className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
// Thành:
className="bg-gradient-to-br from-gray-50 via-white to-gray-100"

// About.tsx - thay đổi từ:
className="bg-gray-800"
// Thành:
className="bg-white"
```

## Tùy chỉnh Fonts

### 1. Google Fonts

Thêm vào `index.html` (trong `<head>`):

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Cập nhật `tailwind.config.js`:

```javascript
theme: {
  extend: {
    fontFamily: {
      sans: ['Poppins', 'system-ui', 'sans-serif'],
    },
  },
}
```

### 2. Fonts phổ biến

| Font | Đặc điểm | Use case |
|------|----------|----------|
| **Inter** | Modern, clean | Portfolio, Business |
| **Poppins** | Friendly, rounded | Creative, Personal |
| **Roboto** | Classic, readable | Professional |
| **Montserrat** | Bold, geometric | Modern, Tech |
| **Open Sans** | Clean, neutral | General purpose |

## Tùy chỉnh Animations

### Thêm animation mới

Trong `tailwind.config.js`:

```javascript
theme: {
  extend: {
    animation: {
      'fade-in': 'fadeIn 0.6s ease-in',
      'slide-up': 'slideUp 0.6s ease-out',
      'bounce-slow': 'bounce 2s infinite',
      'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      slideUp: {
        '0%': { transform: 'translateY(20px)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
      },
    },
  },
}
```

Sử dụng:

```typescript
<div className="animate-fade-in">Content</div>
<div className="animate-slide-up">Content</div>
```

## Tùy chỉnh Component Styles

### Button Styles

Tạo file `src/styles/buttons.css`:

```css
.btn-primary {
  @apply px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg;
}

.btn-secondary {
  @apply px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-300;
}

.btn-outline {
  @apply px-6 py-3 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold rounded-lg transition-all duration-300;
}
```

Import trong `src/index.css`:

```css
@import './styles/buttons.css';
```

### Card Styles

```css
.card {
  @apply bg-gray-800 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300;
}

.card-interactive {
  @apply card hover:-translate-y-2 transition-all duration-300;
}
```

## Gradient Backgrounds

### Hero Section Gradients

```typescript
// Blue gradient (mặc định)
className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"

// Purple gradient
className="bg-gradient-to-br from-purple-900 via-purple-800 to-gray-900"

// Green gradient
className="bg-gradient-to-br from-emerald-900 via-teal-800 to-gray-900"

// Colorful gradient
className="bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600"
```

## Spacing & Layout

### Container Sizes

```typescript
// Small container
<div className="max-w-4xl mx-auto">

// Medium container (mặc định)
<div className="max-w-6xl mx-auto">

// Large container
<div className="max-w-7xl mx-auto">
```

### Section Padding

```typescript
// Default
className="py-20 px-4"

// Larger
className="py-32 px-6"

// Smaller
className="py-12 px-4"
```

## Hover Effects

### Card Hover

```typescript
// Lift effect
className="hover:-translate-y-2 transition-transform"

// Scale effect
className="hover:scale-105 transition-transform"

// Shadow effect
className="hover:shadow-2xl transition-shadow"

// Combined
className="hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
```

### Button Hover

```typescript
// Brighten
className="hover:bg-primary-700"

// Scale up
className="hover:scale-110"

// Glow effect
className="hover:shadow-lg hover:shadow-primary-500/50"
```

## Icon Colors

Trong `src/components/Skills.tsx`, thay đổi màu icons:

```typescript
const skillIcons = {
  'Java': <FaJava className="text-orange-500" size={40} />,
  'Spring Boot': <SiSpringboot className="text-green-400" size={40} />,
  'React': <SiReact className="text-cyan-400" size={40} />,
  // ... thêm icons khác
};
```

## Responsive Breakpoints

Tailwind CSS breakpoints:

```typescript
// Mobile first
className="text-sm md:text-base lg:text-lg"

// Hide on mobile
className="hidden md:block"

// Show only on mobile
className="block md:hidden"

// Grid responsive
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

## Dark Mode Support (Optional)

Để thêm dark mode toggle:

1. Cập nhật `tailwind.config.js`:

```javascript
module.exports = {
  darkMode: 'class', // or 'media'
  // ... rest of config
}
```

2. Sử dụng `dark:` prefix:

```typescript
className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
```

## Custom Scrollbar

Trong `src/index.css`:

```css
/* Custom scrollbar */
::-webkit-scrollbar {
  width: 12px; /* Thay đổi độ rộng */
}

::-webkit-scrollbar-track {
  @apply bg-gray-900; /* Màu track */
}

::-webkit-scrollbar-thumb {
  @apply bg-primary-600 rounded-full; /* Màu thumb */
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-primary-500; /* Màu khi hover */
}
```

## Preset Themes

### Theme 1: Professional Blue (Mặc định)
```javascript
// tailwind.config.js
primary: { 500: '#0ea5e9', 600: '#0284c7' }
// Background: gray-900, gray-800
```

### Theme 2: Creative Purple
```javascript
primary: { 500: '#8b5cf6', 600: '#7c3aed' }
// Background: purple-900, purple-800
```

### Theme 3: Tech Green
```javascript
primary: { 500: '#10b981', 600: '#059669' }
// Background: emerald-900, teal-800
```

### Theme 4: Warm Orange
```javascript
primary: { 500: '#f59e0b', 600: '#d97706' }
// Background: orange-900, amber-800
```

## Testing Changes

Sau khi thay đổi:

1. **Restart dev server:**
   ```bash
   npm run dev
   ```

2. **Clear cache nếu cần:**
   ```bash
   rm -rf node_modules/.vite
   npm run dev
   ```

3. **Test build:**
   ```bash
   npm run build
   npm run preview
   ```

## Tips & Best Practices

1. **Consistency:** Giữ màu sắc nhất quán trong toàn bộ website
2. **Contrast:** Đảm bảo contrast ratio tốt cho accessibility
3. **Performance:** Không thêm quá nhiều animations nặng
4. **Mobile:** Luôn test trên mobile sau khi thay đổi
5. **Brand:** Chọn màu phù hợp với personal brand

---

**Happy Customizing! 🎨**
