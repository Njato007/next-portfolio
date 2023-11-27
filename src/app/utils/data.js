const publicData = {};

publicData.backend = {
    desires: ['Web Application', 'API'],
    languages: [
        {
            title: 'Javascript/Typescript',
            data: [
                {
                    title: 'JavaScript',
                    note: 90,
                },
                {
                    title: 'JQuery',
                    note: 80,
                },
                {
                    title: 'TypeScript',
                    note: 70,
                },
                {
                    title: 'NodeJS',
                    note: 70,
                },
                {
                    title: 'Nextjs',
                    note: 60
                },
            ]
        },
        {
            title: 'PHP',
            data: [
                {
                    title: 'PHP 7',
                    note: 80
                },
                {
                    title: 'CodeIgniter 4',
                    note: 70
                },
            ]
        },
        {
            title: 'Open-source databases',
            data: [
                {
                    title: 'MySQL',
                    note: 60
                },
                {
                    title: 'SQLite',
                    note: 60
                },
                {
                    title: 'MongoDB',
                    note: 60
                },
                {
                    title: 'MariaDB',
                    note: 60
                },
            ]
        }

    ],
    tools: [
        {
            title: 'IDE',
            data: ['Visual Studio Code', 'Atom']
        },
        {
            title: 'API tool',
            data: ['Postman']
        },
        {
            title: 'Code hosting & collaboration',
            data: ['Github']
        },
        {
            title: 'Web hosting',
            data: ['Heroku', 'Simafri', 'Vercel', 'Madagascar Internet']
        }
    ]
}


publicData.frontend = {
    desires: ['Website', 'User Interface (UI)', 'User Experience (UX)', 'Responsive Design', 'and Client requirements'],
    languages: [
        {
            title: 'HTML',
            note: 100,
        },
        {
            title: 'CSS',
            note: 90,
        },
        {
            title: 'JavaScript',
            note: 80,
        },
        {
            title: 'Reactjs',
            note: 70,
        },
        {
            title: 'ReactNative',
            note: 50,
        },
    ],
    tools: [
        {
            title: 'CSS utility',
            data: ['Tailwindcss', 'Bootstrap']
        },
        {
            title: 'Others',
            data: ['Fontawesome', 'React-icons', 'Heroicons']
        },
    ]
}

publicData.work = [
    {
        title: 'QUIZ game',
        description: `A simple web application where an user can play by answering questions on various topics.`,
        made: `This application is built by using <b>React</b>.`,
        image: `work-2.png`,
        github: ``,
        link: ``
    },
    {
        title: 'Football pronostic',
        description: `Dragging and dropping flag in some fields to generate a random score result `,
        made: `This application is built by using <b>Vanilla Javascript</b>.`,
        image: `pronostic.png`,
        github: ``,
        link: ``
    },
    {
        title: 'Countdown & Stopwatch ',
        description: `Dragging and dropping flag in some fields to generate a random score result `,
        made: `This application is built by using <b>Vanilla Javascript</b>.`,
        image: `time.png`,
        github: ``,
        link: ``
    },

]

module.exports = publicData;