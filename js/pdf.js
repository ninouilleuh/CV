function toggleDownloadOptions() {

    const options = document.getElementById('downloadOptions');
    options.style.display = options.style.display === 'block' ? 'none' : 'block';

}

// Close dropdown if clicked outside
window.addEventListener('click', function(event) {

    if (!event.target.matches('.download-cv-btn')) {
    
        const dropdown = document.getElementById('downloadOptions');
    
        if (dropdown.style.display === 'block') {
            dropdown.style.display = 'none';
    
        }
    }
});

// Data Variations for Different CV Types
const fullExperience = [
    // 5 experiences Max
    {
        title: "Freelance Specialist",
        company: "Outlier",
        dates: "11/2024 - Present",
        details: [
            "Worked on 4-5 AI projects, focusing on AI-driven communication, coding in C#, and document analysis.",
            "Enhanced AI capabilities in understanding and processing complex documents.",
            "Provided specialized services in tech and data management, optimizing workflows with AI solutions."
        ]
    },
    {
        title: "Freelance Specialist",
        company: "Innodata",
        dates: "02/2025 - 04/2025",
        details: [
            "Held a freelance contract with Innodata for AI and data-related projects.",
            "Onboarded and trained in data annotation and AI model enhancement workflows.",
            "Maintained availability for assigned tasks in AI-driven data management."
        ]
    },
    {
        title: "Independent AI & Tech Freelancer",
        company: "Self-Employed",
        dates: "2022 - Present",
        details: [
            "Developed multiple web projects, including concept websites for a restaurant and an airline.",
            "Created web-based games and a gamified language-learning application.",
            "Currently working on an ecosystem monitoring web project to track environmental factors.",
            "Gained experience in full-stack development, UI/UX design, and AI-driven applications."
        ]
    }
];
const compactExperience = [
    // 3 experiences Max
    {
        title: "Freelance Specialist",
        company: "Outlier",
        dates: "11/2024 - Present",
        details: [
            "Worked on AI-driven communication, C# coding, and document analysis.",
            "Optimized workflows with AI-based solutions."
        ]
    },
    {
        title: "Independent AI & Tech Freelancer",
        company: "Self-Employed",
        dates: "2022 - Present",
        details: [
            "Developed web projects, including a gamified language-learning app.",
            "Created web-based games and ecosystem tracking tools."
        ]
    }
    
];
const printExperience = [
    // 2 experiences Max
    {
        title: "Freelance AI & Tech Specialist",
        company: "Outlier",
        dates: "11/2024 - Present",
        details: [
            "Worked on AI-driven communication, coding in C#, and document analysis.",
            "Enhanced AI capabilities in understanding and processing complex data.",
            "Developed workflow optimizations using AI solutions."
        ]
    },
    {
        title: "Independent AI & Tech Freelancer",
        company: "Self-Employed",
        dates: "2022 - Present",
        details: [
            "Built concept websites (e.g., restaurant, airline) and web-based games.",
            "Developed a gamified language-learning app and an ecosystem monitoring tool.",
            "Gained expertise in full-stack development, UI/UX, and AI applications."
        ]
    }
];

// Professional Summary Variations
const fullSummary = `

Ecological AI & Web Architect passionate about developing sustainable technology solutions. Combining AI, web development, and environmental science expertise to create regenerative digital ecosystems. Dedicated to leveraging technology for ecological restoration and innovation, with a focus on addressing global environmental challenges.

`;
const compactSummary = `

Ecological AI & Web Architect specializing in sustainable tech solutions. Expertise in AI, web development, and environmental science to create regenerative ecosystems and address global challenges.

`;
const printSummary = `

Ecological AI & Web Architect with expertise in sustainable tech, driving regenerative digital ecosystems through technical and environmental insights.

`;

// Skill Variations
const fullSkills = [
    // 15-25 skills
    {
        category: "Programming Languages",
        skills: ["JavaScript", "TypeScript", "Python", "HTML5/CSS3", "SQL"]
    },
    {
        category: "Web Development",
        skills: [
            "Front-end Development", 
            "React.js", 
            "Vue.js", 
            "Responsive Design", 
            "UX/UI"
        ]
    },
    {
        category: "AI & Machine Learning",
        skills: [
            "TensorFlow", 
            "PyTorch", 
            "Machine Learning", 
            "Natural Language Processing", 
            "Data Analysis"
        ]
    },
    {
        category: "Performance & Optimization",
        skills: [
            "Web Performance", 
            "Code Optimization", 
            "Scalability", 
            "Cross-browser Compatibility", 
            "Performance Metrics"
        ]
    },
    {
        category: "Soft Skills",
        skills: [
            "Collaboration", 
            "Team Building",  
            "Problem Solving", 
            "Adaptability", 
            "Intuitive Thinking"
        ]
    }
];
const compactSkills = [
    // 8-15 skills
    {
        category: "Core Technical Skills",
        skills: [
            "JavaScript", 
            "React", 
            "Python", 
            "AI/ML", 
            "Web Development", 
            "UX/UI",
            "GitHub"
        ]
    },
    {
        category: "Professional Skills",
        skills: [
            "Collaboration", 
            "Problem Solving", 
            "Team Building", 
            "Adaptability"
        ]
    }
];
const printSkills = [
    // 6-10 skills
    {
        category: "Key Skills",
        skills: [
            "JavaScript", 
            "React", 
            "AI/ML", 
            "Responsive Design", 
            "Collaboration", 
            "Problem Solving"
        ]
    }
];

// Education Variations

const fullEducation = [

    {
        degree: "Baccalaureat",
        field: "Mathematics and Informatics",
        institution: "High School Jacque-Brel, Paris",
        dates: "2019 - 2020",
        relevantCourses: [
            "Information Technology",
            "Advanced Mathematics", 
            "Computer Science Fundamentals",
            "Programming Basics"
        ]
    }
];
const compactEducation = [
    {
        degree: "Baccalaureat",
        field: "Mathematics and Informatics",
        institution: "High School Jacque-Brel, Paris",
        dates: "2019 - 2020",
    }
];
const printEducation = [
    {
        degree: "Baccalaureat",
        field: "Math & Informatics",
        institution: "Jacque-Brel HS",
    }
];
// Project Variations

const fullProjects = [ //xxx
   // {
   //     title: "EcoAI Platform",
    //    description: "An AI-driven platform for real-time ecological monitoring and prediction",
    //    tags: ["Machine Learning", "Sustainability", "Climate Tech"],
     //   image: "https://plus.unsplash.com/premium_photo-1661368421663-13b2d8115241?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     //   githubLink: "https://github.com/ninapalomares/ecoai-platform",
    //    projectLink: "https://ninapalomares.com/projects/ecoai-platform"
  //  },
//    {
   //     title: "GreenWeb Framework",
     //   description: "Sustainable web development framework reducing digital carbon emissions",
       // tags: ["Web Development", "Sustainability", "Open Source"],
//        image: "assets/airline.png",
//        githubLink: "https://github.com/ninapalomares/greenweb-framework",
//        projectLink: "https://ninapalomares.com/projects/greenweb-framework"
//    },
//    {
//        title: "ClimateSync",
//        description: "Machine learning model for precise climate change prediction and mitigation strategies",
//        tags: ["AI", "Climate Change", "Predictive Analytics"],
//        image: "assets/restaurant.png",
//        githubLink: "https://github.com/ninapalomares/climatesync",
//        projectLink: "https://ninapalomares.com/projects/climatesync"
//    }
];

const compactProjects = [
    {
        title: "Moi!",
        description: "Privacy-focused anonymous chat app",
        tags: ["AI", "Privacy", "Chat", "Web App"]
    }
    // {
    //     title: "Skywing Airlines",
    //     description: "Modern and user-friendly airline platform",
    //     tags: ["Web Dev", "UI/UX"],
    //     image: "assets/airline.png"
    // },
    // {
    //     title: "La Cucina Bella",
    //     description: "Website for an authentic Italian restaurant",
    //     tags: ["Food", "Online Ordering", "Web Dev"],
    //     image: "assets/restaurant.png"
    // }
];

const printProjects = [ //xxx
    {
        title: "EcoAI Platform",
        description: "Ecological AI Monitoring Solution"
    },
    {
        title: "GreenWeb Framework",
        description: "Sustainable Web Development"
    },
    {
        title: "ClimateSync",
        description: "Climate Prediction Model"
    }
];

function downloadPDF(type) {
    // Advanced content preparation
    const content = document.querySelector('.container').cloneNode(true);
    
    // Intelligent content cleaning
    const elementsToRemove = [
        '.ai-interaction', 
        '.download-cv-section', 
        '.chat-modal', 
        '.holographic-overlay'
    ];
    elementsToRemove.forEach(selector => {
        const elem = content.querySelector(selector);
        if (elem) elem.remove();
    });

    // Handle Projects Variations

    const projectsContainer = content.querySelector('.projects-grid');

    if (projectsContainer) {

        projectsContainer.innerHTML = ''; // Clear existing projects

        

        // Select appropriate projects data

        let projectsToUse = fullProjects;

        if (type === 'compact') {

            projectsToUse = compactProjects;

        } else if (type === 'print') {

            projectsToUse = printProjects;

        }

        

        projectsToUse.forEach(project => {

            const projectElement = document.createElement('div');

            projectElement.classList.add('project-card');

            

            // Full and Compact versions include images

            if (type !== 'print' && project.image) {

                const imageElement = document.createElement('img');

                imageElement.src = project.image;

                imageElement.alt = project.title;

                projectElement.appendChild(imageElement);

            }

            

            const detailsElement = document.createElement('div');

            detailsElement.classList.add('project-details');

            

            // Title

            const titleElement = document.createElement('h3');

            titleElement.textContent = project.title;

            detailsElement.appendChild(titleElement);

            

            // Description

            const descriptionElement = document.createElement('p');

            descriptionElement.textContent = project.description;

            detailsElement.appendChild(descriptionElement);

            

            // Tags (for full and compact versions)

            if (type !== 'print' && project.tags) {

                const tagsContainer = document.createElement('div');

                tagsContainer.classList.add('project-tags');

                

                project.tags.forEach(tag => {

                    const tagElement = document.createElement('span');

                    tagElement.textContent = tag;

                    tagsContainer.appendChild(tagElement);

                });

                

                detailsElement.appendChild(tagsContainer);

            }

            

            // Links (only for full version with visual representation)

            if (type === 'full' && (project.githubLink || project.projectLink)) {

                const linksContainer = document.createElement('div');

                linksContainer.classList.add('project-links');

                

                if (project.githubLink) {

                    const githubLink = document.createElement('a');

                    githubLink.href = project.githubLink;

                    githubLink.textContent = 'GitHub';

                    githubLink.setAttribute('data-href', project.githubLink);

                    linksContainer.appendChild(githubLink);

                }

                

                if (project.projectLink) {

                    const projectLink = document.createElement('a');

                    projectLink.href = project.projectLink;

                    projectLink.textContent = 'Project Page';

                    projectLink.setAttribute('data-href', project.projectLink);

                    linksContainer.appendChild(projectLink);

                }

                

                detailsElement.appendChild(linksContainer);

            }

            

            projectElement.appendChild(detailsElement);

            projectsContainer.appendChild(projectElement);

        });

    }

    // Handle Experience Variations

    const experienceContainer = content.querySelector('.experience-grid');

    if (experienceContainer) {

        experienceContainer.innerHTML = ''; // Clear existing experience
        
        let experienceToUse = fullExperience;

        if (type === 'compact') {

            experienceToUse = compactExperience;
        
        } else if (type === 'print') {
        
            experienceToUse = printExperience;

        }

        experienceToUse.forEach(exp => {

            const expElement = document.createElement('div');
            expElement.classList.add('experience-card');
            const titleElement = document.createElement('h3');
            titleElement.textContent = exp.title;
            expElement.appendChild(titleElement);
            const detailsElement = document.createElement('p');
            detailsElement.classList.add('experience-details');
            detailsElement.innerHTML = `

                <span class="company">${exp.company}</span> | 

                <span class="date">${exp.dates}</span>

            `;
            expElement.appendChild(detailsElement);
            const detailsList = document.createElement('ul');
            exp.details.forEach(detail => {
                const detailItem = document.createElement('li');
                detailItem.textContent = detail;
                detailsList.appendChild(detailItem);
            });
            expElement.appendChild(detailsList);
            experienceContainer.appendChild(expElement);
        });
    }


    // Handle Education Variations

    const educationContainer = content.querySelector('.education-grid');

    if (educationContainer) {

        educationContainer.innerHTML = ''; // Clear existing education

        // Select appropriate education data

        let educationToUse = fullEducation;

        if (type === 'compact') {

            educationToUse = compactEducation;

        } else if (type === 'print') {

            educationToUse = printEducation;
        }

        // Create education entries

        educationToUse.forEach(edu => {
            const eduElement = document.createElement('div');
            eduElement.classList.add('education-card');

            // Degree and Field

            const titleElement = document.createElement('h3');
            titleElement.textContent = `${edu.degree} in ${edu.field}`;
            eduElement.appendChild(titleElement);

            // Institution

            const institutionElement = document.createElement('p');
            institutionElement.classList.add('education-institution');
            institutionElement.textContent = edu.institution;
            eduElement.appendChild(institutionElement);

            // Dates (only for full and compact versions)

            if (type !== 'print' && edu.dates) {

                const datesElement = document.createElement('p');
                datesElement.classList.add('education-dates');
                datesElement.textContent = edu.dates;
                eduElement.appendChild(datesElement);

            }

            // Relevant Courses (only for full version)

            if (type === 'full' && edu.relevantCourses && edu.relevantCourses.length > 0) {

                const coursesContainer = document.createElement('div');
                coursesContainer.classList.add('relevant-courses');
                const coursesTitle = document.createElement('h4');
                coursesTitle.textContent = 'Relevant Courses';
                coursesContainer.appendChild(coursesTitle);
                const coursesList = document.createElement('ul');

                edu.relevantCourses.forEach(course => {

                    const courseItem = document.createElement('li');
                    courseItem.textContent = course;
                    coursesList.appendChild(courseItem);
                
                });
                
                coursesContainer.appendChild(coursesList);
                eduElement.appendChild(coursesContainer);

            }

            educationContainer.appendChild(eduElement);
        });
    }

     // Handle Skills Variations

     const skillsContainer = content.querySelector('.skills-grid');

     if (skillsContainer) {
 
         skillsContainer.innerHTML = ''; // Clear existing skills
         let skillsToUse = fullSkills;
 
         if (type === 'compact') {
 
             skillsToUse = compactSkills;

         } else if (type === 'print') {
 
             skillsToUse = printSkills;

         }
 
         
 
         skillsToUse.forEach(category => {
 
             const categoryElement = document.createElement('div');
             categoryElement.classList.add('skill-category');
             const categoryTitle = document.createElement('h3');
             categoryTitle.textContent = category.category;
             categoryElement.appendChild(categoryTitle);
             const skillsList = document.createElement('ul');
 
             category.skills.forEach(skill => {
 
                 const skillItem = document.createElement('li');
                 skillItem.textContent = skill;
                 skillsList.appendChild(skillItem);
 
             });
 
             categoryElement.appendChild(skillsList);
             skillsContainer.appendChild(categoryElement);
         });
     }
     
     // Professional Summary Mapping

     const summaryVariations = {

        'full': fullSummary,
        'compact': compactSummary,
        'print': printSummary

    };


    // Find the professional summary element

    const professionalSummaryElement = content.querySelector('.professional-summary p');

    // Replace the summary text

    if (professionalSummaryElement) {

        professionalSummaryElement.textContent = summaryVariations[type] || fullSummary;

    }
    
    // Only show email in contact-information for compact CV
if (type === 'compact') {
    const contactInfo = content.querySelector('.contact-information');
    if (contactInfo) {
        // Remove all contact items except those containing "mailto:"
        Array.from(contactInfo.querySelectorAll('.contact-item')).forEach(item => {
            const link = item.querySelector('a');
            if (!link || !link.href.startsWith('mailto:')) {
                item.remove();
            }
        });
         // Add phone number manually
        const phoneItem = document.createElement('span');
        phoneItem.className = 'contact-item';
        phoneItem.innerHTML = `<i class="fas fa-phone"></i> <a href="tel:+33620358042">06 20 35 80 42</a>`;
        contactInfo.appendChild(phoneItem);

         // Add second phone number manually
        const phoneItem2 = document.createElement('span');
        phoneItem2.className = 'contact-item';
        phoneItem2.innerHTML = `<i class="fas fa-phone"></i> <a href="tel:+358465559264">4 65 55 92 64</a>`;
        contactInfo.appendChild(phoneItem2);
   
    }
}

    // Advanced styling with multiple layers of optimization
    let styleContent = `
        /* Import optimized font with multiple weights */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        /* Advanced color palette with accessibility in mind */
        :root {
            --color-primary: #2c3e50;      /* Deep blue-gray */
            --color-accent: #27ae60;       /* Vibrant green */
            --color-text: #333333;         /* Near-black */
            --color-background: #ffffff;   /* Pure white */
            --color-gray-light: #f4f6f7;   /* Light gray */
            --color-gray-border: #e0e4e6;  /* Soft border gray */
            
            /* Accessibility color contrast ratios */
            --color-text-on-accent: #ffffff;
        }

        /* Reset with modern normalization */
        *,
        *::before,
        *::after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        /* Advanced print configuration */
        @page {
            size: A4;
            margin: 8mm;
            bleed: 3mm;
        }

        /* Responsive typography with fluid scaling */
        html {
            font-size: calc(14px + 0.25vw);
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            line-height: 1.6;
            color: var(--color-text);
            background: var(--color-background);
            max-width: 210mm;
            margin: 0 auto;
            font-weight: 400;
            letter-spacing: -0.01em;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
        }

        /* Advanced Typography */
        h1, h2, h3 {
            font-weight: 700;
            color: var(--color-primary);
            margin-bottom: 0.5rem;
            line-height: 1.2;
        }

        h1 {
            font-size: 1.8rem;
            border-bottom: 3px solid var(--color-accent);
            padding-bottom: 0.5rem;
            margin-bottom: 1rem;
        }

        h2 {
            font-size: 1.3rem;
            color: var(--color-accent);
            border-bottom: 1px solid var(--color-gray-border);
            padding-bottom: 0.3rem;
        }

        h3 {
            font-size: 1.1rem;
            color: var(--color-accent);
        }

        /* Profile Section with Advanced Layout */
        .profile-section {
            display: flex;
            align-items: center;
            margin-bottom: 1.5rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid var(--color-gray-border);
        }

        .profile-image {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            object-fit: cover;
            margin-right: 1.5rem;
            border: 3px solid var(--color-accent);
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        /* Advanced List Styling */
        ul, ol {
            margin-left: 1.5rem;
            margin-bottom: 1rem;
        }

        li {
            margin-bottom: 0.5rem;
            position: relative;
            padding-left: 0.5rem;
        }

        li::before {
            content: '•';
            color: var(--color-accent);
            position: absolute;
            left: -1rem;
        }

        /* Card Design System */
        .experience-card, 
        .project-card, 
        .ecosystem-card {
            margin-bottom: 1rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid var(--color-gray-border);
            page-break-inside: avoid;
        }

        /* Utility Classes */
        .text-muted {
            color: #6c757d;
            font-size: 0.8rem;
            }

        .contact-information {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 0.5rem;
            margin-bottom: 1rem;
            font-size: 0.9rem;
        }

        .contact-item {
            align-items: center;
            gap: 0.5rem;
            display: block;
            margin-bottom: 0.3rem;
        }
        .contact-item a {
            text-decoration: none;
            color: var(--color-text);
        }
        .contact-item a::after {
            content: " (" attr(href) ")";
            font-size: 0.8rem;
            color: #666;
            display: block;
            margin-left: 1.5rem;
        }

        /* Professional Summary Styles */
        .professional-summary {
            margin-bottom: 1rem;
            padding: 1rem;
            background: var(--color-gray-light);
            border-left: 4px solid var(--color-accent);
        }

        .professional-summary h2 {
            font-size: 1.2rem;
            color: var(--color-accent);
            margin-bottom: 0.5rem;
            border-bottom: 1px solid var(--color-gray-border);
            padding-bottom: 0.3rem;
        }

        .professional-summary p {
            font-size: 0.9rem;
            line-height: 1.5;
            text-align: justify;
        }
    
        /* Skills Section Styles */
        .skills-section {
            margin-bottom: 1rem;
        }

        .skills-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0.5rem;
        }

        .skill-category {
            border-left: 3px solid var(--color-accent);
            padding: 0.5rem;
            background: var(--color-gray-light);
        }

        .skill-category h3 {
            font-size: 1rem;
            color: var(--color-accent);
            margin-bottom: 0.3rem;
            border-bottom: 1px solid var(--color-gray-border);
            padding-bottom: 0.2rem;
        }

        .skill-category ul {
            list-style-type: none;
            padding: 0;
        }


        .skill-category li {
            font-size: 0.8rem;
            padding: 0.2rem 0;
            border-bottom: 1px solid var(--color-gray-border);
        }

        .skill-category li:last-child {
            border-bottom: none;
        }
    
        /* Education Section Styles */
        .education-section {
            margin-bottom: 1rem;
        }

        .education-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 0.5rem;
        }

        .education-card {
            border-left: 3px solid var(--color-accent);
            padding: 0.5rem;
            background: var(--color-gray-light);
            margin-bottom: 0.75rem;
            padding-bottom: 0.75rem;
            border-bottom: 1px solid var(--color-gray-border);
        }

        .education-card h3 {
            font-size: 1rem;
            color: var(--color-accent);
            margin-bottom: 0.3rem;
        }

        .education-card ul {
            list-style-type: none;
            padding: 0;
        }

        .education-card li {
            font-size: 0.8rem;
            padding: 0.2rem 0;
            border-bottom: 1px solid var(--color-gray-border);
        }

        .education-card li:last-child {
            border-bottom: none;
        }

        .education-institution {
            font-style: italic;
            font-size: 0.9rem;
            color: var(--color-primary);
            margin-bottom: 0.2rem;
        }
        .education-dates {
            font-size: 0.8rem;
            color: #666;
            margin-bottom: 0.3rem;
        }

        .relevant-courses {
            margin-top: 0.5rem;
        }

        .relevant-courses h4 {
            font-size: 0.9rem;
            color: var(--color-accent);
            margin-bottom: 0.2rem;
        }

        .relevant-courses ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
        }

        .relevant-courses li {
            font-size: 0.8rem;
            color: var(--color-text);
            margin-bottom: 0.2rem;
        }

        .projects-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 0.75rem;
        }

        .project-card {
            border-bottom: 1px solid var(--color-gray-border);
            padding-bottom: 0.75rem;
            margin-bottom: 0.75rem;
            display: flex;
            align-items: flex-start;

        }

        .project-card img {
            max-width: 150px;
            height: 100px;
            object-fit: cover;
            margin-bottom: 0.5rem;
            margin-right: 1rem;
            border-radius: 5px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            filter: grayscale(10%);
        }
        
        .project-details {
            flex-grow: 1;
        }

        .project-details h3 {
            font-size: 1rem;
            color: var(--color-accent);
            margin-bottom: 0.3rem;
            border-bottom: 1px solid var(--color-gray-border);
            padding-bottom: 0.2rem;
        }

        .project-details p {
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
        }

        .project-tags {
            display: none; /* Hide tags in print version */
        }
        .project-links {
            margin-top: 0.5rem;
            font-size: 0.8rem;
            color: #666;
        }


        .project-links a {
            display: inline-block;
            margin-right: 1rem;
            position: relative;
            color: #666;
            text-decoration: none;
        }


        .project-links a::after {
            content: " [" attr(href) "]";
            font-size: 0.7rem;
            color: #999;
        }


        .project-links a::before {
            content: "🔗";
            margin-right: 0.3rem;
            font-size: 0.7rem;
        }

`;
    if (type === 'full') {}
    // Compact Version - Focused and Concise
    else if (type === 'compact') {
        styleContent += `
            .mission-statement, 
            .future-vision, 
            .ecosystem-grid, 
            .code-snippet,  
            .project-tags {
                display: none;
            }
            .project-card img {
            width: 100%;
            height: 80px;
            margin-right: 0;
            margin-bottom: 0.5rem;
        }
            .project-card {
            flex-direction: column;
        }

            .profile-section {
                margin-bottom: 1rem;
            }

            .profile-image {
                width: 80px;
                height: 80px;
                margin-right: 1rem;
            }

            h1 { font-size: 1.5rem; }
            h2 { font-size: 1.2rem; }
            h3 { font-size: 1rem; }

            .experience-card, 
            .project-card {
                margin-bottom: 0.75rem;
                padding-bottom: 0.75rem;
            }
        `;
    } 

    // Print Friendly - Minimal Essential Information
    else {
        styleContent += `
            body {
                font-size: 0.9rem;
            }

            .profile-section {
                flex-direction: column;
                align-items: flex-start;
                margin-bottom: 0.75rem;
            }

            .profile-image {
                width: 60px;
                height: 60px;
                margin-bottom: 0.5rem;
                margin-right: 0;
            }

            .mission-statement, 
            .future-vision, 
            .ecosystem-grid, 
            .code-snippet, 
            .project-card img, 
            .project-tags {
                display: none;
            }

            h1 {
                font-size: 1.3rem;
                border-bottom: 1px solid var(--color-primary);
            }

            h2 { font-size: 1.1rem; }
            h3 { font-size: 1rem; }

            .experience-card, 
            .project-card {
                margin-bottom: 0.5rem;
                padding-bottom: 0.5rem;
            }

            ul {
                margin-left: 1rem;
                font-size: 0.8rem;
            }
        `;
    }

    if (type === 'compact' || type === 'print') {

styleContent += `

    .contact-information {
        flex-direction: column;
        gap: 0.3rem;
        font-size: 0.8rem;

    }
        .professional-summary {
        font-size: 0.8rem;
        padding: 0.5rem;
        }

        .professional-summary h2 {
            font-size: 1rem;
        }
            .skills-grid {

            grid-template-columns: 1fr;

        }


        .skill-category {

            padding: 0.3rem;

        }


        .skill-category h3 {

            font-size: 0.9rem;

        }


        .skill-category li {

            font-size: 0.7rem;

        }
        .education-card h3 {

            font-size: 0.9rem;

        }


        .education-institution {

            font-size: 0.7rem;

        }


        .education-card li {

            font-size: 0.7rem;

        }

`;

}


    // Advanced print window generation
    const printWindow = window.open('', 'PRINT', 'height=800,width=600');
    printWindow.document.open();
    printWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Nina Palomares - CV (${type})</title>
        </head>
        <body>${content.outerHTML}</body>
        </html>
    `);
    
    const styleElement = printWindow.document.createElement('style');
    styleElement.innerHTML = styleContent;
    printWindow.document.head.appendChild(styleElement);

    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
}