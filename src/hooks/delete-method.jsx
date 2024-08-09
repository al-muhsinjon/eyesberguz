export const DeleteMethod = async (api, nextFunc = () => { return }) => {
  try {
    const response = await fetch(api, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (response.ok) {
      nextFunc()
    }
  } catch (error) {
    console.error('Error deleting data:', error);
  }
};