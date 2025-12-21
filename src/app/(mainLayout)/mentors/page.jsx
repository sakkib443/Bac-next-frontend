import MentorsSection from "@/components/Mentors/MentorsSection";
import SectionHeading from "@/components/sheard/SectionHeading";
import React from "react";

const MentorsPage = () => {
  return (
    <div>
      <div className="">
        <SectionHeading
          title={"Our Mentors"}
          description={
            "Behind the leading IT skill development platform, masterminds of industry leaders are working. From the management to the expert mentors, highly skilled people are dedicated to your skill advancement."
          }
        ></SectionHeading>
        <MentorsSection/>
      </div>
    </div>
  );
};

export default MentorsPage;
