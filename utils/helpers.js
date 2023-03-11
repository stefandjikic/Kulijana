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
