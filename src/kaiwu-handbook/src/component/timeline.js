import React from "react"
import { Chrono } from "react-chrono";

export const Timeline = () => {
    const items = [{
        title: "2021-07-01",
        cardTitle: "V3.9.0",
        cardSubtitle:"全新的操作界面",
        cardDetailedText: [
            "1. 左侧菜单栏调整为顶部菜单栏，增大操作区域",
            "2. 下沉不常用操作，减少视觉干扰",
            "3. 「3D云应用」菜单变更为「前后处理」",
            "4. 「云应用使用明细」菜单变更为「前后处理使用明细」",
            "5. 「空间管理」入口由企业管理变更至顶部菜单栏",

        ],
    }, {
        title: "2021-06-22",
        cardTitle: "V3.8.6",
        cardSubtitle:"优化数据看板",
        cardDetailedText: [
            "1. 移除空间描述",
            "2. 各项数据指标图表化展示"
        ],
    },
    ];

    return (
        <div style={{ width: "700px", height: "1000px" }}>
            <Chrono items={items} cardHeight={200} mode="VERTICAL" />
        </div>
    )
};