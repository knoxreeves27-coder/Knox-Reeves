import { ClassItem, Announcement, SiteSettings, Topper, Testimonial, Stats } from '../types';
import {
  mockClasses,
  mockAnnouncements,
  mockSiteSettings,
  mockToppers,
  mockTestimonials,
  mockStats,
} from '../data/mock';

const SIMULATED_LATENCY_MS = 250;

/**
 * Service to fetch academy classes.
 * UI must consume data solely via these services.
 */
export async function getClasses(): Promise<ClassItem[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...mockClasses].sort((a, b) => a.sort_order - b.sort_order));
    }, SIMULATED_LATENCY_MS);
  });
}

/**
 * Service to fetch academy site settings.
 */
export async function getSiteSettings(): Promise<SiteSettings> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ ...mockSiteSettings });
    }, SIMULATED_LATENCY_MS);
  });
}

/**
 * Service to fetch announcements.
 */
export async function getAnnouncements(): Promise<Announcement[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...mockAnnouncements]);
    }, SIMULATED_LATENCY_MS);
  });
}

/**
 * Service to fetch toppers.
 */
export async function getToppers(): Promise<Topper[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...mockToppers].sort((a, b) => a.sort_order - b.sort_order));
    }, SIMULATED_LATENCY_MS);
  });
}

/**
 * Service to fetch published testimonials.
 */
export async function getTestimonials(): Promise<Testimonial[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockTestimonials.filter((item) => item.is_published));
    }, SIMULATED_LATENCY_MS);
  });
}

/**
 * Service to fetch key stats.
 */
export async function getStats(): Promise<Stats> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ ...mockStats });
    }, SIMULATED_LATENCY_MS);
  });
}
