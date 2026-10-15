import React, { useState } from 'react';
import { Project, NavigationTab, ClashPreset } from '../types';
import { MILESTONES } from '../data/mockData';

interface DashboardViewProps {
  currentProject: Project;
  onNavigate: (tab: NavigationTab) => void;
  onOpenDocumentDossier: (docId: string) => void;
  onOpenUpload: () => void;
  onTriggerToast: (title: string, desc: string, type?: 'success' | 'error' | 'info') => void;
  onOpenExcelIpc?: () => void;
  onOpenClashFilters?: (preset: ClashPreset) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  currentProject,
  onNavigate,
  onOpenDocumentDossier,
  onOpenUpload,
  onTriggerToast,
  onOpenExcelIpc,
  onOpenClashFilters
}) => {
  const [activeCamera, setActiveCamera] = useState<'cam2' | 'cam1' | 'drone'>('cam2');
  const [bimLayerArc, setBimLayerArc] = useState(true);
  const [bimLayerStr, setBimLayerStr] = useState(true);
  const [bimLayerMep, setBimLayerMep] = useState(true);

  return (
    <div className="flex flex-col gap-6 w-full max-w-[1600px] mx-auto p-4 sm:p-6 lg:p-8" dir="rtl">
      {/* =========================================================
          ROW 1: TOP 5 EXECUTIVE KPI CARDS
          ========================================================= */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* KPI 1 */}
        <div
          onClick={() => onNavigate('approvals')}
          className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between p-5 cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-600 group-hover:text-[#00716B] transition-colors">
              اقدام مدیر طراحی
            </span>
            <span className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200/60">
              <span className="material-symbols-outlined text-lg">assignment_late</span>
            </span>
          </div>
          <div className="my-2.5">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold font-['Markazi_Text'] text-amber-600">۳</span>
              <span className="text-xs font-medium text-slate-500">مورد در صف تایید نهایی</span>
            </div>
            <p className="text-[11px] text-amber-800 bg-amber-50 rounded px-2 py-0.5 mt-2 inline-block font-medium">
              مهلت پاسخ فوری: کمتر از ۲۴ ساعت
            </p>
          </div>
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span>درخواست‌های معوق</span>
            <span className="font-bold text-amber-600">۱ مورد بحرانی</span>
          </div>
        </div>

        {/* KPI 2 */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-600">پیشرفت فیزیکی طراحی</span>
            <span className="w-8 h-8 rounded-lg bg-teal-50 text-[#00716B] flex items-center justify-center border border-teal-100">
              <span className="material-symbols-outlined text-lg">architecture</span>
            </span>
          </div>
          <div className="my-2.5">
            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-col">
                <span className="text-3xl font-bold font-['Markazi_Text'] text-[#00716B]">۷۸.۵٪</span>
                <span className="text-[11px] font-bold text-emerald-600 mt-0.5">+۱.۲٪ این هفته</span>
              </div>
              <div className="relative w-14 h-14 flex items-center justify-center shrink-0">
                <div
                  className="w-12 h-12 rounded-full shadow-inner border border-slate-200"
                  style={{ background: 'conic-gradient(#00716B 0% 78.5%, #e2e8f0 78.5% 100%)' }}
                ></div>
              </div>
            </div>
          </div>
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span>خط مبنا (Baseline)</span>
            <span className="font-bold text-slate-700">مطابق زمان‌بندی</span>
          </div>
        </div>

        {/* KPI 3 */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-600">پیشرفت مالی قرارداد طراحی</span>
            <span className="w-8 h-8 rounded-lg bg-teal-50 text-[#00716B] flex items-center justify-center border border-teal-100">
              <span className="material-symbols-outlined text-lg">account_balance_wallet</span>
            </span>
          </div>
          <div className="my-2.5">
            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-col">
                <span className="text-3xl font-bold font-['Markazi_Text'] text-slate-800">۶۴٪</span>
                <span className="text-[11px] text-slate-500 mt-0.5">۴.۳ از ۶.۸ م.ت</span>
              </div>
              <div className="relative w-14 h-14 flex items-center justify-center shrink-0">
                <div
                  className="w-12 h-12 rounded-full shadow-inner border border-slate-200"
                  style={{ background: 'conic-gradient(#00716B 0% 64%, #e2e8f0 64% 100%)' }}
                ></div>
              </div>
            </div>
          </div>
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span>آخرین تسویه</span>
            <span className="font-bold text-slate-700">صورت‌وضعیت ۴</span>
          </div>
        </div>

        {/* KPI 4 */}
        <div
          onClick={() => onNavigate('bim')}
          className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between p-5 cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-600 group-hover:text-[#00716B] transition-colors">
              تعارضات مدل و هماهنگی (Clash)
            </span>
            <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-100">
              <span className="material-symbols-outlined text-lg">rule</span>
            </span>
          </div>
          <div className="my-2.5">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold font-['Markazi_Text'] text-slate-800">۱۲</span>
              <span className="text-xs font-medium text-slate-500">تعارض باز فعال</span>
            </div>
            <p className="text-[11px] text-rose-700 bg-rose-50 rounded px-2 py-0.5 mt-2 inline-block font-medium">
              ۳ مورد بحرانی (نیاز به بازنگری)
            </p>
          </div>
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span>نرخ رفع تداخل</span>
            <span className="font-bold text-emerald-600">۴۸ حل‌شده (۸۰٪)</span>
          </div>
        </div>

        {/* KPI 5 */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-600">معوقات زمانی (SLA)</span>
            <span className="w-8 h-8 rounded-lg bg-rose-50 text-rose-700 flex items-center justify-center border border-rose-100">
              <span className="material-symbols-outlined text-lg">hourglass_bottom</span>
            </span>
          </div>
          <div className="my-2.5">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold font-['Markazi_Text'] text-rose-600">۲</span>
              <span className="text-xs font-medium text-rose-700">مدرک فراتر از مهلت</span>
            </div>
            <p className="text-[11px] text-rose-700 bg-rose-50 rounded px-2 py-0.5 mt-2 inline-block font-medium">
              تاخیر تحویل مشاور سازه (۳ روز)
            </p>
          </div>
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span>اخطار انطباق</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onTriggerToast('اخطار انطباق SLA ارسال شد', 'اخطار کتبی مرحله دوم برای مشاور سازه ارسال گردید.', 'info');
              }}
              className="font-bold text-rose-600 hover:underline"
            >
              ارسال اخطار دوم
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          ROW 2: LIVE SITE MONITORING & TELEMETRY
          ========================================================= */}
      <section className="bg-white rounded-2xl border border-slate-200 shadow-xs p-5 lg:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 mb-5 border-b border-slate-100 gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#00716B]/10 text-[#00716B] flex items-center justify-center border border-[#00716B]/20">
              <span className="material-symbols-outlined text-xl">videocam</span>
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">پایش زنده و هوشمند وضعیت کارگاه</h2>
              <p className="text-xs text-slate-500 mt-0.5">مخابره برخط دوربین‌های هوشمند کارگاهی مستقر در سایت پروژه برج آلفا</p>
            </div>
          </div>

          {/* Camera Switcher Buttons */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl text-xs font-bold">
            <button
              onClick={() => setActiveCamera('cam2')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeCamera === 'cam2' ? 'bg-white text-[#00716B] shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              دوربین ۲
            </button>
            <button
              onClick={() => setActiveCamera('cam1')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeCamera === 'cam1' ? 'bg-white text-[#00716B] shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              دوربین ۱
            </button>
            <button
              onClick={() => setActiveCamera('drone')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeCamera === 'drone' ? 'bg-white text-[#00716B] shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              پهپاد سایت (Drone)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Video Stream Preview */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full h-80 sm:h-96 rounded-xl overflow-hidden bg-slate-950 border border-slate-200 shadow-inner group">
              <img
                alt="پایش زنده عملیات کارگاهی پروژه باران ۵"
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-102"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoJr7by85YncWp_YSyMZJFDFzPoij6LvNc8HH6XiPf0wov3809mDRRwUSArPlAn81oejFtdkm3cHLt4He5gR6iS6fBYKKT_7s4TqFTUpgi39NlYJFQNwrTLKdUxxA3in4RK57uuIVSMH-RAt1S8-9iWYa_z10fP1Q5ZkYdOkP9Z5SVIFvHU2_Yu1Tkna2zWETWVW8T9HRTvYN4UGn97pqAztHRStk63SW5iuOctbPlpO-pU8rf6bMu"
              />

              {/* Floating Top Left / Right Badges */}
              <div className="absolute top-3 right-3 flex items-center gap-2">
                <div className="bg-slate-950/85 backdrop-blur px-3 py-1.5 rounded-lg text-xs text-white flex items-center gap-2 border border-white/10 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                  <span className="font-mono font-bold">
                    {activeCamera === 'cam2' ? 'CAM-02: NORTH SITE' : activeCamera === 'cam1' ? 'CAM-01: SOUTH PODIUM' : 'DRONE-03: CRANE ORBIT'}
                  </span>
                </div>
                <div className="bg-slate-900/80 backdrop-blur px-2.5 py-1.5 rounded-lg text-[11px] text-slate-300 border border-white/10">
                  <span className="material-symbols-outlined text-xs text-amber-400 align-middle">schedule</span> آخرین مخابره: ۲ دقیقه پیش (۱۱:۴۵)
                </div>
              </div>

              {/* Bottom Control Bar */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-slate-900/90 backdrop-blur px-4 py-1.5 rounded-full border border-slate-700 shadow-2xl flex items-center gap-3 text-slate-200 text-xs whitespace-nowrap z-10">
                <button
                  onClick={() => onTriggerToast('نمایش تمام‌صفحه دوربین', 'دوربین زنده به حالت تمام‌صفحه منتقل شد.', 'info')}
                  className="hover:text-teal-300 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm">fullscreen</span>
                  <span>تمام‌صفحه</span>
                </button>
                <span className="text-slate-600">|</span>
                <button
                  onClick={() => onTriggerToast('عکس فوری ذخیره شد', 'اسکرین‌شات با موفقیت در آرشیو کارگاه ذخیره شد.', 'success')}
                  className="hover:text-teal-300 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm">photo_camera</span>
                  <span>عکس لحظه‌ای</span>
                </button>
                <span className="text-slate-600">|</span>
                <button
                  onClick={() => onTriggerToast('تایم‌لپس کارگاهی', 'ویدئوی تایم‌لپس ۴۸ ساعت گذشته آماده پخش است.', 'info')}
                  className="hover:text-teal-300 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm">videocam</span>
                  <span>ضبط تایم‌لپس</span>
                </button>
                <span className="text-slate-600">|</span>
                <span className="text-emerald-400 font-mono text-[11px] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>HD 1080p 30fps
                </span>
              </div>
            </div>
          </div>

          {/* Telemetry & Site Sensor Status */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="bg-slate-50 rounded-xl border border-slate-200 p-4 space-y-3.5 flex-1 flex flex-col justify-between">
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#00716B]/10 text-[#00716B] flex items-center justify-center">
                    <span className="material-symbols-outlined text-base">sensors</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">ایستگاه تله‌متری محیطی و شرایط جوی</h4>
                    <span className="text-[10px] text-slate-500 font-mono">IoT Sensor Station #04</span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>مجوز کار در ارتفاع (HSE Cleared)
                </span>
              </div>

              {/* 3 Metrics Cards */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                  <div className="flex items-center justify-center gap-1 text-amber-500 mb-1">
                    <span className="material-symbols-outlined text-base">wb_sunny</span>
                    <span className="font-bold text-slate-900 text-sm">۲۸°C</span>
                  </div>
                  <span className="text-[10px] font-medium text-slate-600 block">دمای محیط</span>
                  <span className="text-[9px] text-slate-400 mt-0.5 block">صاف و آفتابی</span>
                  <div className="mt-1 text-[9px] text-amber-700 bg-amber-50 rounded px-1 py-0.5 font-medium">UV: 4 (متوسط)</div>
                </div>

                <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                  <div className="flex items-center justify-center gap-1 text-blue-500 mb-1">
                    <span className="material-symbols-outlined text-base">humidity_percentage</span>
                    <span className="font-bold text-slate-900 text-sm">۳۲٪</span>
                  </div>
                  <span className="text-[10px] font-medium text-slate-600 block">رطوبت نسبی</span>
                  <span className="text-[9px] text-slate-400 mt-0.5 block">شرایط ایده‌آل بتن</span>
                  <div className="mt-1 text-[9px] text-blue-700 bg-blue-50 rounded px-1 py-0.5 font-medium">نقطه شبنم: ۱۱°C</div>
                </div>

                <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                  <div className="flex items-center justify-center gap-1 text-[#00716B] mb-1">
                    <span className="material-symbols-outlined text-base">air</span>
                    <span className="font-bold text-slate-900 text-sm">۱۲ km/h</span>
                  </div>
                  <span className="text-[10px] font-medium text-slate-600 block">سرعت باد</span>
                  <span className="text-[9px] text-slate-400 mt-0.5 block">جهت: NW</span>
                  <div className="mt-1 text-[9px] text-emerald-700 bg-emerald-50 rounded px-1 py-0.5 font-bold">مجاز تاورکرین</div>
                </div>
              </div>

              {/* Air Quality Bar */}
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <span className="text-[11px] font-bold text-slate-700">شاخص کیفیت هوا (AQI):</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono font-bold text-slate-900 text-xs">AQI: 65</span>
                    <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-bold border border-emerald-200">
                      سالم و استاندارد کارگاهی
                    </span>
                  </div>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden flex">
                  <div className="bg-emerald-500 h-full rounded-r-full" style={{ width: '35%' }}></div>
                  <div className="bg-amber-400 h-full opacity-40" style={{ width: '25%' }}></div>
                  <div className="bg-rose-400 h-full opacity-30" style={{ width: '40%' }}></div>
                </div>
                <div className="flex items-center justify-between text-[9px] text-slate-400 pt-0.5">
                  <span className="text-emerald-700 font-bold">۰-۵۰ پاک</span>
                  <span className="text-slate-600 font-bold">۵۱-۱۰۰ قابل قبول (وضعیت سایت)</span>
                  <span>۱۰۱+ ناسالم</span>
                </div>
              </div>
            </div>

            {/* BIM Compliance Match */}
            <div className="bg-white rounded-xl border border-slate-200 p-4 space-y-3 shadow-xs">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-teal-50 text-[#00716B] flex items-center justify-center border border-teal-100">
                    <span className="material-symbols-outlined text-base">model_training</span>
                  </div>
                  <h4 className="text-xs font-bold text-slate-900">پیشرفت فیزیکی کارگاه (انطباق BIM)</h4>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">trending_up</span>+۳.۵٪ فراتر از برنامه
                </span>
              </div>
              <div className="flex items-baseline justify-between pt-0.5">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold font-['Markazi_Text'] text-[#00716B]">۷۸.۵٪</span>
                  <span className="text-xs text-slate-500">تحقق‌یافته مدل</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="text-[11px]">خط مبنا: <b className="font-mono text-slate-700">۷۵.۰٪</b></span>
                  <span className="text-slate-300">|</span>
                  <span className="text-[10px] text-emerald-600 font-bold font-mono">انحراف: ۰ روز</span>
                </div>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-[#00716B] h-full rounded-full transition-all duration-700" style={{ width: '78.5%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ROW 3: FEDERATED 3D BIM VIEWER & COORDINATION HISTOGRAM
          ========================================================= */}
      <section className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Federated 3D Model Viewer Widget (7 Cols) */}
        <div className="xl:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden flex flex-col">
          <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#00716B] text-xl">view_in_ar</span>
              <div>
                <h3 className="text-sm font-bold text-slate-900 leading-tight">ناظر سه‌بعدی مدل‌های تجمیعی BIM (Federated Model Viewer)</h3>
                <span className="text-[11px] text-slate-500">نمایش زنده هماهنگی معماری، سازه و تاسیسات مکانیکی/برقی</span>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-md bg-[#00716B]/10 text-[#00716B] text-xs font-mono font-bold border border-[#00716B]/20">
              LOD 350
            </span>
          </div>

          {/* Layer Controls */}
          <div className="px-5 py-2.5 bg-white border-b border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-4">
              <span className="text-slate-400 font-medium text-[11px]">لایه‌های فعال:</span>
              <label className="flex items-center gap-1.5 cursor-pointer font-medium text-slate-700 hover:text-[#00716B]">
                <input
                  type="checkbox"
                  checked={bimLayerArc}
                  onChange={(e) => setBimLayerArc(e.target.checked)}
                  className="rounded text-[#00716B] accent-[#00716B]"
                />
                <span>معماری</span>
              </label>
              <label className="flex items-center gap-1.5 cursor-pointer font-medium text-slate-700 hover:text-[#00716B]">
                <input
                  type="checkbox"
                  checked={bimLayerStr}
                  onChange={(e) => setBimLayerStr(e.target.checked)}
                  className="rounded text-[#00716B] accent-[#00716B]"
                />
                <span>سازه و اسکلت</span>
              </label>
              <label className="flex items-center gap-1.5 cursor-pointer font-medium text-slate-700 hover:text-[#00716B]">
                <input
                  type="checkbox"
                  checked={bimLayerMep}
                  onChange={(e) => setBimLayerMep(e.target.checked)}
                  className="rounded text-[#00716B] accent-[#00716B]"
                />
                <span>تاسیسات مکانیکی و برقی (MEP)</span>
              </label>
            </div>
            <button
              onClick={() => onTriggerToast('زاویه دوربین بازنشانی شد', 'زاویه دوربین به نمای دید پرسپکتیو استاندارد منتقل شد.', 'info')}
              className="text-[11px] font-semibold text-[#00716B] hover:bg-teal-50 px-2 py-1 rounded transition-colors"
            >
              بازنشانی دوربین
            </button>
          </div>

          {/* 3D Canvas */}
          <div className="relative w-full h-80 sm:h-96 bg-slate-950 overflow-hidden group">
            <img
              alt="مدل BIM یکپارچه برج آلفا"
              className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-102"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIcJAZ2Fu3mR0lYHVs3265nXSwcX87P8-JyFo_I_WUlzoz10s8QtS4IDwnRhy2Cazg9RTGF7GupJzpzwS4prAo8HTzEbzXJCPeLMSZ4HNWk5ls5ydl6eAIREpcX8YSWxXMhBWz3wAvt6kWFCSywtYlwCyZMCNlJbffrrgxKW1uQeU0WT3CWRijME998KRNJAMztx_rXGxHNO9qaX5wNxuU91XiHyt9SwUyZqjfVK9kYvT5KVr0Wtu6zifWCp_fP3Aix7BSThElUEt8WQ"
            />

            {/* Floating Top Badges */}
            <div className="absolute top-3.5 right-3.5 flex items-center gap-2">
              <div className="bg-slate-950/85 backdrop-blur px-3 py-1.5 rounded-lg text-xs text-white flex items-center gap-2 border border-white/10 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>هماهنگی زنده: طبقات ۱۹ الی ۲۶</span>
              </div>
              <div className="bg-slate-900/80 backdrop-blur px-2.5 py-1.5 rounded-lg text-[11px] text-slate-300 border border-white/10 font-mono">
                Rev: 2025.10-FED
              </div>
            </div>

            <div className="absolute top-3.5 left-3.5 bg-slate-950/85 backdrop-blur px-3 py-1.5 rounded-lg text-xs text-slate-200 border border-white/10 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-amber-400 text-sm">filter_center_focus</span>
              <span>فوکوس داکت‌های رایزر مرکزی</span>
            </div>

            {/* Bottom Toolbar */}
            <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 bg-slate-900/95 backdrop-blur px-4 py-1.5 rounded-full border border-slate-700 shadow-2xl flex items-center gap-3 text-slate-200 text-xs whitespace-nowrap z-10">
              <button
                onClick={() => onTriggerToast('چرخش مداری (Orbit)', 'حالت چرخش سه‌بعدی دوربین فعال شد.', 'info')}
                className="hover:text-teal-300 flex items-center gap-1 transition-colors"
              >
                <span className="material-symbols-outlined text-base">3d_rotation</span>
                <span>چرخش (Orbit)</span>
              </button>
              <span className="text-slate-600">|</span>
              <button
                onClick={() => onTriggerToast('جابجایی صحنه (Pan)', 'حالت جابجایی افقی دوربین فعال شد.', 'info')}
                className="hover:text-teal-300 flex items-center gap-1 transition-colors"
              >
                <span className="material-symbols-outlined text-base">pan_tool</span>
                <span>جابجایی (Pan)</span>
              </button>
              <span className="text-slate-600">|</span>
              <button
                onClick={() => onTriggerToast('جعبه برش (Section Box)', 'برش مقطعی طبقه ۲۲ فعال گردید.', 'info')}
                className="hover:text-teal-300 flex items-center gap-1 transition-colors"
              >
                <span className="material-symbols-outlined text-base">content_cut</span>
                <span>برش (Section)</span>
              </button>
              <span className="text-slate-600">|</span>
              <button
                onClick={() => onNavigate('bim')}
                className="text-rose-400 font-bold hover:text-rose-300 flex items-center gap-1 bg-rose-500/20 px-2 py-0.5 rounded-full transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">crisis_alert</span>
                <span>۱۲ کلش باز</span>
              </button>
            </div>
          </div>

          {/* Bottom Reference Strip */}
          <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-700">اسناد مدل فعال:</span>
              <span className="inline-flex items-center gap-1 bg-white border border-slate-200 px-2 py-1 rounded text-[11px] text-slate-700">
                پلان تراز همکف و لابی (Rev 05)
              </span>
              <span className="inline-flex items-center gap-1 bg-white border border-slate-200 px-2 py-1 rounded text-[11px] text-slate-700">
                تابلوهای برق چیلر (Rev 03)
              </span>
            </div>
            <button
              onClick={() => onNavigate('bim')}
              className="text-[#00716B] font-bold hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>گشایش در ناظر تمام‌صفحه WebGL</span>
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </button>
          </div>
        </div>

        {/* Coordination & Clash Resolution Tracker (5 Cols) */}
        <div className="xl:col-span-5 bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-center">
          <div className="space-y-3.5 my-auto">
            {/* Card Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 gap-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#00716B] text-xl">hub</span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 leading-tight">گزارشات هماهنگی و کلش‌گیری (Coordination)</h3>
                  <p className="text-xs text-slate-400 mt-0.5">مدیریت رفع تداخلات چندرشته‌ای دیسیپلین‌های BIM</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-rose-50 text-rose-600 border border-rose-200 text-xs font-bold font-mono shrink-0">
                ۳ کلش بحرانی
              </span>
            </div>

            {/* 3 Metric Mini Cards */}
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">
                <span className="text-[10px] text-slate-500 block">کل تعارضات</span>
                <span className="text-xl font-bold font-['Markazi_Text'] text-slate-900">۶۰ مورد</span>
                <span className="text-[9px] text-slate-400 block mt-0.5">در ۴ مدل تجمیعی</span>
              </div>
              <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200/70">
                <span className="text-[10px] text-emerald-700 font-medium block">رفع‌شده (Resolved)</span>
                <span className="text-xl font-bold font-['Markazi_Text'] text-emerald-700">۴۸ مورد</span>
                <span className="text-[9px] text-emerald-600 font-bold block mt-0.5">۸۰٪ نرخ رفع موفق</span>
              </div>
              <div className="p-2.5 rounded-xl bg-rose-50/70 border border-rose-200/70">
                <span className="text-[10px] text-rose-700 font-medium block">تعارض باز (Active)</span>
                <span className="text-xl font-bold font-['Markazi_Text'] text-rose-600">۱۲ مورد</span>
                <span className="text-[9px] text-rose-700 font-bold block mt-0.5">۳ مورد بحرانی</span>
              </div>
            </div>

            {/* Minimal 8-Week Unsolved Clashes Histogram */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
              {/* Histogram Header */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-800 text-xs block">هیستوگرام تعارضات حل‌نشده (۸ هفته گذشته)</span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">تعداد کلش‌های باز و فعال در پایان هر هفته</span>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 inline-flex items-center gap-1 font-mono shrink-0">
                  <span className="material-symbols-outlined text-xs">trending_down</span>
                  ۷۷٪- بهبود
                </span>
              </div>

              {/* 8-Week Bars */}
              <div className="grid grid-cols-8 gap-1.5 pt-2 items-end h-28 border-b border-slate-200 pb-1 text-center">
                {[
                  { week: 'هـ۱', count: 52, height: '100%', isCurrent: false },
                  { week: 'هـ۲', count: 48, height: '92%', isCurrent: false },
                  { week: 'هـ۳', count: 43, height: '82%', isCurrent: false },
                  { week: 'هـ۴', count: 36, height: '69%', isCurrent: false },
                  { week: 'هـ۵', count: 31, height: '59%', isCurrent: false },
                  { week: 'هـ۶', count: 25, height: '48%', isCurrent: false },
                  { week: 'هـ۷', count: 19, height: '36%', isCurrent: false },
                  { week: 'جاری', count: 12, height: '23%', isCurrent: true },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() =>
                      onOpenClashFilters?.({
                        status: 'open',
                        label: `هفته ${item.week} • ${item.count} تعارض حل‌نشده`,
                      })
                    }
                    className="flex flex-col items-center justify-end h-full gap-1 group cursor-pointer"
                    title={`مشاهده لیست ${item.count} تعارض حل‌نشده هفته ${item.week}`}
                  >
                    <span
                      className={`text-[10px] font-mono leading-none transition-transform group-hover:scale-110 ${
                        item.isCurrent ? 'font-bold text-rose-600' : 'text-slate-500 font-medium'
                      }`}
                    >
                      {item.count}
                    </span>
                    <div
                      className={`w-full rounded-t transition-all ${
                        item.isCurrent
                          ? 'bg-rose-500 shadow-2xs group-hover:bg-rose-400'
                          : 'bg-slate-300 group-hover:bg-[#00716B]/60'
                      }`}
                      style={{ height: item.height }}
                    ></div>
                    <span
                      className={`text-[9px] font-mono mt-0.5 leading-none ${
                        item.isCurrent ? 'font-bold text-slate-800' : 'text-slate-400'
                      }`}
                    >
                      {item.week}
                    </span>
                  </div>
                ))}
              </div>

              {/* Histogram Legend / Summary */}
              <div className="flex items-center justify-between text-[10px] text-slate-500 pt-0.5">
                <span className="flex items-center gap-1 text-[#00716B] font-medium">
                  <span className="material-symbols-outlined text-xs">ads_click</span>
                  برای مشاهده لیست تعارضات هر هفته، روی ستون آن کلیک کنید
                </span>
                <span className="font-bold text-slate-700">وضعیت کنونی: <strong className="text-rose-600 font-mono">۱۲</strong> تعارض باز</span>
              </div>
            </div>

            {/* Card Footer */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-400 text-[11px]">آخرین به‌روزرسانی کلش: امروز ۰۹:۳۰</span>
              <button
                onClick={() => onNavigate('bim')}
                className="font-bold text-[#00716B] hover:text-[#005e59] flex items-center gap-1 cursor-pointer transition-colors"
              >
                <span>مشاهده ماتریس تداخلات BIM</span>
                <span className="material-symbols-outlined text-sm">arrow_back</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ROW 4: ACTIONABLE APPROVALS TABLE
          ========================================================= */}
      <section className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4 bg-slate-50/70">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#00716B]/10 text-[#00716B] flex items-center justify-center">
              <span className="material-symbols-outlined text-xl">fact_check</span>
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">در انتظار تایید (اقدام فوری)</h2>
              <p className="text-xs text-slate-500">جریان انطباق اسناد مهندسی طبق چرخه استاندارد ISO 19650 (WIP &gt; Shared &gt; Published)</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">
              ۳ مورد نیازمند اقدام
            </span>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse text-xs whitespace-nowrap">
            <thead>
              <tr className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200 text-[11px]">
                <th className="py-3 px-6">فرمت</th>
                <th className="py-3 px-4">عنوان بسته مدرک مهندسی</th>
                <th className="py-3 px-4">مشاور / فرستنده بسته</th>
                <th className="py-3 px-4">مهلت اقدام (SLA)</th>
                <th className="py-3 px-4">وضعیت گردش‌کار</th>
                <th className="py-3 px-6 text-center">عملیات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {/* Row 1 */}
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3.5 px-6">
                  <span className="w-8 h-8 rounded-lg bg-teal-50 text-[#00716B] font-mono font-bold text-xs flex items-center justify-center border border-teal-200">
                    RVT
                  </span>
                </td>
                <td className="py-3.5 px-4 font-bold text-slate-900">
                  نقشه‌های شفت تاسیسات مکانیکی طبقات ۲۰ تا ۲۵
                </td>
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-[10px] font-bold">
                      دپ
                    </div>
                    <span>دکتر پورمند (مشاور مکانیک)</span>
                  </div>
                </td>
                <td className="py-3.5 px-4">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 text-[11px] font-medium border border-amber-200">
                    <span className="material-symbols-outlined text-xs">timer</span>
                    <span>۱ روز باقی‌مانده</span>
                  </span>
                </td>
                <td className="py-3.5 px-4">
                  <span className="inline-flex items-center gap-1 text-slate-600 text-[11px]">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    بررسی انطباق کدگذاری CDE
                  </span>
                </td>
                <td className="py-3.5 px-6 text-center">
                  <button
                    onClick={() => onOpenDocumentDossier('doc-revit-core')}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-slate-700 hover:text-[#00716B] hover:border-[#00716B]/30 hover:bg-slate-50 font-bold text-xs transition-colors shadow-xs cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-base">visibility</span>
                    <span>بررسی</span>
                  </button>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3.5 px-6">
                  <span className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 font-mono font-bold text-xs flex items-center justify-center border border-rose-200">
                    PDF
                  </span>
                </td>
                <td className="py-3.5 px-4 font-bold text-slate-900">
                  دفترچه محاسبات فنی اتصال دال پس‌کشیده پودیوم
                </td>
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-[10px] font-bold">
                      مع
                    </div>
                    <span>مهندس علیزاده (مشاور سازه)</span>
                  </div>
                </td>
                <td className="py-3.5 px-4">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px]">
                    <span className="material-symbols-outlined text-xs">schedule</span>
                    <span>۲ روز مهلت بررسی</span>
                  </span>
                </td>
                <td className="py-3.5 px-4">
                  <span className="inline-flex items-center gap-1 text-slate-600 text-[11px]">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    در انتظار تایید محاسباتی
                  </span>
                </td>
                <td className="py-3.5 px-6 text-center">
                  <button
                    onClick={() => onOpenDocumentDossier('doc-xlsx-ipc5')}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-slate-700 hover:text-[#00716B] hover:border-[#00716B]/30 hover:bg-slate-50 font-bold text-xs transition-colors shadow-xs cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-base">visibility</span>
                    <span>بررسی</span>
                  </button>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3.5 px-6">
                  <span className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 font-mono font-bold text-xs flex items-center justify-center border border-amber-200">
                    DWG
                  </span>
                </td>
                <td className="py-3.5 px-4 font-bold text-slate-900">
                  وال‌سکشن و دیتایل‌های اجرایی کرتین‌وال نمای اصلی لابی
                </td>
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-[10px] font-bold">
                      مک
                    </div>
                    <span>مهندس کیانی (توسعه معماری)</span>
                  </div>
                </td>
                <td className="py-3.5 px-4">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 text-[11px] font-bold border border-rose-200">
                    <span className="material-symbols-outlined text-xs">warning</span>
                    <span>معوق (۲ روز تاخیر)</span>
                  </span>
                </td>
                <td className="py-3.5 px-4">
                  <span className="inline-flex items-center gap-1 text-rose-600 text-[11px] font-semibold">
                    <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                    نیازمند حل تعارض نمای شیشه‌ای
                  </span>
                </td>
                <td className="py-3.5 px-6 text-center">
                  <button
                    onClick={() => onOpenDocumentDossier('doc-dwg-riser')}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-slate-700 hover:text-[#00716B] hover:border-[#00716B]/30 hover:bg-slate-50 font-bold text-xs transition-colors shadow-xs cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-base">visibility</span>
                    <span>بررسی</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>نمایش ۳ جریان نیازمند تصمیم‌گیری از مجموع ۴۵ سند در چرخه CDE پلتفرم Xone</span>
          <button
            onClick={() => onNavigate('approvals')}
            className="inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-[#00716B] text-white hover:bg-[#005e59] text-xs font-bold transition-all shadow-xs cursor-pointer"
          >
            <span>مشاهده و پالایش تمام اسناد کارتابل</span>
            <span className="material-symbols-outlined text-sm">arrow_back</span>
          </button>
        </div>
      </section>

      {/* =========================================================
          ROW 5: PROJECT MILESTONES TIMELINE
          ========================================================= */}
      <section className="bg-white rounded-2xl border border-slate-200 p-5 lg:p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 border-b border-slate-100 mb-6 gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-8 h-8 rounded-lg bg-[#00716B]/10 text-[#00716B] flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">flag</span>
              </div>
              <h2 className="text-base font-bold text-slate-900">تایم‌لاین اجرایی و مایل‌استون‌های کلیدی پروژه</h2>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <span className="font-bold text-[#00716B]">۳ از ۸ مایل‌استون تکمیل‌شده</span>
              <span className="text-slate-300">•</span>
              <span>۱۵ فروردین تا ۳ آذر ۱۴۰۵</span>
              <span className="text-slate-300">•</span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-[10px]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>طبق برنامه
              </span>
            </div>
          </div>

          <button
            onClick={() => onNavigate('cde')}
            className="inline-flex items-center gap-1.5 text-[#00716B] font-bold text-xs py-1.5 px-3 rounded-lg border border-[#00716B]/20 bg-teal-50/50 hover:bg-teal-50 transition-colors"
          >
            <span className="material-symbols-outlined text-base">search</span>
            مشاهده جدول کامل WBS
          </button>
        </div>

        {/* Horizontal Milestone Nodes */}
        <div className="overflow-x-auto pb-4 pt-2">
          <div className="min-w-[920px] relative px-4 flex items-start justify-between">
            <div className="absolute top-4 right-12 left-12 h-0.5 bg-slate-200 -z-0"></div>

            {MILESTONES.map((m) => (
              <div key={m.id} className="relative z-10 flex flex-col items-center text-center w-28 group cursor-pointer">
                <div
                  className={`w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white mb-2.5 shadow-xs transition-transform group-hover:scale-110 ${
                    m.isCompleted
                      ? 'bg-emerald-600'
                      : m.isCurrent
                      ? 'bg-amber-500 ring-2 ring-amber-400'
                      : 'bg-slate-200 text-slate-500'
                  }`}
                >
                  <span className="material-symbols-outlined text-sm">
                    {m.isCompleted ? 'check' : m.isCurrent ? 'flag' : 'radio_button_unchecked'}
                  </span>
                </div>
                <div className="text-xs font-bold text-slate-900 mb-1 leading-snug">{m.title}</div>
                <span
                  className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    m.isCompleted
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      : m.isCurrent
                      ? 'bg-amber-50 text-amber-800 border border-amber-200'
                      : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {m.isCompleted ? 'انجام شده' : m.isCurrent ? 'جاری' : 'انجام نشده'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          ROW 6: SUPPORTING 3 COLUMNS (IPC, MOM, RECENT FILES)
          ========================================================= */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Col 1: Financial Tracking (IPC) */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#00716B] text-xl">receipt_long</span>
                <h3 className="text-xs font-bold text-slate-900">آخرین صورت وضعیت‌های طراحی</h3>
              </div>
              <span className="text-[11px] text-slate-400 font-medium">کنترل مالی</span>
            </div>

            <div className="space-y-3">
              <div
                onClick={() => {
                  if (onOpenExcelIpc) onOpenExcelIpc();
                  else onNavigate('approvals');
                }}
                className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-300 flex flex-col gap-1 cursor-pointer hover:bg-amber-100/70 transition-all hover:shadow-xs group"
                title="کلیک جهت مشاهده و بررسی در قالب اکسل صورت وضعیت"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-amber-700 text-sm">table_chart</span>
                    <span className="text-xs font-bold text-slate-900 group-hover:text-amber-800">صورت‌وضعیت شماره ۵ - سازه</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-200/80 text-amber-900 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                    بررسی اکسل
                  </span>
                </div>
                <span className="text-[11px] text-slate-500">بازنگری دال‌های پس‌کشیده و دیوارهای برشی (ALF-QS-PAY-2025-XLSX-005)</span>
                <div className="flex items-baseline justify-between mt-2 pt-2 border-t border-amber-200/60">
                  <span className="text-[11px] text-slate-500">مبلغ کارکرد مصوب:</span>
                  <span className="text-sm font-bold font-['Markazi_Text'] text-amber-800">۱,۸۴۵,۰۲۰,۰۰۰ تومان</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200 flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900">صورت‌وضعیت شماره ۴ - معماری</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                    تسویه شده
                  </span>
                </div>
                <span className="text-[11px] text-slate-500">طراحی تفصیلی پلان‌های تیپ و نمای ترکیبی</span>
                <div className="flex items-baseline justify-between mt-2 pt-2 border-t border-emerald-200/50">
                  <span className="text-[11px] text-slate-500">پرداخت شده در ۱۴۰۳/۰۸/۱۰:</span>
                  <span className="text-sm font-bold font-['Markazi_Text'] text-emerald-700">۶۲۰,۰۰۰,۰۰۰ تومان</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs mt-3">
            <span className="text-slate-500">مجموع تایید شده: <b className="text-slate-800 font-mono">۴.۳ م.ت</b></span>
            <button
              onClick={() => onNavigate('approvals')}
              className="text-[#00716B] font-bold hover:underline"
            >
              گزارش کامل مالی ←
            </button>
          </div>
        </div>

        {/* Col 2: Minutes of Meetings (MoM) */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#00716B] text-xl">groups</span>
                <h3 className="text-xs font-bold text-slate-900">صورت‌جلسات فنی و هماهنگی (MoM)</h3>
              </div>
              <button
                onClick={() => onTriggerToast('ثبت جلسه جدید', 'فرم ثبت صورت‌جلسه هماهنگی باز شد.', 'info')}
                className="text-[11px] text-[#00716B] font-bold hover:underline"
              >
                + ثبت جلسه
              </button>
            </div>

            <div className="space-y-2.5">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100/70 transition-colors">
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-slate-900 block leading-tight">
                      جلسه رفع تداخل رایزرهای تاسیسات برق با خرپای سازه
                    </span>
                    <span className="text-[11px] text-slate-500 block">حاضرین: مهندس پارسا، دکتر پورمند</span>
                  </div>
                  <button
                    onClick={() => onTriggerToast('دانلود صورت‌جلسه', 'فایل PDF صورت‌جلسه MOM-019 دریافت گردید.', 'success')}
                    className="flex items-center gap-1 text-[11px] text-[#00716B] bg-white border border-slate-200 px-2 py-1 rounded-lg hover:bg-slate-50 shrink-0"
                  >
                    <span className="material-symbols-outlined text-xs">picture_as_pdf</span>
                    <span>PDF</span>
                  </button>
                </div>
                <div className="flex items-center gap-2 mt-2 text-[10px] text-slate-400 border-t border-slate-200/50 pt-1 font-mono">
                  <span>۱۹ آبان ۱۴۰۳</span>
                  <span>•</span>
                  <span>MOM-ALF-1042-019</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100/70 transition-colors">
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-slate-900 block leading-tight">
                      بررسی اتصال شاسی‌های آسانسور پرسرعت ۳ متر بر ثانیه
                    </span>
                    <span className="text-[11px] text-slate-500 block">حاضرین: تامین‌کننده، مشاور سازه</span>
                  </div>
                  <button
                    onClick={() => onTriggerToast('دانلود صورت‌جلسه', 'فایل PDF صورت‌جلسه MOM-018 دریافت گردید.', 'success')}
                    className="flex items-center gap-1 text-[11px] text-[#00716B] bg-white border border-slate-200 px-2 py-1 rounded-lg hover:bg-slate-50 shrink-0"
                  >
                    <span className="material-symbols-outlined text-xs">picture_as_pdf</span>
                    <span>PDF</span>
                  </button>
                </div>
                <div className="flex items-center gap-2 mt-2 text-[10px] text-slate-400 border-t border-slate-200/50 pt-1 font-mono">
                  <span>۱۲ آبان ۱۴۰۳</span>
                  <span>•</span>
                  <span>MOM-ALF-1042-018</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 text-center mt-3">
            <span className="text-xs text-[#00716B] font-bold">مشاهده آرشیو تمام جلسات هماهنگی</span>
          </div>
        </div>

        {/* Col 3: Recent Documents Feed */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#00716B] text-xl">folder_open</span>
                <h3 className="text-xs font-bold text-slate-900">فایل‌های اخیراً بارگذاری‌شده در CDE</h3>
              </div>
              <span className="text-[11px] text-slate-400">پوشه Documents</span>
            </div>

            <div className="space-y-2">
              <div
                onClick={() => onOpenDocumentDossier('doc-revit-core')}
                className="p-2.5 rounded-xl hover:bg-slate-50 flex items-center justify-between transition-colors border border-transparent hover:border-slate-200 cursor-pointer"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="w-7 h-7 rounded-lg bg-rose-50 text-rose-600 font-mono text-[10px] font-bold flex items-center justify-center border border-rose-100">
                    PDF
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-bold text-slate-800 truncate">گزارش آزمایش بارگذاری شمع‌های عمیق</span>
                    <span className="text-[10px] text-slate-400">توسط مهندس راد • ۳ ساعت پیش</span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-slate-400 text-base">download</span>
              </div>

              <div
                onClick={() => onOpenDocumentDossier('doc-ifc-coord')}
                className="p-2.5 rounded-xl hover:bg-slate-50 flex items-center justify-between transition-colors border border-transparent hover:border-slate-200 cursor-pointer"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="w-7 h-7 rounded-lg bg-teal-50 text-[#00716B] font-mono text-[10px] font-bold flex items-center justify-center border border-teal-100">
                    IFC
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-bold text-slate-800 truncate">ساب‌مدل سازه ستون‌های مرکزی طبقه ۱۵</span>
                    <span className="text-[10px] text-slate-400">توسط مشاور بهساز سازه • دیروز</span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-slate-400 text-base">download</span>
              </div>

              <div
                onClick={() => onOpenDocumentDossier('doc-dwg-riser')}
                className="p-2.5 rounded-xl hover:bg-slate-50 flex items-center justify-between transition-colors border border-transparent hover:border-slate-200 cursor-pointer"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 font-mono text-[10px] font-bold flex items-center justify-center border border-amber-100">
                    DWG
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-bold text-slate-800 truncate">پلان مشاعات و استخر روف‌گاردن</span>
                    <span className="text-[10px] text-slate-400">توسط آتلیه معماری باران • ۲ روز پیش</span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-slate-400 text-base">download</span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs mt-3">
            <span className="text-slate-500">حجم مخزن ابری: <b className="font-mono text-slate-700">۱.۴ گیگابایت</b></span>
            <button
              onClick={() => onNavigate('cde')}
              className="text-[#00716B] font-bold hover:underline"
            >
              مدیریت فایل‌ها ←
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
