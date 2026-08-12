"use client";

import Image from "next/image";

export default function FlickerPortrait({ src, alt, priority = false }) {
  return (
    <div className="relative w-full h-full">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-contain"
        sizes="(max-width: 1024px) 0px, 900px"
      />
    </div>
  );
}