export const filterByIdTitle = (list, searchValue) =>
  list.filter(({ id, title }) => {
    if (id && title) {
      return (
        title.toLowerCase().includes(searchValue.toLowerCase()) ||
        id.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    return null;
  });
