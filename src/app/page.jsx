"use client";

export const dynamic = "force-static";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Background from "@/components/Background";
import FirstScreen from "@/components/FirstScreen";
import SecondScreen from "@/components/SecondScreen";
import LyricsScreen from "@/components/LyricsScreen";
import Music from "@/components/Music";
import OutroScreen from "@/components/OutroScreen";
import ImagesScreen from "@/components/ImagesScreen";

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState("first");
  const [musicStarted, setMusicStarted] = useState(false);

  const screens = {
    first: <FirstScreen onNext={() => setCurrentScreen("second")} />,
    second: (
      <SecondScreen
        onNext={() => {
          setMusicStarted(true);
          setCurrentScreen("lyrics");
        }}
      />
    ),
    // after lyrics finish -> go to images page
    lyrics: <LyricsScreen onComplete={() => setCurrentScreen("images")} />,
    // new 3-images page
    images: <ImagesScreen onNext={() => setCurrentScreen("outro")} />,
    // existing final screen
    outro: <OutroScreen />,
  };

  return (
    <div className="flex min-h-screen items-center justify-center relative px-4 py-8 overflow-hidden">
      {/* hide Background only on lyrics, so other screens keep it */}
      {currentScreen === "lyrics" ? null : <Background />}

      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {screens[currentScreen]}
        </motion.div>
      </AnimatePresence>

      {musicStarted && <Music shouldPlay={musicStarted} />}

      {/* Watermark */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-4 right-4 text-sm text-white/30 pointer-events-none z-50 font-light"
      >
        @ArifShaik
      </motion.div>
    </div>
  );
}
