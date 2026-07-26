"use client";

import { motion } from "motion/react";
import RSVPForm from "@/components/RSVPForm";
import { weddingInfo } from "@/lib/contstants";
import { fadeUp } from "@/lib/animations";

const RSVP = () => {
    return (
        <motion.section
            className="section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <motion.h3
                variants={fadeUp}
                custom={0}
                className="absolute top-10 lg:top-16"
            >
                Kindly Respond
            </motion.h3>

            <motion.div
                variants={fadeUp}
                custom={1}
            >
                <RSVPForm />
            </motion.div>

            <motion.h2
                variants={fadeUp}
                custom={2}
                className="absolute bottom-6 lg:bottom-10"
            >
                {weddingInfo.name1} & {weddingInfo.name2}
            </motion.h2>
        </motion.section>
    );
};

export default RSVP;