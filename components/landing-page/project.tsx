import { projectsData } from '@/lib/data';
import Image from 'next/image';

type ProjectProps = (typeof projectsData)[number] & {
  index: number;
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  index,
}: ProjectProps) {
  const isEven = index % 2 === 0;

  return (
    <article className='grid min-h-[420px] overflow-hidden border border-foreground/10 bg-background/25 backdrop-blur-sm lg:grid-cols-2'>
      <div
        className={[
          'relative min-h-[280px] overflow-hidden bg-foreground/[0.03] lg:min-h-full',
          isEven ? 'lg:order-2' : 'lg:order-1',
        ].join(' ')}
      >
        <Image
          src={imageUrl}
          alt={`${title} project preview`}
          quality={95}
          className='h-full w-full scale-[1.03] object-cover grayscale-[8%] contrast-[0.92] saturate-[0.82]'
        />
        <div className='absolute inset-0 bg-[linear-gradient(135deg,transparent,rgba(255,255,255,0.24))] dark:bg-[linear-gradient(135deg,transparent,rgba(0,0,0,0.24))]' />
      </div>

      <div
        className={[
          'flex flex-col justify-between p-6 sm:p-10 lg:p-12',
          isEven ? 'lg:order-1' : 'lg:order-2',
        ].join(' ')}
      >
        <div>
          <p className='font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/45'>
            Study {String(index + 1).padStart(2, '0')}
          </p>
          <h3 className='mt-4 text-[clamp(2rem,5vw,4.5rem)] leading-[0.92] tracking-[-0.075em]'>
            {title}
          </h3>
          <p className='mt-6 max-w-[460px] text-base leading-7 text-foreground/62 sm:text-lg sm:leading-8'>
            {description}
          </p>
        </div>

        <ul className='mt-10 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/45'>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
