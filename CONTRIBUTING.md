# Contributing to WordPress Block Documentation

Thank you for your interest in contributing to WordPress Block Documentation! This project thrives on community contributions, and we welcome all forms of participation.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Ways to Contribute](#ways-to-contribute)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Documentation Standards](#documentation-standards)
- [Code Style Guidelines](#code-style-guidelines)
- [Submitting Changes](#submitting-changes)
- [Review Process](#review-process)

## Code of Conduct

This project follows the [WordPress Community Code of Conduct](https://make.wordpress.org/handbook/community-code-of-conduct/). By participating, you agree to uphold this code. Please report unacceptable behavior to the project maintainers.

## Ways to Contribute

### 📝 Documentation Improvements

- **Block Documentation**: Add missing blocks or improve existing documentation
- **Code Examples**: Provide real-world markup examples
- **Best Practices**: Share expert knowledge and guidelines
- **FSE Quirks**: Document edge cases and workarounds

### 🐛 Bug Reports

- **Broken Examples**: Report incorrect or outdated markup
- **Website Issues**: Report UI/UX problems or broken functionality
- **Performance Issues**: Help us identify and fix performance bottlenecks

### ✨ Feature Requests

- **New Tools**: Suggest developer tools or utilities
- **UI Improvements**: Propose better user experience enhancements
- **Search Enhancements**: Help improve documentation discoverability

### 🔗 Resource Submissions

- **External Resources**: Submit valuable links for our resources page
- **Community Content**: Share tutorials, articles, or tools
- **Official Updates**: Help us track new WordPress documentation

### 🧪 Quality Assurance

- **Testing**: Help test new features and documentation
- **Accessibility**: Improve accessibility across the site
- **Cross-browser**: Ensure compatibility across different browsers

## Getting Started

### Prerequisites

- Node.js 18 or higher
- Git
- A code editor (VS Code recommended)
- Basic knowledge of React, TypeScript, and WordPress blocks

### Fork and Clone

1. **Fork the repository** on GitHub
2. **Clone your fork locally**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/wp-block-docs.git
   cd wp-block-docs
   ```
3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/house-of-giants/wp-block-docs.git
   ```

### Local Development

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Start development server**:

   ```bash
   npm run dev
   ```

3. **Verify setup**:
   - Open http://localhost:8080
   - Ensure the site loads correctly
   - Test navigation and search functionality

## Development Workflow

### Branch Strategy

- **main**: Production-ready code
- **feature/**: New features (`feature/add-media-text-block`)
- **fix/**: Bug fixes (`fix/search-modal-keyboard-nav`)
- **docs/**: Documentation updates (`docs/improve-button-block`)

### Before Making Changes

1. **Sync with upstream**:

   ```bash
   git checkout main
   git pull upstream main
   git push origin main
   ```

2. **Create feature branch**:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
4. **Test locally**:
   ```bash
   npm run dev        # Start dev server
   npm run typecheck  # Check TypeScript
   npm test          # Run tests
   ```

## Documentation Standards

### Block Documentation Structure

When documenting a WordPress block, follow this structure:

1. **Page Header**: Use `BlockPageLayout` component with proper metadata
2. **Basic Syntax**: Simple, common use case
3. **Variations**: Different configurations and options
4. **Advanced Examples**: Complex real-world scenarios
5. **Properties Reference**: Complete attribute documentation
6. **Best Practices**: Expert tips and guidelines
7. **Common Issues**: Known problems and solutions

### Code Examples

- **Use Real Markup**: Provide actual WordPress-generated HTML
- **Include Comments**: Explain WordPress block comments
- **Show Context**: Include surrounding blocks when relevant
- **Test Examples**: Ensure all code examples work correctly

### Writing Style

- **Clear and Concise**: Use simple, direct language
- **Developer-Focused**: Assume readers have technical knowledge
- **Practical**: Provide actionable information
- **Consistent**: Follow established patterns and terminology

## Code Style Guidelines

### TypeScript

- Use TypeScript for all new code
- Define proper interfaces for props and data structures
- Avoid `any` types - use proper typing
- Export types when they might be reused

### React Components

- Use functional components with hooks
- Follow existing component patterns
- Use the established UI components from `components/ui/`
- Implement proper accessibility attributes

### Styling

- Use TailwindCSS utility classes
- Follow the established retrowave theme
- Use CSS variables defined in `global.css`
- Ensure responsive design
- Test dark theme compatibility

### File Organization

- Place components in appropriate directories
- Use clear, descriptive file names
- Export components properly
- Import using path aliases (`@/` for client, `@shared/` for shared)

## Submitting Changes

### Commit Guidelines

Use clear, descriptive commit messages following this pattern:

```
type(scope): description

Examples:
feat(blocks): add Media & Text block documentation
fix(search): improve keyboard navigation in search modal
docs(readme): update installation instructions
style(ui): improve button hover states
```

### Pull Request Process

1. **Ensure Quality**:

   - Run `npm run typecheck` with no errors
   - Test your changes thoroughly
   - Follow coding standards

2. **Create Pull Request**:

   - Use a descriptive title
   - Provide detailed description
   - Reference related issues
   - Add screenshots for UI changes

3. **PR Template**:

   ```markdown
   ## Description

   Brief description of changes

   ## Type of Change

   - [ ] Bug fix
   - [ ] New feature
   - [ ] Documentation update
   - [ ] Code refactor

   ## Testing

   - [ ] Tested locally
   - [ ] No TypeScript errors
   - [ ] Responsive design verified

   ## Screenshots

   (If applicable)
   ```

### Review Criteria

Your pull request will be reviewed for:

- **Functionality**: Does it work as intended?
- **Code Quality**: Is it well-written and maintainable?
- **Documentation**: Is it properly documented?
- **Design Consistency**: Does it match the existing design?
- **Accessibility**: Is it accessible to all users?
- **Performance**: Does it impact site performance?

## Review Process

### Review Timeline

- **Initial Review**: Within 48 hours
- **Feedback**: Constructive feedback provided
- **Follow-up**: Additional reviews as needed
- **Merge**: After approval and passing checks

### What Reviewers Look For

1. **Accuracy**: Is the documentation accurate?
2. **Completeness**: Does it cover all necessary aspects?
3. **Clarity**: Is it easy to understand?
4. **Consistency**: Does it match existing patterns?
5. **Quality**: Is the code well-written?

### After Review

- **Address Feedback**: Make requested changes promptly
- **Ask Questions**: Clarify unclear feedback
- **Update PR**: Push additional commits as needed
- **Be Patient**: Allow time for re-review

## Recognition

Contributors are recognized in several ways:

- **GitHub Contributors**: Automatic recognition in repository
- **Website Credits**: Major contributors featured on the site
- **Community Mentions**: Recognition in project updates

## Getting Help

Need help contributing? Here are your options:

- **GitHub Issues**: Ask questions in issues
- **GitHub Discussions**: Start a discussion for broader topics
- **Email**: Contact project maintainers directly

## Resources for Contributors

### WordPress Block Development

- [Block Editor Handbook](https://developer.wordpress.org/block-editor/)
- [WordPress Coding Standards](https://developer.wordpress.org/coding-standards/)
- [Full Site Editing](https://fullsiteediting.com/)

### Technical Documentation

- [React Documentation](https://reactjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)

### Tools

- [WordPress Playground](https://playground.wordpress.net/) - Test WordPress features
- [Block Development Examples](https://github.com/WordPress/block-development-examples)
- [Gutenberg Storybook](https://wordpress.github.io/gutenberg/)

---

Thank you for contributing to WordPress Block Documentation! Your contributions help make WordPress development better for everyone. 🎉
