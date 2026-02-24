import {
  FileText, Sheet, Image, Code, BookOpen, Pencil, Type, ImagePlus,
  Droplets, Eraser, Hash, RotateCw, Crop, Maximize, Minimize2,
  EyeOff, Highlighter, MessageSquare, Lock, Unlock, KeyRound,
  ShieldCheck, ShieldOff, PenTool, BadgeCheck, ShieldAlert,
  Scissors, FileOutput, Trash2, ArrowUpDown, Layers, Wrench,
  ScanText, ScanLine, Files, FileEdit, FolderArchive, PanelTop,
  FileX, Braces, ArrowLeftRight, FolderOpen, Sparkles, Shield,
  Combine, type LucideProps, Presentation, Diff,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  FileText, Sheet, Image, Code, BookOpen, Pencil, Type, ImagePlus,
  Droplets, Eraser, Hash, RotateCw, Crop, Maximize, Minimize2,
  EyeOff, Highlighter, MessageSquare, Lock, Unlock, KeyRound,
  ShieldCheck, ShieldOff, PenTool, BadgeCheck, ShieldAlert,
  Scissors, FileOutput, Trash2, ArrowUpDown, Layers, Wrench,
  ScanText, ScanLine, Files, FileEdit, FolderArchive, PanelTop,
  FileX, Braces, ArrowLeftRight, FolderOpen, Sparkles, Shield,
  Combine, Presentation, Diff,
};

interface ToolIconProps extends LucideProps {
  name: string;
}

export function ToolIcon({ name, ...props }: ToolIconProps) {
  const Icon = iconMap[name] || FileText;
  return <Icon {...props} />;
}
