import React from "react"
import { Chrono } from "react-chrono";

export const Timeline = () => {
    const items = [
        {
            title: "2021-08-03",
            cardTitle: "V3.11.0",
            cardSubtitle:"作业详情交互优化",
            cardDetailedText: [
                "1. 功能优化，包括作业基本信息、作业监控、结果文件管理",
                "2. 作业进度，实时查看作业运行情况及进度",                 
                "3. 残差图，支持查看残差图的软件，通过残差图提前预测作业运行情况",
                "4. 结果查看，在线查看作业结果日志",
                "5. 结果下载，支持下载作业结果到本地；支持拖动作业结果到文件管理"
            ],
        },
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