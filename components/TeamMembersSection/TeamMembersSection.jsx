import React from 'react';
import TeamMemberCard from './TeamMemberCard';
import { teamMembers } from '@/data/teamMembers';
import SectionTitle from '../Common/SectionTitle/SectionTitle';

const TeamMembersSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border border-gray-200 rounded-full opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 border border-yellow-200 rounded-full opacity-20"></div>

      <div className="container mx-auto px-4">

        <SectionTitle subtitle="TEAM MEMBERS" title="Meet Our Talented Team Members" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member?.id}
              name={member?.name}
              title={member?.title}
              image={member?.image}
              socials={member?.socials}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembersSection;