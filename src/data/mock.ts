/**
 * PLACEHOLDER MOCK DATA FOR PHASE 1 FOUNDATION
 * NOTE: The following mock records are temporary placeholders for UI testing and layout validation.
 * In later phases, this data layer will be migrated to real Supabase database tables.
 */

import { ClassItem, Announcement, SiteSettings } from '../types';

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

// PLACEHOLDERS for Site Settings
export const mockSiteSettings: SiteSettings = {
  admission_open_banner: true,
  phone: '0300-0000000',
  whatsapp: '923000000000',
  address_en: 'Main College Road, Sadiqabad, Punjab, Pakistan',
  address_ur: 'مین کالج روڈ، صادق آباد، پنجاب، پاکستان',
};
