const fetchPackages = async (params) => {
  const response = await fetch(`/api/packages/${params}`);
  const json = await response.json();

  if (response.ok) {
    return json;
  }
};

const fetchArticles = async (query = "", params = "") => {
  try {
    const response = await fetch(`/api/articles${query}${params}`);
    const json = await response.json();

    if (response.ok) {
      return json;
    }
  } catch (error) {}
};

module.exports = {
  fetchPackages,
  fetchArticles,
};
