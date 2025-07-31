# Sapphire Analytics Dashboard

A modern, comprehensive analytics dashboard for Sapphire, Pakistan's leading fashion retail brand. Built with React 18+, TypeScript, and Tailwind CSS v4.

## 🚀 Features

- **Modern Tech Stack**: React 18+ with TypeScript, Vite, and Tailwind CSS v4
- **Beautiful UI**: Shadcn/UI components with Sapphire brand colors
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Authentication**: Protected routes with login/logout functionality
- **State Management**: Zustand for lightweight, modern state management
- **Type Safety**: Full TypeScript support with strict type checking

## 🛠️ Technology Stack

- **Framework**: React 18+ with TypeScript
- **Build Tool**: Vite (latest)
- **Styling**: Tailwind CSS v4 with custom Sapphire theme
- **UI Library**: Shadcn/UI components
- **Icons**: Lucide React
- **State Management**: Zustand
- **Routing**: React Router DOM
- **Forms**: React Hook Form with Zod validation
- **Theme**: Dark/Light mode support

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sapphire-analytics-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔐 Authentication

The dashboard includes a demo authentication system. Use these credentials to log in:

- **Email**: `admin@sapphire.com`
- **Password**: `password123`

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Shadcn/UI components
│   ├── layout/          # Layout components (Sidebar, Header, etc.)
│   ├── forms/           # Form components
│   ├── common/          # Reusable components (Logo, LoadingSpinner, etc.)
│   └── dashboard/       # Dashboard-specific components
├── pages/
│   ├── auth/            # Authentication pages
│   ├── dashboard/       # Dashboard pages
│   └── settings/        # Settings pages
├── hooks/               # Custom React hooks
├── store/               # Zustand stores
├── types/               # TypeScript type definitions
├── utils/               # Utility functions
├── router/              # Routing configuration
└── styles/              # Global styles
```

## 🎨 Design System

### Colors
- **Primary**: Sapphire Blue (`#0ea5e9`)
- **Secondary**: Neutral grays
- **Success**: Green
- **Warning**: Yellow
- **Error**: Red

### Typography
- Clean, modern fonts
- Consistent spacing and sizing
- Responsive text scaling

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 📱 Responsive Design

The dashboard is fully responsive and works on:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_APP_NAME=Sapphire Analytics Dashboard
VITE_API_URL=your-api-url-here
```

### Tailwind CSS v4 Configuration
This project uses Tailwind CSS v4 with the new `@tailwindcss/vite` plugin. The configuration is done directly in the CSS file using `@theme` directives:

```css
@import "tailwindcss";

@theme {
  --color-sapphire-500: #0ea5e9;
  --color-background: 0 0% 100%;
  --color-foreground: 222.2 84% 4.9%;
  /* ... more theme variables */
}

@theme dark {
  --color-background: 222.2 84% 4.9%;
  --color-foreground: 210 40% 98%;
  /* ... dark theme variables */
}
```

## 🎯 Key Features

### Dashboard Sections
1. **Control Center** - Main dashboard with key metrics
2. **Store Analytics** - Sales and performance analytics
3. **Customer Insights** - Customer behavior analysis
4. **Performance** - KPI tracking and optimization
5. **Reports** - Custom reports and data export
6. **Settings** - System configuration

### Authentication
- Protected routes
- Login/logout functionality
- Persistent authentication state
- Loading states and error handling

### UI Components
- Responsive sidebar with collapsible navigation
- Header with breadcrumbs and user menu
- Theme toggle (light/dark/system)
- Loading spinners and empty states
- Form validation with error messages

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Connect your repository to Vercel
2. Set environment variables
3. Deploy automatically on push to main branch

### Deploy to Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## 🔮 Future Enhancements

- [ ] Real-time data integration
- [ ] Advanced analytics charts
- [ ] Export functionality
- [ ] User management system
- [ ] API integration
- [ ] Performance optimizations
- [ ] Unit and integration tests
- [ ] PWA capabilities

## 📚 Latest Technology Versions

This project uses the latest stable versions of all technologies:

- **React**: 18.3.1
- **TypeScript**: 5.5.4
- **Vite**: 7.0.6
- **Tailwind CSS**: 4.1.11
- **Shadcn/UI**: Latest
- **Zustand**: 5.0.2
- **React Router**: 6.28.0
- **Lucide React**: 0.468.0

---

Built with ❤️ for Sapphire
