import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ImageCarousel from "@/components/image_carousel";
import EventCardCarousel from "@/components/event_card_carousel";

// Event images from your uploads
const eventImages = [
  "https://cdn.builder.io/api/v1/image/assets%2F623f7a24a62e46689241a5fa06b42cb4%2F8f8cb2dd662e4f6f8e9d643e15e27a1d?format=webp&width=800",
  "https://cdn.builder.io/api/v1/image/assets%2F623f7a24a62e46689241a5fa06b42cb4%2Fad8a3d378b8541008b85d42ff19f288b?format=webp&width=800",
  "https://cdn.builder.io/api/v1/image/assets%2F623f7a24a62e46689241a5fa06b42cb4%2F4f0ecc66c9734a7e8acbf9ca40747aff?format=webp&width=800",
  "https://cdn.builder.io/api/v1/image/assets%2F623f7a24a62e46689241a5fa06b42cb4%2F8b1e2cda287e433da02bcdd5cb0a11db?format=webp&width=800",
  "https://cdn.builder.io/o/assets%2F623f7a24a62e46689241a5fa06b42cb4%2F83920ccc151e4bc7b05f7057be312bfe?alt=media&token=1e665924-7192-4542-a05f-d48ec70fdd02&apiKey=623f7a24a62e46689241a5fa06b42cb4",
];

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
    image: eventImages[4],
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
