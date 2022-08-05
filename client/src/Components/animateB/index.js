import { motion } from 'framer-motion';

const animationsB = {
  initial: { opacity: 0, x: 300},
  animate: { opacity: 1, x: 5},
  exit: { opacity: 0, x: -100 },
}

const AnimatePageB = ({children}) => {
  return (
    <motion.div 
      variants={animationsB} 
      initial='initial'
      animate='animate' 
      exit='exit'
      transition={{ duration: 2 }}
      >
      {children}
    </motion.div>
  )
}

export default AnimatePageB