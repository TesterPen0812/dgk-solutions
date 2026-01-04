import { Header } from "./Header";
import { Footer } from "./Footer";
import { StickyMobileCTA } from "./StickyMobileCTA";
import { PageTransition } from "@/components/animations/PageTransition";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pb-20 sm:pb-0">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
