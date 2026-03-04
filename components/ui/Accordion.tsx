'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function Accordion({
    question,
    response,
    icon,
}: {
    question: string;
    response: string;
    icon?: string;
}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <motion.div variants={itemVariants} className="relative mb-4">
            <h6 className="mb-0">
                <button
                    className="rounded-t-lg group relative flex w-full cursor-pointer items-center p-4 pr-12 text-left font-semibold text-slate-100 transition-all duration-300 ease-in border border-white/10 bg-white/5 hover:bg-white/10 data-[open=true]:bg-white/10"
                    onClick={toggleAccordion}
                    data-open={isOpen}
                >
                    {icon && (
                        <span className="mr-4 rounded-md border border-white/20 p-2.5 text-xl text-emerald-400 bg-black/40 shadow-inner">
                            <Icon icon={icon} />
                        </span>
                    )}
                    <span className="text-lg md:text-xl font-medium tracking-wide">{question}</span>
                    <i
                        className={`absolute right-5 text-2xl transition-transform duration-500 text-amber-500 ${isOpen ? 'rotate-180' : ''
                            }`}
                    >
                        <Icon icon="mdi:chevron-down" />
                    </i>
                </button>
            </h6>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="p-5 md:px-8 text-base leading-relaxed text-slate-300 border-x border-b border-white/10 bg-black/40 rounded-b-lg -mt-1 pt-6 backdrop-blur-sm">
                            {response}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
