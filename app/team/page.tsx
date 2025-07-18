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
      "https://cdn.builder.io/api/v1/image/assets%2F623f7a24a62e46689241a5fa06b42cb4%2Fb54b20b6d2fa47d08644bce6e109d127?format=webp&width=800",
  },
  {
    name: "Walouise",
    college: "Grad School",
    major: "Material Science",
    minor: "Engineering",
    year: "'25",
    quarter: "Spring",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F623f7a24a62e46689241a5fa06b42cb4%2Ffa4a81ced0a548428aee26ecf4e6ad3f?format=webp&width=800",
  },
  {
    name: "Tophatbear",
    college: "Sixth College",
    major: "Data Science",
    year: "'26",
    quarter: "Spring",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F623f7a24a62e46689241a5fa06b42cb4%2F5367697d35e94ac3b64456df7f66efaa?format=webp&width=800",
  },
  {
    name: "Astra",
    college: "Warren College",
    major: "Data Science",
    year: "'26",
    quarter: "Spring",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F623f7a24a62e46689241a5fa06b42cb4%2F6ede4c3a217641d885050ee75041156c?format=webp&width=800",
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
      "https://cdn.builder.io/api/v1/image/assets%2F623f7a24a62e46689241a5fa06b42cb4%2F2abcb56b93fa44f4acd74942c5250a26?format=webp&width=800",
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
      "https://cdn.builder.io/o/assets%2F623f7a24a62e46689241a5fa06b42cb4%2F964d1a6af07e4899a34e3d74299238f1?alt=media&token=4b1e50c8-5d59-4d6a-aa4c-8cf6be0eed28&apiKey=623f7a24a62e46689241a5fa06b42cb4",
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
      <main className="team-page">
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
