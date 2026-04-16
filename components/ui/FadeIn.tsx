"use client"

import { motion } from "motion/react"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
    delay?: number
    className?: string
}

export default function FadeIn({ children, delay=0, className = ""}:Props) {
    return(
        <motion.div
            className="className"
            initial={{ opacity:0, y:24 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay }}
        >
            {children}
        </motion.div>
    )
}