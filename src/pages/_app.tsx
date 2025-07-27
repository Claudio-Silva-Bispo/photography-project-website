import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import '../globals.css';
        
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      { <Navbar />}
        <main className="flex-1">
          <Component {...pageProps} />
          
        </main>
        {<Footer />}
    </div>
  );
}

export default MyApp;
