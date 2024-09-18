import { User } from "@/types/user";
import Link from "next/link";
import { useState } from "react";
import Button from "./button";

type Props = {
  user: User;
};
export const RecommendationItem = ({ user }: Props) => {
  const [following, setFollowing] = useState(false);
  function handleFollowButton() {
    setFollowing(true)
  }
  return (
    <div className="flex items-center">
      <div className="size-10 mr-2 rounded-full overflow-hidden">
        <Link href={""}>
          <img src={user.avatar} alt={user.name} className="size-full" />
        </Link>
      </div>
      <div className="flex-1 overflow-hidden">
        <Link href={`/${user.slug}`} className="block truncate">
          {user.name}
        </Link>
        <div className="truncante text-sm text-gray-400">{user.slug}</div>
      </div>
      <div className="pl-2 w-20">
        {!following && <Button label="Seguir" onClick={handleFollowButton} size={3}/>}
      </div>
    </div>
  );
};

export const RecommendationItemSkeleton = ()=>{
    return(
        <div className="flex items-center animate-pulse">
            <div className="size-10 mr-2 rounded-full bg-gray-400"></div>
                <div className="flex-1 flex flex-col gap-1">
                    <div className="bg-gray-600 w-3/4 h-4">
                    </div>
                    <div className="bg-gray-600 w-1/4 h-4"></div>
                </div>
            
        </div>

    )
}
