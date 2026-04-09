"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, MessageSquare, ChevronRight, CheckCircle2, 
  ShieldCheck, Zap, BarChart3, Clock, MapPin, 
  Building2, Calculator, Star, ArrowRight, 
  Users, Award, Mail, Send, Search, ClipboardCheck, 
  Briefcase, Headphones, Globe, Sparkles
} from 'lucide-react';

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState('incorporation');

  const pricingData = {
    incorporation: [
      { name: "Gói Cơ Bản", price: "1.000.000đ", features: ["GPKD & Mã số thuế", "Con dấu tròn doanh nghiệp", "Công bố thành lập trên cổng thông tin"] },
      { name: "Gói Phổ Thông", price: "2.500.000đ", features: ["Bao gồm Gói Cơ Bản", "Biển tên công ty mica", "Hồ sơ khai thuế ban đầu", "Mở tài khoản ngân hàng tận nhà"] },
      { name: "Gói Nâng Cao", price: "5.500.000đ", features: ["Bao gồm Gói Phổ Thông", "Chữ ký số (3 năm)", "Hóa đơn điện tử (300 số)", "Tư vấn cấu trúc vốn chuyên sâu"] }
    ],
    tax: [
      { name: "Gói Startup", price: "500.000đ", features: ["Dưới 10 hóa đơn/tháng", "Kê khai thuế hàng quý", "Báo cáo tài chính năm", "Tư vấn thuế cơ bản"] },
      { name: "Gói Growth", price: "1.500.000đ", features: ["10-50 hóa đơn/tháng", "Kê khai thuế hàng tháng", "Quyết toán thuế TNCN/TNDN", "Hoàn thiện sổ sách kế toán"] },
      { name: "Gói VIP", price: "Liên hệ", features: ["Trên 50 hóa đơn/tháng", "Kế toán trưởng trực tiếp giám sát", "Đại diện làm việc với thuế", "Tối ưu chi phí thuế tối đa"] }
    ],
    digital: [
      { name: "Chữ Ký Số", price: "Từ 1.200.000đ", features: ["Thời hạn 1-3 năm", "Hỗ trợ cài đặt 24/7", "Token USB bảo mật cao", "Bảo hành 1 đổi 1"] },
      { name: "Hóa Đơn Điện Tử", price: "Từ 500.000đ", features: ["Gói 100-1000 hóa đơn", "Thiết kế mẫu HĐ miễn phí", "Lưu trữ dữ liệu 10 năm", "Tích hợp mọi PM kế toán"] },
      { name: "BHXH Lần Đầu", price: "2.000.000đ", features: ["Đăng ký mã đơn vị", "Làm hồ sơ cấp sổ/thẻ", "Báo tăng/giảm lao động", "Hướng dẫn sử dụng phần mềm"] }
    ]
  };

  const steps = [
    { title: "Tiếp Nhận", desc: "Tư vấn giải pháp tối ưu", icon: <Search /> },
    { title: "Ký Kết", desc: "Hợp đồng minh bạch rõ ràng", icon: <ClipboardCheck /> },
    { title: "Thực Thi", desc: "Xử lý hồ sơ đúng luật", icon: <Briefcase /> },
    { title: "Báo Cáo", desc: "Cập nhật tiến độ định kỳ", icon: <BarChart3 /> },
    { title: "Bàn Giao", desc: "Lưu trữ & Hỗ trợ hậu mãi", icon: <Headphones /> }
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
            <div className="flex flex-col">
              <span className="text-xl font-black leading-none tracking-tight">TRANG KẾ TOÁN</span>
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mt-1">World-Class Service</span>
            </div>
          </Link>
          <div className="hidden lg:flex gap-8 font-bold text-slate-600 uppercase text-xs tracking-widest">
            <Link href="#services" className="hover:text-blue-600">Dịch vụ</Link>
            <Link href="#pricing" className="hover:text-blue-600">Bảng giá</Link>
            <Link href="#why-us" className="hover:text-blue-600">Tại sao chọn?</Link>
            <Link href="https://zalo.me/0777868678" className="bg-[#003366] text-white px-6 py-2.5 rounded-full flex items-center gap-2 hover:bg-blue-800 transition-all shadow-md">
              <MessageSquare size={16} /> 0777 868 678
            </Link>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="pt-40 pb-24 bg-white relative overflow-hidden text-center">
        <div className="container mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-black tracking-widest uppercase border border-blue-100 mb-8">
            <Sparkles size={14} className="animate-pulse" /> Đã phục vụ hơn 2000+ Doanh nghiệp
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-[#003366] leading-[1.1] tracking-tight mb-8">
            Pháp Lý Vững Vàng <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 italic">Bứt Phá Kinh Doanh</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto mb-12 font-medium leading-relaxed italic">"Trao trọn gánh nặng sổ sách cho chuyên gia để Bệ hạ an tâm phát triển doanh nghiệp."</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://zalo.me/0777868678" className="bg-blue-600 text-white px-10 py-5 rounded-[24px] font-black text-lg hover:bg-blue-700 transition-all shadow-2xl shadow-blue-600/30 flex items-center justify-center gap-2">Tư Vấn Miễn Phí <ChevronRight size={20} /></Link>
            <Link href="#pricing" className="bg-white border-2 border-slate-200 text-slate-700 px-10 py-5 rounded-[24px] font-black text-lg hover:bg-slate-50 transition-all">Xem Bảng Giá</Link>
          </div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0 opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-teal-50 rounded-full blur-[120px]"></div>
        </div>
      </section>

      {/* 3. BENTO SERVICES */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-[#003366] tracking-tight">Hệ Sinh Thái Dịch Vụ</h2>
            <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white p-10 rounded-[48px] border border-white shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="w-24 h-24 bg-blue-600 rounded-3xl flex items-center justify-center text-white shadow-xl">
                  <Building2 size={48} />
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className="text-3xl font-black">Pháp Lý & Thành Lập</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {["Thành lập công ty (VN/FDI)", "Thay đổi GPKD / Địa chỉ", "Tạm ngừng / Giải thể DN", "Hộ kinh doanh cá thể"].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-slate-700 font-bold text-sm"><CheckCircle2 size={18} className="text-blue-600 shrink-0" /> {item}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#003366] p-10 rounded-[48px] text-white shadow-xl relative overflow-hidden group">
              <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center text-white"><Calculator size={32} /></div>
                <h3 className="text-2xl font-black">Kế Toán & Thuế</h3>
                <p className="text-blue-100/70 font-medium text-sm">Quản lý 100% sổ sách bằng công nghệ 4.0.</p>
                <Link href="https://zalo.me/0777868678" className="text-gold-500 font-black text-sm uppercase flex items-center gap-2">Xem chi tiết <ArrowRight size={16} /></Link>
              </div>
              <Calculator size={200} className="absolute -bottom-10 -right-10 text-white/5" />
            </div>
            <div className="lg:col-span-3 bg-white p-10 rounded-[48px] border border-slate-100 shadow-sm flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center text-white"><Zap size={32} /></div>
                <div>
                  <h3 className="text-2xl font-black">Tiện Ích Số Doanh Nghiệp</h3>
                  <p className="text-slate-500 font-bold">Chữ ký số • Hóa đơn điện tử • BHXH lần đầu • Giấy phép con</p>
                </div>
              </div>
              <Link href="https://zalo.me/0777868678" className="bg-slate-100 px-8 py-4 rounded-2xl font-black hover:bg-slate-200 transition-all uppercase text-sm tracking-widest flex items-center gap-2">Liên hệ ngay <ChevronRight size={18} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRICING TABLE (TABBED) */}
      <section id="pricing" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-[#003366]">Bảng Giá Minh Bạch</h2>
            <p className="text-lg text-slate-500 font-medium">Lựa chọn gói dịch vụ phù hợp với quy mô của Bệ hạ.</p>
          </div>
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-slate-100 p-2 rounded-2xl gap-2 shadow-inner">
              {['incorporation', 'tax', 'digital'].map((id) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${activeTab === id ? 'bg-[#003366] text-white shadow-lg' : 'text-slate-500 hover:text-[#003366]'}`}
                >
                  {id === 'incorporation' ? 'Thành Lập DN' : id === 'tax' ? 'Kế Toán Thuế' : 'Tiện Ích Số'}
                </button>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {pricingData[activeTab as keyof typeof pricingData].map((pkg, i) => (
                <motion.div
                  key={`${activeTab}-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-10 rounded-[48px] border-2 ${i === 1 ? 'border-blue-600 bg-blue-50/20' : 'border-slate-100 bg-white'} space-y-8 flex flex-col`}
                >
                  <h4 className="text-xl font-black uppercase tracking-tighter">{pkg.name}</h4>
                  <p className="text-4xl font-black text-blue-600">{pkg.price}</p>
                  <ul className="space-y-4 font-bold text-slate-600 text-sm flex-1">
                    {pkg.features.map((f, idx) => (<li key={idx} className="flex items-start gap-3"><CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-0.5" /> {f}</li>))}
                  </ul>
                  <Link href="https://zalo.me/0777868678" className={`w-full py-4 rounded-2xl font-black text-center block transition-all ${i === 1 ? 'bg-blue-600 text-white shadow-xl' : 'bg-[#003366] text-white'}`}>Đăng Ký Tư Vấn</Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 5. PROCESS SECTION */}
      <section id="process" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black">Quy Trình Tác Chiến</h2>
            <div className="w-24 h-2 bg-[#FFD700] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="bg-white p-8 rounded-[40px] border border-slate-100 text-center space-y-4 shadow-sm hover:shadow-xl transition-all relative">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">{step.icon}</div>
                <h4 className="font-black uppercase text-sm tracking-tighter">{step.title}</h4>
                <p className="text-xs text-slate-500 font-bold leading-relaxed">{step.desc}</p>
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
            <h2 className="text-4xl md:text-7xl font-black leading-tight tracking-tighter">Tại sao chọn <br /><span className="text-[#FFD700]">Trang Kế Toán?</span></h2>
            <div className="grid sm:grid-cols-2 gap-10">
              {[
                { icon: <ShieldCheck />, title: "Chính Xác", desc: "Cam kết hồ sơ đúng luật 100%." },
                { icon: <Clock />, title: "Siêu Tốc", desc: "Xử lý hồ sơ ngay trong 24h." },
                { icon: <Zap />, title: "Tối Ưu", desc: "Giảm thiểu 80% chi phí thuế." },
                { icon: <Users />, title: "Tận Tâm", desc: "Đồng hành cùng Bệ hạ trọn đời." }
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="text-[#FFD700]">{item.icon}</div>
                  <h4 className="text-xl font-black uppercase">{item.title}</h4>
                  <p className="text-blue-100/60 font-medium text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 p-12 rounded-[48px] backdrop-blur-3xl space-y-8">
            <div className="flex gap-1 text-gold-500"><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /></div>
            <p className="text-2xl font-medium leading-relaxed italic text-blue-50">"Dịch vụ tại Trang Kế Toán vô cùng chuyên nghiệp. Hồ sơ thành lập công ty của tôi được hoàn tất chỉ trong 3 ngày đúng như cam kết."</p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-blue-500 rounded-full border-2 border-[#FFD700]" />
              <div><p className="font-black text-lg">Master Lee</p><p className="text-xs font-bold text-blue-300 uppercase tracking-widest">Sếp Master Lee</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONTACT FORM */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-slate-50 rounded-[60px] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-slate-100">
            <div className="bg-[#003366] p-12 md:w-2/5 text-white space-y-8">
              <h3 className="text-3xl font-black uppercase tracking-tighter">Liên Hệ Tư Vấn</h3>
              <div className="space-y-6 pt-8 font-bold">
                <div className="flex items-center gap-4"><Phone className="text-[#FFD700]" /> 0777 868 678</div>
                <div className="flex items-center gap-4"><Mail className="text-[#FFD700]" /> support@trangketoan.com</div>
                <div className="flex items-center gap-4"><MapPin className="text-[#FFD700]" /> TP. Hồ Chí Minh & Toàn Quốc</div>
              </div>
            </div>
            <div className="p-12 md:w-3/5 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <input type="text" className="w-full bg-white border border-slate-200 px-6 py-4 rounded-2xl focus:border-blue-600 outline-none font-bold" placeholder="Họ và tên" />
                <input type="text" className="w-full bg-white border border-slate-200 px-6 py-4 rounded-2xl focus:border-blue-600 outline-none font-bold" placeholder="Số điện thoại" />
              </div>
              <select className="w-full bg-white border border-slate-200 px-6 py-4 rounded-2xl outline-none font-bold"><option>Dịch vụ thành lập DN</option><option>Dịch vụ kế toán thuế</option></select>
              <textarea rows={4} className="w-full bg-white border border-slate-200 px-6 py-4 rounded-2xl outline-none font-bold" placeholder="Bệ hạ cần hỗ trợ gì ạ?"></textarea>
              <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-xl hover:bg-blue-700 shadow-xl shadow-blue-200 flex items-center justify-center gap-3">Gửi Yêu Cầu <Send size={24} /></button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="py-12 bg-white border-t border-slate-100 text-center">
        <p className="text-slate-400 font-black text-[10px] uppercase tracking-[0.4em]">© 2026 TRANG KẾ TOÁN • ĐẲNG CẤP DỊCH VỤ WORLD-CLASS</p>
      </footer>

      {/* STICKY ZALO */}
      <Link href="https://zalo.me/0777868678" className="fixed bottom-10 right-10 z-[100] group active:scale-90 transition-all">
        <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-20 group-hover:opacity-0 transition-opacity"></div>
        <div className="relative w-20 h-20 bg-blue-600 text-white rounded-full flex flex-col items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-500 border-4 border-white">
          <MessageSquare size={32} />
          <span className="text-[10px] font-black uppercase mt-1">Zalo</span>
        </div>
      </Link>
    </div>
  );
}
