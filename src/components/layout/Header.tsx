interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header
      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 flex items-center justify-center"
      style={{ height: '50px' }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-xl font-bold tracking-tight">{title}</h1>
      </div>
    </header>
  );
}
