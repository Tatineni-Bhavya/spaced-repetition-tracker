# 📚 Spaced Repetition Tracker

A modern, feature-rich web application for learning optimization using the scientifically-proven spaced repetition technique.

## 🌟 Features

### Core Learning System
- **Smart Spaced Repetition Algorithm**: Science-backed review intervals for optimal memory retention
- **Subject Management**: Add, edit, delete, and search learning subjects
- **Flexible Review Scheduling**: Both automatic and manual review date setting
- **Progress Tracking**: Visual statistics and interactive charts

### Cloud & Sync
- **MongoDB Atlas Integration**: Secure cloud database storage
- **Cross-Device Synchronization**: Access your data from any device using email-based sync
- **Data Backup/Restore**: Export and import your learning data
- **Cloud Management**: Complete cloud data control including deletion

### Communication & Notifications
- **Email Notifications**: SendGrid-powered email alerts
- **SMS Alerts**: Twilio integration for text message reminders
- **Automated Reminders**: Daily review notifications to maintain consistency

### Modern UI/UX
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Dark/Light Theme**: User preference support with smooth transitions
- **Interactive Charts**: Visual progress tracking with Chart.js
- **Professional Interface**: Modern, clean design with smooth animations
- **Modal Interactions**: Intuitive popup interfaces

### Technical Excellence
- **Progressive Web App**: Can be installed as a native app
- **Offline Support**: IndexedDB for local data storage
- **Error Handling**: Robust error management and user feedback
- **Security**: Proper data validation and environment variable management
- **Performance**: Optimized loading and caching

## 🚀 Azure Deployment

This application is production-ready for Azure App Service deployment.

### Environment Variables Required:
```
MONGO_URI=your_mongodb_atlas_connection_string
TWILIO_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE=your_twilio_phone_number
SENDGRID_API_KEY=your_sendgrid_api_key
SENDER_EMAIL=your_verified_sender_email
PORT=80
WEBSITE_NODE_DEFAULT_VERSION=18.17.0
```

### Quick Deploy to Azure:
1. Create Azure App Service with Node.js 18 runtime
2. Set environment variables in Azure Portal Configuration
3. Deploy via GitHub Actions (automatically triggered on push)

See [DEPLOYMENT-GUIDE.md](DEPLOYMENT-GUIDE.md) for detailed deployment instructions.

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Charts**: Chart.js
- **Storage**: IndexedDB (client-side)
- **Notifications**: SendGrid (email), Twilio (SMS)
- **Deployment**: Azure App Service, GitHub Actions

## 📱 Usage

1. **Add Subjects**: Create subjects you want to learn
2. **Set Review Dates**: Use automatic spaced repetition or manual dates
3. **Review & Mark Complete**: Study and mark subjects as reviewed
4. **Track Progress**: Monitor your learning statistics
5. **Sync Across Devices**: Use email-based cloud sync
6. **Get Notifications**: Receive review reminders via email/SMS

## 🔒 Security

- All sensitive data (API keys, database credentials) externalized as environment variables
- No secrets committed to repository
- Secure cloud database with Atlas MongoDB
- Proper input validation and error handling

## 📈 Learning Science

Based on Hermann Ebbinghaus's Forgetting Curve research, this app implements optimal review intervals:
- Initial review: 1 day
- Second review: 3 days
- Third review: 7 days
- Fourth review: 14 days
- Fifth review: 30 days

## 🎯 Production Status

✅ **DEPLOYMENT READY** - Enterprise-level features with cloud sync, cross-device support, automated notifications, and modern UI.

---

**Built with ❤️ for optimized learning**
