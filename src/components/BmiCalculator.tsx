import React, { useState } from 'react';
import { Calculator, RotateCcw, AlertCircle, ArrowUpRight, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import { createWhatsAppLink } from '../utils/whatsapp.ts';

interface BmiCategoryInfo {
  label: string;
  range: string;
  color: string;
  bgColor: string;
  description: string;
}

export const BmiCalculator: React.FC = () => {
  const [heightCm, setHeightCm] = useState<string>('172');
  const [weightKg, setWeightKg] = useState<string>('68');
  const [isAdult, setIsAdult] = useState<boolean>(true);
  const [calculatedBmi, setCalculatedBmi] = useState<number | null>(23.0);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Adult category thresholds
  const getAdultCategory = (bmi: number): BmiCategoryInfo => {
    if (bmi < 18.5) {
      return {
        label: 'Underweight',
        range: 'Below 18.5',
        color: '#60A5FA', // Light blue
        bgColor: 'bg-blue-950/40 border-blue-800/60',
        description: 'May indicate insufficient nutritional intake or body mass for height.',
      };
    }
    if (bmi < 25.0) {
      return {
        label: 'Healthy-Weight BMI Range',
        range: '18.5 – 24.9',
        color: '#D7FF35', // Electric lime
        bgColor: 'bg-[#D7FF35]/10 border-[#D7FF35]/40',
        description: 'Falls within the statistically recommended range for adult body mass.',
      };
    }
    if (bmi < 30.0) {
      return {
        label: 'Overweight',
        range: '25.0 – 29.9',
        color: '#FBBF24', // Amber
        bgColor: 'bg-amber-950/40 border-amber-800/60',
        description: 'Above standard reference weight for height; structured exercise and nutrition are often helpful.',
      };
    }
    return {
      label: 'Obesity Range',
      range: '30.0 and above',
      color: '#F87171', // Rose
      bgColor: 'bg-rose-950/40 border-rose-800/60',
      description: 'Significantly elevated weight relative to height; consulting a healthcare practitioner alongside gym training is recommended.',
    };
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    const h = parseFloat(heightCm);
    const w = parseFloat(weightKg);

    if (isNaN(h) || isNaN(w)) {
      setValidationError('Please enter valid numeric values for both height and weight.');
      setCalculatedBmi(null);
      return;
    }

    if (h <= 0 || w <= 0) {
      setValidationError('Height and weight must be positive numbers greater than zero.');
      setCalculatedBmi(null);
      return;
    }

    if (h < 50 || h > 260) {
      setValidationError('Please enter a realistic height between 50 cm and 260 cm.');
      setCalculatedBmi(null);
      return;
    }

    if (w < 20 || w > 350) {
      setValidationError('Please enter a realistic weight between 20 kg and 350 kg.');
      setCalculatedBmi(null);
      return;
    }

    const heightInMeters = h / 100;
    const bmi = w / (heightInMeters * heightInMeters);

    if (!isFinite(bmi) || isNaN(bmi)) {
      setValidationError('Calculation error. Please verify the input values.');
      setCalculatedBmi(null);
      return;
    }

    setCalculatedBmi(Math.round(bmi * 10) / 10);
  };

  const handleReset = () => {
    setHeightCm('');
    setWeightKg('');
    setCalculatedBmi(null);
    setValidationError(null);
  };

  const activeCategory = calculatedBmi !== null ? getAdultCategory(calculatedBmi) : null;

  const prefilledWhatsappWithBmi = calculatedBmi !== null
    ? `Hello Combat Fitness Club! I calculated my BMI (${calculatedBmi}) on your website and would like to discuss my fitness goals and available training options.`
    : `Hello Combat Fitness Club! I used your BMI calculator and would like to discuss my fitness goals and available training options.`;

  return (
    <section id="bmi-calculator" className="py-20 lg:py-28 bg-[#0B0D10] border-b border-[#292F37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold text-[#D7FF35] tracking-widest uppercase font-display">
              03. KNOW YOUR NUMBERS
            </span>
            <span className="text-[#292F37]" aria-hidden="true">·</span>
            <span className="text-xs text-[#A6ADB7] tracking-wider uppercase">SCREENING TOOL</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white font-display leading-[1.05]">
            YOUR BMI. <span className="text-[#D7FF35]">YOUR STARTING POINT.</span>
          </h2>

          <p className="mt-4 text-base text-[#A6ADB7] leading-relaxed">
            Calculate your Body Mass Index using your height and weight. Use this simple calculator as a general screening tool, not as a complete assessment of your health or fitness.
          </p>
        </div>

        {/* Main Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Input Form Panel */}
          <div className="lg:col-span-6 bg-[#15191F] border border-[#292F37] rounded-xl p-6 sm:p-8 shadow-xl">
            <div className="flex items-center justify-between pb-6 border-b border-[#292F37]">
              <div className="flex items-center gap-2.5">
                <Calculator className="w-5 h-5 text-[#D7FF35]" />
                <h3 className="text-lg font-bold uppercase tracking-wide text-white font-display">
                  Body Mass Index Parameters
                </h3>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="flex items-center gap-1.5 text-xs text-[#A6ADB7] hover:text-[#D7FF35] transition-colors py-1 px-2 rounded hover:bg-[#0B0D10]"
                title="Reset values"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>RESET</span>
              </button>
            </div>

            <form onSubmit={handleCalculate} className="mt-6 space-y-6">
              {/* Height Input */}
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <label htmlFor="height-input" className="text-sm font-semibold text-white">
                    Height
                  </label>
                  <span className="text-xs text-[#A6ADB7]">Centimetres (cm)</span>
                </div>
                <div className="relative">
                  <input
                    id="height-input"
                    type="number"
                    step="0.5"
                    min="50"
                    max="260"
                    value={heightCm}
                    onChange={(e) => {
                      setHeightCm(e.target.value);
                      setValidationError(null);
                    }}
                    placeholder="e.g. 175"
                    required
                    className="w-full px-4 py-3 bg-[#0B0D10] border border-[#292F37] rounded-lg text-white font-mono text-base focus:outline-none focus:border-[#D7FF35] focus:ring-1 focus:ring-[#D7FF35] transition-all placeholder-[#505762]"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-xs font-mono text-[#A6ADB7]">
                    cm
                  </div>
                </div>
              </div>

              {/* Weight Input */}
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <label htmlFor="weight-input" className="text-sm font-semibold text-white">
                    Weight
                  </label>
                  <span className="text-xs text-[#A6ADB7]">Kilograms (kg)</span>
                </div>
                <div className="relative">
                  <input
                    id="weight-input"
                    type="number"
                    step="0.5"
                    min="20"
                    max="350"
                    value={weightKg}
                    onChange={(e) => {
                      setWeightKg(e.target.value);
                      setValidationError(null);
                    }}
                    placeholder="e.g. 70"
                    required
                    className="w-full px-4 py-3 bg-[#0B0D10] border border-[#292F37] rounded-lg text-white font-mono text-base focus:outline-none focus:border-[#D7FF35] focus:ring-1 focus:ring-[#D7FF35] transition-all placeholder-[#505762]"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-xs font-mono text-[#A6ADB7]">
                    kg
                  </div>
                </div>
              </div>

              {/* Age Confirmation Checkbox - Mandatory requirement */}
              <div className="pt-2 border-t border-[#292F37]">
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={isAdult}
                    onChange={(e) => setIsAdult(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-[#292F37] text-[#D7FF35] bg-[#0B0D10] focus:ring-[#D7FF35] focus:ring-offset-0"
                  />
                  <span className="text-xs text-[#A6ADB7] leading-relaxed">
                    <strong className="text-white">I confirm that I am aged 20 or older.</strong>
                    <span className="block text-[11px] text-[#A6ADB7]/70 mt-0.5">
                      Standard adult BMI categories apply to ages 20+. For people under 20, BMI is evaluated using age- and sex-specific growth charts.
                    </span>
                  </span>
                </label>
              </div>

              {/* Validation Error Banner */}
              {validationError && (
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-red-950/40 border border-red-800 text-red-300 text-xs">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{validationError}</span>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 py-3.5 px-6 bg-[#D7FF35] hover:bg-[#cbf528] active:scale-[0.98] text-[#0B0D10] font-bold text-xs uppercase tracking-wider rounded font-display transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Calculator className="w-4 h-4" />
                  <span>CALCULATE MY BMI</span>
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="py-3.5 px-5 bg-[#0B0D10] hover:bg-[#1A2028] text-white border border-[#292F37] font-semibold text-xs uppercase tracking-wider rounded font-display transition-colors"
                >
                  CLEAR
                </button>
              </div>

              {/* Privacy Notice */}
              <div className="flex items-center gap-2 text-[11px] text-[#A6ADB7]/70 pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D7FF35]" />
                <span>Calculated directly in your browser. Zero health data stored or shared.</span>
              </div>
            </form>
          </div>

          {/* Right: Results & Category Breakdown */}
          <div className="lg:col-span-6 space-y-6">
            {calculatedBmi !== null ? (
              <div className="bg-[#15191F] border border-[#292F37] rounded-xl p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#292F37]">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#A6ADB7] font-display">
                    Calculation Result
                  </span>
                  <span className="text-xs text-[#A6ADB7]">
                    Formula: weight (kg) ÷ (height (m))²
                  </span>
                </div>

                {/* Main Score Display */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                  <div>
                    <span className="text-xs uppercase text-[#A6ADB7] font-medium block">
                      Your Body Mass Index
                    </span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-5xl sm:text-6xl font-bold font-mono tracking-tight text-white tabular-nums">
                        {calculatedBmi.toFixed(1)}
                      </span>
                      <span className="text-sm font-mono text-[#A6ADB7]">kg/m²</span>
                    </div>
                  </div>

                  {/* Active Classification */}
                  {isAdult && activeCategory ? (
                    <div className={`p-3 rounded-lg border ${activeCategory.bgColor} sm:text-right`}>
                      <span className="text-[10px] uppercase font-display tracking-wider text-[#A6ADB7] block">
                        Category (Adult 20+)
                      </span>
                      <span
                        className="text-base font-bold font-display uppercase tracking-wide block mt-0.5"
                        style={{ color: activeCategory.color }}
                      >
                        {activeCategory.label}
                      </span>
                      <span className="text-xs text-[#A6ADB7] font-mono">
                        {activeCategory.range}
                      </span>
                    </div>
                  ) : (
                    <div className="p-3 rounded-lg border bg-[#0B0D10] border-[#292F37] sm:text-right">
                      <span className="text-[10px] uppercase font-display tracking-wider text-[#A6ADB7] block">
                        Age Under 20
                      </span>
                      <span className="text-xs text-[#A6ADB7] mt-1 block">
                        Numerical result shown. Consult pediatrician / growth chart.
                      </span>
                    </div>
                  )}
                </div>

                {/* Visual Category Range Bar */}
                {isAdult && (
                  <div className="space-y-2 pt-2">
                    <div className="h-2.5 w-full rounded-full bg-[#0B0D10] flex overflow-hidden border border-[#292F37]">
                      {/* Underweight: <18.5 (approx 25%) */}
                      <div className="h-full bg-blue-500/70" style={{ width: '22%' }} title="Underweight (<18.5)" />
                      {/* Healthy: 18.5 - 25 (approx 35%) */}
                      <div className="h-full bg-[#D7FF35]" style={{ width: '38%' }} title="Healthy weight (18.5 - 24.9)" />
                      {/* Overweight: 25 - 30 (approx 20%) */}
                      <div className="h-full bg-amber-500/80" style={{ width: '20%' }} title="Overweight (25.0 - 29.9)" />
                      {/* Obesity: 30+ (approx 20%) */}
                      <div className="h-full bg-rose-500/80" style={{ width: '20%' }} title="Obesity (30.0+)" />
                    </div>

                    <div className="flex justify-between text-[10px] font-mono text-[#A6ADB7] px-0.5">
                      <span>&lt; 18.5</span>
                      <span>18.5 – 24.9</span>
                      <span>25.0 – 29.9</span>
                      <span>30.0+</span>
                    </div>
                  </div>
                )}

                {/* Explanation text */}
                {isAdult && activeCategory && (
                  <p className="text-xs text-[#A6ADB7] leading-relaxed bg-[#0B0D10]/50 p-3 rounded border border-[#292F37]/80">
                    {activeCategory.description}
                  </p>
                )}

                {/* WhatsApp Action CTA */}
                <div className="pt-2 border-t border-[#292F37]">
                  <a
                    href={createWhatsAppLink(prefilledWhatsappWithBmi)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#D7FF35] hover:bg-[#cbf528] text-[#0B0D10] font-bold text-xs uppercase tracking-wider rounded font-display transition-all"
                  >
                    <span>DISCUSS YOUR FITNESS GOALS</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </a>
                  <p className="text-[11px] text-[#A6ADB7]/80 text-center mt-2">
                    Message Combat Fitness Club on WhatsApp to discuss personalized workout plans for your goals.
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-[#15191F] border border-[#292F37] rounded-xl p-8 text-center space-y-4">
                <Heart className="w-10 h-10 text-[#D7FF35]/60 mx-auto" />
                <h4 className="text-lg font-bold uppercase text-white font-display">
                  Ready to Calculate
                </h4>
                <p className="text-sm text-[#A6ADB7] max-w-sm mx-auto">
                  Enter your height and weight in the form on the left to see your calculated BMI and category guidelines.
                </p>
              </div>
            )}

            {/* Health Disclaimer Box - Essential ethical requirement */}
            <div className="bg-[#15191F]/70 border border-[#292F37] rounded-xl p-5 text-xs text-[#A6ADB7] space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold font-display tracking-wider uppercase">
                <AlertCircle className="w-4 h-4 text-[#D7FF35]" />
                <span>Important Health Screening Disclaimer</span>
              </div>
              <p className="leading-relaxed">
                These categories are intended for adults aged 20 and older. BMI is only a general screening measure and does not directly measure body fat, bone density, or individual muscle mass. It should not be used as a standalone diagnostic tool or as a measure of personal worth or attractiveness.
              </p>
              <p className="leading-relaxed text-[#A6ADB7]/80">
                For individuals under 20, athletes with high muscle mass, or anyone with underlying health conditions, consult a qualified medical professional or certified nutritionist for tailored advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
