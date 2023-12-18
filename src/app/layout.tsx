import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Providers from '@/providers';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Frontend Quiz App',
  description:
    'Test your frontend knowledge with html, css, javascript, and accessibility quizzes! ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${rubik.className} text-primary bg-[#F4F6FA] dark:bg-primary-dark dark:text-white min-h-screen`}
      >
        <Providers>
          <div className="bg-mobile-pattern md:bg-tablet-pattern lg:bg-desktop-pattern dark:bg-mobile-pattern-dark dark:md:bg-tablet-pattern-dark dark:lg:bg-desktop-pattern-dark bg-no-repeat min-h-screen">
            <Header />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
