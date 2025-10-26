import { ProfileData } from '../types';

export const profileData: ProfileData = {
    personalInfo: {
        fullName: "Đoàn Thế Tuấn",
        title: "Backend Developer | Java & .NET",
        location: "Hoàng Mai, Hà Nội, Việt Nam",
        email: "doantuan112003@gmail.com",
        phone: "0339909513",
        linkedin: "https://www.linkedin.com/in/tuandthe",
        github: "https://github.com/dtuan11",
        portfolioStatement: "Xây dựng API hiệu năng cao, bảo mật, và dễ mở rộng với Java Spring Boot & ASP.NET Core."
    },
    about: {
        vi: "Tôi là sinh viên tốt nghiệp ngành Kỹ thuật phần mềm tại Đại học FPT, có hơn 4 tháng kinh nghiệm làm việc với Java Spring Boot và ASP.NET Core. Tôi tập trung phát triển hệ thống backend hiệu năng cao, sử dụng JWT, Redis, Azure Blob Storage và Clean Architecture. Thành thạo Git, Jira, làm việc nhóm theo mô hình Agile/Scrum, có tư duy logic và tinh thần tự học.",
        en: "I am a Software Engineering graduate from FPT University with over 4 months of experience in Backend development using Java Spring Boot and ASP.NET Core. Skilled in building secure, high-performance APIs with JWT, Redis, Azure Blob Storage, and Clean Architecture. Experienced in Agile/Scrum, Git, and Jira, with strong logical thinking and self-learning ability."
    },
    education: {
        school: "FPT University",
        major: "Software Engineering",
        period: "2021 - 2025",
        gpa: "7.1/10"
    },
    experience: [
        {
            company: "FPT Software Academy",
            position: "Full Stack Developer Intern",
            period: "04/2024 - 08/2024",
            project: "Chatbot API System – User Management Module",
            responsibilities: [
                "Phát triển và bảo trì RESTful API bằng Java Spring Boot, Frontend với ReactJS.",
                "Thiết kế và tối ưu truy vấn SQL, đảm bảo toàn vẹn và hiệu năng dữ liệu.",
                "Xây dựng mô-đun xác thực và phân quyền bằng JWT.",
                "Tích hợp Redis caching để giảm tải cơ sở dữ liệu và tăng tốc độ phản hồi.",
                "Áp dụng Clean Architecture để tối ưu khả năng mở rộng và bảo trì.",
                "Tham gia Debugging, Unit Testing và viết tài liệu API.",
                "Làm việc nhóm theo mô hình Agile/Scrum với Git và Jira."
            ]
        }
    ],
    projects: [
        {
            name: "URL Shortener",
            github: "https://github.com/tuandthe/URLShortener",
            demo: "https://tuandthe.github.io/URLShortener/",
            techStack: [".NET 8", "React", "TypeScript", "PostgreSQL", "RabbitMQ", "Ocelot", "Docker", "GitHub Actions"],
            description: "Hệ thống rút gọn URL với kiến trúc microservices, tự động deploy bằng CI/CD.",
            features: [
                "Kiến trúc Microservices: API Gateway (Ocelot), URL Shortener Service, Redirect Service, Analytics Service.",
                "Message Queue: RabbitMQ (CloudAMQP) để xử lý click events bất đồng bộ.",
                "CI/CD: GitHub Actions tự động deploy backend lên Render.com và frontend lên GitHub Pages.",
                "Analytics: Background worker consume events từ RabbitMQ để lưu trữ thống kê.",
                "RESTful API với Swagger documentation, CORS enabled, HTTPS security."
            ]
        },
        {
            name: "Mini ERP for Packaging Manufacturing and Supply",
            duration: "06/2025 - 09/2025",
            techStack: ["C#", "ASP.NET Core", "ReactJS", "SQL Server", "Azure Blob Storage", "JWT"],
            description: "Ứng dụng ERP giúp doanh nghiệp sản xuất bao bì quản lý đơn hàng, nguyên vật liệu, kho và giao hàng.",
            features: [
                "Đăng ký/đăng nhập bảo mật bằng JWT.",
                "Tích hợp Redis để cache token và vô hiệu hóa token hết hạn.",
                "Quản lý đơn nhập/xuất hàng, giao hàng và đơn nhân viên.",
                "Tích hợp Azure Blob Storage để lưu trữ hợp đồng và hình ảnh sản phẩm.",
                "Thiết kế và bảo trì cơ sở dữ liệu SQL Server, viết stored procedure để xử lý dữ liệu.",
                "Phối hợp nhóm qua Git, Jira và làm việc theo mô hình Agile/Scrum."
            ]
        },
        {
            name: "Interview Management System",
            github: "https://github.com/dtuan11/Interview-Management-System",
            techStack: ["Java", "Spring Boot", "MySQL", "Hibernate", "Redis", "JWT", "ReactJS"],
            description: "Hệ thống hỗ trợ bộ phận HR quản lý ứng viên, lịch phỏng vấn và quy trình gửi offer.",
            features: [
                "Phát triển API backend cho các chức năng ứng viên, phỏng vấn và offer.",
                "Tích hợp Redis caching để tăng hiệu năng.",
                "Xây dựng hệ thống đăng nhập và phân quyền bằng JWT.",
                "Phối hợp frontend ReactJS để hiển thị và thao tác dữ liệu."
            ]
        }
    ],
    skills: {
        backend: ["Java (Spring Boot, Hibernate, Maven)", "C# (.NET Core, ASP.NET MVC, Entity Framework Core)"],
        frontend: ["ReactJS", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
        database: ["SQL Server", "MySQL"],
        tools: ["Git", "GitHub", "Jira", "Postman", "Redis", "Azure Blob Storage"],
        concepts: ["OOP", "Design Patterns", "RESTful API", "Clean Architecture", "Multithreading"],
        softSkills: ["Tư duy logic", "Teamwork", "Tự học hỏi", "Giải quyết vấn đề", "Làm việc nhóm Agile/Scrum"]
    },
    certifications: [
        {
            name: "Project Management",
            issuer: "Coursera",
            link: "https://coursera.org/share/6f5dedeccc46ccd83b04f673d9fc8d31"
        },
        {
            name: "Writing Topics",
            issuer: "Coursera",
            link: "https://coursera.org/share/fb594d3c8eba20c2ca5a33dba539bc57"
        }
    ],
    contact: {
        email: "doantuan112003@gmail.com",
        linkedin: "https://www.linkedin.com/in/tuandthe",
        github: "https://github.com/dtuan11",
        phone: "0339909513",
        address: "Hoàng Mai, Hà Nội, Việt Nam"
    }
};
