# WordPress Block Documentation

> The ultimate resource for WordPress Gutenberg block HTML markup, syntax, and properties.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](CONTRIBUTING.md)

**Live Site:** [wpblockdocs.com](https://wpblockdocs.com)

## About

WordPress Block Documentation provides comprehensive, developer-focused documentation for WordPress Gutenberg block markup. While the official WordPress documentation focuses on the editor experience, this project fills the gap by documenting the actual HTML output and markup patterns that developers need to understand.

### Why This Exists

- **Block comment syntax** is often poorly documented
- **HTML output** varies between themes and contexts
- **FSE markup quirks** are scattered across various resources
- **Real-world examples** are hard to find in one place

### What We Provide

- ✅ Complete HTML markup reference for WordPress core blocks
- ✅ Interactive examples with syntax highlighting
- ✅ Copy-paste ready code snippets
- ✅ Block validation tools
- ✅ FSE quirks and gotchas documentation
- ✅ Best practices and guidelines
- ✅ Comprehensive resource directory

## Features

### 📚 Comprehensive Block Documentation

- **Core Blocks**: Complete documentation for all WordPress core blocks
- **Markup Examples**: Real-world HTML output with explanations
- **Properties Reference**: Detailed attribute and property documentation

### 🛠 Developer Tools

- **Block Validator**: Validate your block markup for errors
- **Pattern Library**: Ready-made block combinations
- **Code Highlighting**: Syntax-highlighted examples throughout

### 🎨 Modern Interface

- **Dark Theme**: Retrowave-inspired design with neon accents
- **Responsive**: Works perfectly on all devices
- **Fast Search**: Quick access to any documentation
- **Glass Morphism**: Modern UI with backdrop blur effects

### 📖 Learning Resources

- **Best Practices**: WordPress block development guidelines
- **FSE Quirks**: Known issues and workarounds
- **Resource Directory**: Curated links to essential tools and documentation

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: TailwindCSS with custom retrowave theme
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Backend**: Express.js (for API endpoints)
- **Search**: Client-side fuzzy search
- **Analytics**: Plausible (privacy-focused)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/house-of-giants/wp-block-docs.git
   cd wp-block-docs
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:8080
   ```

### Project Structure

```
├── client/                 # React frontend application
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # Base UI components (buttons, cards, etc.)
│   │   ├── PageHeader.tsx # Reusable page header component
│   │   ├── ContentSection.tsx # Content section wrapper
│   │   └── SearchModal.tsx # Global search functionality
│   ├── pages/            # Route components
│   │   ├── Index.tsx     # Homepage
│   │   ├── BlockIndex.tsx # Block directory
│   │   ├── Resources.tsx  # Developer resources
│   │   └── blocks/       # Individual block documentation
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   └── global.css        # Global styles and theme
├── server/               # Express.js backend
│   ├── routes/          # API route handlers
│   └── index.ts         # Server configuration
├── shared/              # Shared TypeScript types
└── public/              # Static assets
```

## Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run typecheck    # TypeScript type checking
npm test            # Run test suite
npm run format.fix  # Format code with Prettier
```

### Environment Setup

The project uses a single development server that serves both the React frontend and Express.js backend. The Vite dev server proxies API requests to the Express server automatically.

### Adding New Block Documentation

1. Create a new page in `client/pages/blocks/`
2. Follow the existing pattern using `BlockPageLayout` component
3. Add the route to `client/App.tsx`
4. Update the search data in `client/components/SearchModal.tsx`
5. Add navigation links in `client/components/DocLayout.tsx`

### Styling Guidelines

- Use TailwindCSS utility classes
- Follow the retrowave theme with neon gradients
- Utilize the custom CSS variables in `global.css`
- Use glass morphism effects with `backdrop-blur`
- Maintain dark theme consistency

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Ways to Contribute

- 📝 **Documentation**: Add or improve block documentation
- 🐛 **Bug Reports**: Report issues or broken examples
- ✨ **Features**: Suggest new tools or improvements
- 🔗 **Resources**: Submit valuable resources for the resource directory
- 🎨 **Design**: Improve UI/UX and accessibility
- 🧪 **Testing**: Add tests and improve quality

### Quick Contribution

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test locally (`npm run dev`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## Community

- **Issues**: [GitHub Issues](https://github.com/house-of-giants/wp-block-docs/issues)
- **Discussions**: [GitHub Discussions](https://github.com/house-of-giants/wp-block-docs/discussions)
- **Website**: [wpblockdocs.com](https://wpblockdocs.com)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **WordPress Community**: For creating the amazing Gutenberg editor
- **Full Site Editing**: [fullsiteediting.com](https://fullsiteediting.com/) for invaluable FSE resources
- **WordPress.org**: For the official documentation foundation
- **Contributors**: All the developers who help improve this documentation

---

**[Visit wpblockdocs.com →](https://wpblockdocs.com)**

_Built with ❤️ for the WordPress community_
