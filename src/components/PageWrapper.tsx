import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

const PageWrapper = ({ children, className = "" }: PageWrapperProps) => {
  return (
    <div className={`min-h-screen pt-16 ${className}`}>
      {children}
    </div>
  );
};

export default PageWrapper;
