# 🍽️ Liverooo! - Team Lunch Ordering Application

Liverooo! is a web application that simplifies team lunch ordering for office teams. Teams can browse nearby restaurants, filter by cuisine type and delivery time, create group orders with budget control, and receive alerts when budgets are exceeded.

## 📁 Project Structure

```
liveroo_app/
├── web/                    # Frontend React application
│   ├── public/            # Static assets
│   ├── src/               # React source code
│   └── package.json       # Web dependencies
├── api/                   # Backend API services
│   ├── config/            # API configuration
│   ├── services/          # Business logic services
│   ├── models/            # Data models
│   ├── index.js           # API entry point
│   └── package.json       # API dependencies
├── docs/                  # Documentation
│   ├── README.md          # Project documentation
│   ├── CONTRIBUTING.md    # Contribution guidelines
│   └── TEAM_RULES.md      # Team development rules
└── package.json           # Root project configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install all dependencies:
   ```bash
   npm run install-all
   ```

### Development

This project uses npm workspaces with separate frontend (`web/`) and backend (`api/`) directories.

**Start the web application:**
```bash
npm start
# or
npm run dev
```

**Start the API server:**
```bash
npm run api
```

**Run both simultaneously:**
```bash
npm run dev & npm run api
```

### Important Notes

- **Always run commands from the root directory** (`liveroo_app/`)
- The React app is located in the `web/` directory
- The API server is located in the `api/` directory
- Use the root package.json scripts to ensure proper workspace handling

## 🎯 Features

- **Restaurant Discovery**: Browse restaurants around your office
- **Smart Filtering**: Filter by cuisine type and delivery time
- **Team Orders**: Create group orders with budget per person
- **Budget Control**: Get alerts when budget is exceeded
- **Simple Interface**: Intuitive and fast ordering experience
- **Deadline Management**: Set order deadlines for team coordination

## 🛠️ Technology Stack

### Frontend (Web)
- React 19
- Modern CSS with responsive design
- React Scripts for development

### Backend (API)
- Node.js
- Express.js
- CORS enabled
- Environment configuration

## 🔧 Troubleshooting

### Common Issues

**Webpack errors about missing files:**
- If you see errors like "Can't resolve 'src/index.js'" or "Can't resolve 'public/index.html'", you're likely running commands from the wrong directory
- **Solution**: Always run commands from the root directory (`liveroo_app/`), not from `web/` or `api/` subdirectories
- Use the provided npm scripts (`npm start`, `npm run dev`, `npm run api`) which handle the directory navigation automatically

**Module not found errors:**
- Ensure you've run `npm run install-all` to install dependencies for all workspaces
- If issues persist, try: `npm install` in root, then `cd web && npm install`, then `cd ../api && npm install`

## 📖 Documentation

See the `docs/` folder for detailed documentation:
- [Project README](docs/README.md)
- [Contributing Guidelines](docs/CONTRIBUTING.md)
- [Team Rules](docs/TEAM_RULES.md)

## 🤝 Contributing

Please read our [Contributing Guidelines](docs/CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is private and proprietary to Liverooo! team.
