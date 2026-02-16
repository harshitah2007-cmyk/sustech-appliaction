
export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  link?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
