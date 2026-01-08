export enum MessageRole {
  User = 'user',
  Model = 'model',
  System = 'system'
}

export interface ChatMessage {
  id: string;
  role: MessageRole;
  text: string;
  timestamp: Date;
}

export interface StockDataPoint {
  date: string;
  price: number;
}

export interface SustainabilityMetric {
  label: string;
  value: string;
  description: string;
  icon: string;
}

export interface OperationLocation {
  id: string;
  name: string;
  country: string;
  resource: string;
  image: string;
  status: 'Active' | 'Exploration' | 'Development';
}