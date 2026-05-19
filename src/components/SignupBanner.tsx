"use client";

import { useState } from "react";

export default function SignupBanner() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="bg-white border-y border-gray-100 py-12 md:py-16">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-heading font-bold">N</span>
          </div>
          <span className="font-heading font-bold text-xl text-secondary">
            Bách Hóa <span className="text-primary">Nails</span>
          </span>
        </div>

        {!submitted ? (
          <>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-secondary mb-2">
              Đăng ký để xem giá sỉ
            </h2>
            <p className="text-muted text-sm mb-8">
              Truy cập hơn 5,000 sản phẩm supply nails với giá sỉ tốt nhất. Miễn phí đăng ký.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
              <div className="relative group">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email tiệm nails của bạn"
                  className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors text-secondary placeholder-gray-400"
                  required />
                <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
              </div>
              <button type="submit" className="btn-primary py-4 text-base font-semibold">
                Xem giá sỉ ngay →
              </button>
            </form>

            <div className="mt-6 flex items-center justify-center gap-4">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-gray-400 text-sm">hoặc</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <button className="mt-4 flex items-center justify-center gap-3 w-full max-w-md mx-auto py-3 px-5 border-2 border-gray-200 rounded-2xl hover:border-primary hover:bg-primary/5 transition-all group">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span className="text-secondary font-medium group-hover:text-primary transition-colors">Đăng ký với Google</span>
            </button>

            <p className="text-xs text-gray-400 mt-4">
              Bằng cách đăng ký, bạn đồng ý với{" "}
              <a href="#" className="text-primary hover:underline">Điều khoản dịch vụ</a> của chúng tôi
            </p>
          </>
        ) : (
          <div className="animate-fade-in">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🎉</span>
            </div>
            <h2 className="font-heading text-2xl font-bold text-secondary mb-2">Đăng ký thành công!</h2>
            <p className="text-muted">
              Chúng tôi sẽ gửi giá sỉ đến <span className="text-primary font-medium">{email}</span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
