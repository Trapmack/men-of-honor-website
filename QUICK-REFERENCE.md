# 🛡️ Men of Honor Website - Quick Reference

## Server Status: ✅ RUNNING
- **Port**: 3000
- **Local IP**: 192.168.22.76
- **Network Access**: http://192.168.22.76:3000/

## Next Steps for No-IP Access:
1. **Configure No-IP**: Create hostname at no-ip.com
2. **Router Setup**: Forward port 3000 to 192.168.22.76
3. **Share URL**: http://your-hostname.no-ip.com:3000/

## Quick Commands:
```bash
# Start server
./start-server.sh

# Stop server
pkill -f "vite"

# Check server status
lsof -i :3000

# Get public IP
curl ifconfig.me
```

## Website Features:
✅ Modern responsive design
✅ Men of Honor branding
✅ Program information
✅ Newsletter section
✅ Social media feeds
✅ Contact form
✅ Foundation donation links
✅ Mobile-friendly navigation

Ready for external access! 🚀
