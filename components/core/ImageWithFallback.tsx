"use client";
import { useEffect, useState, memo } from "react";
import Image, { ImageProps } from "next/image";

interface ImageWithFallbackProps extends ImageProps {
  fallbackSrc?: string;
  alt: string;
}

const ImageWithFallback = ({
  src,
  fallbackSrc = "/assets/logo.png",
  alt,
  ...rest
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      src={imgSrc}
      onError={() => setImgSrc(fallbackSrc)}
      {...rest}
      alt={alt}
    />
  );
};

export default memo(ImageWithFallback);
