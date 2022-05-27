import Image from 'next/image';
import router from 'next/router';
import style from './Icon.module.scss';

type IconProps = {
  src?: string;
  width: number;
  height?: number;
  quality?: number;
  priority?: boolean;
  onclick?: () => void;
};

const Icon = ({
  src = 'http://localhost:3000/images/assets/Logo_ML.png',
  width = 80,
  height = 100,
  quality = 100,
  priority = true,
  onclick = () => router.push('/'),
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
      />
    </>
  );
};

export default Icon;

{
  /* <img
        src="/images/assets/Logo_ML.png"
        alt="Logo MeLi"
        onClick={() => router.push('/')}
      /> */
}
