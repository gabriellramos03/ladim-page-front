"use client";

import type { Metadata } from 'next'
import { useTheme } from "next-themes";
import { MagicCard } from "@/components/magicui/magic-card";



export const metadata: Metadata = {
 title: 'Nome da página',
 description: 'Descrição da página'
}

export function CursoCardDemo() {
    const { theme } = useTheme();
    return (
      <div
        className={
          "flex h-[500px] w-full flex-col gap-4 lg:h-[350px] lg:flex-row"
        }
      >
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          Curso
        </MagicCard>
      </div>
    );
  }