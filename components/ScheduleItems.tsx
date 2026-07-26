"use client";

import { motion } from "motion/react";
import { scheduleItems } from "@/lib/contstants";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { MapPinIcon } from "@phosphor-icons/react";

const ScheduleItems = () => {
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex-col-center gap-20"
        >
            {scheduleItems.map((item, index) => (
                <motion.div
                    variants={fadeUp}
                    key={index}
                    className="schedule-item"
                >
                    <h3 className="text-dark-olive">{item.title}</h3>

                    <p className="text-dark-olive text-2xl">
                        {item.time}
                    </p>

                    <h2>{item.location}</h2>

                    <motion.a
                        variants={fadeUp}
                        href={item.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-map"
                    >
                        <MapPinIcon size={20} weight="light" />
                        Open in Maps
                    </motion.a>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default ScheduleItems;