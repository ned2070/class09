const CATEGORIES = [
  { name: "Trains", catslug: "trains" },
  { name: "Artificial Intelligence", catslug: "artificial-intelligence" },
  { name: "Blogging", catslug: "blogging" },
];

const POSTS = [
  {
    title:
      "The Iron Horse Chronicles: Unveiling the Mystique of Steam Locomotives",
    slug: "mystique-steam",
    content:
      "Welcome aboard our journey through time as we delve into the fascinating world of steam locomotives. In this post, we'll explore the historical significance, engineering marvels, and the sheer power that defined the era of the Iron Horse. Join us as we stoke the fires of curiosity and let the steam rise in this nostalgic trip down the tracks.",
    category: "trains",
  },
  {
    title:
      "All Aboard the Future: High-Speed Rail Revolutionizing Transportation",
    slug: "future-rail",
    content:
      "In this post, we shift gears to the future of train travel with a spotlight on high-speed rail. Discover how cutting-edge technology and innovative engineering are transforming the way we move from point A to B. From the maglev trains in Shanghai to the Eurostar racing under the English Channel, we explore the incredible speed and efficiency that the future of rail promises.",
    category: "trains",
  },
  {
    title: "Demystifying Artificial Intelligence: A Beginner's Guide",
    slug: "demystifying-ai",
    content:
      "Embark on a journey through the complex yet captivating realm of Artificial Intelligence (AI). In this post, we break down the fundamentals, dispel common misconceptions, and provide a beginner-friendly introduction to the wonders of machine learning, neural networks, and the ever-evolving landscape of AI technologies. Get ready to unravel the mysteries and explore the limitless potential of AI!",
    category: "artificial-intelligence",
  },
  {
    title: "The Future of Work: Navigating the Age of AI and Automation",
    slug: "future-work",
    content:
      "As automation and AI technologies continue to evolve, the workplace is undergoing a profound transformation. In this post, we examine the impact of AI on jobs, skills, and the overall workforce. Discover how individuals and businesses can adapt to thrive in the age of AI, and explore the exciting possibilities that emerge when humans and machines collaborate.",
    category: "artificial-intelligence",
  },
  {
    title: "Blogging 101: A Beginner's Guide to Starting Your Own Blog",
    slug: "beginning-blogging",
    content:
      "Embarking on the exciting journey of blogging? In this post, we provide a comprehensive guide for beginners, covering everything from choosing the right platform to finding your blogging niche. Whether you're passionate about lifestyle, travel, or tech, get ready to unleash your creativity and make your mark in the blogosphere.",
    category: "blogging",
  },
  {
    title:
      "The Art of Crafting Captivating Content: Tips for Successful Blogging",
    slug: "blogging-tips",
    content:
      "Content is king, and in this post, we delve into the art of creating engaging and shareable blog posts. From mastering the headline to perfecting your storytelling techniques, learn the secrets of writing content that resonates with your audience. Elevate your blogging game with practical tips and tricks that will keep your readers coming back for more.",
    category: "blogging",
  },
];

export function getPosts() {
  return POSTS;
}

export function getPostsBySlug(slug: string) {
  return POSTS.find((post) => post.slug === slug);
}

export function getCategory() {
  return CATEGORIES;
}

export function getPostsByCategory(catslug: string) {
  return POSTS.filter((post) => post.category === catslug);
}
