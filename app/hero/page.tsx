"use client";

import { CaretDownIcon } from "@phosphor-icons/react/dist/ssr";
import { motion } from "motion/react";
import { fadeUp, fade, page } from "@/lib/animations";
import { weddingInfo } from "@/lib/contstants";

const Hero = () => {
    const scrollDown = () => {
        document
            .getElementById("countDown")
            ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.section
            variants={page}
            initial="hidden"
            animate="visible"
            className="section"
        >
            <motion.h3
                variants={fadeUp}
                custom={0}
                className="absolute top-10 lg:top-16"
            >
                Together with their families
            </motion.h3>

            <motion.h1 variants={fadeUp} custom={1}>
                {weddingInfo.name1}
                <span className="marked-text">and</span>
                {weddingInfo.name2}
            </motion.h1>

            <motion.h2
                variants={fadeUp}
                custom={2}
                className="absolute bottom-25"
            >
                {weddingInfo.date}
            </motion.h2>

            <motion.button
                variants={fade}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.6 }}
                onClick={scrollDown}
                className="absolute bottom-15 cursor-pointer outline-0 animate-bounce"
                aria-label="Scroll down"
            >
                <CaretDownIcon
                    size={20}
                    weight="light"
                    fill="text-dark-olive"
                />
            </motion.button>
        </motion.section>
    );
};

export default Hero;