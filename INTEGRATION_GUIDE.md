# Talash - Complete Application Guide

## Overview
Talash is a revolutionary job platform with dual interfaces for job seekers and companies, featuring a Tinder-style swipe interface, AI career coaching, and comprehensive company management tools.

## Application Structure

### **Landing Page** (`/`)
- Dual pathway selection: Job Seeker vs Company
- Clean, modern design with gradient backgrounds
- Direct navigation to appropriate auth flows

### **Job Seeker Flow**

#### Authentication
- **Sign Up**: `/auth/sign-up` - Create job seeker account
- **Login**: `/auth/login` - Access existing account
- Cross-links to company authentication

#### Main Features (`/protected/*`)
1. **Swipe Page** (`/protected/swipe`)
   - Tinder-style job browsing
   - Swipe right to apply, left to pass
   - Swipe up for details panel
   - 5-second undo functionality
   - Success dialog on application

2. **Dashboard** (`/protected/dashboard`)
   - Application tracking (All/Active/Closed)
   - Statistics overview
   - Application status management

3. **Chat** (`/protected/chat`)
   - AI career coach
   - Quick prompts
   - Hardcoded responses (prototype)

4. **Profile** (`/protected/profile`)
   - User information
   - Career goals & aspirations
   - Stats cards
   - Settings navigation

5. **Settings** (`/protected/settings`)
   - Notifications toggle
   - **Dark mode support**
   - Language settings
   - Privacy controls

6. **Personal Info** (`/protected/personal-info`)
   - Edit profile details
   - Avatar management
   - Bio editing

7. **Resume & Portfolio** (`/protected/resume`)
   - Resume upload
   - Portfolio links
   - Skills management
   - Work experience

8. **Preferences** (`/protected/preferences`)
   - Work location (Remote/Hybrid/On-site)
   - Employment type
   - Salary range sliders
   - Desired job titles

### **Company Flow**

#### Authentication
- **Sign Up**: `/auth/company-sign-up` - Register company account
- **Login**: `/auth/company-login` - Company portal access
- Cross-links to job seeker authentication

#### Company Features (`/company/*`)
1. **Dashboard** (`/company/dashboard`)
   - Statistics overview (Active jobs, Applicants, Views, Hired)
   - Quick actions (Post job, Review applicants, Create posts)
   - Recent jobs tab
   - Recent applicants tab

2. **Post Job** (`/company/post-job`)
   - Job details form
   - Dynamic requirements list
   - Salary range input
   - Rich description editor

3. **Review Applicants** (`/company/review-applicants`)
   - **Tinder-style swipe interface** for applicant review
   - Swipe right to approve
   - Swipe left to reject
   - Applicant profile cards
   - Skills & experience display

4. **Posts & Blogs** (`/company/posts`)
   - Create company updates or blog articles
   - Engagement metrics (views, likes, comments)
   - Post type selector
   - Statistics dashboard

## Key Features

### Swipe Mechanics
- Touch/mouse drag support
- Visual overlays (green checkmark, red X)
- Smooth animations
- Threshold-based actions (100px)
- Rotation effect on drag

### Dark Mode
- System preference detection
- Manual toggle in settings
- Persistent across sessions
- Smooth transitions

### Responsive Design
- Mobile-first approach
- Icon-only buttons on small screens
- Proper content centering
- Bottom navigation bar (64px) accounted for

### Bottom Navigation
- 4 main sections: Swipe, Dashboard, Chat, Profile
- Active state indication
- Fixed positioning (z-50)

## Navigation Map

```
Landing (/)
├── Job Seeker Path
│   ├── /auth/sign-up → /protected/swipe
│   ├── /auth/login → /protected/swipe
│   └── /protected/*
│       ├── swipe (default)
│       ├── dashboard
│       ├── chat
│       ├── profile
│       │   ├── settings
│       │   ├── personal-info
│       │   ├── resume
│       │   └── preferences
│
└── Company Path
    ├── /auth/company-sign-up → /company/dashboard
    ├── /auth/company-login → /company/dashboard
    └── /company/*
        ├── dashboard (default)
        ├── post-job
        ├── review-applicants
        └── posts
```

## Data Management

### Mock Data (`lib/mock-data.ts`)
- `getAvailableJobs()` - Fetch jobs not applied/discarded
- `applyToJob(job)` - Add to applications
- `discardJob(jobId)` - Add to discarded list
- `undoDiscard(jobId)` - Remove from discarded
- `resetMockData()` - Reset to initial state
- `getApplications()` - Fetch all applications
- `getProfile()` - Get user profile
- `updateProfile(data)` - Update profile data

### Local Storage Keys
- `talash_jobs` - Job listings
- `talash_applications` - User applications
- `talash_discarded` - Discarded job IDs
- `talash_profile` - User profile data

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **UI Components**: shadcn/ui
- **Icons**: lucide-react
- **Styling**: Tailwind CSS
- **Theming**: next-themes
- **State**: React hooks + localStorage

## Design System

### Colors
- Primary: Emerald green (oklch values)
- Success: Green-600
- Destructive: Red-500
- Muted: Gray tones

### Typography
- Font: Geist Sans
- Headings: Bold, various sizes
- Body: Regular, muted-foreground

### Spacing
- Cards: p-6, gap-4
- Bottom padding: pb-20 (for nav bar)
- Card borders: border-2

### Components
- Rounded corners: Large (rounded-lg, rounded-xl)
- Shadows: Layered (shadow-lg, shadow-2xl)
- Gradients: from-background to-muted/20
- Hover effects: border color changes

## Development Notes

### Prototype Mode
- No backend authentication
- Mock data in localStorage
- Hardcoded responses for AI chat
- Simplified routing (no auth checks)

### Future Enhancements
- Real backend API integration
- Database persistence
- Actual AI chat implementation
- Email notifications
- Search & filtering
- Advanced analytics
- Resume parsing
- Video interviews

## Getting Started

1. Install dependencies: `npm install`
2. Run dev server: `npm run dev`
3. Access landing page: `http://localhost:3000`
4. Choose job seeker or company path
5. All features work without authentication (prototype)

## File Structure

```
app/
├── page.tsx (Landing)
├── layout.tsx (Root with ThemeProvider)
├── auth/
│   ├── login/
│   ├── sign-up/
│   ├── company-login/
│   └── company-sign-up/
├── protected/ (Job Seeker)
│   ├── swipe/
│   ├── dashboard/
│   ├── chat/
│   ├── profile/
│   ├── settings/
│   ├── personal-info/
│   ├── resume/
│   └── preferences/
└── company/
    ├── dashboard/
    ├── post-job/
    ├── review-applicants/
    └── posts/

components/
├── ui/ (shadcn components)
├── bottom-nav.tsx
└── theme-provider.tsx

lib/
├── mock-data.ts
└── utils.ts
```

## Key Pages Summary

| Page | Route | Purpose |
|------|-------|---------|
| Landing | `/` | Entry point with dual pathways |
| Job Swipe | `/protected/swipe` | Main job browsing interface |
| Dashboard | `/protected/dashboard` | Application tracking |
| Company Dashboard | `/company/dashboard` | Company overview |
| Review Applicants | `/company/review-applicants` | Swipe-based applicant review |
| Post Job | `/company/post-job` | Create job posting |

## API Endpoints (Future)
- `/api/jobs` - Job listings
- `/api/applications` - Applications CRUD
- `/api/company/jobs` - Company job management
- `/api/company/applicants` - Applicant management
- `/api/chat` - AI chat integration
- `/api/auth` - Authentication

---

**Version**: 1.0.0 (Prototype)  
**Last Updated**: January 2026
