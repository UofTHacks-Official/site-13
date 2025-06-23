const linkColour = "#2EB6FF";

const email = `<a href="mailto:contact@uofthacks.com" target="_blank" rel="noopener" style="color: ${linkColour}; font-weight: 700">official@uofthacks.com</a>`;
const covidPolicy = `<a href="https://ehs.utoronto.ca/covid-19-information/" target="_blank" rel="noopener" style="color: ${linkColour}; font-weight: 700">University of Toronto\'s</a>`;
const mlhcoc = `<a href="http://hackp.ac/coc" target="_blank" rel="noopener" style="color: ${linkColour}; font-weight: 700">Code of Conduct</a>`;

export interface FAQ {
  id: number;
  title: string;
  content: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    title: "What is UofTHacks?",
    content:
      "UofTHacks is an annual hackathon organized by students at the University of Toronto. It brings together over 500+ tech enthusiasts, innovators, and creators from various backgrounds to collaborate and build innovative projects in 36 hours.",
  },
  {
    id: 2,
    title: "When and where is UofTHacks held?",
    content:
      "UofTHacks 13 is set to take place in January, 2026! This year’s event will be hosted entirely in-person in the Myhal Centre! The exact schedule of all the ceremonies, activities, and workshops will be released in the week leading up to the event!",
  },
  {
    id: 3,
    title: "Who can participate?",
    content:
      "High school and university students can join, no matter their experience. Whether you're a coding expert or a beginner, everyone's welcome. We will provide workshops and Mentorship to help you build your project!",
  },
  {
    id: 4,
    title: "Can I attend if I live far away?",
    content: `Yes! If you're registered, you're all set. Just get yourself to Toronto and bring any essentials for an overnight stay. We'll have places for you to rest, but unfortunately we will not be providing any travel reimbursements. If you're coming from outside Canada, make sure to follow the travel rules.
        <div style="margin-top: 1rem"><strong>Please note:</strong>
        If you will be attending from outside of Canada, you need to ensure you are following the Government of Canada's travel policies. Please contact us by sending a direct message on Instagram or at ${email} for more information. We'd be happy to help!</div>`,
  },
  {
    id: 5,
    title: "Can I join virtually?",
    content:
      "Unfortunately, we will not have any virtual aspects to this year's event. All members of your team must be in-person to be considered for judging.",
  },
  {
    id: 6,
    title: "How many hackers per team?",
    content:
      "Each team can have up to 4 hackers. As long as they are a registered hacker with UofTHacks, there are no restrictions on who can be on your team. However, there may be challenges that have team member requirements to be eligible for specific prizes. More details will be announced during opening ceremonies.",
  },
  {
    id: 7,
    title: "How do I sign up with my teammates or join a team?",
    content:
      "Applications will be on an individual basis. You can form a team before or during the event. We'll have a Discord channel where you can connect with others and find teammates.",
  },
  {
    id: 8,
    title: "How much does it cost to attend UofTHacks and what should I bring?",
    content:
      "The event is completely free! We will provide lots of food, snacks, and the venue will remain open for the entirety of the event! We will send a hacker pack with suggested items to bring.",
  },
  {
    id: 9,
    title: "Do I have to know how to code beforehand?",
    content:
      "Nope! Coding is great, but the design and business side of your project is just as important. UofTHacks is a great place to learn something new, with workshops and Mentors available to help you out. We’ll also have Mentors floating around to help out whenever you need it!",
  },
  {
    id: 10,
    title: "Can I work on my project before the event?",
    content:
      "No. To ensure fairness, and integrity, all work on your project must be done during the event. All submitted projects must include a public GitHub repository. Any projects that violate our rules will be disqualified from judging.",
  },
  {
    id: 11,
    title: "What are your COVID-19 and other respiratory illness regulations?",
    content: `Our policy will reflect the ${covidPolicy} protocols. The focus will be to ensure the event is a safe environment for all participants. We will have hand sanitizer stations and disinfectant wipes throughout the venue.`,
  },
  {
    id: 12,
    title: "What do Mentors do?",
    content:
      "Mentors are your key resources for guidance. They provide valuable industry knowledge, offer professional career advice, and assist with the technical challenges you may face during your project. Their role is to support and enhance your experience with both expertise and insight.",
  },
  {
    id: 13,
    title: "What are the requirements to be a Mentor?",
    content:
      "To be a Mentor, you must be at least 18 years old and have relevant experience in the tech industry. While previous internship experience is not required, it is considered an advantage. Mentors should possess strong technical knowledge and a commitment to supporting participants throughout the event.",
  },
  {
    id: 14,
    title: "What do Volunteers do?",
    content:
      "Volunteers help make sure the event runs smoothly! They assist with setup, logistics, and anything else that needs to be done to keep the event awesome.",
  },
  {
    id: 15,
    title: "What are the requirements to be a Volunteer?",
    content:
      "You just need to be enthusiastic and ready to help! No specific skills are needed, just a good attitude and a willingness to pitch in.",
  },
  {
    id: 16,
    title:
      "Are sleeping areas or supplies available for participants at UofTHacks 13?",
    content:
      "Unfortunately, we are unable to provide on-site sleeping accommodations as the booked spaces are not equipped with sleeping quarters.",
  },
  {
    id: 17,
    title: "What is MLH?",
    content: `Major League Hacking (MLH) is the official student hackathon league. Each year, we power over 300 weekend-long invention competitions that inspire innovation, cultivate communities and teach computer science skills to more than 500,000 developers around the world. MLH is an engaged and passionate maker community, consisting of the next generation of technology leaders and entrepreneurs. ${mlhcoc}`,
  },
  {
    id: 18,
    title: "How do I apply to UofTHacks 13?",
    content: `Applications will be released later in the year!`,
  },
  {
    id: 19,
    title: "I still have a question...",
    content: `No worries! You can reach out to us at ${email}, and we'll help with anything else you need!`,
  },
];
