export function getCategories(categories) {
  const categoryList = categories[0]?.values[0]?.path_from_root;
  return categoryList?.map((category) => {
    const { name } = category;
    return name;
  });
}