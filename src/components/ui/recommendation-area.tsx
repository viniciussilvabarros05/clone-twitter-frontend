"use client";

import { user } from "@/data/user";
import ShineBorder from "../magicui/shine-border";
import {
  RecommendationItem,
  RecommendationItemSkeleton,
} from "./recommendataion-item";

const RecommendationArea = () => {
  return (
    <div className="bg-gray-700 rounded-3xl">
      <ShineBorder
        className="w-full relative p-0 px-0 m-0 bg-gray-700 rounded-3xl flex flex-1 flex-col text-white items-start justify-start"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        borderRadius={20}
      >
        <h2 className="text-xl p-6">Quem seguir</h2>
        <div className="flex flex-col gap-4 p-6 pt-0 w-full">
          <RecommendationItem user={user} />
          <RecommendationItem user={user} />
          <RecommendationItemSkeleton />
        </div>
      </ShineBorder>
    </div>
  );
};

export default RecommendationArea;
