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
