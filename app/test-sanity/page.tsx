import { testSanityConnection } from '@/lib/test-sanity';
import { debugSanityContent } from '@/lib/debug-sanity';

export default async function TestSanityPage() {
  const result = await testSanityConnection();
  const debugResult = await debugSanityContent();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">
          Sanity CMS Connection Test
        </h1>
        
        <div className="bg-white rounded-lg p-6 shadow-lg">
          {result.success ? (
            <div className="text-green-600">
              <h2 className="text-xl font-semibold mb-4">✅ Connection Successful!</h2>
              <p className="mb-4">Your Sanity CMS is properly configured and connected.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Test Result:</h3>
                <pre className="text-sm overflow-auto">
                  {JSON.stringify(result.data, null, 2)}
                </pre>
              </div>
            </div>
          ) : (
            <div className="text-red-600">
              <h2 className="text-xl font-semibold mb-4">❌ Connection Failed</h2>
              <p className="mb-4">There was an issue connecting to Sanity CMS.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Error Details:</h3>
                <p className="text-sm">{result.error}</p>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold mb-2">Troubleshooting Steps:</h3>
                <ol className="list-decimal list-inside space-y-1 text-sm">
                  <li>Check your Project ID in .env.local</li>
                  <li>Verify your API token is correct</li>
                  <li>Ensure your dataset is named &ldquo;production&rdquo;</li>
                  <li>Check that your Sanity project is active</li>
                </ol>
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-8 bg-white rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">
            Content Debug Information
          </h2>
          {debugResult.success ? (
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">📊 Content Summary:</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>Total documents: {debugResult.totalCount}</li>
                  <li>Published case studies: {debugResult.caseStudies.length}</li>
                  <li>Draft case studies: {debugResult.draftCaseStudies.length}</li>
                  <li>Image assets: {debugResult.imageCount}</li>
                </ul>
              </div>
              
              {debugResult.caseStudies.length > 0 && (
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">📋 Published Case Studies:</h3>
                  <div className="bg-slate-50 p-3 rounded text-sm">
                    <pre className="overflow-auto text-xs">
                      {JSON.stringify(debugResult.caseStudies, null, 2)}
                    </pre>
                  </div>
                </div>
              )}
              
              {debugResult.draftCaseStudies.length > 0 && (
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">📝 Draft Case Studies (Need to be published):</h3>
                  <div className="bg-slate-50 p-3 rounded text-sm">
                    <pre className="overflow-auto text-xs">
                      {JSON.stringify(debugResult.draftCaseStudies, null, 2)}
                    </pre>
                  </div>
                </div>
              )}
              
              {debugResult.allDocs.length > 0 && (
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">📄 All Documents:</h3>
                  <div className="bg-slate-50 p-3 rounded text-sm">
                    <pre className="overflow-auto text-xs">
                      {JSON.stringify(debugResult.allDocs, null, 2)}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-red-600">
              <p>Debug failed: {debugResult.error}</p>
            </div>
          )}
        </div>
        
        <div className="mt-8 bg-white rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">
            Next Steps
          </h2>
          <div className="space-y-2 text-sm text-slate-600">
            <p>1. If connection is successful, you can now add content through Sanity Studio</p>
            <p>2. Visit your content pages: <a href="/case-studies" className="text-blue-600 hover:underline">Case Studies</a>, <a href="/white-papers" className="text-blue-600 hover:underline">White Papers</a>, <a href="/blog" className="text-blue-600 hover:underline">Blog</a></p>
            <p>3. Set up Sanity Studio for content management (optional)</p>
          </div>
        </div>
      </div>
    </div>
  );
} 