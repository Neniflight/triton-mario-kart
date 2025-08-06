import Image from "next/image";

interface TeamCardProps {
  name: string;
  college: string;
  major: string;
  minor?: string;
  year: string;
  quarter: string;
  image: string;
}

export default function TeamCard({
  name,
  college,
  major,
  minor,
  year,
  quarter,
  image,
}: TeamCardProps) {
  return (
    <div className="team-card">
      <div className="card-image-container">
        <Image
          src={image}
          alt={`${name} profile`}
          width={212}
          height={205}
          className="card-image"
        />
      </div>
      <div className="card-content">
        <div className="card-info">
          <h3 className="member-name">{name}</h3>
          <p className="member-college">{college}</p>
          <p className="member-major">{major}</p>
          {minor && <p className="member-minor">{minor}</p>}
        </div>
        <div className="card-year-info">
          <span className="member-quarter">{quarter}</span>
          <span className="member-year">{year}</span>
        </div>
      </div>
    </div>
  );
}
