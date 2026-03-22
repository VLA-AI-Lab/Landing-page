import { FileQuestion, Inbox, type LucideIcon } from 'lucide-react';

interface EmptyStateProps {
  icon?: LucideIcon;
  title: string;
  description?: string;
  className?: string;
}

/**
 * Reusable empty-state placeholder shown when a dynamic section has no data.
 */
export function EmptyState({
  icon: Icon = Inbox,
  title,
  description,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center py-16 text-center ${className ?? ''}`}
    >
      <div className="size-16 rounded-2xl bg-slate-100 flex items-center justify-center mb-5">
        <Icon className="size-8 text-slate-400" strokeWidth={1.5} />
      </div>
      <h3 className="text-lg font-semibold text-slate-500 mb-1">{title}</h3>
      {description && (
        <p className="text-sm text-slate-400 max-w-sm">{description}</p>
      )}
    </div>
  );
}
