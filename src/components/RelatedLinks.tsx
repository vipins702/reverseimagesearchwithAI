import { Link } from 'react-router-dom'

const RelatedLinks = ({ currentPath }: { currentPath: string }) => {
  const links = [
    { path: '/', title: 'Home', description: 'Return to the homepage' },
    { path: '/reverse-image-search', title: 'Reverse Image Search', description: 'Upload an image to find similar ones' },
    { path: '/how-it-works', title: 'How It Works', description: 'Learn how our image search works' },
    { path: '/about', title: 'About Us', description: 'Learn more about our service' },
    { path: '/privacy', title: 'Privacy Policy', description: 'How we protect your data' },
  ];

  // Filter out the current page
  const filteredLinks = links.filter(link => link.path !== currentPath);
  
  return (
    <div className="mt-12 mb-8">
      <h3 className="text-xl font-semibold mb-4">You might also be interested in:</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {filteredLinks.map((link) => (
          <Link 
            key={link.path}
            to={link.path}
            className="glass p-4 rounded-xl hover:shadow-md transition-all duration-300"
          >
            <h4 className="font-medium text-blue-600">{link.title}</h4>
            <p className="text-sm text-gray-600 mt-1">{link.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedLinks;