import StyledComponentsRegistry from '@/lib/registry';
import GlobalStyles from '@/components/GlobalStyles';

import { Rubik } from 'next/font/google';

const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <StyledComponentsRegistry>
          {children}
          <GlobalStyles />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
