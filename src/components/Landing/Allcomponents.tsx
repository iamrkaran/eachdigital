"use client";
import React from "react";
import WhatisEach from "../sections/WhatisEach";
import Notes from "../sections/Notes";
import ExtraordinaryProfiles from "../sections/ExtraordinaryProfiles";
import ExpansionPacks from "../sections/ExpansionPacks";
import ControlyourTimeline from "../sections/ControlyourTimeline";
import GettheContentyouNeed from "../sections/GettheContentyouNeed";
import ChatBoxes from "../sections/ChatBoxes";
import Visions from "../sections/Visions";
import Videos from "../sections/Videos";
import Points from "../sections/Points";

import Showyourstyle from "../sections/Showyourstyle";
import Stickers from "../sections/Stickers";
import Rewards from "../sections/Rewards";
import Requests from "../sections/Requests";
import Adventures from "../sections/Adventures";
import AlgorithmPower from "../sections/AlgorithmPower";
import Data from "../sections/Data";
import Performances from "../sections/Performances";
import Games from "../sections/Games";
import AServicePlatform from "../sections/AServicePlatform";
import CyberPunks from "../sections/CyberPunks";
import EachforBusiness from "../sections/EachforBusiness";
import EachforKids from "../sections/EachforKids";
import ItsMoreThenYouThink from "../sections/ItsMoreThen";

const AllComponents = () => {
  return (
    <div>
      <WhatisEach />
      <ItsMoreThenYouThink />

      <ExtraordinaryProfiles />
      <Notes />

      <ExpansionPacks />

      <ControlyourTimeline />
      <GettheContentyouNeed />

      <ChatBoxes />
      <Visions />

      <Videos />
      <Points />

      <Showyourstyle />
      <Stickers />

      <Rewards />
      <Requests />

      <Adventures />
      <AlgorithmPower />

      <Data />
      <Performances />

      <Games />
      <AServicePlatform />

      <EachforKids />
      <EachforBusiness />
    </div>
  );
};

export default AllComponents;
