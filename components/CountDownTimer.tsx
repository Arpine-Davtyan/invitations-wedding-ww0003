"use client";

import { weddingInfo } from "@/lib/contstants";
import { useEffect, useState } from "react";
import Countdown, { zeroPad } from "react-countdown";
import { motion } from "motion/react";
import { fadeUp } from "@/lib/animations";

const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
  if (completed) {
    return (
      <motion.span
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="font-bold"
      >
        Time's up!
      </motion.span>
    );
  }

  return (
    <div className="flex-col-center gap-2 sm:gap-6 mt-12">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
        className="countdown-item"
      >
        <span className="countdown-item-number">{zeroPad(days)}</span>
        <span className="countdown-item-text">Days</span>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
        className="countdown-item"
      >
        <span className="countdown-item-number">{zeroPad(hours)}</span>
        <span className="countdown-item-text">Hours</span>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={2}
        className="countdown-item"
      >
        <span className="countdown-item-number">{zeroPad(minutes)}</span>
        <span className="countdown-item-text">Mins</span>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={3}
        className="countdown-item"
      >
        <span className="countdown-item-number">{zeroPad(seconds)}</span>
        <span className="countdown-item-text">Secs</span>
      </motion.div>
    </div>
  );
};

export default function CountdownTimer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Countdown
      date={new Date(weddingInfo.countdownDate)}
      renderer={renderer}
    />
  );
}