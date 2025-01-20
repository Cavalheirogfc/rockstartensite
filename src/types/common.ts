export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  phone?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon?: string;
}

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}
