import { motion } from 'framer-motion';

const withScrollAnimation = (WrappedComponent, amount=0.25) => {
    return function AnimatedComponent(props) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.75 }}
                whileInView={{ opacity: 1, scale: 1.0, transition: { duration: 1.5 } }}
                viewport={{ once: true, amount: amount }}
            >
                <WrappedComponent {...props} />
            </motion.div>
        );
    };
};

export default withScrollAnimation