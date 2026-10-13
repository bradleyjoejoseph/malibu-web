import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const topicsDirectory = path.join(process.cwd(), "content/topics");

export function getAllTopics() {
  if (!fs.existsSync(topicsDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(topicsDirectory);
  const allTopics = fileNames
    .filter((fileName) => fileName.endsWith(".md") && !fileName.startsWith("."))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(topicsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        date: data.date || "2026-10-10",
        summary: data.summary || "",
        tags: data.tags || [],
        readTime: data.readTime || "4 min",
      };
    });

  return allTopics.sort((a, b) => (a.slug > b.slug ? -1 : 1));
}

export async function getTopicBySlug(slug) {
  const fullPath = path.join(topicsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const htmlContent = marked.parse(content);

  return {
    slug,
    frontmatter: data,
    htmlContent,
  };
}
