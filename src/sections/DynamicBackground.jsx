import { motion, useScroll, useTransform } from 'framer-motion';

export function DynamicBackground() {
const { scrollYProgress } = useScroll();
  
  // Maps scroll progress (0 to 1) to gradient angle (0deg to 360deg)
  const angle = useTransform(scrollYProgress, [0, 1], [0, 360]);
  
  // Creates a motion value for the background string
  const background = useTransform(
    angle,
    (a) => `linear-gradient(${a}deg, #360033 0%, #0b8793 50%, #360033 100%)`
  );

  return (
    <motion.div
      style={{
        background,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1, // Sits behind all content
      }}
    />
  );
}