import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Verify the webhook is from Sanity
    const token = request.headers.get('authorization');
    if (token !== `Bearer ${process.env.SANITY_WEBHOOK_SECRET}`) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }

    // Get the document type from the webhook
    const { _type } = body;

    // Revalidate specific paths based on content type
    switch (_type) {
      case 'blogPost':
        revalidatePath('/blog');
        revalidatePath('/blog/[slug]');
        break;
      case 'caseStudy':
        revalidatePath('/case-studies');
        revalidatePath('/case-studies/[slug]');
        break;
      case 'whitePaper':
        revalidatePath('/white-papers');
        revalidatePath('/white-papers/[slug]');
        break;
      case 'pressRelease':
        revalidatePath('/press');
        revalidatePath('/press/[slug]');
        break;
      default:
        // Revalidate all content pages
        revalidatePath('/blog');
        revalidatePath('/case-studies');
        revalidatePath('/white-papers');
        revalidatePath('/press');
    }

    return NextResponse.json({ 
      revalidated: true, 
      now: Date.now(),
      type: _type 
    });
  } catch (err) {
    console.error('Error revalidating:', err);
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
  }
} 