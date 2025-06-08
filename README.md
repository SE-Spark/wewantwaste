
# Skip Hire Booking Application

A modern React-based web application for booking skip hire services, built with TypeScript, Tailwind CSS, and shadcn/ui components.

## 🚀 Project Overview

This application provides a streamlined interface for customers to select and book skip hire services. The current implementation focuses on the skip selection step of a multi-step booking process.

## 🏗️ Architecture & Approach

### Design Philosophy
- **Component-First Architecture**: Small, focused, reusable components
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Type Safety**: Full TypeScript implementation for robust development
- **Modern UI/UX**: Clean, intuitive interface using shadcn/ui design system

### Key Features
- **Progressive Steps**: Visual progress indicator showing booking journey
- **Skip Selection**: Interactive cards displaying different skip sizes and pricing
- **Real-time Feedback**: Visual selection states and hover effects
- **Responsive Layout**: Optimized for all device sizes
- **Accessibility**: Semantic HTML and keyboard navigation support

## 🛠️ Technology Stack

### Core Technologies
- **React 18.3.1**: Modern React with hooks and functional components
- **TypeScript**: Type-safe development with full type coverage
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework for styling

### UI Framework
- **shadcn/ui**: High-quality, accessible component library
- **Radix UI**: Headless UI primitives for complex components
- **Lucide React**: Beautiful, customizable icons

### State Management & Data
- **React Query**: Server state management and caching
- **React Hook Form**: Efficient form handling with validation
- **Zod**: Runtime type validation and schema definition

### Additional Libraries
- **React Router**: Client-side routing
- **date-fns**: Date manipulation utilities
- **Recharts**: Data visualization and charts
- **Sonner**: Toast notifications

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui base components
│   ├── ProgressSteps.tsx # Step indicator component
│   ├── SkipCard.tsx     # Individual skip option card
│   └── SkipSelection.tsx # Main skip selection container
├── pages/               # Route-level page components
│   ├── Index.tsx        # Home page
│   └── NotFound.tsx     # 404 error page
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions and configurations
└── App.tsx             # Main application component
```

## 🎨 Design System

### Color Scheme
- Uses CSS custom properties for theming
- Semantic color tokens (primary, secondary, muted, etc.)
- Dark mode support built-in
- Consistent color usage across components

### Component Design
- **Card-based Layout**: Skip options presented as interactive cards
- **Visual Hierarchy**: Clear typography and spacing
- **Interactive States**: Hover, focus, and selection feedback
- **Progressive Enhancement**: Works without JavaScript

## 🔧 Development Approach

### Component Strategy
1. **Small Components**: Each component has a single responsibility
2. **Composition over Inheritance**: Building complex UIs from simple parts
3. **Props Interface**: Well-defined TypeScript interfaces for all props
4. **Reusability**: Components designed to be used across the application

### State Management
- **Local State**: React useState for component-specific state
- **Form State**: React Hook Form for complex form handling
- **Server State**: React Query for API data management
- **Global State**: Context API for app-wide state when needed

### Styling Approach
- **Utility-First**: Tailwind CSS for rapid development
- **Design Tokens**: Consistent spacing, colors, and typography
- **Responsive Design**: Mobile-first breakpoint system
- **Component Variants**: Using class-variance-authority for dynamic styling

## 📱 User Experience

### Skip Selection Flow
1. **Visual Progress**: Users see their current step in the booking process
2. **Option Comparison**: Clear display of skip sizes, prices, and features
3. **Interactive Selection**: Click to select with visual feedback
4. **Price Transparency**: Clear pricing with VAT breakdown
5. **Contextual Information**: Road placement and waste type indicators

### Accessibility Features
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- High contrast color ratios
- Focus management

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (recommended: Node.js 20 LTS)
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd skip-hire-booking

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint


## 📈 Performance Considerations

- **Code Splitting**: Dynamic imports for route-based splitting
- **Bundle Optimization**: Tree-shaking and dead code elimination
- **Image Optimization**: Lazy loading and responsive images
- **Caching Strategy**: React Query for efficient data caching

## 🧪 Testing Strategy

- **Unit Tests**: Component testing with React Testing Library
- **Integration Tests**: User flow testing
- **Accessibility Tests**: Automated a11y testing
- **Performance Tests**: Core Web Vitals monitoring
