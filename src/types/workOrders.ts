export type WorkOrderFrequency = 'once' | 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'yearly';
export type WorkOrderPriority = 'low' | 'medium' | 'high' | 'emergency';
export type WorkOrderStatus = 'draft' | 'scheduled' | 'in_progress' | 'completed' | 'cancelled';
export type TaskStatus = 'pending' | 'in_progress' | 'completed' | 'blocked';
export type CrewType = 'foundation' | 'walls' | 'waterproofing' | 'flatwork' | 'general';
export type ResourceType = 'material' | 'equipment' | 'labor';
export type ConstructionStage = 
  | 'site_visit' 
  | 'stake_out' 
  | 'footings' 
  | 'walls' 
  | 'strip' 
  | 'waterproofing' 
  | 'flatwork';

export type VendorType = 
  | 'concrete' 
  | 'pump' 
  | 'excavator' 
  | 'plumber' 
  | 'waterproofing' 
  | 'other';

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  duration: number; // in minutes
  dependencies?: string[]; // Task IDs
  assignedTo?: string; // Crew ID
  completedAt?: string;
  completedBy?: string;
  notes?: string;
}

export interface Resource {
  id: string;
  type: ResourceType;
  name: string;
  quantity: number;
  unit: string;
  cost?: number;
  notes?: string;
}

export interface VendorRequirement {
  type: VendorType;
  required: boolean;
  preferredVendor?: string;
  notes?: string;
}

export interface CrewAssignment {
  crewId: string;
  isPrimary: boolean;
  role?: string;
  notes?: string;
}

export interface ProductivityRate {
  type: string; // e.g., 'concrete_pour', 'form_setup', etc.
  rate: number; // units per hour
  unit: string; // e.g., 'cubic_yards', 'linear_feet', etc.
  crewSize: number;
  notes?: string;
}

export interface InspectionRequirement {
  jurisdictionId: string;
  type: string;
  noticeRequired: number; // hours
  preferredTimeOfDay?: string;
  notes?: string;
}

export interface WorkOrderTemplate {
  id: string;
  name: string;
  description?: string;
  constructionStage: ConstructionStage;
  type: 'recurring' | 'adhoc';
  frequency?: WorkOrderFrequency;
  interval?: number; // e.g., every 2 weeks
  priority: WorkOrderPriority;
  estimatedDuration: number; // in minutes
  defaultCrewType: CrewType;
  crews: CrewAssignment[];
  tasks: Task[];
  resources: Resource[];
  vendors: VendorRequirement[];
  productivityRates: ProductivityRate[];
  inspectionRequirements: InspectionRequirement[];
  relatedStages?: {
    previousStage?: ConstructionStage;
    nextStage?: ConstructionStage;
    preferredCrew?: 'same' | 'different';
  };
  tags?: string[];
  locationRequirements?: {
    neighborhoods?: string[];
    cities?: string[];
    counties?: string[];
  };
}

export interface WorkOrder extends Omit<WorkOrderTemplate, 'frequency' | 'interval'> {
  projectId?: string;
  scheduledStart?: string;
  scheduledEnd?: string;
  actualStart?: string;
  actualEnd?: string;
  status: WorkOrderStatus;
  progress: number;
  assignedCrews: string[]; // Crew IDs
  completionCriteria?: {
    requiresInspection: boolean;
    requiresSignoff: boolean;
    requiredDocuments?: string[];
  };
  linkedWorkOrders?: {
    dependencies: string[]; // Work Order IDs that must be completed first
    dependents: string[]; // Work Order IDs that depend on this one
  };
  weather?: {
    temperature?: number;
    conditions?: string;
    windSpeed?: number;
  };
  costs?: {
    estimated: number;
    actual: number;
    materials: number;
    labor: number;
    equipment: number;
  };
  quality?: {
    inspectionRequired: boolean;
    inspectionPassed?: boolean;
    inspectionDate?: string;
    inspector?: string;
    notes?: string;
  };
  safety?: {
    hazards: string[];
    requiredPPE: string[];
    specialInstructions?: string;
  };
}