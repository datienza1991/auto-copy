function Get-Env {
    param (
        [Parameter(Mandatory = $true)]
        [string]$keyParam
    )

    $env = ".env"
    $envFound = Test-Path -Path $env

    if (!$envFound) {
        $env = "$env:APPDATA\auto-copy\.env"
    }

    # Read the contents of the .env file into a variable
    $envContent = Get-Content $env
 
    # Loop through each line in the file
    foreach ($line in $envContent) {
        # Split the line into a key/value pair
        $keyValue = $line.Split('=')
 
        # Extract the key and value
        $key = $keyValue[0]
        $value = $keyValue[1]
 
        # Do something with the key and value, for example:
        if ($key -eq $keyParam) {
            return $value;
        }
        return '';
    }
}

function Get-Paths-Json {
    $development = Get-Env -keyParam 'DEVELOPMENT'

    if ($development -eq "true") {
        $paths = Get-Content ".\paths.json" | ConvertFrom-Json;
        return $paths;
    }
    $paths = Get-Content "$env:APPDATA\auto-copy\paths.json" | ConvertFrom-Json;
    return $paths;
}

function Get-Runnable-Paths-Json {
    $jsons = Get-Paths-Json
    $dayOfWeek = (Get-Date).DayOfWeek

    $enabledPaths = $jsons | Where-Object { 
        ($_.disable -eq [bool]::Parse("false")) -and 
        ($_.activeDaysOfWeek | Where-Object { $_ -eq "$dayOfWeek" }).Count -eq 1 
    }
    Write-Host $enabledPaths
    return $enabledPaths;
}

function Get-LogFile-Path {
    $currentDate = Get-Date -UFormat "%m%d%Y";
    $logFileName = "log-$currentDate.txt";
    $development = Get-Env -keyParam 'DEVELOPMENT'
    
    if ($development -eq "true") {
        $logPath = ".\$logFileName";
        return $logPath;
    }
    $logPath = "$env:APPDATA\auto-copy\$logFileName";
    return $logPath;
}

function Format-Path-Double-Forward-Slash-To-Single {
    param (
        [Parameter(Mandatory = $true)]
        [string]$path
    )
    ## $path = $path.Replace("\\", "\")
    return $path;
}

function Get-Single-Slash-Path {
    param (
        [Parameter(Mandatory = $true)]
        [string]$path
    )

    if($path -eq ""){
        return;
    }

    return Format-Path-Double-Forward-Slash-To-Single -path $path
}