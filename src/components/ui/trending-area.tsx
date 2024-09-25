import ShineBorder from "../magicui/shine-border";
import { TrendingItem, TrendingItemSkeleton } from "./trending-item";

const TrendingArea = () => {
  return (
    <ShineBorder
      className="w-full relative p-0 px-0 m-0 bg-gray-700 rounded-3xl flex flex-1 flex-col text-white items-start justify-start"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      borderRadius={20}
    >
      <h2 className="text-xl p-6">O que está acontencendo</h2>
      <div className="flex flex-col gap-4 p-6 pt-0 w-full">
        <TrendingItem label="#Item" count={1234} />
        <TrendingItem label="#Item" count={1234} />
        <TrendingItemSkeleton />
      </div>
    </ShineBorder>
  );
};

export default TrendingArea;
