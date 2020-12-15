import { motion } from 'framer-motion'
import Link from 'next/Link'

interface TechnologyProps {
    imgSrc: string
    layoutId: string
}

const Technology: React.FC<TechnologyProps> = ({ imgSrc, layoutId}) => {
  return (
    <div className="flex flex-col items-center">
      <motion.img
        src={imgSrc}
        layoutId={layoutId}
        transition={{ duration: 0.5 }}
      />

      <motion.div
        initial={{ scale: 0,opacity: 0 }}
        animate={{ rotate: 360, scale: 1,opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Link href="/">
          <a className="bg-blue-700 text-white px-6 py-3 text-lg font-semibold rounded-xl hover:bg-blue-900 transition">
            Voltar para a Home
          </a>
        </Link>
      </motion.div>
    </div>
  )
}

export default Technology;