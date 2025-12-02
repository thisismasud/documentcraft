import { DocsType } from "@/types/type";

export function getDocumentsByCategory(docs: DocsType[], category: string){
    return docs.filter((doc) => doc.category === category)
}

export function getDocumentsByAuthor(docs: DocsType[], author: string){
    return docs.filter((doc) => doc.author === author)
}

export function getDocumentsByTag(docs: DocsType[], tag: string){
    return docs.filter((doc) => doc.tags.some(singleTag => singleTag === tag))
}
