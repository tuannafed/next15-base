interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return <div className="relative h-screen flex-col items-center justify-center">{children}</div>;
}
