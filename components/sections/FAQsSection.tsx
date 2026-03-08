'use client';
import React from 'react';
import Accordion from '@/components/ui/Accordion';
import { motion } from 'framer-motion';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const faqData = [
    {
        question: 'What is the objective of the "Hack to the Future" hackathon?',
        answer: 'The hackathon aims to cultivate innovation and collaboration among participants by providing a platform for tackling real-world challenges through coding and creative problem-solving, fostering a supportive environment for learning and networking.',
        icon: 'lucide:goal',
    },
    {
        question: 'Who can participate in "Hack to the Future"?',
        answer: "If you're a student from India with a passion for innovation, you're in! Come join us and turn your ideas into reality.",
        icon: 'ion:people',
    },
    {
        question: 'Team Size',
        answer: '4 members per team , All the team members to be present offline if shortlisted!',
        icon: 'ion:people-outline',
    },
    {
        question: 'What are the judging criteria?',
        answer: 'Wow us with your innovation, functionality, design, and presentation. Impress the judges with your creativity and make your project the star of the show!',
        icon: 'mdi:star-four-points-outline',
    },
    {
        question: 'Can we submit our project in multiple tracks?',
        answer: 'No, you can only choose on track and submit your project',
        icon: 'mdi:help-circle-outline',
    },
    {
        question: 'What technologies and tools can we use for our project?',
        answer: 'Bring your tech toolkit! Use any technology or tools you like, but make sure to pack all the essentials for your coding adventure.',
        icon: 'carbon:code',
    },
    {
        question: 'Where would the final round be held?',
        answer: 'At our campus! IIIT Dharwad, located in the northern part of karnataka',
        icon: 'ion:location-outline',
    },
    {
        question: 'Can participants from different colleges form a team?',
        answer: 'No inter-college teams are allowed. All team members must be from the same college',
        icon: 'mdi:crosshairs-gps',
    },
    {
        question: 'I have a question and it isnt listed above. What do I do?',
        answer: 'Feel free to contact us at hackathon@iiitdwd.ac.in or give a call to 8870040108 for any queries!',
        icon: 'mdi:chat-question-outline',
    },
    {
        question: 'Why should I participate in this hackathon?',
        answer: 'You’ll get a chance to flex your skills, earn a certificate (yes, bragging rights included), score some cool goodies, and connect with industry experts who could open doors to future internships.',
        icon: 'mdi:certificate-outline',
    },
];

export default function FAQsSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    return (
        <section id="faq" className="py-24 bg-black text-white relative overflow-hidden">
            {/* Dot pattern bg */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">

                <AnimateOnScroll className="w-full text-center flex flex-col items-center mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="h-[1px] bg-amber-500 w-12 block" />
                        <span className="text-amber-500 text-xs font-mono uppercase tracking-widest">
                            Questions
                        </span>
                        <span className="h-[1px] bg-amber-500 w-12 block" />
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bricolage font-bold uppercase tracking-tight">
                        FA<span className="text-amber-500">Qs</span>
                    </h2>
                </AnimateOnScroll>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-full max-w-4xl"
                >
                    {faqData.map((item, index) => (
                        <Accordion
                            question={item.question}
                            response={item.answer}
                            icon={item.icon}
                            key={index}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
