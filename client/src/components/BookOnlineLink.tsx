import { Link, useLocation } from "wouter";
import { ReactNode } from "react";

interface BookOnlineLinkProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function BookOnlineLink({ children, className, onClick }: BookOnlineLinkProps) {
  const [location] = useLocation();
  const isContactPage = location === "/contact";

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick();
    }

    if (isContactPage) {
      e.preventDefault();
      const bookSection = document.getElementById("book");
      if (bookSection) {
        bookSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    // If not on contact page, Link will handle navigation
  };

  return (
    <Link href="/contact#book" className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}

