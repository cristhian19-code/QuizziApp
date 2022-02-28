import { motion } from "framer-motion";

export const LetterAnimate = () => {
    const title = "QuizziApp";

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.6,
                staggerChildren: 0.5
            }
        }
    }

    const item = {
        hidden: { opacity: 0 , y: -100},
        show: { opacity: 1 , y: 0}
    }

    return (
        <motion.h1 
            variants={container}
            initial="hidden"
            animate="show"
            className="text-white text-6xl xl:text-8xl font-bold relative flex">
            {
                title.split("").map((letter, i) => (
                    <motion.p key={i} variants={item}>
                        {letter}
                    </motion.p>
                ))
            }
        </motion.h1>
    )
}
