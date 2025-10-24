export interface PersonalInfo {
    fullName: string;
    title: string;
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    portfolioStatement: string;
}

export interface Education {
    school: string;
    major: string;
    period: string;
    gpa: string;
}

export interface Experience {
    company: string;
    position: string;
    period: string;
    project: string;
    responsibilities: string[];
}

export interface Project {
    name: string;
    duration?: string;
    github?: string;
    techStack: string[];
    description: string;
    features: string[];
}

export interface Skills {
    backend: string[];
    frontend: string[];
    database: string[];
    tools: string[];
    concepts: string[];
    softSkills: string[];
}

export interface Certification {
    name: string;
    issuer: string;
    link: string;
}

export interface Contact {
    email: string;
    linkedin: string;
    github: string;
    phone: string;
    address: string;
}

export interface ProfileData {
    personalInfo: PersonalInfo;
    about: {
        vi: string;
        en: string;
    };
    education: Education;
    experience: Experience[];
    projects: Project[];
    skills: Skills;
    certifications: Certification[];
    contact: Contact;
}
