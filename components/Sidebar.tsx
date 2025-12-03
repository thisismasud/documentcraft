'use client'
import { DocsType } from "@/types/type";
import { getDocumentsByAuthor, getDocumentsByCategory, getDocumentsByTag } from "@/utils/doc-util";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Sidebar = ({ docs }: { docs: DocsType[] }) => {
    const pathName = usePathname()
    const [roots, setRoots] = useState<DocsType[]>([])
    const [nonRoots, setNonRoots] = useState<Partial<Record<string, DocsType[]>>>({})
    useEffect(() =>{
        let matchedDocs = docs 

        if(pathName.includes('/tags')){
            const tag = pathName.split('/')[2]
            matchedDocs = getDocumentsByTag(docs, tag)
        }else if(pathName.includes('/authors')){
            const author = pathName.split('/')[2]
            matchedDocs = getDocumentsByAuthor(docs, author)
        }else if(pathName.includes('/categories')){
            const category = pathName.split('/')[2]
            matchedDocs = getDocumentsByCategory(docs, category)
        }
         const roots = matchedDocs.filter((doc: DocsType) => !doc.parent);
         const nonRoots = Object.groupBy( matchedDocs.filter((doc: DocsType) => doc.parent), (doc: DocsType) => doc.parent!);
         setRoots(roots)
         setNonRoots({...nonRoots})
        
    }, [pathName])

  return (
    <nav className="hidden lg:mt-10 lg:block">
      <ul role="list" className="border-l border-transparent">
        {roots.map((rootNode: DocsType) => (
          <li key={rootNode.id} className="relative">
            <Link
              aria-current="page"
              className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-900 transition dark:text-white"
              href={`/docs/${rootNode.id}`}
            >
              <span className="truncate">{rootNode.title}</span>
            </Link>
            {nonRoots[rootNode.id] && (
                <ul role="list" className="opacity-90">
                    {nonRoots[rootNode.id]!.map((subRoot) =>(
                        <li key={subRoot.id}>
                            <Link
                                className="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-900 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                                href={`/docs/${rootNode.id}/${subRoot.id}`}
                            >
                                <span className="truncate">{subRoot.title}</span>
                                
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
