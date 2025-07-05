import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import RSS from 'rss';

interface Post {
  slug: string;
  frontmatter: {
    [key: string]: any;
  };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Get site URL from environment or use localhost for development
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://brainbuzzer.me';
    
    // Create RSS feed
    const feed = new RSS({
      title: "Aditya Giri's Blog",
      description: "Portfolio for Aditya Giri. Programmer, Polyglot, and YouTuber who builds tons of side projects and is very passionate about startups and engineering.",
      site_url: siteUrl,
      feed_url: `${siteUrl}/api/rss.xml`,
      image_url: `${siteUrl}/profile-pic.png`,
      language: "en",
      pubDate: new Date().toISOString(),
      managingEditor: "Aditya Giri",
      webMaster: "Aditya Giri",
      copyright: `Copyright ${new Date().getFullYear()} Aditya Giri`,
      ttl: 1440, // 24 hours
    });

    // Get list of files from the posts folder
    const postsDirectory = path.join(process.cwd(), 'posts');
    const files = fs.readdirSync(postsDirectory).filter(file => file.endsWith('.md'));

    // Get frontmatter & slug from each post
    const posts: Post[] = files.map((fileName) => {
      const slug = fileName.replace(".md", "");
      const readFile = fs.readFileSync(path.join(postsDirectory, fileName), "utf-8");
      const { data: frontmatter } = matter(readFile);

      return {
        slug,
        frontmatter,
      };
    });

    // Sort posts by date (newest first)
    posts.sort((a, b) => {
      return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
    });

    // Add each post to the RSS feed
    posts.forEach((post) => {
      const { title, date, excerpt, author, category } = post.frontmatter;
      
      feed.item({
        title: title,
        description: excerpt,
        url: `${siteUrl}/blog/${post.slug}`,
        date: date,
        author: author || "Aditya Giri",
        categories: category ? [category] : undefined,
        guid: `${siteUrl}/blog/${post.slug}`,
      });
    });

    // Generate the RSS XML
    const rssXml = feed.xml({ indent: true });

    // Set the correct content type and cache headers
    res.setHeader('Content-Type', 'application/rss+xml; charset=UTF-8');
    res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=3600'); // Cache for 1 hour
    res.status(200).send(rssXml);

  } catch (error) {
    console.error('Error generating RSS feed:', error);
    res.status(500).json({ error: 'Failed to generate RSS feed' });
  }
} 