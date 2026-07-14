import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import NotFound from '@/pages/not-found';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingButtons } from '@/components/layout/FloatingButtons';

import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Features } from '@/components/sections/Features';
import { Menu } from '@/components/sections/Menu';
import { Platters } from '@/components/sections/Platters';
import { Gallery } from '@/components/sections/Gallery';
import { Reviews } from '@/components/sections/Reviews';
import { Reservation } from '@/components/sections/Reservation';
import { Contact } from '@/components/sections/Contact';

const queryClient = new QueryClient();

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground">
      <div className="noise-overlay"></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Menu />
        <Platters />
        <Gallery />
        <Reviews />
        <Reservation />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
