# PowerShell script to convert the video to browser-compatible format
# Requires FFmpeg to be installed: https://ffmpeg.org/download.html

$inputFile = "assets/videos/dancetotegther.mp4"
$outputFile = "assets/videos/dancetotegther_converted.mp4"

# Convert to H.264 codec with AAC audio (browser-compatible)
ffmpeg -i $inputFile -c:v libx264 -preset medium -crf 23 -c:a aac -b:a 128k $outputFile

Write-Host "Conversion complete! Replace the original file with the converted one."
