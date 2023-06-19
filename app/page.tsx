import Image from 'next/image';
import { Header } from '@/components/header/Header';
import { HelpSection } from '@/components/helpSection/HelpSection';
import { FightingSection } from '@/components/fightingSection/FightingSection';
import { EveryoneSection } from '@/components/everyoneSection/EveryoneSection';
import { OftenWorkSection } from '@/components/oftenWorkSection/OftenWorkSection';
import { DesignSection } from '@/components/designSection/DesignSection';
import { NextSection } from '@/components/nextSection/NextSection';
import { TalkSection } from '@/components/talkSection/TalkSection';

export default function Home() {
  return (
    <div className="container">
      <Header />
      <main>
        <HelpSection />
        <FightingSection />
        <EveryoneSection />
        <OftenWorkSection />
        <DesignSection />
        <NextSection />
        <TalkSection />
      </main>
    </div>
  );
}
