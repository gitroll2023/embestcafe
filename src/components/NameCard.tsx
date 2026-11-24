import React from 'react';
import Image from 'next/image';

const NameCard = () => {
  return (
    <div className="max-w-5xl mx-auto mb-16">
      <div className="hud hud-cyan p-6 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* 명함 이미지 */}
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/15 blur-3xl rounded-full" aria-hidden />
            <Image
              src="/images/namecard.png"
              alt="EM베스트 매니저 명함"
              width={900}
              height={500}
              className="relative w-full h-auto rounded-md shadow-2xl ring-1 ring-white/10"
              priority={false}
            />
          </div>

          {/* 문의 안내 */}
          <div>
            <span className="tag mb-4">Contact</span>
            <h3 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-3">
              입점 · 제휴,
              <br />
              <span className="text-primary">명함으로 바로 문의</span>주세요
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              1년 계약은 조건을 최대한 맞춰드립니다. 전화나 이메일, 편하신 방법으로 부담 없이 연락 주세요.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="tel:01085265536"
                className="btn-primary inline-flex items-center justify-center px-8 py-4 text-lg"
              >
                📞 010-8526-5536 전화하기
              </a>
              <a
                href="mailto:qkrwodud30@naver.com"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border border-white/25 hover:border-primary hover:text-primary transition-colors"
              >
                ✉️ qkrwodud30@naver.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameCard;
