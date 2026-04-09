"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, MessageSquare, ChevronRight, CheckCircle2, 
  ShieldCheck, Zap, BarChart3, Clock, MapPin, 
  Building2, Calculator, Star, ArrowRight, 
  Users, Award, Mail, Send, Search, ClipboardCheck, 
  Briefcase, Headphones, Globe, Sparkles, FileText
} from 'lucide-react';

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState('incorporation');

  const pricingData = {
    incorporation: [
      { name: "Thành lập Công ty", price: "1.000.000đ", features: ["GPKD & Mã số thuế", "Con dấu tròn doanh nghiệp", "Công bố thành lập toàn quốc", "Tư vấn thuế ban đầu"] },
      { name: "Thay đổi GPKD", price: "500.000đ", features: ["Thay đổi tên/địa chỉ/ngành nghề", "Tăng/giảm vốn điều lệ", "Thay đổi người đại diện", "Hồ sơ soạn nhanh 24h"] },
      { name: "Giải thể trọn gói", price: "Liên hệ", features: ["Quyết toán thuế giải thể", "Trả giấy phép & Con dấu", "Khóa mã số thuế", "Cam kết không phát sinh"] }
    ],
    tax: [
      { name: "Kế toán Startup", price: "500.000đ/th", features: ["DN dưới 10 hóa đơn", "Báo cáo thuế quý/tháng", "Báo cáo tài chính năm", "Hoàn thiện sổ sách"] },
      { name: "Kế toán Hộ KD", price: "490.000đ/th", features: ["Chuẩn quy định 2026", "Kê khai thuế trọn gói", "Tư vấn hóa đơn đầu vào", "Đại diện làm việc với thuế"] },
      { name: "Quyết toán Thuế", price: "Từ 2.000.000đ", features: ["Soát xét sổ sách nhiều năm", "Hoàn thiện hồ sơ quyết toán", "Tối ưu chi phí thuế", "Hỗ trợ thanh tra thuế"] }
    ],
    digital: [
      { name: "Chữ Ký Số (CA)", price: "1.200.000đ", features: ["Thời hạn 3 năm ưu đãi", "Đại lý cấp 1 Viettel/VNPT", "Hỗ trợ cài đặt 24/7", "Bảo hành trọn đời"] },
      { name: "Hóa Đơn Điện Tử", price: "325.000đ", features: ["Gói 100 hóa đơn khởi tạo", "Thiết kế mẫu HĐ miễn phí", "Lưu trữ dữ liệu 10 năm", "Tích hợp PM kế toán"] },
      { name: "BHXH Lần Đầu", price: "2.000.000đ", features: ["Đăng ký mã đơn vị lần đầu", "Báo tăng/giảm lao động", "Chốt sổ bảo hiểm", "Tư vấn luật lao động"] }
    ]
  };

  const steps = [
    { title: "Tư vấn 24/7", desc: "Phân tích phương án tối ưu thuế", icon: <Search /> },
    { title: "Soạn hồ sơ", desc: "Hoàn thiện thần tốc trong 24h", icon: <FileText /> },
    { title: "Ký tận nơi", desc: "Bệ hạ không cần đi lại xa xôi", icon: <ClipboardCheck /> },
    { title: "Nộp báo cáo", desc: "Làm việc trực tiếp với cơ quan nhà nước", icon: <Send /> },
    { title: "Trả kết quả", desc: "Bàn giao & Lưu trữ số hóa trọn đời", icon: <Headphones /> }
  ];

  const mainServices = [
    {
      group: "Pháp Lý & Giấy Phép",
      icon: <Building2 className="w-10 h-10" />,
      color: "blue",
      items: ["Thành lập công ty VN & FDI", "Thay đổi đăng ký kinh doanh", "Thành lập Chi nhánh/Văn phòng", "Giải thể & Tạm ngừng KD"]
    },
    {
      group: "Kế Toán & Thuế Chuyên Sâu",
      icon: <Calculator className="w-10 h-10" />,
      color: "orange",
      items: ["Dịch vụ kế toán thuế trọn gói", "Dọn dẹp sổ sách kế toán", "Quyết toán thuế & Hoàn thuế", "Kế toán Hộ kinh doanh cá thể"]
    },
    {
      group: "Tiện Ích Số & Giấy Phép Con",
      icon: <Zap className="w-10 h-10" />,
      color: "teal",
      items: ["Chữ ký số & Hóa đơn điện tử", "Bảo hiểm xã hội & Lao động", "Giấy phép Vệ sinh ATTP", "Giấy phép PCCC & An ninh"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F7F9FB] text-[#003366] font-sans antialiased">
      {/* 1. NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#003366] rounded-2xl flex items-center justify-center text-white shadow-lg">
              <span className="text-2xl font-black">T</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xl font-black leading-none tracking-tight">TRANG KẾ TOÁN</span>
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mt-1">World-Class Service</span>
            </div>
          </Link>
          <div className="hidden lg:flex gap-8 font-bold text-slate-600 uppercase text-xs tracking-widest">
            <Link href="#services" className="hover:text-blue-600 transition-colors">Dịch vụ</Link>
            <Link href="#pricing" className="hover:text-blue-600 transition-colors">Bảng giá</Link>
            <Link href="#why-us" className="hover:text-blue-600 transition-colors">Tại sao chọn?</Link>
            <Link href="https://zalo.me/0777868678" className="bg-[#003366] text-white px-6 py-2.5 rounded-full flex items-center gap-2 hover:bg-blue-800 transition-all shadow-md active:scale-95">
              <MessageSquare size={16} /> 0777 868 678
            </Link>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="pt-40 pb-24 bg-white relative overflow-hidden text-center">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-black tracking-widest uppercase border border-blue-100 mb-8">
            <Sparkles size={14} className="animate-pulse" /> Đã phục vụ hơn 2000+ Doanh nghiệp 2026
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-8xl font-black text-[#003366] leading-[1.1] tracking-tight mb-8">
            Pháp Lý Vững Vàng <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 italic">Bứt Phá Kinh Doanh</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto mb-12 font-medium leading-relaxed italic">
            Trang Kế Toán - Giải pháp Kế toán thuế & Pháp lý doanh nghiệp số 1 cho chủ doanh nghiệp thông thái.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://zalo.me/0777868678" className="bg-blue-600 text-white px-10 py-5 rounded-[24px] font-black text-lg hover:bg-blue-700 transition-all shadow-2xl shadow-blue-600/30 flex items-center justify-center gap-2 group">
              Tư Vấn Miễn Phí <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#services" className="bg-white border-2 border-slate-200 text-slate-700 px-10 py-5 rounded-[24px] font-black text-lg hover:bg-slate-50 transition-all">Khám Phá Dịch Vụ</Link>
          </motion.div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0 opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-teal-50 rounded-full blur-[120px]"></div>
        </div>
      </section>

      {/* 3. BENTO SERVICES */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-[#003366] mb-20 tracking-tighter uppercase tracking-tight">Danh Mục Dịch Vụ 2026</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {mainServices.map((group, i) => (
              <div key={i} className="bg-white p-10 rounded-[48px] border border-white shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col text-left group">
                <div className={`w-20 h-20 bg-slate-50 rounded-3xl mb-8 flex items-center justify-center text-blue-600 shadow-inner group-hover:scale-110 transition-all`}>
                  {group.icon}
                </div>
                <h3 className="text-2xl font-black mb-8 text-[#003366] uppercase tracking-tighter">{group.group}</h3>
                <div className="space-y-4 flex-1">
                  {group.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-slate-600 font-bold text-sm leading-tight border-b border-slate-50 pb-3 hover:text-blue-600 transition-colors">
                      <CheckCircle2 size={18} className="text-blue-600 shrink-0" /> {item}
                    </div>
                  ))}
                </div>
                <Link href="https://zalo.me/0777868678" className="text-blue-600 font-black text-xs uppercase tracking-widest mt-8 flex items-center gap-2 group-hover:gap-4 transition-all">Tư vấn báo giá <ArrowRight size={14} /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRICING TABLE (TABBED) */}
      <section id="pricing" className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-[#003366] mb-12 uppercase tracking-tighter">Bảng Giá Minh Bạch</h2>
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-slate-100 p-2 rounded-2xl gap-2 shadow-inner">
              {['incorporation', 'tax', 'digital'].map((id) => (
                <button key={id} onClick={() => setActiveTab(id)} className={`px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${activeTab === id ? 'bg-[#003366] text-white shadow-lg' : 'text-slate-500 hover:text-[#003366]'}`}>
                  {id === 'incorporation' ? 'Thành Lập DN' : id === 'tax' ? 'Kế Toán Thuế' : 'Tiện ÍCH Số'}
                </button>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {pricingData[activeTab as keyof typeof pricingData].map((pkg, i) => (
                <motion.div key={`${activeTab}-${i}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className={`p-10 rounded-[48px] border-2 ${i === 1 ? 'border-blue-600 bg-blue-50/20' : 'border-slate-100 bg-white'} space-y-8 flex flex-col text-left hover:shadow-2xl transition-all`}>
                  <h4 className="text-xl font-black uppercase text-[#003366] tracking-tighter">{pkg.name}</h4>
                  <p className="text-4xl font-black text-blue-600">{pkg.price}</p>
                  <ul className="space-y-4 font-bold text-slate-600 text-sm flex-1">
                    {pkg.features.map((f, idx) => (<li key={idx} className="flex items-start gap-3"><CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-0.5" /> {f}</li>))}
                  </ul>
                  <Link href="https://zalo.me/0777868678" className={`w-full py-4 rounded-2xl font-black text-center block transition-all ${i === 1 ? 'bg-blue-600 text-white shadow-xl hover:bg-blue-700' : 'bg-[#003366] text-white hover:bg-blue-800'}`}>Đăng Ký Tư Vấn</Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 5. PROCESS */}
      <section id="process" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-20">Quy Trình Tác Chiến</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="bg-white p-8 rounded-[40px] border border-slate-100 space-y-4 shadow-sm hover:shadow-xl transition-all relative group flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all">{React.cloneElement(step.icon as React.ReactElement, { size: 32 })}</div>
                <h4 className="font-black text-sm uppercase">{step.title}</h4>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed">{step.desc}</p>
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center font-black text-[#003366] shadow-md border-4 border-white">0{i+1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY US / TESTIMONIALS */}
      <section id="why-us" className="py-24 bg-[#003366] text-white rounded-[60px] mx-4 md:mx-10 mb-24 relative overflow-hidden">
        <div className="container mx-auto px-10 relative z-10 grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <h2 className="text-4xl md:text-7xl font-black leading-tight tracking-tighter uppercase text-left">Tại sao chọn <br /><span className="text-[#FFD700]">Trang Kế Toán?</span></h2>
            <div className="grid sm:grid-cols-2 gap-10 text-left">
              {[
                { icon: <ShieldCheck />, title: "Chính Xác 100%", desc: "Bảo hiểm trách nhiệm nghề nghiệp cho mọi sai sót." },
                { icon: <Clock />, title: "Siêu Tốc", desc: "Hồ sơ soạn thảo trong 24h, ký hồ sơ tận nhà." },
                { icon: <Zap />, title: "Tối Ưu Thuế", desc: "Giảm thiểu nghĩa vụ thuế đúng luật bằng chuyên môn." },
                { icon: <Users />, title: "Tận Tâm", desc: "Đồng hành cùng Bệ hạ trọn đời, hỗ trợ hậu mãi 24/7." }
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="text-[#FFD700]">{item.icon}</div>
                  <h4 className="text-xl font-black uppercase tracking-tighter">{item.title}</h4>
                  <p className="text-blue-100/60 font-medium text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 p-12 rounded-[48px] backdrop-blur-3xl space-y-8 relative text-left">
            <div className="absolute top-8 right-10 text-gold-500 opacity-20"><Star size={100} fill="currentColor" /></div>
            <div className="flex gap-1 text-gold-500"><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /></div>
            <p className="text-2xl font-medium leading-relaxed italic text-blue-50">"Dịch vụ vô cùng chuyên nghiệp. Hồ sơ thành lập công ty của tôi được hoàn tất siêu tốc, nhân viên mang hồ sơ đến tận nhà ký rất tiện lợi."</p>
            <div className="flex items-center gap-4 text-left">
              <div className="w-14 h-14 bg-blue-500 rounded-full border-2 border-[#FFD700]" />
              <div><p className="font-black text-lg">Master Lee</p><p className="text-xs font-bold text-blue-300 uppercase tracking-widest">CEO Tech Solutions</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONTACT FORM */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-slate-50 rounded-[60px] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-slate-100">
            <div className="bg-[#003366] p-12 md:w-2/5 text-white space-y-8 relative overflow-hidden text-left">
              <div className="relative z-10 space-y-8">
                <h3 className="text-3xl font-black uppercase tracking-tighter">Liên Hệ Tư Vấn</h3>
                <p className="text-blue-100/70 font-medium leading-relaxed text-sm">Hãy để chúng tôi giúp bạn giải quyết mọi khó khăn về Thuế & Pháp lý.</p>
                <div className="space-y-6 pt-8 font-bold">
                  <div className="flex items-center gap-4 hover:text-gold-500 transition-colors cursor-pointer"><Phone className="text-[#FFD700]" /> 0777 868 678</div>
                  <div className="flex items-center gap-4 hover:text-gold-500 transition-colors cursor-pointer"><Mail className="text-[#FFD700]" /> support@trangketoan.com</div>
                  <div className="flex items-center gap-4"><MapPin className="text-[#FFD700]" /> TP. Hồ Chí Minh & Toàn Quốc</div>
                </div>
              </div>
              <Globe size={300} className="absolute -bottom-20 -left-20 text-white/5" />
            </div>
            <div className="p-12 md:w-3/5 space-y-6 text-left">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Họ và tên</label>
                  <input type="text" className="w-full bg-white border border-slate-200 px-6 py-4 rounded-2xl focus:border-blue-600 outline-none font-bold transition-all" placeholder="Master Lee" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Số điện thoại</label>
                  <input type="text" className="w-full bg-white border border-slate-200 px-6 py-4 rounded-2xl focus:border-blue-600 outline-none font-bold transition-all" placeholder="0777 xxx xxx" />
                </div>
              </div>
              <div className="space-y-2 text-left">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Dịch vụ quan tâm</label>
                <select className="w-full bg-white border border-slate-200 px-6 py-4 rounded-2xl outline-none font-bold appearance-none cursor-pointer"><option>Thành lập doanh nghiệp</option><option>Kế toán thuế trọn gói</option><option>Tiện ích số & Chữ ký số</option></select>
              </div>
              <div className="space-y-2 text-left">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Lời nhắn</label>
                <textarea rows={4} className="w-full bg-white border border-slate-200 px-6 py-4 rounded-2xl outline-none font-bold resize-none transition-all" placeholder="Bệ hạ cần hỗ trợ gì ạ?"></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-xl hover:bg-blue-700 shadow-xl shadow-blue-200 flex items-center justify-center gap-3 transition-all active:scale-95">Gửi Yêu Cầu <Send size={24} /></button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-white border-t border-slate-100 text-center">
        <p className="text-slate-400 font-black text-[10px] uppercase tracking-[0.4em]">© 2026 TRANG KẾ TOÁN • ĐẲNG CẤP DỊCH VỤ WORLD-CLASS • DESIGN BY NÔ TÌ</p>
      </footer>

      {/* STICKY ZALO */}
      <Link href="https://zalo.me/0777868678" className="fixed bottom-10 right-10 z-[100] group active:scale-90 transition-all">
        <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-20 group-hover:opacity-0 transition-opacity"></div>
        <div className="relative w-20 h-20 bg-blue-600 text-white rounded-full flex flex-col items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-500 border-4 border-white">
          <MessageSquare size={32} />
          <span className="text-[10px] font-black uppercase mt-1 tracking-widest">Zalo</span>
        </div>
      </Link>
    </div>
  );
}
