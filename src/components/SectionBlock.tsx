type Props = {
  customId: string;
  children: React.ReactNode;
  customClasses?: string;
  bg?: 'white' | 'gray' | 'yellow' | 'transparent';
  container?: boolean;
  padding?: 'default' | 'sm' | 'lg' | 'none';
};

export default function SectionBlock({
  customId,
  children,
  customClasses = '',
  bg = 'white',
  container = true,
  padding = 'default',
}: Props) {
  const bgMap = {
    white: 'bg-white',
    gray: 'bg-gray-100',
    yellow: 'bg-yellow-50',
    transparent: 'bg-transparent',
  };

  const paddingMap = {
    default: 'px-4 py-16 md:py-24',
    sm: 'px-4 py-8 md:py-12',
    lg: 'px-4 py-24 md:py-32',
    none: 'p-0',
  };

  const classes = `
    w-full 
    ${bgMap[bg]} 
    ${paddingMap[padding]} 
    ${customClasses}
  `.trim();

  return (
    <section id={customId} className={classes}>
      <div className={container ? 'max-w-6xl mx-auto' : ''}>{children}</div>
    </section>
  );
}
