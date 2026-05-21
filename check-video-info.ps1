# Check video codec information
# This helps identify why the browser can't play it

$videoFile = "assets/videos/dancetotegther.mp4"

Write-Host "=== Video File Information ===" -ForegroundColor Cyan
Write-Host "File: $videoFile"
Write-Host "Size: $((Get-Item $videoFile).Length / 1MB) MB"
Write-Host ""

# If ffprobe is installed (comes with FFmpeg)
if (Get-Command ffprobe -ErrorAction SilentlyContinue) {
    Write-Host "=== Codec Information ===" -ForegroundColor Cyan
    ffprobe -v error -select_streams v:0 -show_entries stream=codec_name,profile,width,height,r_frame_rate -of default=noprint_wrappers=1 $videoFile
    Write-Host ""
    ffprobe -v error -select_streams a:0 -show_entries stream=codec_name,sample_rate -of default=noprint_wrappers=1 $videoFile
} else {
    Write-Host "FFmpeg/FFprobe not installed. Cannot check codec details." -ForegroundColor Yellow
    Write-Host "Download from: https://ffmpeg.org/download.html" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "=== Browser-Compatible Formats ===" -ForegroundColor Green
Write-Host "Video Codec: H.264 (AVC)"
Write-Host "Audio Codec: AAC"
Write-Host "Container: MP4"
