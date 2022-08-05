import { motion } from 'framer-motion';

const animations = {
  initial: { opacity: 0, x: 300},
  animate: { opacity: 1, x: 5 },
  exit: { opacity: 0, x: -100 },
}

const AnimatePage = ({children}) => {
  return (
    <motion.div 
      variants={animations} 
      initial='initial'
      animate='animate' 
      exit='exit'
      transition={{ duration: 2 }}
      >
      {children}
    </motion.div>
  )
}

export default AnimatePage