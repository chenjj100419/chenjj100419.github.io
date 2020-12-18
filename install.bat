@echo off
@title Install...
echo Install WebPages
del %APPDATA%\chenjj100419MyBlog
mkdir %APPDATA%\chenjj100419MyBlog
copy /y /v .\* %APPDATA%\chenjj100419MyBlog
start %APPDATA%\chenjj100419MyBlog\index.html
pause
