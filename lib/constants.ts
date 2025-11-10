export interface Event {
    title: string;
    image: string;
    slug: string;
    location: string;
    date: string;
    time: string;
}

export const events: Event[] = [
    {
        title: "React Summit 2025",
        image: "/images/event1.png",
        slug: "react-summit-2025",
        location: "Amsterdam, Netherlands",
        date: "June 13-17, 2025",
        time: "9:00 AM - 6:00 PM CEST"
    },
    {
        title: "TechCrunch Disrupt",
        image: "/images/event2.png",
        slug: "techcrunch-disrupt-2025",
        location: "San Francisco, CA",
        date: "September 8-10, 2025",
        time: "10:00 AM - 7:00 PM PDT"
    },
    {
        title: "AI & Machine Learning Hackathon",
        image: "/images/event3.png",
        slug: "ai-ml-hackathon",
        location: "Austin, TX",
        date: "March 21-23, 2025",
        time: "8:00 AM - 8:00 PM CST"
    },
    {
        title: "Web3 Developer Conference",
        image: "/images/event4.png",
        slug: "web3-dev-conference",
        location: "Miami, FL",
        date: "April 15-17, 2025",
        time: "9:00 AM - 5:00 PM EDT"
    },
    {
        title: "JavaScript Global Summit",
        image: "/images/event5.png",
        slug: "javascript-global-summit",
        location: "Virtual Event",
        date: "May 5-6, 2025",
        time: "12:00 PM - 8:00 PM UTC"
    },
    {
        title: "DevOps & Cloud Meetup",
        image: "/images/event6.png",
        slug: "devops-cloud-meetup",
        location: "Seattle, WA",
        date: "February 28, 2025",
        time: "6:00 PM - 9:00 PM PST"
    }
];
