export default function RecentBlogPosts() {
  return (
    <div className="flex flex-col mt-8 p-8">
      <h1 className="text-xl font-bold">Latest Blog Posts</h1>
      <div className="flex flex-row gap-4 mt-8">
        <div className="flex flex-col">
          <h2 className="text-sm font-light">12th December 2022</h2>
          <h2 className="text-3xl font-bold pt-2">How to create a Discord bot using Node.js</h2>
          <h2 className="text-gray-900 text-lg pt-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam repudiandae ullam omnis molestias
            necessitatibus adipisci quod consequuntur reiciendis, earum aut cum veniam ratione, quasi atque minus
            blanditiis nisi. Eius, eaque.
          </h2>
          <h2 className="text-gray-900 text-lg pt-3">
            <a href="#" className="underline">
              Read more -&gt;
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
}
