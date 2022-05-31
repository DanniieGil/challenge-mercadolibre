import Image from 'next/image';
import style from './Icon.module.scss';

type IconProps = {
  src?: string;
  width?: number;
  height?: number;
  quality?: number;
  priority?: boolean;
  altImage?: string;
  onclick?: () => void;
};

const Icon = ({
  src = '/images/assets/Logo_ML@2x.png',
  width = 65,
  height = 100,
  quality = 100,
  priority = true,
  altImage = 'Foto de Mercado Libre',
  onclick,
}: IconProps) => {
  return (
    <>
      <Image
        className={style.Icon}
        src={src}
        width={width}
        height={height}
        quality={quality}
        priority={priority}
        onClick={onclick}
        alt={altImage}
      />
    </>
  );
};

export default Icon;
