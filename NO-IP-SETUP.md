# Men of Honor Website - No-IP Setup Guide

## 🌐 Current Server Status
- **Local URL**: http://localhost:3000/
- **Network URL**: http://192.168.22.76:3000/
- **Status**: ✅ Running and accessible externally

## 🔧 No-IP Configuration Steps

### Step 1: Set Up No-IP Account
1. Go to [No-IP.com](https://www.noip.com/)
2. Create a free account or log in
3. Create a hostname (e.g., `menofhonor.no-ip.com`)

### Step 2: Configure Dynamic DNS
1. Download and install the No-IP DUC (Dynamic Update Client)
2. Configure it with your No-IP credentials
3. Set it to update your hostname with your current IP address

### Step 3: Router Configuration
1. Access your router's admin panel (usually http://192.168.1.1)
2. Navigate to Port Forwarding / Virtual Server settings
3. Add a new rule:
   - **Service Name**: Men of Honor Website
   - **External Port**: 3000
   - **Internal IP**: 192.168.22.76 (your laptop's IP)
   - **Internal Port**: 3000
   - **Protocol**: TCP
   - **Status**: Enabled

### Step 4: Firewall Configuration (macOS)
```bash
# Allow incoming connections on port 3000
sudo pfctl -f /etc/pf.conf
```

Or use System Preferences:
1. System Preferences → Security & Privacy → Firewall
2. Add Node.js or allow incoming connections

## 🚀 Starting the Server

### Option 1: Use the startup script
```bash
./start-server.sh
```

### Option 2: Manual commands
```bash
# Build the production version
npm run build

# Start the server
npm run preview
```

### Option 3: Development server with external access
```bash
npm run dev-external
```

## 📱 Access URLs

Once configured, your website will be accessible at:
- **Local**: http://localhost:3000/
- **Local Network**: http://192.168.22.76:3000/
- **External**: http://your-chosen-hostname.no-ip.com:3000/

## 🔒 Security Considerations

1. **Firewall**: Only open port 3000, not all ports
2. **Router**: Consider changing the external port for security
3. **HTTPS**: For production, consider setting up SSL certificates
4. **Updates**: Keep the No-IP client updated

## 🛠️ Troubleshooting

### If the website isn't accessible externally:
1. Check if the server is running: `lsof -i :3000`
2. Verify your router's port forwarding
3. Check your public IP: `curl ifconfig.me`
4. Ensure No-IP client is running and updated
5. Test local network access first: http://192.168.22.76:3000/

### If you get connection errors:
1. Restart the server: `pkill -f "vite" && ./start-server.sh`
2. Check macOS firewall settings
3. Verify port 3000 is not blocked

## 📊 Monitoring

### Check if server is running:
```bash
lsof -i :3000
```

### Check your public IP:
```bash
curl ifconfig.me
```

### Test local network access:
```bash
curl -I http://192.168.22.76:3000/
```

## 🎯 Final Steps

1. ✅ Server is running on port 3000
2. ⏳ Configure No-IP hostname
3. ⏳ Set up router port forwarding
4. ⏳ Test external access
5. ⏳ Share your No-IP URL with others

Your Men of Honor website is ready to be accessed by anyone with your No-IP URL!
