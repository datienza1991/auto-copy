$functionContents = Get-Content -Path "./functions.ps1"
$copyContents = Get-Content -Path "./copy.ps1"
$combinedContent = $functionContents + "`n" + $copyContents
Out-File -FilePath "./output.ps1" -InputObject $combinedContent;

$ftpCopyContents = Get-Content -Path "./ftp-copy.ps1"
$ftpCombinedContent = $functionContents + "`n" + $ftpCopyContents
Out-File -FilePath "./ftp-output.ps1" -InputObject $ftpCombinedContent;
