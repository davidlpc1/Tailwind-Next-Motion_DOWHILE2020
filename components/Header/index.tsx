import { motion } from "framer-motion"
import { useRef } from "react";

export default function Header() {
  const constraintsRef = useRef(null)
  
  return (
    <motion.div className="h-20 bg-gray-800" ref={constraintsRef}>
      <motion.div
        drag
        dragConstraints={constraintsRef}
        className="w-20 py-6 px-2 md:w-32 lg:w-36 cursor-grab focus:cursor-grabbing active:cursor-grabbing"
      >
        <img src="/img/logo.svg"className="pointer-events-none select-none w-full" />
      </motion.div>
    </motion.div>
  )
}
