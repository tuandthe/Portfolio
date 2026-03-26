import { ProfileData } from '../types';

export const profileData: ProfileData = {
    personalInfo: {
        fullName: "Đoàn Thế Tuấn",
        title: "Software Engineer | Backend Java Spring Boot | Fullstack Next.js/ReactJS",
        location: "Hoàng Mai, Hà Nội, Việt Nam",
        email: "doantuan112003@gmail.com",
        phone: "0339909513",
        linkedin: "https://www.linkedin.com/in/tuandthe",
        github: "https://github.com/tuandthe",
        portfolioStatement: "Tập trung xây dựng hệ thống Fullstack hiệu năng cao, tối ưu API, dữ liệu và kiến trúc mở rộng với Spring Boot, Next.js/ReactJS, Redis, Kafka."
    },
    about: {
        vi: "Software Engineer với gần 1 năm kinh nghiệm phát triển các hệ thống Backend (Spring Boot) và Frontend (Next.js/ReactJS). Có kinh nghiệm thực tế xây dựng RESTful API, thiết kế cơ sở dữ liệu, tích hợp Payment Gateway và API bên thứ ba. Quen thuộc với kiến trúc Modular Monolith, phân quyền RBAC, xử lý bất đồng bộ với Queue/Kafka và triển khai hệ thống bằng Docker. Có tư duy clean code, luôn chủ động tìm kiếm giải pháp tối ưu hiệu năng và chất lượng hệ thống.",
        en: "Software Engineer with nearly 1 year of experience building Backend systems (Spring Boot) and Frontend applications (Next.js/ReactJS). Hands-on experience in RESTful API development, database design, Payment Gateway integration, and third-party API integration. Familiar with Modular Monolith architecture, RBAC authorization, asynchronous processing with Queue/Kafka, and Docker-based deployment. Strong clean code mindset and proactive in optimizing system performance and quality."
    },
    education: {
        school: "FPT University",
        major: "Software Engineering",
        period: "2021 - 2025",
    },
    experience: [
        {
            company: "Agest Hà Nội",
            position: "FullStack Developer",
            period: "11/2025 - 04/2026",
            project: "Airu WorldSim",
            responsibilities: [
                "Phát triển hơn 30 RESTful API cho hệ thống quản lý SIM quốc tế và tích hợp cổng thanh toán.",
                "Xây dựng xác thực JWT và phân quyền RBAC với 3 vai trò: Admin, Agency, EndUser.",
                "Tích hợp Payment Gateway (Sony Payment) với luồng Authorize → Capture.",
                "Tối ưu đồng bộ dữ liệu usage bằng Kafka, giảm ~40% độ trễ API.",
                "Phát triển chức năng import/export dữ liệu Excel/PDF phục vụ quản lý hàng loạt.",
                "Tham gia Unit Testing, đạt test coverage trên 80%."
            ]
        },
        {
            company: "Agest Hà Nội",
            position: "FullStack Developer",
            period: "11/2025 - 04/2026",
            project: "AGV LMS",
            responsibilities: [
                "Phát triển hệ thống quản lý học tập: quản lý khóa học, chấm điểm theo rubric và điểm danh.",
                "Thiết kế kiến trúc cơ sở dữ liệu với PostgreSQL và Prisma ORM, triển khai từ đầu hơn 20 migrations.",
                "Xây dựng logic frontend theo module, sử dụng custom hooks và đồng bộ UI bằng TailwindCSS + ShadCN UI.",
                "Tích hợp MinIO (chuẩn S3) để quản lý tài nguyên học tập và triển khai hệ thống bằng Docker Compose.",
                "Tự động hóa 6 luồng gửi email (kích hoạt tài khoản, ghi danh, báo cáo tiến độ) bằng Nodemailer + Pug templates."
            ]
        },
        {
            company: "FPT Software Academy",
            position: "Backend Developer",
            period: "04/2024 - 07/2024",
            project: "Chatbot API - User Management Module",
            responsibilities: [
                "Phát triển và bảo trì RESTful API quản lý người dùng bằng Spring Boot, bao gồm CRUD và phân quyền.",
                "Thiết kế và tối ưu truy vấn SQL (sử dụng index) để đảm bảo hiệu năng.",
                "Tích hợp JWT Authentication và Redis caching, giảm thời gian phản hồi xuống khoảng 50-100ms.",
                "Tham gia Unit Testing, debug và fix bug để nâng cao độ tin cậy API.",
                "Làm việc nhóm theo mô hình Agile/Scrum với Git và Jira."
            ]
        }
    ],
    projects: [
        {
            name: "URL Shortener",
            github: "https://github.com/tuandthe/URLShortener",
            demo: "https://urlshort.id.vn",
            techStack: ["Spring Boot", "Spring Security", "JPA/Hibernate", "PostgreSQL", "Kafka", "Redis", "MinIO", "Next.js", "Docker"],
            description: "Hệ thống rút gọn URL full-stack theo feature-based architecture, tối ưu hiệu năng và triển khai production.",
            features: [
                "Xây dựng backend Spring Boot với ~29 RESTful API và frontend Next.js.",
                "Tối ưu redirect bằng Redis caching (TTL 24h + random jitter), tốc độ phản hồi dưới 50ms cho cached URL.",
                "Xử lý bất đồng bộ qua 2 Kafka topics với batch consumer, exponential backoff và Dead Letter Topic.",
                "Tự động hóa 4 luồng email bằng Thymeleaf + Kafka + cron jobs.",
                "Bảo mật với Spring Security + OAuth2 (Google) + JWT, phân quyền RBAC.",
                "Tích hợp MinIO lưu avatar/QR code và quản lý database migration bằng Flyway.",
                "Triển khai hệ thống lên VPS bằng Docker Compose kết hợp Cloudflare DNS."
            ]
        }
    ],
    skills: {
        backend: ["Java (Spring Boot, Spring Security, Spring Data JPA / Hibernate)", "RESTful API"],
        frontend: ["ReactJS", "Next.js", "TypeScript", "TailwindCSS"],
        database: ["SQL Server", "PostgreSQL", "MySQL"],
        tools: ["Docker", "Git", "GitHub", "Linux", "Redis", "Kafka", "MinIO", "Prisma ORM"],
        concepts: ["RBAC", "JWT Authentication", "API Integration", "Database Design", "Agile/Scrum"],
        softSkills: ["Teamwork", "Chủ động học công nghệ mới", "Tư duy tối ưu hiệu năng", "Giải quyết vấn đề"]
    },
    certifications: [],
    contact: {
        email: "doantuan112003@gmail.com",
        linkedin: "https://www.linkedin.com/in/tuandthe",
        github: "https://github.com/tuandthe",
        phone: "0339909513",
        address: "Hoàng Mai, Hà Nội, Việt Nam"
    }
};
