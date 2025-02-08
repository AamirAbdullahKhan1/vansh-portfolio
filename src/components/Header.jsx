import { motion } from "framer-motion"
import { Link, NavLink } from "react-router-dom"

const Header = () => {
  return (
    <motion.header
      className="bg-gray-800 py-4 relative overflow-hidden"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 z-0">
        <motion.div
          className="w-full h-full bg-purple-500 opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>
      <nav className="container mx-auto px-4 flex justify-between items-center relative z-10">
        <NavLink to={'/'} className="text-2xl font-bold text-purple-500">
            <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                GameDev
            </motion.span>
        </NavLink>
        <ul className="flex space-x-6">
          {["Projects", "Code", "About", "Contact"].map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
            >
              <Link href={`#${item.toLowerCase()}`} className="hover:text-purple-500 transition-colors">
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}

export default Header

