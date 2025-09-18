# GitHub Pages 部署指南

本指南将帮助您将RDMA可扩展性学习平台部署到GitHub Pages。

## 🚀 快速部署步骤

### 1. 创建GitHub仓库

1. 登录 [GitHub](https://github.com)
2. 点击右上角的 "+" 号，选择 "New repository"
3. 填写仓库信息：
   - **Repository name**: `rdma-scalability-platform`
   - **Description**: `RDMA可扩展性学习平台 - 综合版`
   - **Visibility**: 选择 Public（免费用户）或 Private
   - **Initialize**: 不要勾选任何初始化选项

### 2. 上传项目文件

#### 方法一：使用Git命令行（推荐）

```bash
# 1. 初始化Git仓库
git init

# 2. 添加所有文件
git add .

# 3. 提交更改
git commit -m "Initial commit: RDMA可扩展性学习平台"

# 4. 添加远程仓库（替换your-username为您的GitHub用户名）
git remote add origin https://github.com/your-username/rdma-scalability-platform.git

# 5. 推送到GitHub
git branch -M main
git push -u origin main
```

#### 方法二：使用GitHub Desktop

1. 下载并安装 [GitHub Desktop](https://desktop.github.com/)
2. 打开GitHub Desktop
3. 选择 "Clone a repository from the Internet"
4. 输入您的仓库URL
5. 选择本地保存位置
6. 将项目文件复制到克隆的文件夹中
7. 在GitHub Desktop中提交并推送更改

#### 方法三：直接上传文件

1. 在GitHub仓库页面点击 "uploading an existing file"
2. 将项目文件拖拽到页面上
3. 填写提交信息并提交

### 3. 启用GitHub Pages

1. 进入您的仓库页面
2. 点击 "Settings" 标签
3. 在左侧菜单中找到 "Pages"
4. 在 "Source" 部分选择 "Deploy from a branch"
5. 选择 "main" 分支和 "/ (root)" 文件夹
6. 点击 "Save"

### 4. 等待部署完成

- GitHub Pages 通常需要几分钟来部署
- 部署完成后，您会收到邮件通知
- 您的网站将在 `https://your-username.github.io/rdma-scalability-platform/` 访问

## 🔧 高级配置

### 自定义域名

如果您有自己的域名：

1. 在仓库根目录创建 `CNAME` 文件
2. 在文件中写入您的域名（如：`rdma.example.com`）
3. 在GitHub Pages设置中配置自定义域名
4. 在您的域名DNS设置中添加CNAME记录

### 自动部署

项目已配置GitHub Actions自动部署：

- 每次推送到 `main` 分支时自动部署
- 部署状态可以在 "Actions" 标签中查看
- 如果部署失败，会收到邮件通知

## 📁 项目文件结构

确保您的项目包含以下文件：

```
rdma-scalability-platform/
├── index.html                 # 主页面（GitHub Pages入口）
├── README.md                  # 项目说明
├── .gitignore                 # Git忽略文件
├── .github/
│   └── workflows/
│       └── deploy.yml         # 自动部署配置
├── rdma_learning_site/        # 论文分析站点
│   ├── index.html
│   ├── papers/
│   ├── styles/
│   └── scripts/
├── try/                       # 学习资源
│   └── rdma-learning.html
└── rdma_qp_scalability_learning.html
```

## 🐛 常见问题

### 1. 页面显示404错误

**原因**：GitHub Pages找不到入口文件
**解决**：确保 `index.html` 在仓库根目录

### 2. 样式或脚本不加载

**原因**：文件路径问题
**解决**：检查所有链接使用相对路径

### 3. PDF文件无法预览

**原因**：PDF文件路径或浏览器安全限制
**解决**：确保PDF文件在正确的相对路径下

### 4. 部署失败

**原因**：GitHub Actions配置问题
**解决**：检查 `.github/workflows/deploy.yml` 文件语法

## 🔄 更新网站

每次更新网站内容：

1. 修改本地文件
2. 提交更改：
   ```bash
   git add .
   git commit -m "Update: 描述您的更改"
   git push origin main
   ```
3. GitHub Actions会自动部署更新

## 📊 监控和统计

### 查看访问统计

1. 在仓库页面点击 "Insights"
2. 选择 "Traffic" 查看访问统计
3. 可以查看页面访问量、独立访客等数据

### 查看部署状态

1. 点击 "Actions" 标签
2. 查看最新的部署状态
3. 如果部署失败，点击查看详细错误信息

## 🎯 优化建议

### 性能优化

1. **压缩图片**：使用工具压缩图片文件
2. **合并CSS/JS**：减少HTTP请求
3. **启用Gzip**：GitHub Pages自动启用

### SEO优化

1. **添加meta标签**：在HTML头部添加描述和关键词
2. **使用语义化HTML**：提高搜索引擎理解
3. **添加sitemap**：帮助搜索引擎索引

### 用户体验

1. **添加加载动画**：提升用户体验
2. **优化移动端**：确保响应式设计
3. **添加搜索功能**：方便用户查找内容

## 📞 技术支持

如果遇到问题：

1. 查看 [GitHub Pages文档](https://docs.github.com/en/pages)
2. 在项目仓库中提交Issue
3. 联系技术支持

---

**注意**：确保所有文件都使用相对路径，避免使用绝对路径，这样在GitHub Pages上才能正常访问。
