const site = { 
    name: 'Sanjay Goraniya',
    title: 'Sanjay Goraniya | Front End Software Engineer',
    description: 'Design-minded front-end software engineer focused on building beautiful interfaces and experiences',
    url: 'https://sanjaygoraniya.com/',
    baseurl: '',
    email: 'sanjayrgoraniya@gmail.com',
    cover: '/img/og.png',
    logo: '/img/logo/logo1.png',
    data: {
        resume: "/resume.pdf",
        skills: {
            languages: ['JavaScript (ES6+)', 'TypeScript', 'PHP', 'HTML', 'CSS/Sass', 'Python', 'GraphQL'], // Programming Languages
            frameworks: ['Node.js', 'React', 'Express', 'jQuery', 'Nunjucks', 'Vue', 'Wordpress', 'Socket.IO'], // Libraries & Frameworks
            tools: ['Bash', 'Git & Github', 'Docker', 'Chrome DevTools', 'Postman', 'MongoDB', 'Passport.js','MySQL', 'AWS', 'Reaction Commerce'], // Tools & Platforms
            design: ['Sketch', 'InDesign', 'InVision', 'Prototyping', 'Wireframing', 'User Testing'] // Design
        },
        experience: [{
            company: "Techitree",
            url: 'https://www.techitree.com/',
            time: 'October 2019 - Present',
            position: 'MEAN Developer',
        },{
            company: "AIS Technolabs",
            url: 'https://www.aistechnolabs.com/',
            time: 'April 2019 - October 2019',
            position: 'NodeJS Developer',
        },{
            company: "IANT (Institute Of Advance Network Technology)",
            url: 'https://www.iantindia.com/',
            time: 'June 2016 - July 2017',
            position: 'PHP Developer',
        }],
        otherProjects: [{
            name: 'Personal Website V1',
            url: 'https://sanjaygoraniya.com',
            code: 'https://github.com/sanjaygoraniya',
            description: 'My first portfolio website I designed and built in 2020. I learned quite a bit about HTML, CSS, and SEO. Since then, I think my web development and design skills have improved immensely.',
            used: ['Node', 'Express', 'Nunjucks','JavaScript', 'jQuery', 'HTML', 'CSS']
        },{
            name: 'Whatsapp Clone - Design',
            url: 'https://github.com/sanjaygoraniya',
            code: 'https://github.com/sanjaygoraniya',
            description: 'Small CSS desing project created during my free time.',
            used: ['JavaScript', 'HTML', 'CSS']
        },{
            name: 'Blog management',
            url: 'https://www.careerchips.com',
            code: 'https://github.com/sanjaygoraniya',
            description: 'A complete solution to share knowledge, write blog, manage blog and profile.',
            used: ['Node', 'JavaScript', 'GraphQL', 'MongoDB', 'React']
        },{
            name: 'Ecommerce–LuxyList',
            url: 'https://www.careerchips.com',
            code: 'https://github.com/sanjaygoraniya',
            description: 'LuxyList is e-commerce website like online store',
            used: ['RC(Reaction-Commerce)', 'Node', 'JavaScript', 'HTML','CSS', 'GraphQL', 'MongoDB', 'Next']
        },{
            name: 'CareerChips',
            url: 'https://www.careerchips.com',
            code: 'https://github.com/sanjaygoraniya',
            description: 'This web application is using for hire IT resource.CareerChips doesn’t ask for any login and that benefits individuals to refer their friends.',
            used: [ 'Node', 'GraphQL', 'JavaScript', 'MongoDB', 'React']
        },{
            name: 'CSGOClub',
            url: 'https://github.com/sanjaygoraniya',
            code: 'https://github.com/sanjaygoraniya',
            description: 'CSGOClub is a web application for multiple games. In this project more then 10(ten) games are developed.',
            used: ['Node', 'Express', 'MySQL', 'JavaScript', 'jQuery', 'HTML', 'CSS']
        }],
        social: [
            { 
                title: 'email',
                url: 'mailto:sanjayrgoraniya@gmail.com'
            },
            { 
                title: 'instagram',
                url: 'https://www.instagram.com/sanjayrgoraniya'
            },
            { 
                title: 'github',
                url: 'https://github.com/sanjaygoraniya'
            },
            { 
                title: 'linkedin',
                url: 'https://www.linkedin.com/in/sanjaygoraniya'
            }
        ]
    }
}
export default site;
