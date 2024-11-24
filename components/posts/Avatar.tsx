import Image from "next/image";

type AvatarProps = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: AvatarProps) => {
  return (
    <div className="flex items-center">
      <Image
        src={picture}
        className="w-10 h-10 rounded-full mr-4 object-contain border border-neutral-200"
        alt={name}
        width={300}
        height={300}
      />
      <div className="text-lg font-bold">{name}</div>
    </div>
  );
};

export default Avatar;
