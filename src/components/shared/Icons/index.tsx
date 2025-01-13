import type { LucideIcon } from 'lucide-react';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Eye,
  EyeOff,
  LayoutDashboard,
  Loader,
  LogInIcon,
  MenuIcon,
  Moon,
  PanelLeft,
  ShieldCheck,
  Sun,
  Users,
} from 'lucide-react';

import { Github } from './Github';
import { LogoSvg } from '@/components/shared/Icons/Logo';

export type Icon = LucideIcon;

export const Icons = {
  logo: LogoSvg,
  chevronLeft: ChevronLeft,
  chevronsLeft: ChevronsLeft,
  chevronRight: ChevronRight,
  chevronsRight: ChevronsRight,
  dashboard: LayoutDashboard,
  loader: Loader,
  menuIcon: MenuIcon,
  shieldCheck: ShieldCheck,
  login: LogInIcon,
  users: Users,
  moon: Moon,
  sun: Sun,
  panelLeft: PanelLeft,
  eye: Eye,
  eyeOff: EyeOff,
  gitHub: Github,
};
