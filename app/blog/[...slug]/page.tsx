import { notFound } from 'next/navigation';
import { allAuthors, allPosts } from '@/.contentlayer/generated';

import { Mdx } from '@/components/mdx-components';

import '@/styles/mdx.css';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

// import { env } from '@/env.mjs';
import { cn, formatDate } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { getTableOfContents } from '@/lib/toc';
import { DashboardTableOfContents } from '@/components/toc';

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: any) {
  const slug = params?.slug?.join('/');
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    notFound();
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  // const url = env.NEXT_PUBLIC_APP_URL;

  // const ogUrl = new URL(`${url}/api/og`);
  // ogUrl.searchParams.set('heading', post.title);
  // ogUrl.searchParams.set('type', 'Blog Post');
  // ogUrl.searchParams.set('mode', 'dark');

  return {
    title: post.title,
    description: post.description,
    authors: post.authors.map((author) => ({
      name: author,
    })),
    // openGraph: {
    //   title: post.title,
    //   description: post.description,
    //   type: 'article',
    //   // url: absoluteUrl(post.slug),
    //   // images: [
    //   //   {
    //   //     url: ogUrl.toString(),
    //   //     width: 1200,
    //   //     height: 630,
    //   //     alt: post.title,
    //   //   },
    //   // ],
    // },
    // twitter: {
    //   card: 'summary_large_image',
    //   title: post.title,
    //   description: post.description,
    //   // images: [ogUrl.toString()],
    // },
  };
}

export async function generateStaticParams(): Promise<
  PostPageProps['params'][]
> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split('/'),
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  const authors = post.authors.map((author) =>
    allAuthors.find(({ slug }) => slug === `/authors/${author}`)
  );

  const toc = await getTableOfContents(post.body.raw);

  return (
    <div className='flex w-full md:w-2/3 2xl:w-1/2 justify-center xl:justify-normal'>
      {/* Outline and See all posts */}
      <div className='flex flex-col gap-5 fixed w-[220px] top-[90px] h-0 xl:h-[80%] overflow-y-auto -translate-x-[250px]'>
        <Link
          href='/blog'
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'hidden xl:inline-flex justify-start w-40'
          )}
        >
          <Icons.chevronLeft className='mr-2 h-4 w-4' />
          Back to posts
        </Link>

        <DashboardTableOfContents toc={toc} />
      </div>
      {/* Article */}
      <article className='w-full container py-6 lg:pt-10'>
        {/* Post metadata */}
        <div>
          {post.date && (
            <time
              dateTime={post.date}
              className='block text-sm text-muted-foreground'
            >
              Published on {formatDate(post.date)}
            </time>
          )}
          <h1 className='mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl font-bold'>
            {post.title}
          </h1>
          {authors?.length ? (
            <div className='mt-4 flex space-x-4'>
              {authors.map((author) =>
                author ? (
                  <Link
                    key={author._id}
                    href={author.link}
                    className='flex items-center space-x-2 text-sm gap-2'
                  >
                    <Image
                      src={author.avatar}
                      alt={author.title}
                      width={42}
                      height={42}
                      className='rounded-full bg-gray-100 border-[1px] border-gray-200 transform scale-[1.2]'
                    />
                    <div className='flex-1 text-left leading-tight'>
                      <p className='font-medium'>{author.title}</p>
                      {/* <p className='text-[12px] text-muted-foreground'>
                          @{author.twitter}
                        </p> */}
                    </div>
                  </Link>
                ) : null
              )}
            </div>
          ) : null}
          {/* Cover Image */}
          {post.image && (
            <div className='flex justify-center items-center'>
              <Image
                src={post.image}
                alt={post.title}
                width={500}
                height={400}
                className='rounded-md border bg-muted transition-colors my-10'
                priority={true}
                loading='eager'
              />
            </div>
          )}
          <Mdx code={post.body.code} />
          <hr className='mt-12' />
          <div className='flex justify-center py-6'>
            <Link
              href='/blog'
              className={cn(buttonVariants({ variant: 'ghost' }))}
            >
              <Icons.chevronLeft className='mr-2 h-4 w-4' />
              Back to posts
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
