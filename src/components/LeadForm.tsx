import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Shield, Phone, AlertCircle, Loader2 } from 'lucide-react';

interface LeadFormProps {
  initialService?: string;
  initialNotes?: string;
  isModal?: boolean;
  onClose?: () => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({
  initialService = 'Roof Replacement',
  initialNotes = '',
  isModal = false,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [propertyAddress, setPropertyAddress] = useState('');
  const [serviceNeeded, setServiceNeeded] = useState(initialService);
  const [roofType, setRoofType] = useState('Tile Roofing');
  const [message, setMessage] = useState(initialNotes);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const servicesOptions = [
    'Roof Replacement',
    'Roof Repair',
    'Roof Inspection',
    'Maintenance',
    'Shingle Roofing',
    'Tile Roofing',
    'Metal Roofing',
    'Low-Slope Roofing',
    'Not Sure',
  ];

  const roofTypeOptions = [
    'Tile Roofing',
    'Shingle Roofing',
    'Metal Roofing',
    'Low-Slope / Flat',
    'Not Sure',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!phone.trim()) {
      setErrorMsg('Please enter a valid phone number.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          email,
          propertyAddress,
          serviceNeeded,
          roofType,
          message,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setIsSuccess(true);
      } else {
        setErrorMsg(data.error || 'Unable to submit estimate request. Please call (941) 704-9081.');
      }
    } catch (err) {
      console.error('Submit lead error:', err);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`bg-white rounded-2xl ${isModal ? 'p-4 sm:p-5' : 'p-5 sm:p-7 border border-slate-200 shadow-lg'}`}>
      {isSuccess ? (
        <div className="text-center py-6 space-y-4">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-[#0b2341]">Estimate Request Received!</h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong>{name}</strong>. Alejandro or AJ Amaya will review your roof details and call you at <strong>{phone}</strong> to confirm your free estimate.
            </p>
          </div>

          <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs text-slate-700 max-w-xs mx-auto space-y-1">
            <p className="font-bold text-[#0b2341]">Next Steps:</p>
            <p>• Satellite review of roof size & pitch</p>
            <p>• Fast phone confirmation for on-site walk</p>
            <p>• Written estimate with zero hidden fees</p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2">
            <a
              href="tel:9417049081"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0b2341] text-white font-bold text-xs rounded-lg"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call (941) 704-9081</span>
            </a>
            {isModal && onClose && (
              <button
                onClick={onClose}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-lg cursor-pointer"
              >
                Done
              </button>
            )}
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div className="border-b border-slate-100 pb-2.5">
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 text-[10px] font-bold uppercase tracking-wider mb-1">
              <Shield className="w-3 h-3 text-amber-600" />
              <span>Free On-Site Estimate • No Obligation</span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-[#0b2341] tracking-tight">
              Request Your Free Roof Estimate
            </h3>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Two generations of Florida roofers. Straightforward answers & honest options.
            </p>
          </div>

          {errorMsg && (
            <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Row 1: Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div>
              <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-1">
                Your Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Michael Smith"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:border-[#0b2341] focus:ring-1 focus:ring-[#0b2341] text-xs outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-1">
                Phone Number <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="(941) 704-0000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:border-[#0b2341] focus:ring-1 focus:ring-[#0b2341] text-xs outline-none transition-all"
              />
            </div>
          </div>

          {/* Row 2: Email & Property Address */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div>
              <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:border-[#0b2341] focus:ring-1 focus:ring-[#0b2341] text-xs outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-1">
                Property Address / City
              </label>
              <input
                type="text"
                placeholder="e.g. Palmer Ranch, Sarasota"
                value={propertyAddress}
                onChange={(e) => setPropertyAddress(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:border-[#0b2341] focus:ring-1 focus:ring-[#0b2341] text-xs outline-none transition-all"
              />
            </div>
          </div>

          {/* Row 3: Service Needed & Roof Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div>
              <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-1">
                Service Needed
              </label>
              <select
                value={serviceNeeded}
                onChange={(e) => setServiceNeeded(e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 focus:border-[#0b2341] text-xs font-medium bg-white outline-none"
              >
                {servicesOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-1">
                Roof Type
              </label>
              <select
                value={roofType}
                onChange={(e) => setRoofType(e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 focus:border-[#0b2341] text-xs font-medium bg-white outline-none"
              >
                {roofTypeOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Notes / Details */}
          <div>
            <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-1">
              Project Notes (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Tile roof is 20 yrs old; suspect leak around valley or pipe boot..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-1.5 rounded-lg border border-slate-300 focus:border-[#0b2341] text-xs outline-none transition-all"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2.5 sm:py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm rounded-lg shadow-sm hover:shadow transition-all flex items-center justify-center gap-1.5 border border-amber-300 cursor-pointer disabled:opacity-60"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Submitting Request...</span>
              </>
            ) : (
              <>
                <span>REQUEST FREE ESTIMATE</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          <p className="text-[10px] text-slate-400 text-center">
            🔒 Kept 100% confidential by 2nd Gen Roofing LLC. No sales calls, ever.
          </p>
        </form>
      )}
    </div>
  );
};
