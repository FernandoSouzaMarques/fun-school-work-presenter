import { FC } from "react";

interface IAvatarProps {
  source;
}

export const Avatar: FC<IAvatarProps> = ({ source }): JSX.Element => {
  return (
    <div className="border-4 border-transparent rounded-md overflow-hidden hover:border-white transition-colors">
      <picture className="w-48 h-48 rounded-md overflow-hidden block">
        <img className="object-cover h-full object-center" src={source} alt="Image avatar" />
      </picture>
    </div>
  );
};
