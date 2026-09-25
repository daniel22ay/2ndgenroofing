import React from 'react';
import { Star, CheckCircle, ShieldCheck, Heart, ThumbsUp } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const verifiedReviews = [
    {
      id: 1,
      author: 'David & Karen M.',
      location: 'Bradenton, FL',
      rating: 5,
      source: 'Angi Verified Homeowner',
      date: 'Recent Customer',
      title: 'Fixed our roof the next day with photo updates',
      content:
        'AJ from 2nd Gen Roofing responded immediately and took care of our roof repair the very next day. He provided detailed before-and-after photos, explained exactly what happened around our vent flashing, and did not try to upsell us on anything. Honest, prompt, and top quality workmanship.',
      tag: 'Roof Repair',
    },
    {
      id: 2,
      author: 'Robert S.',
      location: 'Palmer Ranch, Sarasota, FL',
      rating: 5,
      source: 'Google 5-Star Review',
      date: 'Recent Customer',
      title: 'Alejandro and the crew replaced our tile roof flawlessly',
      content:
        'Alejandro and the entire 2nd Gen crew did an outstanding job replacing our tile roof. From the initial estimate with zero hidden surprises to the immaculate daily clean-up and magnetic sweep, they were thorough, communicative, and true craftsmen. Our roof looks gorgeous.',
      tag: 'Tile Reroof',
    },
    {
      id: 3,
      author: 'Elena T.',
      location: 'Venice, FL',
      rating: 5,
      source: 'Nextdoor Neighborhood Fave',
      date: 'Recent Customer',
      title: 'Two generations of real local knowledge shows',
      content:
        'During our pre-hurricane season inspection, AJ spotted a torn boot collar before it caused serious interior ceiling water damage. They are reliable, reasonably priced, and communicate every single step. Highly recommend this family business to anyone on the Suncoast.',
      tag: 'Inspection & Maintenance',
    },
    {
      id: 4,
      author: 'Marcus P.',
      location: 'Lakewood Ranch, FL',
      rating: 5,
      source: 'Angi Verified Homeowner',
      date: 'Recent Customer',
      title: 'No pushy sales, just honest professional advice',
      content:
        'We had three roofing contractors out. Two tried to sell us an overpriced replacement we did not need yet. 2nd Gen gave us an honest breakdown, repaired the compromised valley section, and told us we have another 5 good years on the rest. That level of honesty is rare in Florida roofing.',
      tag: 'Honest Assessment',
    },
    {
      id: 5,
      author: 'Patricia H.',
      location: 'Osprey, FL',
      rating: 5,
      source: 'Google 5-Star Review',
      date: 'Recent Customer',
      title: 'Clean site guarantee was 100% true',
      content:
        'With two dogs and grandchildren running around, our biggest fear was nails in the lawn. The 2nd Gen team ran their magnetic rollers three times and left our driveway and lawn cleaner than when they started. The architectural shingles look incredible.',
      tag: 'Clean-Up & Care',
    },
    {
      id: 6,
      author: 'Gregory L.',
      location: 'North Port, FL',
      rating: 5,
      source: 'Angi Verified Homeowner',
      date: 'Recent Customer',
      title: 'Permitting and county inspection passed first try',
      content:
        '2nd Gen handled all the Sarasota County permits smoothly and their secondary water barrier passed inspection immediately. When the county inspector showed up, he praised their fastening pattern. Real craftsmanship.',
      tag: 'Code Compliance',
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-500/20">
            <Heart className="w-3.5 h-3.5 text-rose-500" />
            <span>Real Customer Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0b2341] tracking-tight">
            Trusted by Our Sarasota & Bradenton Neighbors
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Read what local homeowners say about our communication, clean job sites, accurate estimates, and dependable craftsmanship.
          </p>

          {/* Aggregate Rating Summary */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-6 bg-slate-50 px-6 py-3 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-slate-900">5.0</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
            </div>
            <span className="text-slate-300">|</span>
            <span className="text-xs font-bold text-slate-700">98% Recommendation Rate on Angi</span>
            <span className="text-slate-300">|</span>
            <span className="text-xs font-bold text-slate-700">Voted Nextdoor Neighborhood Fave 3 Years</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {verifiedReviews.map((review) => (
            <div
              key={review.id}
              className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-amber-400/80 transition-all duration-200 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Header: Stars & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-slate-600 bg-white px-2.5 py-0.5 rounded border border-slate-200">
                    {review.tag}
                  </span>
                </div>

                <h3 className="font-extrabold text-base text-[#0b2341] mb-2 leading-snug">
                  "{review.title}"
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  "{review.content}"
                </p>
              </div>

              {/* Author & Verification Footer */}
              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-xs text-slate-900">{review.author}</h4>
                  <p className="text-[11px] text-slate-500">{review.location}</p>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    <span>{review.source}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
