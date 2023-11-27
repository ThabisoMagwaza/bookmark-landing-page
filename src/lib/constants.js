export const COLORS = {
  SoftBlue: 'var(--color-soft-blue)',
  SoftRed: 'var(--color-soft-red)',
  GrayishBlue: 'var(--color-grayish-blue)',
  DarkGrayishBlue: 'var(--color-dark-grayish-blue)',
  VeryDarkBlue: 'var(--color-very-dark-blue)',
  White: 'var(--color-white)',
  Offwhite: 'var(--color-offwhite)',
  Shadow: 'var(--color-shadow)',
  LightBorder: 'var(--color-light-border)',
  TextActive: 'var(--color-text-active)',
};

const BREAKPOINTS = {
  phone: 600,
  tablet: 950,
  laptop: 1300,
};

export const QUERIES = {
  phoneAndLarger: `(min-width: ${BREAKPOINTS.phone / 16}rem)`,
  tableAndLarger: `(min-width: ${BREAKPOINTS.tablet / 16}rem)`,
  laptopAndLarger: `(min-width: ${BREAKPOINTS.laptop / 16}rem)`,
};
