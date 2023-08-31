import { useEffect, useState } from "react";
import Parser, { Item } from "rss-parser";

const BlogPosts = () => {
  const parser = new Parser();

  const [posts, setPosts] = useState<({ [key: string]: any } & Item)[]>([]);

  useEffect(() => {
    parser
      .parseURL("https://blog.yuuns.tech/rss.xml")
      .then((a) => setPosts(a.items.slice(0, 3)));
  }, []);

  // @ts-ignore
  return (
    <div>
      <h3
        id="about"
        className="mx-auto mb-10 max-w-5xl text-center text-4xl font-bold sm:mb-12 sm:text-6xl"
      >
        Recent Blog Posts
      </h3>
      <div className="mx-auto flex w-fit max-w-6xl flex-col px-8 sm:px-0">
        {posts.map((post, i, row) => (
          <a
            href={post.link}
            target="_blank"
            rel="noreferrer noopener"
            className={`${
              i + 1 !== row.length &&
              "border-b-2 border-b-white border-opacity-25"
            } group flex px-0 py-8 sm:px-12`}
            key={post.guid}
          >
            <aside className="my-auto mr-6 block h-full rounded-md border-2 border-white border-opacity-30 bg-white bg-opacity-10 px-4 text-center text-6xl transition-all group-hover:-rotate-6 sm:mr-8">
              {i + 1}
            </aside>
            <section>
              <h4 className="text-xl font-bold text-white transition-all group-hover:text-opacity-80 sm:text-2xl">
                {post.title}
              </h4>
              <p className="text-sm text-white transition-all group-hover:text-opacity-80">
                📆{" "}
                {new Date(post.pubDate as string).toLocaleDateString("en-us", {
                  dateStyle: "medium",
                })}
              </p>
              <p className="hidden text-white transition-all group-hover:text-opacity-80 sm:block">
                {post.contentSnippet}
              </p>
            </section>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
