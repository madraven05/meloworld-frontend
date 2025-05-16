// app/layout.tsx
import '../styles/globals.css';      // your global styles
import Navbar from '@/components/ui/navbar';
import { ToastProvider } from '@/components/hooks/use-toast';

export const metadata = {
  title: 'Meloworld',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ToastProvider>
          <Navbar />
          <main>{children}</main>
        </ToastProvider>
      </body>
    </html>
  );
}
