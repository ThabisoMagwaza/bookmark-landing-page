import StyledComponentsRegistry from '@/lib/registry';
import GlobalStyles from '@/components/GlobalStyles';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          {children}
          <GlobalStyles />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
