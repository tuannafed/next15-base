'use client';

import * as React from 'react';

import { Icons } from '@/components';
import { cn } from '@/lib';

export interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          className={cn(
            'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          ref={ref}
          {...props}
        />
        <span
          className={`absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer`}
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <Icons.eye className="w-4 h-4" /> : <Icons.eyeOff className="w-4 h-4" />}
        </span>
      </div>
    );
  },
);

PasswordInput.displayName = 'PasswordInput';
export { PasswordInput };
