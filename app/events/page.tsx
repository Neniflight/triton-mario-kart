import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ImageCarousel from "@/components/image_carousel";
import EventCardCarousel from "@/components/event_card_carousel";

// Event images from your uploads
const eventImages = [
  "/images/events_1.jpg",
  "/images/events_2.jpg",
  "/images/events_3.jpg",
  "/images/events_4.jpg",
]

// Sample upcoming events
const upcomingEvents = [
  {
    name: "Winter Tournament Finals",
    date: "Date (Monday, 1/27/2025)",
    time: "Time (7:00pm to 10:00pm)",
    location: "PC East Ballroom",
    description: "Join us for the epic finals of our winter tournament series!",
    image: eventImages[0],
  },
  {
    name: "Mario Kart Workshop",
    date: "Date (Wednesday, 1/29/2025)",
    time: "Time (5:00pm to 7:00pm)",
    location: "CSE Building",
    description:
      "Learn advanced techniques and strategies from our top players.",
    image: eventImages[1],
  },
  {
    name: "Community Game Night",
    date: "Date (Friday, 1/31/2025)",
    time: "Time (6:00pm to 9:00pm)",
    location: "Student Center",
    description: "Casual gaming night with snacks and prizes for everyone!",
    image: eventImages[2],
  },
  {
    name: "Spring Season Kickoff",
    date: "Date (Monday, 2/3/2025)",
    time: "Time (7:30pm to 9:30pm)",
    location: "PC East Ballroom",
    description:
      "Start the new season with exhibition matches and team announcements.",
    image: eventImages[3],
  },
];

// Sample past events
const pastEvents = [
  {
    name: "Fall Championship",
    date: "Date (Monday, 12/9/2024)",
    time: "Time (7:00pm to 10:00pm)",
    location: "PC East Ballroom",
    description:
      "Our biggest tournament of the fall quarter with amazing matches!",
    image: eventImages[3],
  },
  {
    name: "Holiday Party Tournament",
    date: "Date (Friday, 12/13/2024)",
    time: "Time (6:00pm to 9:00pm)",
    location: "Student Center",
    description: "Festive tournament with holiday-themed tracks and costumes.",
    image: eventImages[0],
  },
  {
    name: "Beginner's Workshop",
    date: "Date (Wednesday, 11/20/2024)",
    time: "Time (5:00pm to 7:00pm)",
    location: "CSE Building",
    description: "Introduction to competitive Mario Kart for new members.",
    image: eventImages[1],
  },
  {
    name: "Alumni vs Current",
    date: "Date (Saturday, 11/16/2024)",
    time: "Time (2:00pm to 5:00pm)",
    location: "PC East Ballroom",
    description: "Epic showdown between current team and alumni members!",
    image: eventImages[2],
  },
];

export default function Events() {
  return (
    <div className="min-h-screen bg-black">
      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <Navbar />
      </div>

      {/* Main Content */}
      <main className="events-page">
        <div className="events-page-header">
          <h1 className="page-title">EVENTS</h1>
        </div>

        {/* Image Carousel */}
        <ImageCarousel images={eventImages} />

        {/* Events Sections Container */}
        <div className="events-sections-container">
          {/* Upcoming Events Section */}
          <div className="events-section upcoming-events">
            <div className="events-section-header">
              <h2 className="section-title">UPCOMING EVENTS</h2>
              <EventCardCarousel events={upcomingEvents} />
            </div>
          </div>

          {/* Past Events Section */}
          <div className="events-section past-events">
            <div className="events-section-header">
              <h2 className="section-title">PAST EVENTS</h2>
              <EventCardCarousel events={pastEvents} />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <div className="hidden md:block">
        <Footer />
      </div>

      {/* Mobile Navbar */}
      <div className="block md:hidden">
        <Navbar />
      </div>
    </div>
  );
}
