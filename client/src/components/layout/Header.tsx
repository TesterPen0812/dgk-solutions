import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { CallButton } from "@/components/CallButton";
import { useTheme } from "@/components/ThemeProvider";

const navItems = [
  { href: "/", label: "Home" },
  {
    label: "Services",
    children: [
      { href: "/services", label: "All Services" },
      { href: "/emergency", label: "Emergency" },
      { href: "/plumbing-repairs", label: "Plumbing Repairs" },
      { href: "/drainage", label: "Drainage" },
      { href: "/drain-repairs", label: "Drain Repairs" },
      { href: "/tanker-waste", label: "Tanker & Waste" },
    ],
  },
  { href: "/sectors-served", label: "Sectors" },
  { href: "/areas-covered", label: "Areas" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { theme } = useTheme();

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b-[1.32px] border-border relative overflow-visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[9.2]">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-[6.325rem] gap-2 sm:gap-3 lg:gap-[3.45] py-2 sm:py-3 lg:py-[0.575]">
          <Link href="/" className="flex items-center leading-none relative z-10 pl-2 sm:pl-0">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="flex items-center"
            >
              <img 
                src={theme === "dark" ? "/DGK_white.png" : "/DGK.png"} 
                alt="DGK Solutions"
                className="h-16 sm:h-20 lg:h-[88px] max-h-[123px] sm:max-h-[144px] w-auto sm:w-48 lg:w-[229px] object-contain block"
              />
            </motion.div>
          </Link>

          <nav className="hidden lg:flex items-center gap-[2.16rem]">
            {navItems.map((item, index) =>
              item.children ? (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
                >
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="flex items-center gap-[0.92] min-h-[8.28] px-[0.95rem] py-[0.4752rem] text-[0.7648rem] shadow-[0_2px_4px_rgba(0,0,0,0.1),0_4px_8px_rgba(0,0,0,0.08),0_8px_16px_rgba(0,0,0,0.04)] active:translate-y-[1px] active:shadow-[0_1px_2px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.08)]" data-testid={`nav-${item.label.toLowerCase()}`}>
                        {item.label}
                        <ChevronDown className="w-[3.68] h-[3.68]" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="[&_a]:text-[1.00625rem] [&_span]:text-[1.00625rem] [&_svg]:w-[4.6] [&_svg]:h-[4.6]">
                      {item.children.map((child) => (
                        <DropdownMenuItem key={child.href} asChild>
                          <Link href={child.href} data-testid={`nav-${child.label.toLowerCase().replace(/\s+/g, '-')}`}>
                            {child.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </motion.div>
              ) : (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
                >
                  <Link href={item.href}>
                    <Button
                      variant={location === item.href ? "secondary" : "ghost"}
                      className="min-h-[8.28] px-[0.95rem] py-[0.4752rem] text-[0.7648rem] shadow-[0_2px_4px_rgba(0,0,0,0.1),0_4px_8px_rgba(0,0,0,0.08),0_8px_16px_rgba(0,0,0,0.04)] active:translate-y-[1px] active:shadow-[0_1px_2px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.08)]"
                      data-testid={`nav-${item.label.toLowerCase()}`}
                    >
                      {item.label}
                    </Button>
                  </Link>
                </motion.div>
              )
            )}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 lg:gap-[2.3]">
            <div className="[&_button]:h-8 [&_button]:w-8 sm:[&_button]:h-9 sm:[&_button]:w-9 lg:[&_button]:h-[10.35] lg:[&_button]:w-[10.35] [&_svg]:w-4 [&_svg]:h-4 sm:[&_svg]:w-5 sm:[&_svg]:h-5 lg:[&_svg]:w-[5.75] lg:[&_svg]:h-[5.75]">
              <ThemeToggle />
            </div>
            <div className="hidden sm:block [&_button]:min-h-8 [&_button]:px-3 [&_button]:py-1.5 [&_button]:text-sm [&_button]:shadow-none [&_button]:translate-y-0 [&_button]:hover:translate-y-0 [&_button]:active:translate-y-0 lg:[&_button]:min-h-[10.35] lg:[&_button]:px-[4.6] lg:[&_button]:py-[2.3] lg:[&_button]:text-[1.00625rem] lg:[&_button]:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_4px_8px_rgba(0,0,0,0.08),0_8px_16px_rgba(0,0,0,0.04)] lg:[&_button]:-translate-y-1 lg:[&_button]:hover:-translate-y-[2px] lg:[&_button]:active:translate-y-0 [&_svg]:w-3.5 [&_svg]:h-3.5 lg:[&_svg]:w-[4.6] lg:[&_svg]:h-[4.6]">
              <CallButton size="sm" enhanced />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden h-8 w-8 sm:h-9 sm:w-9 shadow-none active:shadow-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden py-3 sm:py-4 border-t border-border overflow-hidden"
            >
              <div className="flex flex-col gap-1 sm:gap-1.5">
                {navItems.map((item, index) =>
                  item.children ? (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      className="space-y-1 sm:space-y-1.5"
                    >
                      <span className="block px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base font-medium text-muted-foreground">
                        {item.label}
                      </span>
                      {item.children.map((child, childIndex) => (
                        <motion.div
                          key={child.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (index * 0.05) + (childIndex * 0.03) + 0.1, duration: 0.3 }}
                        >
                          <Link href={child.href}>
                            <Button
                              variant={location === child.href ? "secondary" : "ghost"}
                              className="w-full justify-start pl-6 sm:pl-8 min-h-9 sm:min-h-10 px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base shadow-none active:shadow-none"
                              onClick={() => setMobileMenuOpen(false)}
                              data-testid={`mobile-nav-${child.label.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              {child.label}
                            </Button>
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                    >
                      <Link href={item.href}>
                        <Button
                          variant={location === item.href ? "secondary" : "ghost"}
                          className="w-full justify-start min-h-9 sm:min-h-10 px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base shadow-none active:shadow-none"
                          onClick={() => setMobileMenuOpen(false)}
                          data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                        >
                          {item.label}
                        </Button>
                      </Link>
                    </motion.div>
                  )
                )}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
