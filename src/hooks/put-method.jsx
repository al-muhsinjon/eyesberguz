export const PutMethod = async (api, data, nextFunc = () => { return }) => {
  try {
    const response = await fetch(api, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      nextFunc()
    }
  } catch (error) {
    console.error('Error updating data:', error);
  }
};