@ECHO OFF
SET BIN_TARGET=%~dp0/../vendor/jeremykendall/php-domain-parser/bin/parse
php "%BIN_TARGET%" %*
