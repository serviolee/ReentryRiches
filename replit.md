# ReentryRiches

## Overview

ReentryRiches is a financial empowerment platform designed for justice-impacted individuals. The application provides smart money guidance, budget management tools, savings tracking, and financial education resources. Built with a modern tech stack, it emphasizes an empowering, growth-oriented user experience that treats users as capable individuals building toward financial independence.

The platform follows a design philosophy inspired by modern fintech applications (Stripe, Cash App, Acorns), combining professional credibility with accessibility and clarity.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript
- Single-page application using Vite as the build tool and development server
- Client-side routing implemented with Wouter for lightweight navigation
- Component-based architecture with reusable UI components

**UI Component System**: Shadcn/ui with Radix UI primitives
- Comprehensive component library following the "new-york" style variant
- Tailwind CSS for styling with custom design tokens
- Dark mode support with CSS variable-based theming
- Accessible components built on Radix UI primitives

**State Management**: 
- React Query (TanStack Query) for server state management and data fetching
- Local component state for UI interactions
- Custom hooks for shared logic (e.g., `use-mobile`, `use-toast`)

**Design System**:
- Custom color palette emphasizing primary green (empowerment color)
- Inter font family for all typography
- Consistent spacing primitives using Tailwind units
- Responsive design with mobile-first approach
- Elevation system using hover and active states

### Backend Architecture

**Server Framework**: Express.js with TypeScript
- RESTful API structure with `/api` prefix for all endpoints
- Middleware for request logging and error handling
- HTTP server creation using Node's native `http` module
- Development mode with Vite integration for HMR

**Storage Layer**: 
- Interface-based storage abstraction (`IStorage`)
- In-memory storage implementation (`MemStorage`) for development
- Prepared for database integration (Drizzle ORM configured for PostgreSQL)
- CRUD operations abstracted behind storage interface

**Development Setup**:
- Hot module replacement in development via Vite middleware
- Separate build process for client (Vite) and server (esbuild)
- Runtime error overlay for better debugging experience

### Data Storage Solutions

**ORM**: Drizzle ORM
- Schema-first approach with TypeScript definitions
- PostgreSQL dialect configured
- Zod schema validation integration for runtime type safety
- Migration support configured in `drizzle.config.ts`

**Database Schema**:
- Users table with UUID primary keys, username, and password fields
- Schema defined in shared directory for reuse between client and server
- Type-safe insert and select schemas generated from Drizzle definitions

**Session Management**: 
- `connect-pg-simple` configured for PostgreSQL session storage
- Session middleware ready for authentication implementation

### Authentication and Authorization

**Current State**: Basic user schema defined
- Username/password fields in user model
- No authentication middleware currently implemented
- Storage interface includes user lookup methods (by ID and username)

**Prepared Infrastructure**:
- Session storage configured for future auth implementation
- User creation and retrieval methods in storage layer
- Insert user schema with validation ready for registration flows

### External Dependencies

**UI Component Libraries**:
- Radix UI (complete suite of accessible primitives)
- Lucide React for icons
- Embla Carousel for carousel functionality
- CMDK for command palette patterns

**Development Tools**:
- Replit-specific plugins (cartographer, dev banner, runtime error modal)
- TypeScript for type safety across the stack
- PostCSS with Tailwind CSS for styling

**Database & ORM**:
- Neon Database serverless driver (`@neondatabase/serverless`)
- Drizzle ORM and Drizzle Kit for schema management
- Connection pooling via Neon's serverless adapter

**Form Management**:
- React Hook Form for form state management
- Hookform Resolvers for validation integration
- Zod for schema validation

**Utilities**:
- `date-fns` for date manipulation
- `class-variance-authority` for variant-based styling
- `clsx` and `tailwind-merge` for conditional classes
- `nanoid` for ID generation

**Build & Development**:
- Vite for frontend bundling and dev server
- esbuild for backend bundling
- tsx for TypeScript execution in development
- Replit platform integrations for deployment