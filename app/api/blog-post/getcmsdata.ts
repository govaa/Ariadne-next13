const getCmsData = async () => {
  if (!process.env.cmsApiBaseUrl || !process.env.cmsApiKey) {
    throw new Error("Environment variables not set correctly");
  }

  const url = process.env.cmsApiBaseUrl;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.cmsApiKey}`,
  };
  
  const response = await fetch(url, { headers });
  if (response.status === 200) {
    const posts = await response.json();
    return posts;
  } else {
    throw new Error(`Failed to fetch data from CMS API: ${response.status}`);
  }
};

export default getCmsData;
