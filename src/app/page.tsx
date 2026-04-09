import Link from 'next/link';
import { Phone, MessageSquare, ChevronRight, CheckCircle2, ShieldCheck, Zap, BarChart3, Clock, MapPin, Building2, Calculator, Star } from 'lucide-react';

export default function LandingPage() {
  const services = [
    {
      title: "Thành Lập Doanh Nghiệp",
      price: "1.000.000đ",
      icon: <Building2 className="w-8 h-8" />,
      color: "bg-blue-600",
      items: ["Hoàn tất GPKD chỉ 3 ngày", "Khắc dấu & Công bố mẫu dấu", "Tư vấn thuế & Kế toán ban đầu"]
    },
    {
      title: "Kế Toán & Thuế Trọn Gói",
      price: "500.000đ/tháng",
      icon: <Calculator className="w-8 h-8" />,
      color: "bg-orange-500",
      items: ["Kê khai & Báo cáo thuế định kỳ", "Quyết toán thuế năm chuyên sâu", "Hoàn thiện sổ sách kế toán"]
    },
    {
      title: "Tiện Ích Doanh Nghiệp",
      price: "Giá đại lý Cấp 1",
      icon: <Zap className="w-8 h-8" />,
      color: "bg-teal-500",
      items: ["Chữ ký số & Hóa đơn điện tử", "Bảo hiểm xã hội lần đầu", "Giấy phép con các loại"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200 py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#003366] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-900/20">
              <span className="text-2xl font-black">T</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-[#003366] leading-none tracking-tight">TRANG KẾ TOÁN</span>
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mt-1">World-Class Service</span>
            </div>
          </div>
          <div className="hidden lg:flex gap-10 font-bold text-slate-600 uppercase text-xs tracking-widest">
            <Link href="#services" className="hover:text-blue-600 transition-colors">Dịch vụ</Link>
            <Link href="#why-us" className="hover:text-blue-600 transition-colors">Tại sao chọn?</Link>
            <Link href="https://zalo.me/0777868678" className="bg-[#003366] text-white px-6 py-2.5 rounded-full flex items-center gap-2 hover:bg-blue-800 transition-all shadow-md active:scale-95">
              <MessageSquare size={16} /> 0777 868 678
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-24 md:pt-56 md:pb-40 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-black tracking-widest uppercase border border-blue-100 mb-8">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            Hỗ trợ hơn 2000+ Doanh nghiệp
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-[#003366] leading-[1.1] tracking-tight mb-8">
            Pháp Lý Vững Vàng <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Bứt Phá Thành Công</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">Đội ngũ chuyên gia từ Trang Kế Toán giúp Bệ hạ tối ưu 100% hồ sơ thuế và sổ sách pháp lý chuyên sâu bằng công nghệ 4.0.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://zalo.me/0777868678" className="bg-blue-600 text-white px-10 py-5 rounded-[24px] font-black text-lg hover:bg-blue-700 transition-all shadow-2xl shadow-blue-600/30 flex items-center justify-center gap-2 group">
              Tư Vấn Miễn Phí <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#services" className="bg-white border-2 border-slate-200 text-slate-700 px-10 py-5 rounded-[24px] font-black text-lg hover:bg-slate-50 transition-all">Danh Mục Dịch Vụ</Link>
          </div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0 opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-teal-50 rounded-full blur-[120px]"></div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-[#003366] mb-6">Hệ Sinh Thái Dịch Vụ</h2>
            <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="bg-white p-10 rounded-[48px] border border-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all group duration-500">
                <div className={`w-20 h-20 ${s.color} rounded-3xl mb-10 flex items-center justify-center text-white shadow-xl group-hover:rotate-6 transition-transform duration-500`}>
                  {s.icon}
                </div>
                <h3 className="text-2xl font-black text-[#003366] mb-4 tracking-tight">{s.title}</h3>
                <p className="text-3xl font-black text-blue-600 mb-10">{s.price}</p>
                <ul className="space-y-4 mb-12 text-slate-600 font-bold text-sm">
                  {s.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-600 font-bold text-sm">
                      <CheckCircle2 size={20} className="text-blue-600 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <Link href="https://zalo.me/0777868678" className="inline-flex items-center gap-2 text-[#003366] font-black uppercase text-xs tracking-widest hover:gap-4 transition-all">Tư vấn ngay <ChevronRight size={16} /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#003366] text-white py-24 rounded-t-[80px] mt-20">
        <div className="container mx-auto px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-black text-[#FFD700]">Trang Kế Toán</h2>
              <p className="text-blue-100/70 text-lg font-medium leading-relaxed">Đơn vị tiên phong cung cấp giải pháp kế toán số & pháp lý thực chiến hàng đầu Việt Nam.</p>
              <div className="flex gap-10 font-black uppercase text-xs tracking-widest">
                <Link href="#" className="hover:text-[#FFD700]">Facebook</Link>
                <Link href="#" className="hover:text-[#FFD700]">Zalo</Link>
                <Link href="#" className="hover:text-[#FFD700]">TikTok</Link>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-10 rounded-[40px] backdrop-blur-3xl space-y-6">
              <h4 className="text-2xl font-black">Kết nối với chúng tôi</h4>
              <div className="space-y-4 text-blue-100/80 font-bold">
                <p className="flex items-center gap-3"><Phone size={20} className="text-[#FFD700]" /> 0777 868 678</p>
                <p className="flex items-center gap-3"><MapPin size={20} className="text-[#FFD700]" /> TP. Hồ Chí Minh & Toàn Quốc</p>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-white/10 text-center text-blue-100/30 text-xs font-bold uppercase tracking-tighter">
            © 2026 TRANG KẾ TOÁN. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating Zalo */}
      <Link href="https://zalo.me/0777868678" className="fixed bottom-10 right-10 z-[100] group">
        <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-20 group-hover:opacity-0 transition-opacity"></div>
        <div className="relative w-20 h-20 bg-blue-600 text-white rounded-full flex flex-col items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-500">
          <MessageSquare size={32} />
          <span className="text-[10px] font-black uppercase mt-1">Zalo</span>
        </div>
      </Link>
    </div>
  );
}
