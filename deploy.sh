# Deploy Script for Production
echo "🚀 Starting production deployment..."

# Remove node_modules and reinstall
echo "📦 Cleaning and installing dependencies..."
rm -rf node_modules package-lock.json
npm install

# Build the project
echo "🏗️ Building the project..."
npm run build

# Check if build was successful
if [ -d "dist" ]; then
    echo "✅ Build successful! Deploy ready."
    echo "📂 Build output:"
    ls -la dist/
else
    echo "❌ Build failed!"
    exit 1
fi

echo "🎉 Ready for deployment!"
echo "💡 Don't forget to set VITE_API_URL in Vercel environment variables!"
