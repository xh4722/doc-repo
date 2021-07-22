import React from "react"
import { Chrono } from "react-chrono";

export const Timeline = () => {
    const items = [
        {
            title: "2021-07-21",
            cardTitle: "V3.10.0",
            cardSubtitle:"新建作业交互优化",
            cardDetailedText: [
                "1. 新建作业流程优化，包括选择软件、软件参数、硬件配置、上传模型、提交作业",
                "2. 新建作业流程导航，支持步骤跳转、状态显示、错误提示",                 
                "3. 文件上传优化，支持支持从文件管理拖动上传文件和文件夹",
                "4. 文件移动优化，支持拖动组织目录结构"
            ],
        }, 
        {
            title: "2021-07-01",
            cardTitle: "V3.9.0",
            cardSubtitle:"全新的操作界面",
            cardDetailedText: [
                "1. 左侧菜单栏调整为顶部菜单栏，增大操作区域",
                "2. 下沉不常用操作，减少视觉干扰",
                "3. 「3D云应用」菜单变更为「前后处理」",
                "4. 「云应用使用明细」菜单变更为「前后处理使用明细」",
                "5. 「空间管理」入口由企业管理变更至顶部菜单栏"
                ],
        }, 
        {
            title: "2021-06-22",
            cardTitle: "V3.8.6",
            cardSubtitle:"优化数据看板",
            cardDetailedText: [
                "1. 移除空间描述",
                "2. 各项数据指标图表化展示"
                ],
        }
    ];

    return (
        <div style={{ width: "800px", height: "1000px" }}>
            <Chrono items={items} mode="VERTICAL"/>
        </div>
    )
};