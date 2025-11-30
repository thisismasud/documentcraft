"use client";
import { useRouter } from 'next/navigation';;
import { useEffect, useRef } from "react";

interface LinkHandlerClientProps {
  htmlContent: string;
}

const LinkHandler = ({ htmlContent }: LinkHandlerClientProps) => {
  const contentRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const contentElement = contentRef.current;
    if (!contentElement) return;

    const links = contentElement.querySelectorAll("a");

    const handleClick = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute("href");

      if (!href || href.startsWith("http") || href.startsWith("mailto")) {
        return;
      }
      e.preventDefault();
      router.push(href);

      links.forEach((link) => {
        link.removeEventListener("click", handleClick as EventListener);
        link.addEventListener("click", handleClick as EventListener);
      });

      return () => {
        links.forEach((link) => {
          link.removeEventListener("click", handleClick as EventListener);
        });
      };
    };
  }, [router, htmlContent]);

  return (
    <div
      className="lead"
      ref={contentRef}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default LinkHandler;
