import { motion ,Variants} from 'framer-motion'
import Link from 'next/Link'
import Layout from '../components/Layout'
interface CardProps {
  href: string
  imgSrc: string
  layoutId: string
}

const variants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delayChildren: 1,
      staggerChildren: 0.7
    }
  }
}


const Card: React.FC<CardProps> = ({ href, imgSrc, layoutId }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      variants={variants}
      className="bg-gray-300 hover:bg-gray-100 m-8"
    >
      <Link href={href}>
        <a>
          <motion.img src={imgSrc} layoutId={layoutId} />
        </a>
      </Link>
    </motion.div>
  )
}

export default function Home() {
  return (
    <>
      <p className="text-center text-2xl sm:text-2xl md:text-4xl lg:text-6xl">Feito com</p>
      <div className="w-full grid grid-cols-3 grid-rows-1">
        <Card href="/framermotion" imgSrc="/img/framermotion.svg" layoutId="framermotionimg"/>
        <Card href="/nextjs" imgSrc="/img/nextjs.svg" layoutId="nextjsimg"/>
        <Card href="/tailwind" imgSrc="/img/tailwind.svg" layoutId="tailwindimg"/>
      </div>
      <p className="text-center text-xl sm:text-xl md:text-2xl lg:text-4xl">OBS:tem scroll na Logo</p>
    </>
  )
}
