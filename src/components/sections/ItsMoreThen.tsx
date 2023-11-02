import React from "react";
import FeatureCard from "./FeatureCard";

const ItsMoreThenYouThink = () => {
  return (
    <section className="bg-primary-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold mb-8">
          Its More then You Think
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <FeatureCard
            icon="📷"
            title="Image Sharing"
            description="Share and view photos with your friends."
          />
          <FeatureCard
            icon="✉️"
            title="Messaging"
            description="Private and group messaging for easy communication."
          />
          <FeatureCard
            icon="👍"
            title="Likes and Comments"
            description="Engage with posts through likes and comments."
          />
          <FeatureCard
            icon="🔍"
            title="Search and Discover"
            description="Find new friends and content that interests you."
          />
          <FeatureCard
            icon="🛡️"
            title="Privacy Control"
            description="Customize your privacy settings for a secure experience."
          />
          <FeatureCard
            icon="🔒"
            title="Content Moderation"
            description="Ensuring a safe environment for all users."
          />
        </div>
      </div>
    </section>
  );
};

export default ItsMoreThenYouThink;
