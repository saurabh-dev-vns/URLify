import { Link, Github } from 'lucide-react';

export default function Header() {
	return (
		<header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 w-full z-10">
			<nav className="container mx-auto px-4 py-4">
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-3">
						<Link className="h-6 w-6 text-indian-saffron" />
						<span className="text-xl font-bold text-indian-blue">URLify</span>
					</div>
					<a
						href="https://github.com/saurabh-dev-vns/URLify"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center space-x-2 text-indian-blue hover:text-indian-saffron transition-colors"
					>
						<Github className="h-5 w-5" />
						<span>GitHub</span>
					</a>
				</div>
			</nav>
		</header>
	);
}
