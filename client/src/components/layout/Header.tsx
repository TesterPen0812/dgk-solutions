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

const navItems = [
  { href: "/", label: "Home" },
  {
    label: "Services",
    children: [
      { href: "/services", label: "All Services" },
      { href: "/emergency", label: "Emergency" },
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

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-lg">DGK</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-lg text-foreground">DGK Solutions</span>
              <span className="text-xs text-muted-foreground block -mt-1">Ltd</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-1" data-testid={`nav-${item.label.toLowerCase()}`}>
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.href} asChild>
                        <Link href={child.href} data-testid={`nav-${child.label.toLowerCase().replace(/\s+/g, '-')}`}>
                          {child.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant={location === item.href ? "secondary" : "ghost"}
                    data-testid={`nav-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </Button>
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href="tel:+44XXXXXXXXXX" className="hidden sm:flex">
              <Button className="bg-emergency text-emergency-foreground gap-2" data-testid="button-call-header">
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </a>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border animate-in slide-in-from-top-2">
            <div className="flex flex-col gap-1">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label} className="space-y-1">
                    <span className="block px-4 py-2 text-sm font-medium text-muted-foreground">
                      {item.label}
                    </span>
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href}>
                        <Button
                          variant={location === child.href ? "secondary" : "ghost"}
                          className="w-full justify-start pl-8"
                          onClick={() => setMobileMenuOpen(false)}
                          data-testid={`mobile-nav-${child.label.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {child.label}
                        </Button>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link key={item.href} href={item.href}>
                    <Button
                      variant={location === item.href ? "secondary" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                    >
                      {item.label}
                    </Button>
                  </Link>
                )
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
