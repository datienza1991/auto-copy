$functionContents = Get-Content -Path "./functions.ps1"
$copyContents = Get-Content -Path "./copy.ps1"
$combinedContent = $functionContents + "`n" + $copyContents
Out-File -FilePath "./output.ps1" -InputObject $combinedContent;