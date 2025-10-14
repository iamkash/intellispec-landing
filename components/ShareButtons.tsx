'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Share2, Copy, Check, Linkedin, Twitter } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  text: string;
  slug: string;
  contentType?: 'blog' | 'press' | 'case-studies' | 'white-papers';
}

export default function ShareButtons({ title, text, slug, contentType = 'blog' }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    // Construct the URL on the client side based on content type
    const url = `${window.location.origin}/${contentType}/${slug}`;
    setCurrentUrl(url);
  }, [slug, contentType]);

  const shareOnLinkedIn = () => {
    if (!currentUrl) return;
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(text)}`;
    window.open(linkedInUrl, '_blank', 'width=600,height=400');
  };

  const shareOnTwitter = () => {
    if (!currentUrl) return;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(currentUrl)}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
  };

  const copyToClipboard = async () => {
    if (!currentUrl) return;
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = currentUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareViaNativeAPI = async () => {
    if (!currentUrl) return;
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: text,
          url: currentUrl,
        });
      } catch (err) {
        // User cancelled or error occurred
        console.log('Share cancelled or failed');
      }
    } else {
      // Fallback to copy link
      copyToClipboard();
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {/* LinkedIn Share */}
      <Button 
        onClick={shareOnLinkedIn}
        variant="outline"
        size="lg"
        className="px-8 py-4 text-lg font-semibold rounded-2xl border-2 hover:bg-slate-100:bg-slate-800 transition-all duration-300 group"
        disabled={!currentUrl}
      >
        <Linkedin className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
        Share on LinkedIn
      </Button>

      {/* Twitter Share */}
      <Button 
        onClick={shareOnTwitter}
        variant="outline"
        size="lg"
        className="px-8 py-4 text-lg font-semibold rounded-2xl border-2 hover:bg-slate-100:bg-slate-800 transition-all duration-300 group"
        disabled={!currentUrl}
      >
        <Twitter className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
        Share on Twitter
      </Button>

      {/* Copy Link */}
      <Button 
        onClick={copyToClipboard}
        variant="outline"
        size="lg"
        className="px-8 py-4 text-lg font-semibold rounded-2xl border-2 hover:bg-slate-100:bg-slate-800 transition-all duration-300 group"
        disabled={!currentUrl}
      >
        {copied ? (
          <>
            <Check className="w-5 h-5 mr-3 text-green-600 group-hover:scale-110 transition-transform" />
            Copied!
          </>
        ) : (
          <>
            <Copy className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
            Copy Link
          </>
        )}
      </Button>

      {/* Native Share (mobile) */}
      {typeof navigator !== 'undefined' && navigator.share && (
        <Button 
          onClick={shareViaNativeAPI}
          variant="outline"
          size="lg"
          className="px-8 py-4 text-lg font-semibold rounded-2xl border-2 hover:bg-slate-100:bg-slate-800 transition-all duration-300 group"
          disabled={!currentUrl}
        >
          <Share2 className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
          Share
        </Button>
      )}
    </div>
  );
} 