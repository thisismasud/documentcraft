import { DocsType } from "@/types/type";
import Link from "next/link";

const Sidebar = ({ docs }) => {
  const roots = docs.filter((doc: DocsType) => !doc.parent);
  const nonRoots = Object.groupBy( docs.filter((doc: DocsType) => doc.parent), (doc: DocsType) => doc.parent!);

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
          </li>
        ))}

        {/* <li className="relative">
          <a
            aria-current="page"
            className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-900 transition dark:text-white"
            href="/docs"
          >
            <span className="truncate">Introduction</span>
          </a>
          <ul role="list" className="opacity-1">
            <li>
              <a
                className="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                href="/docs#guides"
              >
                <span className="truncate">Guides</span>
              </a>
            </li>
            <li>
              <a
                className="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                href="/docs#resources"
              >
                <span className="truncate">Resources</span>
              </a>
            </li>
            <li>
              <a
                className="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                href="/docs#test"
              >
                <span className="truncate">Test</span>
              </a>
            </li>
          </ul>
        </li>
        <li className="relative">
          <a
            className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            href="/docs/quickstart"
          >
            <span className="truncate">Quickstart</span>
          </a>
        </li>
        <li className="relative">
          <a
            className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            href="/docs/sdks"
          >
            <span className="truncate">SDKs</span>
          </a>
        </li>
        <li className="relative">
          <a
            className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            href="/docs/authentication"
          >
            <span className="truncate">Authentication</span>
          </a>
        </li>
        <li className="relative">
          <a
            className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            href="/docs/pagination"
          >
            <span className="truncate">Pagination</span>
          </a>
        </li>
        <li className="relative">
          <a
            className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            href="/docs/errors"
          >
            <span className="truncate">Errors</span>
          </a>
        </li>
        <li className="relative">
          <a
            className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            href="/docs/webhooks"
          >
            <span className="truncate">Webhooks</span>
          </a>
        </li> */}
      </ul>
    </nav>
  );
};

export default Sidebar;
