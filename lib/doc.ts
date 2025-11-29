import fs from "fs";
import matter from "gray-matter";
import path from "path";
import {remark} from 'remark'
import html from 'remark-html'

const postDirectory = path.join(process.cwd(), "docs");

interface DocumentData {
    id: string,
    title: string,
    date?: string,
    parent?: string,
    order: 3,
    author?: string,
    category: string,
    tags?: string[] 
}

export function getDocuments() {
  const fileNames = fs.readdirSync(postDirectory);
  const allDocuments = fileNames.map((fileName: string) => {
    const id = fileName.replace(".md", ""); //gets all the ids

    const fullPath = path.join(postDirectory, fileName);

    const fileContents = fs.readFileSync(fullPath, "utf8"); //converting to text format

    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    } as DocumentData;
  });
  //return all the documents frontmatter
  return allDocuments.sort((a, b) => a.order - b.order)
}


export async function getDocumentsContent(id:string){
    const fullPath = path.join(postDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    const matterResult = matter(fileContents)
    const processedContent = await remark().use(html).process(matterResult.content)

    const contentHtml = processedContent.toString();

    return {
        id, 
        contentHtml,
        ...matterResult.data
    }
}