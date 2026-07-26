"use client";

import { motion } from "motion/react";
import ScheduleItems from "@/components/ScheduleItems";
import { fadeUp } from "@/lib/animations";

const Schedule = () => {
    return (
        <motion.section
            className="section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <motion.div variants={fadeUp}>
                <ScheduleItems />
            </motion.div>
        </motion.section>
    );
};

export default Schedule;