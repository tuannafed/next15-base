import { upperFirst } from 'lodash';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Icons,
  Separator,
} from '@/components';
import { ComponentSection } from '@/modules/app';

const typographyStyles = [
  {
    className: 'heading-1',
    label: 'Heading 1',
    size: 'text-[96px]',
    weight: 'font-light',
    leading: 'leading-[112px]',
  },
  {
    className: 'heading-2',
    label: 'Heading 2',
    size: 'text-[60px]',
    weight: 'font-light',
    leading: 'leading-[72px]',
  },
  {
    className: 'heading-3',
    label: 'Heading 3',
    size: 'text-[48px]',
    weight: 'font-normal',
    leading: 'leading-[56px]',
  },
  {
    className: 'heading-4',
    label: 'Heading 4',
    size: 'text-[34px]',
    weight: 'font-normal',
    leading: 'leading-[42px]',
  },
  {
    className: 'heading-5',
    label: 'Heading 5',
    size: 'text-[24px]',
    weight: 'font-normal',
    leading: 'leading-[32px]',
  },
  {
    className: 'heading-6',
    label: 'Heading 6',
    size: 'text-[20px]',
    weight: 'font-medium',
    leading: 'leading-[32px]',
  },
  {
    className: 'body-1',
    label: 'body-1',
    size: 'text-[14px]',
    weight: 'font-normal',
    leading: 'leading-[24px]',
  },
  {
    className: 'body-2',
    label: 'body-2',
    size: 'text-[14px]',
    weight: 'font-normal',
    leading: 'leading-[21px]',
  },
  {
    className: 'caption',
    label: 'caption',
    size: 'text-[12px]',
    weight: 'font-normal',
    leading: 'leading-[14px]',
  },
  {
    className: 'overline',
    label: 'overline',
    size: 'text-[12px]',
    weight: 'font-normal',
    leading: 'leading-[14px]',
    extra: 'uppercase',
  },
];

const spacingValues = Object.entries({
  '0.5': '0.125rem',
  '1': '0.25rem',
  '1.5': '0.375rem',
  '2': '0.5rem',
  '2.5': '0.625rem',
  '3': '0.75rem',
  '3.5': '0.875rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '7': '1.75rem',
  '8': '2rem',
  '9': '2.25rem',
  '10': '2.5rem',
  '11': '2.75rem',
  '12': '3rem',
  '14': '3.5rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
  '28': '7rem',
  '32': '8rem',
  '36': '9rem',
  '40': '10rem',
  '44': '11rem',
  '48': '12rem',
  '52': '13rem',
  '56': '14rem',
  '60': '15rem',
  '64': '16rem',
  '72': '18rem',
  '80': '20rem',
  '96': '24rem',
})
  .map(([key, value]) => ({ key, value }))
  .sort((a, b) => parseInt(a.key) - parseInt(b.key));

export function DesignSystem() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="heading-5">Design System</CardTitle>
        <CardDescription>Core design elements of our component library</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Colors */}
        <ComponentSection title="Colors">
          <div className="flex flex-col space-y-4">
            {['primary', 'primary-red', 'secondary', 'warning', 'success', 'info', 'error'].map(
              (color) => (
                <div key={color} className="flex items-center space-x-4">
                  <p className="subtitle-1 w-32">{upperFirst(color)}</p>
                  <div className={`w-20 h-20 rounded-md bg-${color}`} />
                </div>
              ),
            )}
          </div>
        </ComponentSection>

        <Separator className="my-8" />

        {/* Typography */}
        <ComponentSection title="Typography">
          <div className="space-y-6">
            {typographyStyles.map(({ className, label, size, weight, leading, extra }) => (
              <div key={className}>
                <p className={className}>{label}</p>
                <p>
                  {size} / {weight} / {leading} {extra ? `/ ${extra}` : ''}
                </p>
              </div>
            ))}
          </div>
        </ComponentSection>

        <Separator className="my-8" />

        {/* Spacing */}
        <ComponentSection title="Spacing">
          <div className="space-y-4">
            {spacingValues.map(({ key, value }) => (
              <div key={key} className="flex items-center">
                <div className={`w-${key} h-${key} bg-slate-500 mr-4`} />
                <p className="text-sm">
                  Space: {key} - {value}
                </p>
              </div>
            ))}
          </div>
        </ComponentSection>

        <Separator className="my-8" />

        {/* Box Shadows */}
        <ComponentSection title="Box Shadows">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['shadow-sm', 'shadow', 'shadow-md', 'shadow-lg', 'shadow-xl', 'shadow-2xl'].map(
              (shadow) => (
                <div key={shadow} className="p-4">
                  <div className={`w-full h-24 rounded-md bg-white ${shadow}`} />
                  <p className="text-sm mt-2">{shadow}</p>
                </div>
              ),
            )}
          </div>
        </ComponentSection>

        <Separator className="my-8" />

        {/* Icons */}
        <ComponentSection title="Icons">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Icons.check className="w-8 h-8 text-green-500 mb-2" />
                <p className="text-sm">Check</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Icons.x className="w-8 h-8 text-red-500 mb-2" />
                <p className="text-sm">X</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Icons.alertTriangle className="w-8 h-8 text-yellow-500 mb-2" />
                <p className="text-sm">Alert Triangle</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Icons.info className="w-8 h-8 text-blue-500 mb-2" />
                <p className="text-sm">Info</p>
              </CardContent>
            </Card>
          </div>
        </ComponentSection>
      </CardContent>
    </Card>
  );
}
