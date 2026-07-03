window.PORTFOLIO_PROJECTS = {
  featured: [
    {
      id: "dont-just-save",
      title: "Dont Just Save｜AI 内容灵感管理工具",
      subtitle: "把收藏变成可复用的创作素材库",
      category: "Content Tool",
      tags: ["内容工具", "创作者工作流", "AI 分类", "Android Demo"],
      description: "面向学生和内容创作者“收藏很多但难以整理、复用和转化”的问题，Dont Just Save 将链接、截图和文字灵感整理成可再次使用的素材库。项目从轻量访谈和竞品观察出发，设计外部 App 分享、链接卡片、分类标签、AI 摘要、主题聚合等流程。",
      previewImage: "public/previews/dont-just-save.png",
      links: { primary: "dontJustSave" }
    },
    {
      id: "ruraltrip-ops-copilot",
      title: "RuralTrip Ops Copilot｜乡村文旅内容运营工作台",
      subtitle: "把乡村资料整理成路线、地点卡与发布脚本",
      category: "Demo",
      tags: ["内容结构化", "路线生成", "地点卡片", "图文脚本"],
      description: "面向乡村文旅运营者、村咖民宿主理人和村集体宣传人员，项目聚焦“村庄资源有特色但难以表达、路线难包装、内容生产不稳定”的问题。工具将调研资料、村庄案例和业态信息整理为路线方案、地点卡片、小红书攻略和地图视频脚本。",
      previewImage: "public/previews/ruraltrip-ops-copilot.png",
      links: { primary: "ruralTrip" }
    },
    {
      id: "storyalbum-geo",
      title: "StoryAlbum Geo｜照片地理信息旅行故事地图",
      subtitle: "把零散旅行照片组织成地图叙事",
      category: "Map",
      tags: ["旅行记录", "地理信息", "路线相册", "地图叙事"],
      description: "StoryAlbum Geo 从旅行照片出发，利用 GPS、拍摄时间和 POI 信息生成路线地图、点位故事和照片墙。项目同时保留真实地图参照和风格化 SVG 路线图，在无 API 或弱 API 场景下通过经纬度归一化、相对位置投影和标签避让形成可浏览的旅行叙事。",
      previewImage: "public/previews/storyalbum-geo.png",
      links: { primary: "storyAlbumGeo" }
    },
    {
      id: "project-evidence-coach",
      title: "Project Evidence Coach｜项目证据转译 Skill",
      subtitle: "把分散项目材料转译成可信表达",
      category: "Skill",
      tags: ["AI Skill", "求职材料", "证据台账", "输出质检"],
      description: "面向个人项目材料分散、简历表达容易空泛的问题，Project Evidence Coach 读取 GitHub README、docs、Demo 和部署信息，生成 PM Case、简历 bullet、作品集结构和面试故事。项目重点是建立事实可追溯性、成果可验证性、个人贡献清晰度和未验证表述拦截机制。",
      previewImage: "public/previews/project-evidence-coach.png",
      links: { primary: "projectEvidenceCoach" }
    }
  ],
  research: [
    {
      id: "street-walkability",
      title: "Street Walkability Inference",
      subtitle: "街景图像转化为可训练、可解释的评价任务",
      category: "Paper",
      tags: ["街景图像", "Prompt", "LoRA", "模型评估"],
      description: "围绕人工街道空间评价覆盖有限、成本较高、标准不统一的问题，项目将街景图像转化为可标注、可训练和可评估的样本任务。本人参与舒适性指标制定、训练集标注、Prompt 迭代、LoRA 微调和模型输出解释，支持论文产出。",
      previewImage: "assets/images/walkability-ai.jpg",
      links: { primary: "paper" }
    },
    {
      id: "commuting-report",
      title: "2025 长三角城市跨城通勤年度报告",
      subtitle: "从出行流数据到年度分析报告",
      category: "Report",
      tags: ["出行流", "指标构建", "图表表达", "报告写作"],
      description: "项目基于长三角跨城通勤数据，整理跨城通勤流量、空间分布和都市圈联系特征。本人负责数据处理、第五章写作、指标整理与图表表达，完成从原始出行数据到分析报告的转译。",
      previewImage: "assets/images/commuting-report.jpg",
      links: { primary: "report" }
    },
    {
      id: "powerbi-aging",
      title: "Power BI｜上海老龄化与养老服务设施看板",
      subtitle: "把区县表格数据组织成可解释看板",
      category: "Dashboard",
      tags: ["Power BI", "指标看板", "区县对比", "数据复盘"],
      description: "基于上海各区人口、年龄结构、医疗设施、床位和医护人员数据，搭建 Power BI 交互式看板。页面通过地图、树图、散点图和影响因素分析展示区县差异，训练了从表格数据到可视化分析页面的表达流程。",
      previewImage: "assets/gallery/powerbi-aging/01.jpg",
      links: { primary: "powerBI" }
    }
  ],
  evidence: [
    { id: "dont-demo", title: "Dont Just Save Demo", category: "Web Demo", description: "AI 内容灵感管理工具的在线展示页。", links: { primary: "dontJustSave" } },
    { id: "ruraltrip-demo", title: "RuralTrip Ops Copilot Demo", category: "Web Demo", description: "乡村路线、地点卡和图文脚本工作台。", links: { primary: "ruralTrip" } },
    { id: "storyalbum-demo", title: "StoryAlbum Geo Demo", category: "Web Demo", description: "照片 GPS 生成旅行故事地图与照片墙。", links: { primary: "storyAlbumGeo" } },
    { id: "coach-demo", title: "Project Evidence Coach Demo", category: "Web Demo", description: "项目证据台账与可信表达生成流程。", links: { primary: "projectEvidenceCoach" } },
    { id: "walkability-paper", title: "Street Walkability Paper", category: "Paper", description: "街景图像与大模型可步行性研究论文。", links: { primary: "paper" } },
    { id: "commuting-report", title: "2025 长三角跨城通勤年度报告", category: "Report", description: "跨城通勤流量、空间分布与都市圈联系报告。", links: { primary: "report" } },
    { id: "powerbi-dashboard", title: "Power BI：上海老龄化与养老服务设施看板", category: "Dashboard", description: "区县对比、指标解释和影响因素分析截图。", links: { primary: "powerBI" } },
    { id: "github-repo", title: "Portfolio GitHub Repository", category: "GitHub", description: "当前作品集页面源码与部署仓库。", links: { primary: "github" } },
    { id: "visual-experiments", title: "AI Visual Experiments", category: "Visual Experiment", description: "文创印章、古画动态化等图像与视频实验。", links: { primary: "visualExperiment" } }
  ]
};
