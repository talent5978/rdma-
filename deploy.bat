@echo off
echo 开始部署到GitHub...
echo.

echo 1. 拉取远程仓库内容...
git pull origin main --allow-unrelated-histories
if %errorlevel% neq 0 (
    echo 拉取失败，尝试强制推送...
    goto force_push
)

echo 2. 添加所有更改...
git add .

echo 3. 提交更改...
git commit -m "Merge remote repository with local changes"

echo 4. 推送到GitHub...
git push -u origin main
if %errorlevel% neq 0 (
    echo 推送失败，尝试强制推送...
    goto force_push
)

echo.
echo 部署成功！
echo 网站地址：https://talent5978.github.io/rdma-/
echo.
pause
exit

:force_push
echo 执行强制推送...
git push -u origin main --force
if %errorlevel% neq 0 (
    echo 强制推送也失败了，请检查网络连接和权限
    pause
    exit
)

echo.
echo 强制推送成功！
echo 网站地址：https://talent5978.github.io/rdma-/
echo.
pause
