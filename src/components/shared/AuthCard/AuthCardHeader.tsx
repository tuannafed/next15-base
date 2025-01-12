interface IAuthCardHeaderProps {
  title?: string;
  label: string;
}

export const AuthCardHeader = ({ title, label }: IAuthCardHeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <div className="flex items-center justify-center">
        <h1 className="text-3xl font-semibold text-primary pt-2 drop-shadow-md">
          {title || 'Sign In'}
        </h1>
      </div>

      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
