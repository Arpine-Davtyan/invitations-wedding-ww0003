"use client";

import { motion } from "motion/react";
import CountdownTimer from "@/components/CountDownTimer";
import { fadeUp, page } from "@/lib/animations";

const CountDown = () => {
    return (
        <motion.section
            id="countDown"
            className="section"
            variants={page}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.h3
                variants={fadeUp}
                custom={0}
                className="absolute top-10 lg:top-16"
            >
                Counting Down to Forever
            </motion.h3>

            <motion.div variants={fadeUp} custom={1}>
                <CountdownTimer />
            </motion.div>
        </motion.section>
    );
};

export default CountDown;