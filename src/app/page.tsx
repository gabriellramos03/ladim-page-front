'use client';

import { RetroGrid } from "@/components/magicui/retro-grid";
import { MorphingText } from "@/components/magicui/morphing-text";
import { Meteors } from "@/components/magicui/meteors";
import Link from 'next/link';

const text = [
  "Conecte",
  "&",
  "Certifique"
];

export default function Home() {
  return (
    <div className="relative flex h-[960px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      
      <RetroGrid className="absolute inset-0" />

      <div className="absolute inset-0 pointer-events-none z-10">
        <Meteors number={300} />
      </div>

      <Link href="/login" className="relative z-20">
        <MorphingText texts={text} className="mr-[500px]" />
      </Link>

    </div>
  );
}
