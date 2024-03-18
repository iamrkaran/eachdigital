"use client";

import React from "react";

// Importing components from sections
import WhatIsEach from "./sections/WhatisEach";
import AServicePlatform from "./sections/AServicePlatform";
import Adventures from "./sections/Adventures";
import AlgorithmPower from "./sections/AlgorithmPower";
import ChatBoxes from "./sections/ChatBoxes";
import ControlyourTimeline from "./sections/ControlyourTimeline";
import Data from "./sections/Data";
import EachforBusiness from "./sections/EachforBusiness";
import EachforKids from "./sections/EachforKids";
import ExpansionPacks from "./sections/ExpansionPacks";
import ExtraordinaryProfiles from "./sections/ExtraordinaryProfiles";
import Games from "./sections/Games";
import GettheContentyouNeed from "./sections/GettheContentyouNeed";
import ItsMoreThenYouThink from "./sections/ItsMoreThen";
import Notes from "./sections/Notes";
import Performances from "./sections/Performances";
import Points from "./sections/Points";
import Requests from "./sections/Requests";
import Rewards from "./sections/Rewards";
import Stickers from "./sections/Stickers";
import Videos from "./sections/Videos";
import Visions from "./sections/Visions";
import Inbox from "./sections/Inbox";

const AllComponents = () => {
  return (
    <div>
      {/* <WhatIsEach /> */}
      {/* <ItsMoreThenYouThink /> */}

      <ExtraordinaryProfiles />
      <Notes />

      <ControlyourTimeline />

      <div className="bg-[#f3f5fa] flex flex-col md:flex-row p-2 md:p-20 gap-4 py-8">
        <GettheContentyouNeed />
        <ExpansionPacks />
      </div>

      <ChatBoxes />
      <Visions />

      <div className="px-4 py-12 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <Points />
        <Rewards />
        <Requests />
      </div>

      <div className="flex bg-[#f3f5fa] md:flex-row flex-col p-2 md:px-20 md:py-16 py-8 gap-4 justify-around">
        <Inbox />
        <Performances />
        <AlgorithmPower />
      </div>
      {/* <Stickers /> */}
      {/* <Adventures /> */}
      {/* <Data /> */}

      <Games />

      <AServicePlatform />

      <div className="flex bg-[#f3f5fa] md:flex-row flex-col p-2 md:px-20 md:py-16 py-8 gap-4 justify-around">
        <EachforKids />
        <EachforBusiness />
      </div>
    </div>
  );
};

export default AllComponents;
