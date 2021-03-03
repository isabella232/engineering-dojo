export const ROLES = {
    "ENTRY": "Entry Level Engineer",
    "NORMAL": "Software Engineer",
    "SENIOR": "Senior Software Engineer",
    "PRINCIPLE": "Principle Software Engineer",
    "STAFF": "Staff Software Engineer"
}

export var quizQuestions = [
    {
        question: "When it’s unclear why you need to build a certain capability, what is your preference?",
        answers: [
            {
                content: "As long as I understand the task, it’s fine for me",
                type: ROLES.ENTRY
            },
            {
                content: "Ask my manager, this is their job",
                type: ROLES.NORMAL
            },
            {
                content: "I feel comfortable talking with various people (product, sales, etc.) and figure out the answer",
                type: ROLES.SENIOR
            },
            {
                content: "I’m usually the one who figure this thing out for others. I cannot work without it.",
                type: ROLES.PRINCIPLE
            }
        ]
    },
    {
        question: "When you lead projects, how big are they?",
        answers: [
            {
                content: "I help with other projects, still didn’t lead one myself",
                type: ROLES.ENTRY
            },
            {
                content: "I’m working on them myself, for a few weeks",
                type: ROLES.NORMAL
            },
            {
                content: "Me and 2-3 more people from my team, for a few weeks to a few months",
                type: ROLES.SENIOR
            },
            {
                content: "Me and 5-15 people from various teams, for a few weeks to a few months",
                type: ROLES.PRINCIPLE
            },
            {
                content: "I lead some of the biggest initiatives in the company, having at least 10 people working with me for more than a year",
                type: ROLES.STAFF
            }
        ]
    },
    {
        question: "Do you know well the company’s goals for the year and why these goals were chosen?",
        answers: [
            {
                content: "Not really. I remember some numbers but not more than that. I don’t think it’s needed for me to work.",
                type: ROLES.ENTRY
            },
            {
                content: "Yes, I know the goals well. I don’t know the rational for picking them",
                type: ROLES.NORMAL
            },
            {
                content: "I can explain the goals and why they’re critical for our success to other teammates\n",
                type: ROLES.SENIOR
            },
            {
                content: "I use company’s goals to attract talent, use it during interviews and help onboarding new teammates\n",
                type: ROLES.PRINCIPLE
            }
        ]
    },
    {
        question: "When others usually hear from you?",
        answers: [
            {
                content: "I update my manager on my progress.",
                type: ROLES.ENTRY
            },
            {
                content: "Mostly within my team. I provide context on my work.",
                type: ROLES.NORMAL
            },
            {
                content: "I tend to update on bigger forums around the projects I lead, or things I did to make others’ life easier",
                type: ROLES.SENIOR
            },
            {
                content: "It’s very common to hear from me on various projects and initiatives on email, Slack and f2f. Many people outside of my team knows my work.",
                type: ROLES.PRINCIPLE
            }
        ]
    },
    {
        question: "When others working on a big project (>6 months effort), when are they coming to consult with you?",
        answers: [
            {
                content: "Very rarely. Maybe if it’s around code I wrote.",
                type: ROLES.ENTRY
            },
            {
                content: "Here and there. I do have some expertise in specific types of systems or solutions, that people want o leverage my knowledge",
                type: ROLES.NORMAL
            },
            {
                content: "People consult with me on big projects where I have context around - from making sure requirements are solid to the solutions and tradeoffs they have in mind",
                type: ROLES.SENIOR
            },
            {
                content: "People consult with me on everything they feel is a big challenge. Even if I don’t have the context, they feel comfortable sharing and getting my perspective.",
                type: ROLES.PRINCIPLE
            }
        ]
    }
];

export default {quizQuestions, ROLES};
