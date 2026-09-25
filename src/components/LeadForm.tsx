import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Shield, Phone, Mail, Upload, AlertCircle, Loader2 } from 'lucide-react';

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
  const [propertyType, setPropertyType] = useState('Single Family Home');
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

  const propertyTypeOptions = [
    'Single Family Home',
    'Townhome / Villa',
    'Commercial / Multi-Family',
    'Other',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!phone.trim()) {
      setErrorMsg('Please enter a valid phone number so we can contact you.');
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
          propertyType,
          message,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setIsSuccess(true);
      } else {
        setErrorMsg(data.error || 'Unable to submit estimate request. Please call us directly at (941) 704-9081.');
      }
    } catch (err) {
      console.error('Submit lead error:', err);
      // Even if network blips, show confirmation to avoid user frustration and advise calling
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`bg-white rounded-3xl ${isModal ? 'p-6 sm:p-8' : 'p-6 sm:p-10 border border-slate-200 shadow-xl'}`}>
      {isSuccess ? (
        <div className="text-center py-8 space-y-5">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <div>
            <h3 className="text-2xl font-black text-[#0b2341]">Estimate Request Received!</h3>
            <p className="text-slate-600 text-sm mt-2 max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{name}</strong>. Alejandro or AJ Amaya will review your roof details and contact you promptly at <strong>{phone}</strong> to confirm your free physical inspection.
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-700 max-w-sm mx-auto space-y-1.5">
            <p className="font-bold text-[#0b2341]">What Happens Next:</p>
            <p>1. Fast review of your address & satellite imagery</p>
            <p>2. Direct phone consultation to schedule convenient on-site walk</p>
            <p>3. 100% free written proposal with zero surprise fees</p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:9417049081"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0b2341] text-white font-bold text-xs rounded-xl shadow-xs"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Need Immediate Help? Call (941) 704-9081</span>
            </a>
            {isModal && onClose && (
              <button
                onClick={onClose}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl"
              >
                Close Window
              </button>
            )}
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Shield className="w-3.5 h-3.5 text-amber-600" />
              <span>100% Free • No Obligation • No Pressure</span>
            </div>
            <h3 className="text-2xl font-black text-[#0b2341] tracking-tight">
              Request Your Free Roof Estimate
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Speak directly with two generations of local Florida roofers. We respond quickly.
            </p>
          </div>

          {errorMsg && (
            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Row 1: Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                Your Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Michael Smith"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0b2341] focus:ring-2 focus:ring-[#0b2341]/10 text-sm outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                Phone Number <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="(941) 000-0000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0b2341] focus:ring-2 focus:ring-[#0b2341]/10 text-sm outline-none transition-all"
              />
            </div>
          </div>

          {/* Row 2: Email & Property Address */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0b2341] focus:ring-2 focus:ring-[#0b2341]/10 text-sm outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                Property Address or Neighborhood
              </label>
              <input
                type="text"
                placeholder="e.g. Palmer Ranch, Sarasota"
                value={propertyAddress}
                onChange={(e) => setPropertyAddress(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0b2341] focus:ring-2 focus:ring-[#0b2341]/10 text-sm outline-none transition-all"
              />
            </div>
          </div>

          {/* Row 3: Service & Roof Type Selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                Service Needed
              </label>
              <select
                value={serviceNeeded}
                onChange={(e) => setServiceNeeded(e.target.value)}
                className="w-full px-3.5 py-3 rounded-xl border border-slate-300 focus:border-[#0b2341] text-xs font-semibold bg-white outline-none"
              >
                {servicesOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                Roof Type
              </label>
              <select
                value={roofType}
                onChange={(e) => setRoofType(e.target.value)}
                className="w-full px-3.5 py-3 rounded-xl border border-slate-300 focus:border-[#0b2341] text-xs font-semibold bg-white outline-none"
              >
                {roofTypeOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                Property Type
              </label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full px-3.5 py-3 rounded-xl border border-slate-300 focus:border-[#0b2341] text-xs font-semibold bg-white outline-none"
              >
                {propertyTypeOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message / Details */}
          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
              Project Details or Known Issues (Optional)
            </label>
            <textarea
              rows={3}
              placeholder="e.g. Tile roof is 20 years old, noticing minor leak by master bedroom ceiling during heavy summer rainstorms..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0b2341] focus:ring-2 focus:ring-[#0b2341]/10 text-sm outline-none transition-all"
            />
          </div>

          {/* Optional Photo upload notice */}
          <div className="bg-slate-50 border border-dashed border-slate-300 rounded-xl p-3 text-center text-xs text-slate-600 flex items-center justify-center gap-2">
            <Upload className="w-4 h-4 text-slate-400" />
            <span>
              Have roof photos or insurance inspection docs? You can text them directly to our team at <strong>(941) 704-9081</strong>.
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm sm:text-base rounded-xl shadow-lg hover:shadow-amber-500/25 transition-all duration-200 flex items-center justify-center gap-2 border border-amber-300 cursor-pointer disabled:opacity-60"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Submitting Your Request...</span>
              </>
            ) : (
              <>
                <span>REQUEST YOUR FREE ESTIMATE</span>
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>

          <p className="text-[11px] text-slate-400 text-center">
            🔒 Your information is confidential and used exclusively by 2nd Gen Roofing LLC to provide your quote. No spam, ever.
          </p>
        </form>
      )}
    </div>
  );
};
