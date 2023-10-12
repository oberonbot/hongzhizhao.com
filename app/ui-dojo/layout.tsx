interface UIDojoLayoutProps {
  children: React.ReactNode;
}

export default async function UIDojoLayout({ children }: UIDojoLayoutProps) {
  return (
    <div className='flex min-h-screen flex-col'>
      <div className='flex-1 flex flex-col items-center py-12 px-4 sm:px-6 lg:flex-none lg:px-28'>
        {children}
      </div>
    </div>
  );
}
