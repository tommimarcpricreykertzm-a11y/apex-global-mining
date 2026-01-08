import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'zh';

export const translations = {
  en: {
    nav_about: 'About Us',
    nav_ops: 'Operations',
    nav_sus: 'Sustainability',
    nav_inv: 'Investors',
    nav_careers: 'Careers',
    nav_contact: 'Contact',
    
    // Navbar Language Menu
    lang_en: 'English',
    lang_zh: 'Chinese',

    hero_tag: 'Future Resources',
    hero_title_1: 'Extracting Value,',
    hero_title_2: 'Delivering the Future.',
    hero_desc: 'Apex Global Mining is a world leader in responsible resource extraction. We provide the essential materials that power the green energy transition and digital economy.',
    hero_btn_ops: 'Our Operations',
    hero_btn_inv: 'Investor Center',
    hero_scroll: 'Scroll',
    
    stats_years: 'Years of Excellence',
    stats_ops: 'Global Operations',
    stats_copper: 'Tonnes Copper/Year',
    stats_water: 'Water Recycled',
    
    // About Section
    about_tag: 'Who We Are',
    about_title: 'Pioneering Progress Since 1985',
    about_desc_1: 'Apex Global Mining has grown from a single copper operation in Chile to a diversified global resources company. We combine advanced technology with deep industry expertise to extract value efficiently and responsibly.',
    about_desc_2: 'Our strategy is built on three pillars: Operational Excellence, Sustainable Growth, and Technology-Driven Innovation.',
    about_ceo_quote: "Our mission is not just to mine resources, but to enable the technologies that will define the 21st century.",
    about_ceo_name: 'Elena Corves',
    about_ceo_title: 'Chief Executive Officer',

    ops_tag: 'Global Footprint',
    ops_title: 'Strategic Operations',
    ops_view_map: 'View Full Map',
    ops_status_active: 'Active',
    ops_status_dev: 'Development',
    ops_status_exp: 'Exploration',
    ops_resource: 'Primary Resource',
    
    inv_tag: 'Investor Relations',
    inv_title: 'Delivering Sustainable Returns',
    inv_desc: 'We are disciplined in capital allocation and focused on generating superior value for shareholders through operational excellence and strategic growth in future-facing commodities.',
    inv_report_q3: 'Q3 2024 Results',
    inv_report_annual: '2023 Annual Report',
    inv_download: 'Download PDF',
    inv_btn_center: 'Visit Investor Centre',
    inv_chart_title: 'Share Price (LSE: APX)',
    inv_ebitda: 'EBITDA (FY23)',
    inv_dividend: 'Dividend/Share',
    inv_rating: 'Credit Rating',
    
    sus_tag: 'Responsible Mining',
    sus_title_1: 'Committed to a',
    sus_title_2: 'Sustainable Future',
    sus_desc: 'Mining is essential for the transition to a low-carbon economy. At Apex, we ensure that the materials required for tomorrow are extracted with the highest standards of environmental stewardship and social responsibility today.',
    sus_btn_report: 'Read our 2024 Sustainability Report',
    sus_metric_carbon_label: 'Carbon Neutral',
    sus_metric_carbon_desc: 'Target year for Net Zero Scope 1 & 2 emissions across all sites.',
    sus_metric_water_label: 'Water Efficiency',
    sus_metric_water_desc: 'Process water recycled at our major copper concentrators.',
    sus_metric_comm_label: 'Community',
    sus_metric_comm_desc: 'Invested in local education and infrastructure in 2024.',

    // Careers Section
    careers_tag: 'Join Our Team',
    careers_title: 'Shape the Future With Us',
    careers_desc: 'We offer challenging and rewarding careers for professionals who want to make a difference. From remote exploration camps to corporate strategy in London, find your place at Apex.',
    careers_job_1: 'Senior Geologist',
    careers_loc_1: 'Perth, Australia',
    careers_job_2: 'Environmental Engineer',
    careers_loc_2: 'Antofagasta, Chile',
    careers_job_3: 'Data Scientist (AI Ops)',
    careers_loc_3: 'London, UK',
    careers_apply: 'Apply Now',
    careers_view_all: 'View All Open Positions',

    footer_desc: 'Leading the industry in sustainable resource extraction and value creation for a modern world.',
    footer_col_company: 'Company',
    footer_col_ops: 'Operations',
    footer_col_contact: 'Contact',
    footer_rights: '© 2024 Apex Global Mining Group. All rights reserved.',
    
    chat_input_placeholder: 'Ask about our ESG reports...',
    chat_welcome: "Hello. I am ApexBot. How can I assist you with information regarding Apex Global Mining's operations, sustainability efforts, or investor relations today?",
    chat_processing: 'Processing inquiry...',
    chat_powered: 'Powered by Gemini 3 • For Informational Purposes Only',
    chat_online: 'Online • AI Powered'
  },
  zh: {
    nav_about: '关于我们',
    nav_ops: '全球业务',
    nav_sus: '可持续发展',
    nav_inv: '投资者关系',
    nav_careers: '职业发展',
    nav_contact: '联系我们',

    // Navbar Language Menu
    lang_en: 'English (英文)',
    lang_zh: '中文 (Chinese)',

    hero_tag: '未来资源',
    hero_title_1: '萃取自然精华，',
    hero_title_2: '赋能绿色未来',
    hero_desc: 'Apex Global Mining 是负责任资源开采的全球领导者。我们提供推动绿色能源转型和数字经济发展的关键原材料。',
    hero_btn_ops: '探索业务',
    hero_btn_inv: '投资者中心',
    hero_scroll: '向下滑动',
    
    stats_years: '年卓越历程',
    stats_ops: '个全球运营点',
    stats_copper: '吨/年 铜产量',
    stats_water: '水资源循环利用率',

    // About Section
    about_tag: '关于我们',
    about_title: '自1985年以来的开拓进取',
    about_desc_1: 'Apex Global Mining 已从智利的单一铜矿运营发展成为多元化的全球资源公司。我们结合先进技术与深厚的行业专业知识，高效且负责任地提取价值。',
    about_desc_2: '我们的战略建立在三大支柱之上：卓越运营、可持续增长和技术驱动的创新。',
    about_ceo_quote: "我们的使命不仅是开采资源，更是为定义21世纪的技术提供动力。",
    about_ceo_name: 'Elena Corves',
    about_ceo_title: '首席执行官',
    
    ops_tag: '全球足迹',
    ops_title: '战略布局',
    ops_view_map: '查看完整地图',
    ops_status_active: '运营中',
    ops_status_dev: '开发中',
    ops_status_exp: '勘探中',
    ops_resource: '主要资源',
    
    inv_tag: '投资者关系',
    inv_title: '创造持续回报',
    inv_desc: '我们严格把控资本配置，通过卓越运营和在面向未来的大宗商品领域的战略增长，为股东创造卓越价值。',
    inv_report_q3: '2024年第三季度业绩',
    inv_report_annual: '2023年年度报告',
    inv_download: '下载 PDF',
    inv_btn_center: '访问投资者中心',
    inv_chart_title: '股价 (LSE: APX)',
    inv_ebitda: 'EBITDA (23财年)',
    inv_dividend: '每股股息',
    inv_rating: '信用评级',
    
    sus_tag: '负责任矿业',
    sus_title_1: '致力于',
    sus_title_2: '可持续的未来',
    sus_desc: '矿业是向低碳经济转型的基础。在 Apex，我们确保以最高的环保管控和社会责任标准开采未来所需的材料。',
    sus_btn_report: '阅读2024年可持续发展报告',
    sus_metric_carbon_label: '碳中和',
    sus_metric_carbon_desc: '所有运营点实现范围1和范围2净零排放的目标年份。',
    sus_metric_water_label: '水资源效率',
    sus_metric_water_desc: '主要铜选矿厂的工艺水回收利用率。',
    sus_metric_comm_label: '社区投入',
    sus_metric_comm_desc: '2024年投入当地教育和基础设施建设的资金。',

    // Careers Section
    careers_tag: '加入我们',
    careers_title: '与我们共筑未来',
    careers_desc: '我们为希望有所作为的专业人士提供充满挑战和回报的职业生涯。从偏远的勘探营地到伦敦的公司战略部，在 Apex 找到您的位置。',
    careers_job_1: '高级地质学家',
    careers_loc_1: '澳大利亚，珀斯',
    careers_job_2: '环境工程师',
    careers_loc_2: '智利，安托法加斯塔',
    careers_job_3: '数据科学家 (AI 运营)',
    careers_loc_3: '英国，伦敦',
    careers_apply: '立即申请',
    careers_view_all: '查看所有在招职位',

    footer_desc: '引领行业可持续资源开采，为现代世界创造价值。',
    footer_col_company: '公司概况',
    footer_col_ops: '运营中心',
    footer_col_contact: '联系方式',
    footer_rights: '© 2024 Apex Global Mining Group. 版权所有.',
    
    chat_input_placeholder: '询问关于 ESG 报告的问题...',
    chat_welcome: "您好，我是 ApexBot。今天我能为您提供关于 Apex 全球矿业运营、可持续发展工作或投资者关系方面的哪些帮助？",
    chat_processing: '正在处理您的咨询...',
    chat_powered: '由 Gemini 3 驱动 • 仅供参考',
    chat_online: '在线 • AI 驱动'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};