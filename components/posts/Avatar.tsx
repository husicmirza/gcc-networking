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
        className="w-12 h-12 rounded-full mr-4 object-contain border border-neutral-200"
        alt={name}
        width={300}
        height={300}
      />
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
};

export default Avatar;
