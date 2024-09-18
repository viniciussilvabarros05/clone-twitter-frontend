import { TrendingItem, TrendingItemSkeleton } from "./trending-item";

const TrendingArea = () => {
    return ( <div className="bg-gray-700 rounded-3xl">
        <h2 className="text-xl p-6">O que está acontencendo</h2>
        <div className="flex flex-col gap-4 p-6 pt-0">
            <TrendingItem label="#Item" count={1234}/>
            <TrendingItem label="#Item" count={1234}/>
            <TrendingItemSkeleton/>
        </div>
    </div> );
}
 
export default TrendingArea;