/**
 * PLACEHOLDER MOCK DATA FOR PHASE 1 & PHASE 2 (HOME & ABOUT)
 * NOTE: The following mock records are temporary placeholders for UI testing and layout validation.
 * In later phases, this data layer will be migrated to real Supabase database tables.
 */

import { ClassItem, Announcement, SiteSettings, Topper, Testimonial, Stats } from '../types';

export const mockClasses: ClassItem[] = [
  {
    id: 'class-prep',
    level: 'primary',
    name_en: 'Prep Class (Foundation)',
    name_ur: 'پریپ کلاس (بنیادی تربیت)',
    group_name: null,
    subjects_en: ['English Phonics', 'Urdu Qaida', 'Mathematics Basics', 'General Knowledge'],
    subjects_ur: ['انگریزی صوتیات', 'اردو قاعدہ', 'بنیادی ریاضی', 'عام معلومات'],
    timing: '08:00 AM - 12:30 PM',
    monthly_fee: 3500,
    sort_order: 1,
    is_active: true,
  },
  {
    id: 'class-6',
    level: 'middle',
    name_en: 'Class 6 (Middle Section)',
    name_ur: 'چھٹی جماعت (مڈل سیکشن)',
    group_name: null,
    subjects_en: ['English', 'Urdu', 'Mathematics', 'General Science', 'Islamiat', 'Computer'],
    subjects_ur: ['انگریزی', 'اردو', 'ریاضی', 'جنرل سائنس', 'اسلامیات', 'کمپیوٹر'],
    timing: '02:00 PM - 05:30 PM',
    monthly_fee: 4500,
    sort_order: 2,
    is_active: true,
  },
  {
    id: 'class-9',
    level: 'matric',
    name_en: 'Class 9 (Matric Science)',
    name_ur: 'نویں جماعت (میٹرک سائنس)',
    group_name: null,
    subjects_en: ['Physics', 'Chemistry', 'Biology / Computer', 'Mathematics', 'English', 'Urdu'],
    subjects_ur: ['طبیعیات (فزکس)', 'کیمیا (کیمسٹری)', 'حیاتیات / کمپیوٹر', 'ریاضی', 'انگریزی', 'اردو'],
    timing: '03:00 PM - 07:00 PM',
    monthly_fee: 6000,
    sort_order: 3,
    is_active: true,
  },
  {
    id: 'class-fsc-med',
    level: 'fsc',
    name_en: 'FSc Part 1 & 2 (Pre-Medical)',
    name_ur: 'ایف ایس سی (پری میڈیکل)',
    group_name: 'pre_medical',
    subjects_en: ['Biology', 'Physics', 'Chemistry', 'English', 'Urdu', 'Islamic & Pak Studies'],
    subjects_ur: ['حیاتیات (بائیولوجی)', 'فزکس', 'کیمسٹری', 'انگریزی', 'اردو', 'اسلامیات و مطالعہ پاکستان'],
    timing: '03:30 PM - 07:30 PM',
    monthly_fee: 7500,
    sort_order: 4,
    is_active: true,
  },
];

export const mockAnnouncements: Announcement[] = [
  {
    id: 'ann-1',
    title_en: 'Admissions Open for Academic Session 2026-2027',
    title_ur: 'تعلیمی سیشن 2026-2027 کے داخلے جاری ہیں',
    body_en: 'Unicorn Academy Sadiqabad announces new admissions for Prep to FSc. Special scholarships available for position holders.',
    body_ur: 'یونیکورن اکیڈمی صادق آباد میں پریپ تا ایف ایس سی نئے داخلوں کا آغاز ہو چکا ہے۔ پوزیشن ہولڈرز طلبہ کے لیے خصوصی وظائف۔',
    audience: 'public',
    is_published: true,
    published_at: '2026-03-01T10:00:00Z',
  },
];

// PLACEHOLDERS for Toppers
export const mockToppers: Topper[] = [
  {
    id: 'topper-1',
    name_en: 'Ayesha Noor',
    name_ur: 'عائشہ نور',
    class_label_en: 'FSc Pre-Medical (BISE Bwp)',
    class_label_ur: 'ایف ایس سی پری میڈیکل (بہاولپور بورڈ)',
    marks: '1068 / 1100',
    year: 2025,
    photo_url: '',
    sort_order: 1,
  },
  {
    id: 'topper-2',
    name_en: 'Muhammad Hamza',
    name_ur: 'محمد حمزہ',
    class_label_en: 'Matric Science (Top Position)',
    class_label_ur: 'میٹرک سائنس (شاندار پوزیشن)',
    marks: '1075 / 1100',
    year: 2025,
    photo_url: '',
    sort_order: 2,
  },
  {
    id: 'topper-3',
    name_en: 'Fatima Zahra',
    name_ur: 'فاطمہ زہرا',
    class_label_en: 'FSc Pre-Engineering',
    class_label_ur: 'ایف ایس سی پری انجینئرنگ',
    marks: '1052 / 1100',
    year: 2024,
    photo_url: '',
    sort_order: 3,
  },
  {
    id: 'topper-4',
    name_en: 'Zain Ali',
    name_ur: 'زین علی',
    class_label_en: 'Matric Science (A+ Grade)',
    class_label_ur: 'میٹرک سائنس (اے پلس گریڈ)',
    marks: '1060 / 1100',
    year: 2024,
    photo_url: '',
    sort_order: 4,
  },
];

// PLACEHOLDERS for Testimonials
export const mockTestimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Muhammad Tariq Mehmood',
    role_en: 'Parent of Matric Position Holder',
    role_ur: 'والد، میٹرک پوزیشن ہولڈر طالب علم',
    text_en:
      'The disciplined testing series and continuous teacher feedback at Unicorn Academy transformed my sons preparation. His conceptual clarity in Physics and Math was remarkable.',
    text_ur:
      'یونیکورن اکیڈمی کے باقاعدہ امتحانی سلسلے اور اساتذہ کی ذاتی توجہ نے میرے بیٹے کی تیاری کو مثالی بنا دیا۔ فزکس اور ریاضی میں اس کی مفہومی تفہیم قابل تحسین رہی۔',
    is_published: true,
  },
  {
    id: 'test-2',
    name: 'Mahnoor Fatima',
    role_en: 'FSc Pre-Medical Student',
    role_ur: 'طالبہ، ایف ایس سی پری میڈیکل',
    text_en:
      'Unicorn Academy is unlike any ordinary tuition center in Sadiqabad. Teachers patiently explain every question until every doubt is cleared. Highly recommended!',
    text_ur:
      'یونیکورن اکیڈمی صادق آباد کے روایتی ٹیوشن سینٹرز سے بالکل مختلف ہے۔ اساتذہ ہر تصور اور سوال کو اس وقت تک سمجھاتے ہیں جب تک تسلی نہ ہو۔',
    is_published: true,
  },
  {
    id: 'test-3',
    name: 'Engr. Bilal Ahmed',
    role_en: 'Academy Alumnus (Now at UET Lahore)',
    role_ur: 'سابق طالب علم (انجینئرنگ یونیورسٹی لاہور)',
    text_en:
      'The foundational concepts I built at Unicorn Academy during Matric and FSc served as the bedrock of my entry test success and university engineering studies.',
    text_ur:
      'میٹرک اور ایف ایس سی کے دوران یونیکورن اکیڈمی سے جو مضبوط بنیادی مفاہیم میں نے سیکھے، انہوں نے انٹری ٹیسٹ اور یونیورسٹی کی انجینئرنگ میں کلیدی کردار ادا کیا۔',
    is_published: true,
  },
];

// PLACEHOLDERS for Stats
export const mockStats: Stats = {
  students: 1250,
  teachers: 28,
  years: 12,
  results_percent: 98,
};

// PLACEHOLDERS for Site Settings
export const mockSiteSettings: SiteSettings = {
  admission_open_banner: true,
  phone: '0300-0000000',
  whatsapp: '923000000000',
  address_en: 'Main College Road, Sadiqabad, Punjab, Pakistan',
  address_ur: 'مین کالج روڈ، صادق آباد، پنجاب، پاکستان',
  academy_slogan_en: 'Igniting Minds, Inspiring Character, Shaping Futures',
  academy_slogan_ur: 'علم، فہم اور باوقار کردار سازی کا گہوارہ',
  about_history_en:
    'Established in 2014 in Sadiqabad, Unicorn Academy was founded on a singular dedication: providing students with uncompromising conceptual clarity and rigorous exam preparation. Over the past 12 years, we have grown into Sadiqabad premier academic academy for Prep to FSc, producing district toppers and disciplined achievers.',
  about_history_ur:
    '2014 میں صادق آباد میں قائم ہونے والی یونیکورن اکیڈمی کی بنیاد ایک ہی مقصد پر رکھی گئی تھی: طلبہ کو اعلیٰ ترین مفہومی تفہیم اور امتحانات کی بھرپور تیاری مہیا کرنا۔ گزشتہ 12 سالوں کے دوران یہ ادارہ صادق آباد میں پریپ تا ایف ایس سی کا سب سے معتبر ادارہ بن چکا ہے۔',
  about_mission_en:
    'Our mission is to empower students through disciplined learning, expert faculty guidance, and regular diagnostic testing. We aim to equip every student with conceptual mastery and moral uprightness to excel in board examinations and higher education.',
  about_mission_ur:
    'ہمارا مشن طلبہ کو باقاعدہ تدریس، ماہر اساتذہ کی رہنمائی اور مسلسل تشخیصی امتحانات کے ذریعے بااختیار بنانا ہے۔ ہم ہر طالب علم کو بورڈ امتحانات اور اعلیٰ تعلیم میں نمایاں کامیابی کے لیے تیار کرتے ہیں۔',
  about_vision_en:
    'To be recognized as the foremost tuition and academic excellence center in Southern Punjab, renowned for transforming potential into distinguished achievement while upholding the highest ethical standards.',
  about_vision_ur:
    'جنوبی پنجاب میں معیاری ٹیوشن اور تعلیمی برتری کا ایسا مثالی مرکز بننا جو بلند اخلاقی اقدار کے ساتھ ہر طالب علم کی صلاحیتوں کو عملی کامیابی میں تبدیل کرے۔',
};
