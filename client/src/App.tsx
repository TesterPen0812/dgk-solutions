import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Layout } from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Emergency from "@/pages/Emergency";
import Drainage from "@/pages/Drainage";
import DrainRepairs from "@/pages/DrainRepairs";
import TankerWaste from "@/pages/TankerWaste";
import SectorsServed from "@/pages/SectorsServed";
import AreasCovered from "@/pages/AreasCovered";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/emergency" component={Emergency} />
        <Route path="/drainage" component={Drainage} />
        <Route path="/drain-repairs" component={DrainRepairs} />
        <Route path="/tanker-waste" component={TankerWaste} />
        <Route path="/sectors-served" component={SectorsServed} />
        <Route path="/areas-covered" component={AreasCovered} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
