@ECHO OFF
SET BIN_TARGET=%~dp0/../vendor/se/selenium-server-standalone/bin/selenium-server-standalone
sh "%BIN_TARGET%" %*
