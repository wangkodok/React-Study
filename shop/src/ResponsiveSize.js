import { useMediaQuery } from "react-responsive";

const Pc = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 1024 });
  return isTablet ? children : null;
};

const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ maxWidth: 1023 });
  return isTablet ? children : null;
};

export { Pc, Tablet };
