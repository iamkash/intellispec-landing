import { client } from './sanity';

export async function testSanityConnection() {
  try {
    // Test a simple query
    const result = await client.fetch('*[_type == "author"][0...1]');
    if (process.env.NODE_ENV === 'development') {
      console.log('✅ Sanity connection successful!');
      console.log('Result:', result);
    }
    return { success: true, data: result };
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('❌ Sanity connection failed:', error);
    }
    return { success: false, error: error.message };
  }
} 