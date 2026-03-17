// ─── Site ────────────────────────────────────────────────────────────────────

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "敬昊堂生物 - 传承中医智慧，守护生命健康",
  description: "湖南敬昊堂生物科技发展有限公司成立于2012年，是中国敬昊堂国际集团旗下子公司，专注于中医理疗器械研发、生产、销售，同时经营中医诊所，提供全面的中医健康服务。",
  language: "zh-CN",
};

// ─── Navigation ──────────────────────────────────────────────────────────────

export interface MenuLink {
  label: string;
  href: string;
}

export interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface NavigationConfig {
  brandName: string;
  menuLinks: MenuLink[];
  socialLinks: SocialLink[];
  searchPlaceholder: string;
  cartEmptyText: string;
  cartCheckoutText: string;
  continueShoppingText: string;
  menuBackgroundImage: string;
}

export const navigationConfig: NavigationConfig = {
  brandName: "敬昊堂生物",
  menuLinks: [
    { label: "首页", href: "#hero" },
    { label: "关于我们", href: "#about" },
    { label: "产品中心", href: "#products" },
    { label: "核心技术", href: "#features" },
    { label: "荣誉资质", href: "#honors" },
    { label: "联系我们", href: "#contact" },
  ],
  socialLinks: [
    { icon: "Instagram", label: "微信公众号", href: "#" },
    { icon: "Facebook", label: "微博", href: "#" },
    { icon: "Twitter", label: "抖音", href: "#" },
  ],
  searchPlaceholder: "搜索产品或服务...",
  cartEmptyText: "咨询单是空的",
  cartCheckoutText: "立即咨询",
  continueShoppingText: "继续浏览",
  menuBackgroundImage: "/images/hero-bg.jpg",
};

// ─── Hero ────────────────────────────────────────────────────────────────────

export interface HeroConfig {
  tagline: string;
  title: string;
  ctaPrimaryText: string;
  ctaPrimaryTarget: string;
  ctaSecondaryText: string;
  ctaSecondaryTarget: string;
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  tagline: "敬业爱人 · 昊苍罔极 · 堂堂正正 · 医道精诚",
  title: "敬昊堂生物\n中医智能经络\n治疗领航者",
  ctaPrimaryText: "了解产品",
  ctaPrimaryTarget: "#products",
  ctaSecondaryText: "联系我们",
  ctaSecondaryTarget: "#contact",
  backgroundImage: "/images/hero-bg.jpg",
};

// ─── SubHero ─────────────────────────────────────────────────────────────────

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface SubHeroConfig {
  tag: string;
  heading: string;
  bodyParagraphs: string[];
  linkText: string;
  linkTarget: string;
  image1: string;
  image2: string;
  stats: Stat[];
}

export const subHeroConfig: SubHeroConfig = {
  tag: "企业实力",
  heading: "深耕中医健康领域十余年",
  bodyParagraphs: [
    "湖南敬昊堂生物科技发展有限公司成立于2012年，是中国敬昊堂国际集团旗下子公司，负责大陆运营总部事务。公司坐落于湖南省株洲市，是一家深植于中医文化的省级小巨人、专精特新高新技术企业。",
    "2024年，公司在湖南邵阳洞口县打造了集研发、生产、教育为一体的6000平米中医科技园，同时拥有千亩中草药种植基地，实现从原料种植、产品研发到生产加工的全链条覆盖。"
  ],
  linkText: "了解更多",
  linkTarget: "#about",
  image1: "/images/clinic-env-1.jpg",
  image2: "/images/clinic-env-2.jpg",
  stats: [
    { value: 12, suffix: "+", label: "年行业经验" },
    { value: 6000, suffix: "㎡", label: "中医科技园" },
    { value: 1000, suffix: "亩", label: "草药基地" },
    { value: 33, suffix: "+", label: "项发明专利" },
  ],
};

// ─── Video Section ───────────────────────────────────────────────────────────

export interface VideoSectionConfig {
  tag: string;
  heading: string;
  bodyParagraphs: string[];
  ctaText: string;
  ctaTarget: string;
  backgroundImage: string;
}

export const videoSectionConfig: VideoSectionConfig = {
  tag: "核心业务",
  heading: "中医智能经络治疗仪\n二类医疗器械",
  bodyParagraphs: [
    "根据中医经络学、中药学、针灸学、物理学原理，利用现代微电脑控制的微电子技术，将中国传统的针灸、推拿、刮痧、拔罐、温灸、气功正骨、现代牵引技术、理疗频谱技术、膏滋灸导布融合为一体，实现了中医现代化。",
    "五力同聚（推动力、扩散力、牵引力、渗透力、脉冲力），十效合一，对一些常见慢性病、多发病标本兼治。是全国老干部指定采购产品。"
  ],
  ctaText: "了解产品详情",
  ctaTarget: "#products",
  backgroundImage: "/images/treatment-scene.jpg",
};

// ─── Products ────────────────────────────────────────────────────────────────

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

export interface ProductsConfig {
  tag: string;
  heading: string;
  description: string;
  viewAllText: string;
  addToCartText: string;
  addedToCartText: string;
  categories: string[];
  products: Product[];
}

export const productsConfig: ProductsConfig = {
  tag: "产品中心",
  heading: "主营产品",
  description: "我们提供中医智能经络治疗仪（二类医疗器械）、膏滋灸导系列产品及健康食品，品质保证，安全放心。",
  viewAllText: "查看全部",
  addToCartText: "咨询产品",
  addedToCartText: "已添加到咨询单",
  categories: ["全部", "二类医疗器械", "膏滋灸导系列", "健康食品"],
  products: [
    { id: 1, name: "中医智能经络治疗仪（立式）", price: 29800, category: "二类医疗器械", image: "/images/product-medical-device.jpg" },
    { id: 2, name: "中医智能经络治疗仪（台式）", price: 16800, category: "二类医疗器械", image: "/images/product-wellness.jpg" },
    { id: 3, name: "中医智能经络治疗仪（便携式）", price: 8800, category: "二类医疗器械", image: "/images/product-medical-device.jpg" },
    { id: 4, name: "膏滋灸导液", price: 368, category: "膏滋灸导系列", image: "/images/product-wellness.jpg" },
    { id: 5, name: "膏滋灸导布", price: 268, category: "膏滋灸导系列", image: "/images/product-wellness.jpg" },
    { id: 6, name: "筋骨康王喷剂", price: 188, category: "膏滋灸导系列", image: "/images/product-wellness.jpg" },
    { id: 7, name: "筋骨疼痛五行散", price: 328, category: "膏滋灸导系列", image: "/images/product-wellness.jpg" },
    { id: 8, name: "雪山蟾毒", price: 268, category: "膏滋灸导系列", image: "/images/product-wellness.jpg" },
    { id: 9, name: "降甘宝", price: 468, category: "健康食品", image: "/images/product-wellness.jpg" },
    { id: 10, name: "运化宝", price: 468, category: "健康食品", image: "/images/product-wellness.jpg" },
  ],
};

// ─── Features ────────────────────────────────────────────────────────────────

export interface Feature {
  icon: "Truck" | "ShieldCheck" | "Leaf" | "Heart";
  title: string;
  description: string;
}

export interface FeaturesConfig {
  features: Feature[];
}

export const featuresConfig: FeaturesConfig = {
  features: [
    {
      icon: "ShieldCheck",
      title: "二类医疗器械资质",
      description: "拥有完整的二类医疗器械注册证和生产经营许可证，全国老干部指定采购产品。",
    },
    {
      icon: "Heart",
      title: "专业技术团队",
      description: "创始人张三丰博士，北京敬昊堂中医科学研究院汇聚顶尖中医学者和科研人员。",
    },
    {
      icon: "Leaf",
      title: "全链条覆盖",
      description: "千亩中草药种植基地+6000平米中医科技园，实现从原料种植到生产加工全链条覆盖。",
    },
    {
      icon: "Truck",
      title: "多项发明专利",
      description: "拥有33项发明专利，包括中医智能经络灸导仪、膏滋液中药制备方法等核心技术。",
    },
  ],
};

// ─── Blog ────────────────────────────────────────────────────────────────────

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  excerpt: string;
}

export interface BlogConfig {
  tag: string;
  heading: string;
  viewAllText: string;
  readMoreText: string;
  posts: BlogPost[];
}

export const blogConfig: BlogConfig = {
  tag: "健康资讯",
  heading: "中医养生知识",
  viewAllText: "查看全部",
  readMoreText: "阅读更多",
  posts: [
    {
      id: 1,
      title: "中医智能经络治疗仪的六大功效",
      date: "2024年3月10日",
      image: "/images/blog-2.jpg",
      excerpt: "头痛头晕、肩周炎颈椎病、乳腺增生、便秘腹泻、中风后遗症、面部抗衰，一台仪器，十效合一。",
    },
    {
      id: 2,
      title: "经络养生：打通身体能量通道",
      date: "2024年3月5日",
      image: "/images/blog-3.jpg",
      excerpt: "经络是中医理论的重要组成部分，了解经络养生方法，促进气血流通，增强体质。",
    },
    {
      id: 3,
      title: "膏滋灸导：靶向导入高效吸收",
      date: "2024年2月28日",
      image: "/images/blog-1.jpg",
      excerpt: "遵循中医'药循经、病对治'理论，配合智能灸导仪靶向导入，快速缓解疼痛，长期养护脏腑经络。",
    },
  ],
};

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface FaqConfig {
  tag: string;
  heading: string;
  ctaText: string;
  ctaTarget: string;
  faqs: FaqItem[];
}

export const faqConfig: FaqConfig = {
  tag: "常见问题",
  heading: "您可能想了解",
  ctaText: "还有其他问题？联系我们",
  ctaTarget: "#contact",
  faqs: [
    {
      id: 1,
      question: "中医智能经络治疗仪有哪些功效？",
      answer: "中医智能经络治疗仪融合针灸、推拿、刮痧、拔罐、温灸、气功正骨、现代牵引技术、理疗频谱技术、膏滋灸导布等十效合一。主要功效包括：解决经络堵塞、排除垃圾淤血协调器官、激活细胞增强免疫力。适用于头痛头晕、肩周炎颈椎病、腰间盘突出、乳腺增生、便秘腹泻、中风后遗症等多种症状。",
    },
    {
      id: 2,
      question: "敬昊堂有哪些资质认证？",
      answer: "敬昊堂拥有完整的二类医疗器械注册证和生产经营许可证，产品为全国老干部指定采购产品。膏滋灸导布是CCTV央视网商城优选品牌，拥有国家发明专利证书。公司被评为省级小巨人企业、专精特新企业、高新技术企业。",
    },
    {
      id: 3,
      question: "如何购买敬昊堂产品？",
      answer: "您可以通过拨打我们的财富热线400-168-7869咨询购买，或前往湖南省株洲市芦淞区解放街172号建宁购物公园财富中心122、222号进行实地考察和购买。我们也提供线下中医诊所服务，可预约体验后再购买。",
    },
    {
      id: 4,
      question: "膏滋灸导液如何使用？",
      answer: "膏滋灸导液需配合中医智能经络治疗仪使用。遵循中医'药循经、病对治'理论，通过仪器靶向导入，实现透皮吸收。对症精准，疗效直接可靠，无副作用，功效持久停留。具体使用方法可咨询我们的专业理疗师。",
    },
  ],
};

// ─── About ───────────────────────────────────────────────────────────────────

export interface AboutSection {
  tag: string;
  heading: string;
  paragraphs: string[];
  quote: string;
  attribution: string;
  image: string;
  backgroundColor: string;
  textColor: string;
}

export interface AboutConfig {
  sections: AboutSection[];
}

export const aboutConfig: AboutConfig = {
  sections: [
    {
      tag: "品牌故事",
      heading: "传承创新\n中医现代化",
      paragraphs: [
        "湖南敬昊堂生物科技发展有限公司成立于2012年，是中国敬昊堂国际集团旗下子公司，负责大陆运营总部事务。公司坐落于风景秀丽、人文荟萃的湖南省株洲市，是一家深植于中医文化的省级小巨人、专精特新高新技术企业。",
        "自成立以来，公司以传承和创新中医理疗技术为己任，致力于研发、生产和销售中医理疗器械，同时在线下经营中医诊所，为顾客提供全面的中医健康服务。2024年，公司在湖南邵阳洞口县打造了集研发、生产、教育为一体的6000平米中医科技园。"
      ],
      quote: "",
      attribution: "",
      image: "/images/clinic-env-2.jpg",
      backgroundColor: "#2d5a5a",
      textColor: "#ffffff",
    },
    {
      tag: "发展历程",
      heading: "使命 · 愿景 · 价值观",
      paragraphs: [
        "2012年：湖南敬昊堂生物科技发展有限公司成立",
        "2014年：中国敬昊堂国际集团成立，广州敬昊堂生物科技有限公司在广州股权交易中心成功挂牌（股权代码：890912）",
        "2015年：北京敬昊堂中医科学研究院成立",
        "2016-2019年：发明中医智能经络灸导机器人等多项专利，构建全新商业生态系统",
        "2020至今：成立中医科技园，线下多家中医示范馆落地，服务网络全面铺开"
      ],
      quote: "敬业爱人、昊苍罔极、堂堂正正、医道精诚。我们致力于传承和创新中医理疗技术，通过研发和提供高质量的中医理疗器械及相关产品，改善和提升人们的健康水平。",
      attribution: "—— 敬昊堂企业理念",
      image: "/images/treatment-scene.jpg",
      backgroundColor: "#f5f0e8",
      textColor: "#333333",
    },
  ],
};

// ─── Contact ─────────────────────────────────────────────────────────────────

export interface FormFields {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
}

export interface ContactConfig {
  heading: string;
  description: string;
  locationLabel: string;
  location: string;
  emailLabel: string;
  email: string;
  phoneLabel: string;
  phone: string;
  formFields: FormFields;
  submitText: string;
  submittingText: string;
  submittedText: string;
  successMessage: string;
  backgroundImage: string;
}

export const contactConfig: ContactConfig = {
  heading: "联系我们",
  description: "欢迎咨询产品、服务或加盟事宜，我们的专业团队将竭诚为您服务。",
  locationLabel: "公司地址",
  location: "湖南省株洲市芦淞区解放街172号建宁购物公园财富中心122、222号",
  emailLabel: "电子邮箱",
  email: "zhangsanfeng001@jinghaotang.com",
  phoneLabel: "财富热线",
  phone: "400-168-7869",
  formFields: {
    nameLabel: "您的姓名",
    namePlaceholder: "请输入姓名",
    emailLabel: "联系方式",
    emailPlaceholder: "手机号或邮箱",
    messageLabel: "咨询内容",
    messagePlaceholder: "请描述您的需求或问题",
  },
  submitText: "提交咨询",
  submittingText: "提交中...",
  submittedText: "已提交",
  successMessage: "感谢您的咨询，我们会尽快与您联系！",
  backgroundImage: "/images/contact-bg.jpg",
};

// ─── Footer ──────────────────────────────────────────────────────────────────

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterSocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface FooterConfig {
  brandName: string;
  brandDescription: string;
  newsletterHeading: string;
  newsletterDescription: string;
  newsletterPlaceholder: string;
  newsletterButtonText: string;
  newsletterSuccessText: string;
  linkGroups: FooterLinkGroup[];
  legalLinks: FooterLink[];
  copyrightText: string;
  socialLinks: FooterSocialLink[];
}

export const footerConfig: FooterConfig = {
  brandName: "敬昊堂生物",
  brandDescription: "湖南敬昊堂生物科技发展有限公司成立于2012年，专注于中医理疗器械研发、生产、销售，同时经营中医诊所，提供全面的中医健康服务。",
  newsletterHeading: "订阅健康资讯",
  newsletterDescription: "订阅我们的邮件，获取最新的中医养生知识和健康资讯。",
  newsletterPlaceholder: "输入您的邮箱",
  newsletterButtonText: "订阅",
  newsletterSuccessText: "订阅成功！感谢您的关注。",
  linkGroups: [
    {
      title: "快速导航",
      links: [
        { label: "首页", href: "#hero" },
        { label: "关于我们", href: "#about" },
        { label: "产品中心", href: "#products" },
        { label: "核心技术", href: "#features" },
      ],
    },
    {
      title: "服务支持",
      links: [
        { label: "荣誉资质", href: "#honors" },
        { label: "联系我们", href: "#contact" },
        { label: "常见问题", href: "#faq" },
      ],
    },
    {
      title: "联系方式",
      links: [
        { label: "400-168-7869", href: "tel:4001687869" },
        { label: "zhangsanfeng001@jinghaotang.com", href: "mailto:zhangsanfeng001@jinghaotang.com" },
        { label: "湖南省株洲市芦淞区解放街172号", href: "#" },
      ],
    },
  ],
  legalLinks: [
    { label: "隐私政策", href: "#" },
    { label: "服务条款", href: "#" },
    { label: "二类医疗器械经营许可证", href: "#" },
  ],
  copyrightText: "© 2024 湖南敬昊堂生物科技发展有限公司. 保留所有权利.",
  socialLinks: [
    { icon: "Instagram", label: "微信公众号", href: "#" },
    { icon: "Facebook", label: "微博", href: "#" },
    { icon: "Twitter", label: "抖音", href: "#" },
  ],
};
