export const mapAuthorsById = (incomingAuthors, authorsList) => {
  if (!incomingAuthors) {
    return null;
  }

  return incomingAuthors.map((author, index) => {
    const foundAuthor = authorsList.find(
      (authorsListAuthor) => author === authorsListAuthor.id
    );

    if (foundAuthor) {
      return (index ? ', ' : '') + foundAuthor.name;
    }

    return null;
  });
};
