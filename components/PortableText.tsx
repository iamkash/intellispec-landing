import { PortableText as PortableTextComponent } from '@portabletext/react';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';

interface PortableTextProps {
  value: any;
  className?: string;
}

const components = {
  types: {
    image: ({ value }: any) => {
      return (
        <figure className="my-16">
          <div className="relative">
            <Image
              src={urlFor(value).width(1200).height(800).url()}
              alt={value.alt || 'Image'}
              width={1200}
              height={800}
              className="w-full h-auto rounded-2xl shadow-2xl border border-slate-200/50"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
          </div>
          {value.caption && (
            <figcaption className="text-center mt-6">
              <p className="text-lg font-medium text-slate-700 leading-relaxed max-w-4xl mx-auto">
                {value.caption}
              </p>
            </figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 mt-16 leading-tight tracking-tight">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 mt-12 leading-tight tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6 mt-10 leading-tight">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4 mt-8 leading-tight">
        {children}
      </h4>
    ),
    normal: ({ children }: any) => (
      <p className="text-xl leading-relaxed text-slate-700 mb-8 font-light tracking-wide">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="relative my-16 pl-8 border-l-4 border-blue-500/60 bg-gradient-to-r from-blue-50/50 to-transparent py-8 rounded-r-2xl">
        <div className="absolute top-0 left-0 w-12 h-12 bg-blue-500/10 rounded-full -translate-x-6 -translate-y-6"></div>
        <p className="text-2xl font-light italic text-slate-700 leading-relaxed tracking-wide">
          {children}
        </p>
        <div className="absolute bottom-0 right-0 w-8 h-8 bg-blue-500/10 rounded-full translate-x-4 translate-y-4"></div>
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-none space-y-4 mb-8 pl-0">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-none space-y-4 mb-8 pl-0">
        {children}
      </ol>
    ),
  },
  listItem: ({ children }: any) => (
    <li className="flex items-start space-x-4 text-xl leading-relaxed text-slate-700 font-light tracking-wide">
      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
      <span>{children}</span>
    </li>
  ),
  marks: {
    link: ({ children, value }: any) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="text-blue-600 hover:text-blue-700:text-blue-300 underline decoration-2 underline-offset-4 transition-colors duration-300 font-medium"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }: any) => (
      <strong className="font-bold text-slate-900">
        {children}
      </strong>
    ),
    em: ({ children }: any) => (
      <em className="italic text-slate-800 font-medium">
        {children}
      </em>
    ),
    code: ({ children }: any) => (
      <code className="bg-slate-100 text-slate-800 px-3 py-1 rounded-lg text-lg font-mono border border-slate-200">
        {children}
      </code>
    ),
  },
};

export default function PortableText({ value, className = '' }: PortableTextProps) {
  return (
    <article className={`max-w-4xl mx-auto ${className}`}>
      {/* Premium reading container with enhanced typography */}
      <div className="prose prose-xl max-w-none">
        <div className="relative">
          {/* Decorative elements for luxury feel */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-green-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
          
          {/* Content with premium spacing and typography */}
          <div className="relative z-10">
            <PortableTextComponent value={value} components={components} />
          </div>
        </div>
      </div>
    </article>
  );
} 