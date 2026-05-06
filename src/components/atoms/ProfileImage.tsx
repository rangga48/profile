import Image from "next/image";

interface ProfileImageProps {
  src: string;
  alt?: string;
  /** Shadow box position: "right" (hero) or "left" (about) */
  shadowSide?: "right" | "left";
  width?: number;
  height?: number;
}

const ProfileImage = ({
  src,
  alt = "Profile",
  shadowSide = "right",
  width = 240,
  height = 240,
}: ProfileImageProps) => {
  const shadowClass =
    shadowSide === "right"
      ? "w-[240px] h-[240px] lg:w-60 lg:h-60 bg-gray-400 absolute lg:left-8 lg:top-8 top-[1.4rem] left-[-25px] transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"
      : "w-[100%] h-[100%] bg-gray-400 absolute top-7 right-7 transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2";

  const containerClass =
    shadowSide === "right"
      ? "w-60 h-60 relative overflow-hidden z-10 rounded-sm"
      : "w-[100%] h-[100%] relative overflow-hidden z-10 rounded-sm";

  return (
    <div className="relative group">
      <div className={shadowClass} />
      <div className={containerClass}>
        <Image
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
          src={src}
          alt={alt}
          width={width}
          height={height}
          quality={100}
        />
      </div>
    </div>
  );
};

export default ProfileImage;
