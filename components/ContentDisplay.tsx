import { getDocumentsContent } from "@/lib/doc";
import Link from "next/link";
import LinkHandler from "./LinkHandler";
import Tag from "./Tag";

const ContentDisplay = async ({ id }) => {
  const documentContent = await getDocumentsContent(id);
  const { title, date, author, category, tags } = documentContent;

  return (
    <article className="prose dark:prose-invert ">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="mb-2">
        <span>Published On: {date} </span> by{" "}
        <Link className="text-indigo-500" href={`/authors/${author}`}>
          {author}
        </Link>{" "}
        under the{" "}
        <Link className="text-indigo-500" href={`/categories/${category}`}>
          {category}
        </Link>{" "}
        category
      </div>
      <div>{tags && tags.map((tag) => <Tag key={tag} tag={tag} />)}</div>
      <LinkHandler htmlContent={documentContent.contentHtml} />
    </article>
  );
};

export default ContentDisplay;
