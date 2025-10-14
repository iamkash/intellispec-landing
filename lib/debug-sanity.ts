import { client } from './sanity';

export async function debugSanityContent() {
  try {
    if (process.env.NODE_ENV === 'development') {
      console.log('🔍 Debugging Sanity content...');
    }
    
    // Check all documents
    const allDocs = await client.fetch('*[_type in ["caseStudy", "whitePaper", "blogPost", "author"]] | order(_type)');
    if (process.env.NODE_ENV === 'development') {
      console.log('📄 All documents:', allDocs);
    }
    
    // Check case studies specifically (published)
    const caseStudies = await client.fetch('*[_type == "caseStudy" && !(_id in path("drafts.**"))]');
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Published Case Studies found:', caseStudies.length);
      console.log('📋 Published Case Studies details:', caseStudies);
    }
    
    // Check draft case studies
    const draftCaseStudies = await client.fetch('*[_type == "caseStudy" && _id in path("drafts.**")]');
    if (process.env.NODE_ENV === 'development') {
      console.log('📝 Draft Case Studies found:', draftCaseStudies.length);
      console.log('📋 Draft Case Studies details:', draftCaseStudies);
    }
    
    // Check if there are any documents at all
    const anyDocs = await client.fetch('count(*[_type in ["caseStudy", "whitePaper", "blogPost", "author"]])');
    if (process.env.NODE_ENV === 'development') {
      console.log('📈 Total documents count:', anyDocs);
    }
    
    // Check the dataset
    const datasetInfo = await client.fetch('count(*[_type == "sanity.imageAsset"])');
    if (process.env.NODE_ENV === 'development') {
      console.log('🖼️ Image assets count:', datasetInfo);
    }
    
    return {
      success: true,
      allDocs,
      caseStudies,
      draftCaseStudies,
      totalCount: anyDocs,
      imageCount: datasetInfo
    };
  } catch (error) {
    console.error('❌ Debug failed:', error);
    return { success: false, error: error.message };
  }
} 