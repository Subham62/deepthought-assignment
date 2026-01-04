# DeepThought Frontend Developer Assignment

## Overview
This repository contains my submission for the DeepThought Frontend Intern "Role Test Drive" assignment. The project implements a dynamic Journey Board interface that renders content from JSON data, featuring expandable/collapsible states and reusable component architecture.

## Assignment Tasks

### Task 1: Webpage Creation
- Implemented pixel-accurate HTML/CSS based on the provided Figma design
- Created two states: Journey Board collapsed and Journey Board expanded
- Figma reference: https://www.figma.com/file/hrBbLgcBWyoomChuI

### Task 2: Dynamic Elements
- Built dynamic page rendering from local JSON data structure
- Implemented reusable asset container components as template functions
- Used JavaScript loops to render all assets within each task
- Created expandable/collapsible description functionality for each asset
- Implemented Journey Board sidebar toggle (expand/collapse)

## Tech Stack
- **HTML5** - Semantic markup
- **CSS3** - Flexbox/Grid layout, custom properties for theming
- **Vanilla JavaScript (ES6+)** - No frameworks, pure JS for dynamic rendering

## Features Implemented

### Core Functionality
- Dynamic content rendering from JSON (no hardcoded content)  
- Reusable asset container component system  
- Journey Board expand/collapse toggle  
- Individual asset description expand/collapse with arrow icons  
- Responsive layout for desktop and tablet screens  
- Clean separation of data, components, and logic  

### Data Structure
The application follows a three-level hierarchy:
- **Project** → Contains multiple tasks
- **Task** → Contains array of assets
- **Asset** → Individual content items (videos, articles, etc.)

Each asset includes:
- `asset_id` - Unique identifier
- `asset_title` - Display title
- `asset_description` - Expandable description text
- `asset_content` - URL/embed link
- `asset_type` - Type classification
- `asset_content_type` - Media type (video/article/etc)

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Edge, Safari)
- VS Code with Live Server extension (recommended)

### Installation & Run

#### Option 1: Direct Open
1. Clone this repository:
   ```bash
   git clone https://github.com/Subham62/deepthought-assignment.git
   cd deepthought-frontend-assignment
   ```
2. Open ```index.html``` directly in your browser or open with live server


## Project Architecture
```
├── index.html          # Main HTML structure
├── css/
│   └── styles.css      # All styling (variables, layout, components)
├── js/
│   ├── data.js         # JSON data (project/tasks/assets)
│   ├── components.js   # Reusable asset container templates
│   └── main.js         # Application logic & event handlers
└── README.md
```

## Code Organization

### data.js
Contains the complete JSON structure representing the project hierarchy. Data is stored in a local JavaScript object/variable for easy manipulation.

### components.js
Exports reusable template functions:

- createAssetContainer(asset) - Returns HTML string for a single asset

- createTaskSection(task) - Returns HTML for task with all assets

- Functions accept data objects and return template literals

### main.js
- Imports data and component functions

- Renders initial page state

- Handles all interactive events (expand/collapse toggles)

- Manages Journey Board sidebar state

## Implementation Highlights
### No Hardcoding Approach
As per assignment requirements, the UI is completely data-driven:

- Asset titles, descriptions, and content URLs come from JSON

- Changing data.js immediately reflects in the UI

- Scalable architecture - adding new tasks/assets requires zero HTML changes

### Reusable Components
Asset containers are created via template functions that:

- Accept asset object as parameter

- Return consistent HTML structure

- Can be called in loops for any number of assets

- Follow DRY (Don't Repeat Yourself) principles

### Event Handling
- Journey Board toggle uses class-based state management

- Asset description expansion tracked per asset ID

- Smooth CSS transitions for all interactive elements

## Fair AI Usage Policy Compliance
### AI Tools Used
GitHub Copilot - Code autocompletion for CSS styling and JavaScript loops

ChatGPT/Perplexity - Clarifying assignment requirements and debugging specific issues

### What I Wrote Myself
- Complete project architecture and folder structure

- All core business logic (rendering pipeline, event handlers)

- JSON data structure modeling

- Component template design decisions

- CSS layout strategy and responsive breakpoints

- Integration and final testing

### What Was NOT Copy-Pasted
- No complete code blocks were copied without understanding

- All AI suggestions were reviewed, adapted, and tested

- Architecture decisions and implementation approach are original

- Debugging and problem-solving done manually

I used AI as a productivity tool for syntax help and clarifications, not as a replacement for understanding or problem-solving.

## Design Decisions

### State Management
Used simple class toggling (collapsed/expanded) rather than complex state libraries to keep the codebase lean and understandable.

### CSS Methodology
CSS custom properties for colors, spacing, and typography

BEM-inspired naming for component classes

Mobile-first responsive approach

### Accessibility
Semantic HTML elements 

ARIA attributes for expandable elements

Keyboard navigation support for interactive elements

## Browser Compatibility
Tested and verified on:

- Chrome 120+

- Firefox 120+

- Safari 17+

- Edge 120+

## Known Limitations & Future Improvements

### Current Limitations
- Mobile (< 768px) layout could be further optimized

- No backend integration (as per assignment scope)

- Asset content embeds (YouTube) may require additional styling

### Potential Enhancements
- Add local storage to persist Journey Board state

- Implement search/filter functionality for assets

- Add loading states for embedded content

- Support for more asset types (PDFs, images, etc)

### Submission Details
GitHub Repository: ``` https://github.com/Subham62/deepthought-assignment ```

### Learning Outcomes
Through this assignment, I demonstrated:

1. Comprehension of documentation - Successfully parsed multi-tab assignment instructions

2. Aesthetic sense - Replicated Figma design with attention to spacing, typography, and layout

3. Execution of logic - Implemented dynamic rendering system with reusable components following DRY principles

4. Problem-solving mindset - Designed scalable architecture without over-engineering

### Contact
For any questions regarding this submission, please reach out via the Internshala platform.

***Note***: This project is part of the DeepThought CultureTech selection process and follows their Fair AI Usage Policy guidelines.