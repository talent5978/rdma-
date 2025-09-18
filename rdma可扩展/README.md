# RDMA可扩展性学习平台

一个综合的RDMA（Remote Direct Memory Access）可扩展性学习平台，整合了多个专业学习资源，提供全面的RDMA技术学习体验。

## 🌟 项目特色

- **多平台整合**：融合了三个专业学习资源
- **论文深度解析**：包含6篇核心论文的详细解读
- **交互式学习**：提供PDF预览、导航链接等交互功能
- **响应式设计**：适配各种设备和屏幕尺寸
- **学术资源**：基于公开学术资源整理，仅供学习研究使用

## 📚 学习内容

### 核心论文分析
1. **SRC可扩展可靠连接** - 解耦QP与连接的革命性设计
2. **大规模RDMA网络连接可扩展性研究** - 中文研究综述
3. **RDMA性能异常根本原因分析** - 深入分析性能瓶颈
4. **Weir中间件** - 基于延迟的RNIC缓存控制
5. **SRNIC架构** - 可扩展RDMA NIC架构设计
6. **SRM连接共享** - 高效连接共享传输协议

### 学习资源
- **基础概念**：RDMA核心概念和原理
- **技术细节**：深入的技术实现分析
- **实验验证**：性能测试和结果分析
- **学术意义**：对可扩展QP的意义和影响

## 🚀 快速开始

### 在线访问
直接访问 [GitHub Pages](https://your-username.github.io/rdma-scalability-platform/) 即可开始学习。

### 本地运行
1. 克隆项目：
```bash
git clone https://github.com/your-username/rdma-scalability-platform.git
cd rdma-scalability-platform
```

2. 使用本地服务器运行：
```bash
# 使用Python
python -m http.server 8000

# 或使用Node.js
npx http-server

# 或使用Live Server (VS Code扩展)
```

3. 在浏览器中访问 `http://localhost:8000`

## 🛠️ 技术栈

- **HTML5** - 页面结构
- **CSS3** - 样式和响应式设计
- **JavaScript** - 交互功能
- **Font Awesome** - 图标库
- **PDF.js** - PDF预览功能

## 📁 项目结构

```
rdma-scalability-platform/
├── index.html                 # 主页面
├── rdma_learning_site/        # 论文分析站点
│   ├── index.html            # 论文分析首页
│   ├── papers/               # 论文分析页面
│   ├── styles/               # 样式文件
│   └── scripts/              # JavaScript文件
├── try/                      # 学习资源
│   └── rdma-learning.html    # 学习指南
├── README.md                 # 项目说明
└── .github/                  # GitHub配置
    └── workflows/            # 自动部署配置
```

## 🎯 学习路径建议

1. **入门阶段**：从基础概念开始，了解RDMA基本原理
2. **进阶阶段**：深入学习论文分析，理解技术细节
3. **实践阶段**：结合学习资源进行实际编程练习
4. **研究阶段**：阅读最新研究论文，跟踪技术发展

## 📖 使用说明

### 导航功能
- 使用顶部导航栏快速跳转到不同学习模块
- 论文页面提供目录导航和前后页切换
- 支持PDF原文预览和下载

### 学习建议
- 建议按顺序阅读论文分析，建立完整的知识体系
- 结合学习资源进行实践练习
- 关注技术细节和实验验证部分

## 🤝 贡献指南

欢迎提交Issue和Pull Request来改进这个学习平台：

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目基于公开学术资源整理，仅供学习研究使用。所有论文内容版权归原作者所有。

## 📞 联系方式

如有问题或建议，请通过以下方式联系：
- 提交 [GitHub Issue](https://github.com/your-username/rdma-scalability-platform/issues)
- 发送邮件至：your-email@example.com

## 🙏 致谢

感谢所有相关论文的作者和研究者，为RDMA可扩展性研究做出的重要贡献。

---

**更新时间**：2025年9月  
**版本**：v1.0.0
