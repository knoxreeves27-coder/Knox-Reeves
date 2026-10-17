import { ClassItem, Announcement, SiteSettings } from '../types';
import { mockClasses, mockAnnouncements, mockSiteSettings } from '../data/mock';

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
