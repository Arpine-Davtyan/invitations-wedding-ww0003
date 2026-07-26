"use client";

import { motion } from "motion/react";
import { CheckCircleIcon } from "@phosphor-icons/react";

import { fadeUp, pop } from "@/lib/animations";

type SuccessProps = {
    attendance: boolean;
};

export default function Success({
    attendance
}: SuccessProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex-col-center mt-4"
        >
            <motion.div
                variants={pop}
                initial="hidden"
                animate="visible"
                className="my-2 flex-center"
            >
                <CheckCircleIcon
                    size={80}
                    weight="duotone"
                    className="text-dark-olive"
                />
            </motion.div>

            <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="uppercase tracking-[2px] text-center text-dark-olive"
            >
                {attendance
                    ? "Thank you for confirming your attendance."
                    : "Thank you for letting us know."}
            </motion.p>
        </motion.div>
    );
}