const fetchPackages = async (params) => {
  const response = await fetch(`/api/packages/${params}`);
  const json = await response.json();

  if (response.ok) {
    return json;
  }
};

const fetchArticles = async (params) => {
  const response = await fetch(`/api/articles/${params}`);
  const json = await response.json();

  if (response.ok) {
    return json;
  }
};

module.exports = {
  fetchPackages,
  fetchArticles,
};
