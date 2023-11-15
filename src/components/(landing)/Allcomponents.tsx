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
      <WhatIsEach />
      {/* <ItsMoreThenYouThink /> */}

      <ExtraordinaryProfiles />
      <Notes />

      <ExpansionPacks />

      <ControlyourTimeline />
      <GettheContentyouNeed />

      <ChatBoxes />
      <Visions />

      <Videos />
      
      <Points />
      <Rewards />
      <Requests />

      <Inbox />
      {/* <Stickers /> */}


      {/* <Adventures /> */}
      <AlgorithmPower />

      {/* <Data /> */}
      <Performances />

      <Games />
      <AServicePlatform />

      <EachforKids />
      <EachforBusiness />
    </div>
  );
};

export default AllComponents;
