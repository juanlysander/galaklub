import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface Badge {
  name: string;
  color: string;
}

interface ExploreLinkCardProps {
  src: StaticImageData;
  title: string;
  description: string;
  category: string[] | null;
  badge?: Badge[] | null;
  address: string;
}

const ExploreLinkCard: React.FC<ExploreLinkCardProps> = ({
  src,
  title,
  description,
  category,
  badge,
  address,
}) => {
  return (
    <Link
      href={`/dashboard/verified/${address}`}
      className="w-full h-max hover:bg-black/10 active:bg-white/5 gap-4 mb-5 rounded-2xl flex justify-start items-start transition-all"
    >
      <div className="w-64 h-auto aspect-[4/3] rounded-2xl p-5 border-[1px] border-black/30 grid place-items-center relative overflow-hidden">
        <Image
          alt="Creator Photo"
          src={src}
          placeholder="blur"
          quality={50}
          fill
          sizes="720px"
          style={{
            objectFit: "cover",
            filter: "brightness(100%)",
          }}
        />
      </div>
      <div className="flex flex-col gap-2 mt-3 w-[calc(100%-288px)]">
        <div className="flex justify-between items-center gap-2">
          <h1 className=" text-lg font-semibold">{title}</h1>
          <div className="flex items-center flex-wrap gap-2">
            {category?.map((singleCategory, index) => (
              <div className="bg-gray-200 rounded-2xl text-xs py-1 px-4 " key={index}>
                {singleCategory}
              </div>
            ))}
          </div>
        </div>
        <p className="text-xs">
          {description.length > 200 ? description.slice(0, 210) + " ..." : description}
        </p>
        <p className="text-sm font-semibold">Badges you&apos;ll earn:</p>
        <div className="overflow-hidden w-full overflow-x-scroll">
          <div className="flex w-max items-center gap-2 overflow-hidden">
            {badge?.map((badge: Badge, index) => (
              <div
                key={index}
                className={`px-4 py-1 rounded-2xl text-sm text-black`}
                style={{ backgroundColor: badge.color }}
              >
                {badge.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ExploreLinkCard;
