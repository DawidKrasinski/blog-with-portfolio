export function handlePageLoad(postSlug: string) {
  //   const viewedPosts = JSON.parse(localStorage.getItem("viewedPosts") || "[]");

  // if (!viewedPosts.includes(postSlug)) {
  fetch(`/api/blog/${postSlug}`, { method: "POST" })
    .then(() => console.log(`Page view recorded for ${postSlug}`))
    .catch((err) => console.error(err));

  // viewedPosts.push(postSlug);
  // localStorage.setItem("viewedPosts", JSON.stringify(viewedPosts));
  // }
}
