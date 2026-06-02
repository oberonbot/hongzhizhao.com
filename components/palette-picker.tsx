'use client';

import { Icons } from '@/components/icons';
import { usePalette } from '@/context/palette-context';
import { cn } from '@/lib/utils';

export default function PalettePicker() {
  const {
    backgroundPalettes,
    gradientPaletteId,
    setGradientPaletteId,
  } = usePalette();

  return (
    <div
      aria-label='Background palette'
      className='flex items-center gap-1 rounded-full border border-foreground/10 bg-background/25 p-1 shadow-sm shadow-foreground/[0.03] backdrop-blur-md'
      role='radiogroup'
    >
      {backgroundPalettes.map((palette) => {
        const isSelected = palette.id === gradientPaletteId;

        return (
          <button
            aria-checked={isSelected}
            aria-label={`${palette.label} background`}
            className={cn(
              'relative grid h-7 w-7 place-items-center overflow-hidden rounded-full border bg-transparent transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
              isSelected
                ? 'border-foreground/70 shadow-[0_0_0_2px_hsl(var(--background)/0.78)]'
                : 'border-white/50 opacity-80 hover:scale-105 hover:opacity-100'
            )}
            key={palette.id}
            onClick={() => setGradientPaletteId(palette.id)}
            role='radio'
            type='button'
          >
            <span
              aria-hidden='true'
              className='absolute inset-0 rounded-full'
              style={{
                background: `linear-gradient(135deg, ${palette.swatch[0]} 0 50%, ${palette.swatch[1]} 50% 100%)`,
              }}
            />
            {isSelected ? (
              <span className='relative grid h-4 w-4 place-items-center rounded-full bg-background/75 text-foreground shadow-sm backdrop-blur-sm'>
                <Icons.check aria-hidden='true' className='h-3 w-3 stroke-[3]' />
              </span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
