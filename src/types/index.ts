export type ClassLevel = 'primary' | 'middle' | 'matric' | 'fsc';

export type ClassGroup = 'pre_medical' | 'pre_engineering' | 'ics' | 'fa' | null;

export interface ClassItem {
  id: string;
  level: ClassLevel;
  name_en: string;
  name_ur: string;
  group_name: ClassGroup;
  subjects_en: string[];
  subjects_ur: string[];
  timing: string;
  monthly_fee: number;
  sort_order: number;
  is_active: boolean;
}

export type AnnouncementAudience = 'public' | 'students';

export interface Announcement {
  id: string;
  title_en: string;
  title_ur: string;
  body_en: string;
  body_ur: string;
  audience: AnnouncementAudience;
  is_published: boolean;
  published_at: string;
}

export interface Topper {
  id: string;
  name_en: string;
  name_ur: string;
  class_label_en: string;
  class_label_ur: string;
  marks: string;
  year: number;
  photo_url: string;
  sort_order: number;
}

export interface Teacher {
  id: string;
  name_en: string;
  name_ur: string;
  subject_en: string;
  subject_ur: string;
  qualification_en: string;
  qualification_ur: string;
  experience_en: string;
  experience_ur: string;
  photo_url: string;
  sort_order: number;
  is_active: boolean;
}

export type GalleryCategory = 'classroom' | 'events' | 'results';

export interface GalleryItem {
  id: string;
  image_url: string;
  caption_en: string;
  caption_ur: string;
  category: GalleryCategory;
  sort_order: number;
}

export interface FaqItem {
  id: string;
  question_en: string;
  question_ur: string;
  answer_en: string;
  answer_ur: string;
  sort_order: number;
}

export interface ContactMessage {
  name: string;
  phone: string;
  message: string;
}

export type AdmissionStatus = 'pending' | 'approved' | 'rejected';

export interface AdmissionRequest {
  id: string;
  reference_no: string;
  student_name: string;
  father_name: string;
  date_of_birth: string;
  class_id: string;
  previous_school: string | null;
  phone: string;
  whatsapp: string | null;
  address: string;
  photo_path: string;
  bform_path: string;
  result_card_path: string | null;
  status: AdmissionStatus;
  reject_reason: string | null;
  reviewed_at: string | null;
  student_id: string | null;
}

export interface AdmissionFormData {
  student_name: string;
  father_name: string;
  date_of_birth: string;
  class_id: string;
  group_name?: ClassGroup;
  previous_school: string;
  phone: string;
  whatsapp: string;
  address: string;
  photo: File | null;
  bform: File | null;
  result_card: File | null;
  captcha_token: string;
}

export interface AdmissionStatusResult {
  reference_no: string;
  status: AdmissionStatus;
  reject_reason?: string | null;
  student_name_masked: string;
  class_name_en?: string;
  class_name_ur?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role_en: string;
  role_ur: string;
  text_en: string;
  text_ur: string;
  is_published: boolean;
}

export interface Stats {
  students: number;
  teachers: number;
  years: number;
  results_percent: number;
}

export interface SiteSettings {
  admission_open_banner: boolean;
  phone: string;
  whatsapp: string;
  address_en: string;
  address_ur: string;
  academy_slogan_en: string;
  academy_slogan_ur: string;
  about_history_en: string;
  about_history_ur: string;
  about_mission_en: string;
  about_mission_ur: string;
  about_vision_en: string;
  about_vision_ur: string;
  opening_hours_en: string;
  opening_hours_ur: string;
  facebook_url: string;
  instagram_url: string;
  youtube_url: string;
  map_embed: string;
  map_external_url: string;
}

export type BadgeStatus = 'paid' | 'unpaid' | 'partial' | 'pending' | 'approved' | 'rejected';
