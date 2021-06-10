---
title: Intro
sidebar_label: Intro
---

# 简介

VisualSDK 提供了可视化功能相关的前端组件。可以通过 VisualSDK 维护可视化会话；管理PeerConnection、DataChannel、Signal；控制可视化视频；管理用户输入...

## 背景

远算可视化作为基础服务会用在多个SaaS平台，为了减少前端样板化代码，提高开发效率和质量，封装了VisualSDK供开发者使用。

## 功能模块

- **input**
    - 监听用户输入（input、click、mouseMove、mouseWheel）；
    - 自定义鼠标；
- **peer**
    - 管理 PeerConnection；
    - 管理 DataChannel；
- **player**：管理可视化 video；
- **session**：管理可视化会话；
- **signal**：管理 WebRTC 信道；
- **tracer**：日志管理；
- **utils**：通用工具集；
