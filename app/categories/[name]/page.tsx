const CategoriesPage = async ({ params }) => {
  const { name } = await params;
  return <div>{name}</div>;
};

export default CategoriesPage;
