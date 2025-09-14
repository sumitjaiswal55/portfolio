import React from 'react'

// Arrow icon for the project card hover effect
const ArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
);

// Mock data for portfolio projects. You can replace this with your actual data.
const portfolioData = [
    {
        id: 1,
        category: 'FullStack Web',
        title: 'Deloitte',
        description: 'How Deloitte found freedom, flexibility, and rebrand success in the switch to Dstudio',
        imageUrl: 'https://placehold.co/600x400/0f172a/ffffff?text=Deloitte',
        hoverTitle: 'New Age',
        hoverDescription: 'Project was about precision and information...'
    },
    {
        id: 2,
        category: 'Frontend',
        title: 'Grow Your Business, With Us',
        description: 'We don\'t only design beautiful experiences, we also make sure your business grows.',
        imageUrl: 'https://placehold.co/600x400/0f172a/ffffff?text=Grow+Your+Business',
        hoverTitle: 'New Age',
        hoverDescription: 'Project was about precision and information...'
    },
    {
        id: 1,
        category: 'App',
        title: 'Deloitte',
        description: 'How Deloitte found freedom, flexibility, and rebrand success in the switch to Dstudio',
        imageUrl: 'https://placehold.co/600x400/0f172a/ffffff?text=Deloitte',
        hoverTitle: 'New Age',
        hoverDescription: 'Project was about precision and information...'
    },
    {
        id: 2,
        category: 'FullStack Web',
        title: 'Grow Your Business, With Us',
        description: 'We don\'t only design beautiful experiences, we also make sure your business grows.',
        imageUrl: 'https://placehold.co/600x400/0f172a/ffffff?text=Grow+Your+Business',
        hoverTitle: 'New Age',
        hoverDescription: 'Project was about precision and information...'
    },
    // Add more project objects here
];

// Filter categories
const filterCategories = ['All', 'FullStack Web', 'Frontend', 'App', 'UX/UI'];

const Projects = () => {
    // State to keep track of the active filter
    const [activeFilter, setActiveFilter] = React.useState('All');

    // Filtered projects based on the active category
    const filteredProjects = activeFilter === 'All'
        ? portfolioData
        : portfolioData.filter(p => p.category === activeFilter);
  return (
    <section className="relative flex min-h-screen flex-col-reverse items-center justify-between overflow-hidden px-10 py-20 md:flex-row">
      <div className="container mx-auto flex flex-col items-center">
                
                {/* Section Title */}
                <h2 className="mb-8 text-4xl font-bold text-gray-800">My Recent Works</h2>

                {/* Filter Buttons */}
                <div className="mb-12 flex flex-wrap justify-center gap-2 sm:gap-4">
                    {filterCategories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-300
                                ${activeFilter === category 
                                    ? 'bg-purple-600 text-white shadow-md' 
                                    : 'bg-white text-gray-600 hover:bg-purple-100'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Portfolio Grid */}
                <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:max-w-6xl">
                    {filteredProjects.map(project => (
                        <div key={project.id} className="group relative overflow-hidden rounded-2xl bg-[#0f172a] p-8 text-white shadow-2xl">
                            {/* This is a placeholder for the complex inner content */}
                            {/* In a real scenario, you'd build out the detailed content of each card */}
                            <img src={project.imageUrl} alt={project.title} className="mb-6 w-full rounded-lg object-cover" />
                            <h3 className="mb-2 text-2xl font-bold">{project.title}</h3>
                            <p className="text-gray-400">{project.description}</p>
                            
                            {/* Stats for the first card type */}
                            {project.stats && (
                                <div className="mt-6 flex gap-8">
                                    <div>
                                        <p className="text-3xl font-bold text-purple-400">{project.stats.users}</p>
                                        <p className="text-sm text-gray-500">Users Increased</p>
                                    </div>
                                    <div>
                                        <p className="text-3xl font-bold text-purple-400">{project.stats.growth}</p>
                                        <p className="text-sm text-gray-500">Growth</p>
                                    </div>
                                </div>
                            )}

                            {/* Hover overlay for the second card type */}
                            {project.hoverTitle && (
                                <div className="absolute inset-x-0 bottom-0 translate-y-full transform p-8 transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                                     {/* The gradient makes the text readable over the background content */}
                                    <div className="rounded-lg bg-gradient-to-t from-purple-800 via-purple-800 to-transparent p-6">
                                        <h4 className="text-2xl font-bold">{project.hoverTitle}</h4>
                                        <div className="flex items-center justify-between">
                                            <p className="text-purple-200">{project.hoverDescription}</p>
                                            <ArrowIcon />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
    </section>
  )
}

export default Projects