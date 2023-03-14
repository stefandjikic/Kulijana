export const resolvePageTitle = (title = "") => {
  switch (title) {
    case "drustvo":
      return "Društvo";
    case "it":
      return "IT";
    case "da-li-ste-znali":
      return "Da li ste znali?";
    default:
      return title.charAt(0).toUpperCase() + title.slice(1).replace(/-/g, " ");
  }
};

export const formatDate = (articleDate = "") => {
  const date = new Date(articleDate);
  const options = {
    // hour: "numeric",
    // minute: "numeric",
    // weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("sr-Latn-RS", options);
};

export const resolveCategories = (categorySlug) => {
  switch (categorySlug) {
    case "zanimljivosti":
      return '{OR: [{slug: $categorySlug}, {slug: "istorija"}, {slug: "drustvo"}, {slug: "svet-oko-nas"}]}';
    case "kultura":
      return '{OR: [{slug: $categorySlug}, {slug: "film"}, {slug: "muzika"}, {slug: "umetnost"}]}';
    case "magazin":
      return '{OR: [{slug: $categorySlug}, {slug: "lifestyle"}, {slug: "trening-kutak"}]}';
    default:
      return "{ slug: $categorySlug }";
  }
};

export const resolveCategoriesForRelatedArticles = (category) => {
  switch (category) {
    case "zanimljivosti":
      return '{OR: [{slug: $category}, {slug: "istorija"}, {slug: "drustvo"}, {slug: "svet-oko-nas"}]}';
    case "istorija":
      return '{OR: [{slug: $category}, {slug: "zanimljivosti"}, {slug: "drustvo"}, {slug: "svet-oko-nas"}]}';
    case "drustvo":
      return '{OR: [{slug: $category}, {slug: "istorija"}, {slug: "zanimljivosti"}, {slug: "svet-oko-nas"}]}';
    case "svet-oko-nas":
      return '{OR: [{slug: $category}, {slug: "istorija"}, {slug: "drustvo"}, {slug: "zanimljivosti"}]}';
    case "kultura":
      return '{OR: [{slug: $category}, {slug: "film"}, {slug: "muzika"}, {slug: "umetnost"}]}';
    case "muzika":
      return '{OR: [{slug: $category}, {slug: "film"}, {slug: "kultura"}, {slug: "umetnost"}]}';
    case "film":
      return '{OR: [{slug: $category}, {slug: "muzika"}, {slug: "kultura"}, {slug: "umetnost"}]}';
    case "umetnost":
      return '{OR: [{slug: $category}, {slug: "muzika"}, {slug: "kultura"}, {slug: "film"}]}';
    case "magazin":
      return '{OR: [{slug: $category}, {slug: "lifestyle"}, {slug: "trening-kutak"}]}';
    default:
      return "{ slug: $category }";
  }
};
