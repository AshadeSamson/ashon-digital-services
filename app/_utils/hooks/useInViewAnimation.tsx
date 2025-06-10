import { useInView } from 'react-intersection-observer';

export const useInViewAnimation = (threshold = 0.2) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
  });

  return { ref, inView };
};
