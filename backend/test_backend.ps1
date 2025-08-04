# PowerShell script to test backend
Write-Host "🧪 Testing Backend with PowerShell..." -ForegroundColor Cyan
Write-Host "=".PadRight(50, "=") -ForegroundColor Yellow

# Test 1: Health check
Write-Host "1. Testing health endpoint..." -ForegroundColor Green
try {
    $response = Invoke-RestMethod -Uri "http://localhost:8000/api/health" -Method Get -TimeoutSec 5
    Write-Host "✅ Health check passed" -ForegroundColor Green
    Write-Host "   Response: $($response | ConvertTo-Json -Compress)" -ForegroundColor Gray
} catch {
    Write-Host "❌ Health check failed: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "   Make sure backend is running: python main.py" -ForegroundColor Yellow
    exit 1
}

Write-Host ""

# Test 2: AI test endpoint
Write-Host "2. Testing AI test endpoint..." -ForegroundColor Green
try {
    $response = Invoke-RestMethod -Uri "http://localhost:8000/api/test-ai" -Method Get -TimeoutSec 10
    Write-Host "✅ AI test passed" -ForegroundColor Green
    Write-Host "   Status: $($response.status)" -ForegroundColor Gray
    Write-Host "   Message: $($response.message)" -ForegroundColor Gray
    if ($response.test_response) {
        Write-Host "   AI Response: $($response.test_response)" -ForegroundColor Gray
    }
} catch {
    Write-Host "❌ AI test failed: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host ""

# Test 3: Chat endpoint
Write-Host "3. Testing chat endpoint..." -ForegroundColor Green
try {
    $body = @{
        message = "Hello, tell me about Mai's skills"
    } | ConvertTo-Json
    
    $response = Invoke-RestMethod -Uri "http://localhost:8000/api/chat" -Method Post -Body $body -ContentType "application/json" -TimeoutSec 15
    Write-Host "✅ Chat test passed" -ForegroundColor Green
    $responseText = $response.response
    if ($responseText.Length -gt 100) {
        $responseText = $responseText.Substring(0, 100) + "..."
    }
    Write-Host "   Response: $responseText" -ForegroundColor Gray
} catch {
    Write-Host "❌ Chat test failed: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host ""
Write-Host "=".PadRight(50, "=") -ForegroundColor Yellow
Write-Host "Test completed!" -ForegroundColor Cyan
