import { useEffect, useState } from "react";
import BookGridItem from "./bookGridItem";
import { bookGridItems } from "../../constants/data";
import { useSearchParams } from "react-router-dom";

const BookGrid = () => {
  const [books, setBooks] = useState(bookGridItems);
  const [searchParams] = useSearchParams();
  const sort = searchParams.get("sort") || "";
  const search = searchParams.get("search") || "";

  useEffect(() => {
    const filteredBooks = bookGridItems.filter((book) =>
      book.title.toLowerCase().includes(search)
    );

    //  year_asc, year_desc, name_asc, name_desc

    if (sort === "year_asc") {
      filteredBooks.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    }

    if (sort === "year_desc") {
      filteredBooks.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    }

    if (sort === "name_asc") {
      filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (sort === "name_desc") {
      filteredBooks.sort((a, b) => b.title.localeCompare(a.title));
    }

    setBooks(filteredBooks);
  }, [sort, search]);

  // decide what to render
  let content;

  if (books.length === 0) {
    content = <p className="text-3xl text-red-500">No books found</p>;
  } else {
    content = books.map((book) => (
      <BookGridItem key={book.id} book={book} setBooks={setBooks} />
    ));
  }

  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {content}
    </div>
  );
};

export default BookGrid;
