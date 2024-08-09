export const PostMethod = async (e, api, data, nextFunc = () => { return }) => {
  e.preventDefault();
  try {
    const response = await fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (response.ok) {
      nextFunc()
    }
  } catch (error) {
    console.error('Error submitting data:', error);
  }
};