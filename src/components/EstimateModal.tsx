import React from 'react';
import { X } from 'lucide-react';
import { LeadForm } from './LeadForm';

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialNotes?: string;
}

export const EstimateModal: React.FC<EstimateModalProps> = ({
  isOpen,
  onClose,
  initialService,
  initialNotes,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/60 backdrop-blur-2xs overflow-y-auto">
      <div className="relative w-full max-w-md sm:max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden my-4 border border-slate-200">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-1.5 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors cursor-pointer"
          aria-label="Close estimate dialog"
        >
          <X className="w-4 h-4" />
        </button>

        <LeadForm
          isModal={true}
          onClose={onClose}
          initialService={initialService}
          initialNotes={initialNotes}
        />
      </div>
    </div>
  );
};
