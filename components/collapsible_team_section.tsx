"use client";

import { useState } from "react";
import Image from "next/image";
import TeamCard from "./team_card";

interface TeamMember {
  name: string;
  college: string;
  major: string;
  minor?: string;
  year: string;
  quarter: string;
  image: string;
}

interface CollapsibleTeamSectionProps {
  teamName: string;
  logoSrc: string;
  backgroundClass: string;
  headerClass: string;
  members: TeamMember[];
  isOpenByDefault?: boolean;
}

export default function CollapsibleTeamSection({
  teamName,
  logoSrc,
  backgroundClass,
  headerClass,
  members,
  isOpenByDefault = false,
}: CollapsibleTeamSectionProps) {
  const [isOpen, setIsOpen] = useState(isOpenByDefault);

  return (
    <div className={`team-section ${backgroundClass}`}>
      <button
        className={`team-header ${headerClass}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="header-content">
          <div className="header-logo">
            <Image src={logoSrc} alt="Team logo" width={28} height={38} />
          </div>
          <h2 className="team-name">{teamName}</h2>
          <svg
            className={`dropdown-arrow ${isOpen ? "arrow-up" : "arrow-down"}`}
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
          >
            <path
              d={
                "M25.0164 15.8334C25.2539 15.8334 25.445 15.9125 25.5896 16.0709C25.7342 16.2292 25.807 16.4139 25.8081 16.625C25.8081 16.6778 25.7289 16.8625 25.5706 17.1792L19.831 22.9188C19.6991 23.0507 19.5671 23.1431 19.4352 23.1959C19.3032 23.2486 19.1581 23.275 18.9998 23.275C18.8414 23.275 18.6963 23.2486 18.5644 23.1959C18.4324 23.1431 18.3005 23.0507 18.1685 22.9188L12.4289 17.1792C12.3498 17.1 12.2901 17.014 12.25 16.9211C12.2099 16.8282 12.1904 16.7295 12.1914 16.625C12.1914 16.4139 12.2637 16.2292 12.4084 16.0709C12.553 15.9125 12.7445 15.8334 12.9831 15.8334H25.0164Z"
              }
              fill={headerClass.includes("white") ? "#000" : "#FFF"}
            />
          </svg>
        </div>
      </button>

      {isOpen && (
        <div className="team-members-grid">
          {members.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              college={member.college}
              major={member.major}
              minor={member.minor}
              year={member.year}
              quarter={member.quarter}
              image={member.image}
            />
          ))}
        </div>
      )}
    </div>
  );
}
