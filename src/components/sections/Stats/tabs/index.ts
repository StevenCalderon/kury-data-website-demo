import { tabKey as uiuxKey, tabLabel as uiuxLabel } from "./uiux.astro";
import { tabKey as frontendKey, tabLabel as frontendLabel } from "./frontend.astro";
import { tabKey as backendKey, tabLabel as backendLabel } from "./backend.astro";
import { tabKey as infraKey, tabLabel as infraLabel } from "./infra.astro";
import { tabKey as mobileKey, tabLabel as mobileLabel } from "./mobile.astro";
import UiuxTab from "./uiux.astro";
import FrontendTab from "./frontend.astro";
import BackendTab from "./backend.astro";
import InfraTab from "./infra.astro";
import MobileTab from "./mobile.astro";
import type { TechStackTabMetadata } from "./types";

export const techStackTabsMetadata: TechStackTabMetadata[] = [
  { key: uiuxKey, label: uiuxLabel },
  { key: frontendKey, label: frontendLabel },
  { key: backendKey, label: backendLabel },
  { key: infraKey, label: infraLabel },
  { key: mobileKey, label: mobileLabel },
];

export { UiuxTab, FrontendTab, BackendTab, InfraTab, MobileTab };
export type { TechStackTabMetadata, TechStackApp, TechStackPerson, BadgePosition, BadgeArrow } from "./types";
