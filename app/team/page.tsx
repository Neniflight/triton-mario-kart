import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CollapsibleTeamSection from "@/components/collapsible_team_section";

const ucsd1Members = [
  {
    name: "Flight / Fly",
    college: "Marshall College",
    major: "Data Science",
    minor: "Design",
    year: "'25",
    quarter: "Spring",
    image:
      "/mii/flight_mii.png",
  },
  {
    name: "Walouise",
    college: "Grad School",
    major: "Material Science",
    minor: "Engineering",
    year: "'25",
    quarter: "Spring",
    image:
      "/mii/wal_mii.png",
  },
  {
    name: "Tophatbear",
    college: "Sixth College",
    major: "Data Science",
    year: "'26",
    quarter: "Spring",
    image:
      "/mii/top_mii.png",
  },
  {
    name: "Astra",
    college: "Warren College",
    major: "Data Science",
    year: "'26",
    quarter: "Spring",
    image:
      "/mii/astra_mii.png",
  },
];

const ucsd2Members = [
  {
    name: "IBA",
    college: "Revelle College",
    major: "Physics",
    year: "'25",
    quarter: "Spring",
    image:
      "/mii/iba_mii.png",
  },
];

const alumniMembers = [
  {
    name: "SuperFX",
    college: "Masters",
    major: "Machine Learning",
    minor: "Data Science",
    year: "'24",
    quarter: "Fall",
    image:
      "/mii/super_mii.png",
  },
];

export default function Team() {
  return (
    <div className="min-h-screen bg-black">
      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <Navbar />
      </div>

      {/* Main Content */}
      <main className="team-page py-4">
        <div className="team-page-header">
          <h1 className="page-title">TEAM</h1>
        </div>

        <div className="team-sections-container">
          {/* UCSD 1 Team */}
          <CollapsibleTeamSection
            teamName="UCSD 1"
            logoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/21fecee89c14f60683a00339814eda2d72ed0a86?width=57"
            backgroundClass="ucsd1-background"
            headerClass="gradient-header"
            members={ucsd1Members}
            isOpenByDefault={true}
          />

          {/* UCSD 2 Team */}
          <CollapsibleTeamSection
            teamName="UCSD 2"
            logoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/d1d364efcf367f40cc0b86fe7dd7ad6a23cea7bb?width=57"
            backgroundClass="ucsd2-background"
            headerClass="blue-header"
            members={ucsd2Members}
            isOpenByDefault={false}
          />

          {/* Alumni */}
          <CollapsibleTeamSection
            teamName="Alumni"
            logoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/2cfc02eb9d5530df908ad857bdc556f4d1075be9?width=57"
            backgroundClass="alumni-background"
            headerClass="white-header"
            members={alumniMembers}
            isOpenByDefault={false}
          />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Navbar */}
      <div className="block md:hidden">
        <Navbar />
      </div>
    </div>
  );
}
