const popularPosts = [
  "{popular post title}",
  "{popular post title}",
  "{popular post title}",
  "{popular post title}",
];

export default function PopularPosts() {
  return (
    <div className="p-6 bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl">
      <h3 className="text-xl mb-4 text-purple-400">{"{Popular Posts}"}</h3>

      <div className="space-y-3">
        {popularPosts.map((post, index) => (
          <a
            key={index}
            href="#"
            className="block text-gray-400 hover:text-purple-400 transition-colors text-sm border-b border-gray-800 pb-3 last:border-0"
          >
            {post}
          </a>
        ))}
      </div>
    </div>
  );
}
