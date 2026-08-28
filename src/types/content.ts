export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface ServiceItem {
  icon: string;
  title: string;
  text: string;
  href: string;
}

export interface FeatureItem {
  title: string;
  text: string;
}

export interface ProjectItem {
  image: string;
  category: string;
  title: string;
  href: string;
}

export interface TestimonialItem {
  avatar: string;
  name: string;
  designation: string;
  rating: number;
  text: string;
}

export interface NewsItem {
  image: string;
  date: string;
  author: string;
  title: string;
  text: string;
  href: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export interface PieStatItem {
  label: string;
  percent: number;
}
