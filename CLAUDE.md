# CLAUDE.md - Workouter Project Guidelines

## Build/Test/Lint Commands
- `npm run dev` - Run development server with turbopack
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run test` - Run all Vitest tests
- `npm run test __tests__/actions.test.ts` - Run specific test file
- `npm run test -- -t "test name"` - Run tests matching pattern

## Code Style Guidelines
- **TypeScript**: Strict typing required, interfaces preferred over types
- **Imports**: Use absolute paths with `@/` prefix
- **Formatting**: Follow ESLint rules (based on Next.js defaults)
- **Naming**:
  - React components: PascalCase
  - Functions/variables: camelCase
  - Interfaces/types: PascalCase with "I" prefix optional
- **Error Handling**: Use try/catch with specific error types
- **Testing**: Use Vitest with test.each for parameterized tests
- **Components**: Prefer functional components with hooks

Always run tests after code changes to ensure functionality is preserved.