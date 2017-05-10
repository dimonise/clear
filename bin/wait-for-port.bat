@ECHO OFF
SET BIN_TARGET=%~dp0/../vendor/lakion/mink-debug-extension/travis/tools/wait-for-port
bash "%BIN_TARGET%" %*
