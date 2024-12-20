const api = {
  get: async (path) => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/${path}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Received non-JSON response");
      }

      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error("Error while fetching data:", error);
      throw error;
    }
  },
};

export default api;
