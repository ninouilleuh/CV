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

//xxx
const compactEducation = [
    {
        degree: "Baccalaureat",
        field: "Mathematics and Informatics",
        institution: "High School Jacque-Brel, Paris",
        dates: "2019 - 2020",
        relevantCourses: [
            "IT", 
            "Mathematics", 
            "Programming"
        ]
    }
];

//xxx
const printEducation = [
    {
        degree: "Baccalaureat",
        field: "Math & Informatics",
        institution: "Jacque-Brel HS",
        dates: "2019 - 2020",
        relevantCourses: ["IT", "Math"]
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

`;

    // Full CV - Comprehensive Professional Design
    if (type === 'full') {
        styleContent += `
            .mission-statement, 
            .future-vision {
                background: var(--color-gray-light);
                border-left: 4px solid var(--color-accent);
                padding: 1rem;
                margin-bottom: 1rem;
                font-style: italic;
            }

            .code-snippet {
                background: var(--color-gray-light);
                font-family: 'Courier New', monospace;
                padding: 0.75rem;
                margin: 0.75rem 0;
                font-size: 0.9rem;
                white-space: pre-wrap;
                border-left: 3px solid var(--color-accent);
                overflow-x: auto;
            }

            .project-card img {
                max-width: 100%;
                height: 200px;
                object-fit: cover;
                margin-bottom: 0.75rem;
                filter: grayscale(10%);
                border-radius: 4px;
            }

            .project-tags {
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;
                margin-top: 0.75rem;
            }

            .project-tags span {
                background: var(--color-accent);
                color: var(--color-text-on-accent);
                padding: 0.25rem 0.5rem;
                border-radius: 3px;
                font-size: 0.7rem;
            }
        `;
    } 
    // Compact Version - Focused and Concise
    else if (type === 'compact') {
        styleContent += `
            .mission-statement, 
            .future-vision, 
            .ecosystem-grid, 
            .code-snippet, 
            .project-card img, 
            .project-tags {
                display: none;
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