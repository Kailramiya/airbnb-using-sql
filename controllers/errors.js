exports.notFound = (req, res, next) => {
  res
    .status(404)
    .render("404.ejs", { pageTitle: "Page Not Found", currentPage: "404" });
};
