import React from 'react';

const CaseStudiesSection = () => {
  const testimonials = [
    {
      title: '신제품 출시 이전 홍보 효과',
      description: '신제품 출시 이전 업로드 효과로, 소비자들에게 빠르게 알리기 좋았습니다.',
      person: '게이밍 마우스 브랜드 A사',
    },
    {
      title: '통합 패키지의 비용 효율성',
      description: '제품 제공 후 인스타그램, 블로그, 카페, 유튜브 4곳에 제품 영상이 올라가니, 다른 곳에서 따로 의뢰할 때보다 저렴했습니다. 보통은 제작비나 원고비로만 2~30만원 기본인데, EM베스트는 통합패키지로 가격이 이렇게 저렴하니, 매번 찾을 수 밖에 없는 것 같습니다.',
      person: '게이밍 키보드 브랜드 B사',
    },
    {
      title: '상위 노출 효과',
      description: 'EM카페에 글만 쓰더라도, 항상 View 탭 상위노출이 되기 때문에, 이러한 부분에서도 큰 장점이 있습니다.',
      person: '게이밍 헤드셋 브랜드 C사',
    },
  ];

  return (
    <section id="cases" className="container-custom">
      <h2 className="section-title">
        <span className="text-primary">홍보 만족사례</span>를 확인하세요
      </h2>
      <p className="section-subtitle">
        EM베스트와 함께한 파트너사들의 실제 만족 후기를 소개합니다
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <div className="mb-4">
              <div className="bg-primary bg-opacity-10 p-3 rounded-full inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-3">{testimonial.title}</h3>
            <p className="text-gray-600 mb-4">{testimonial.description}</p>
            
            <div className="mt-auto pt-4 border-t border-gray-100">
              <p className="text-sm font-medium text-gray-500">{testimonial.person}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 bg-primary bg-opacity-10 rounded-lg p-6 md:p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">더 많은 만족 사례가 궁금하신가요?</h3>
        <p className="mb-6 max-w-2xl mx-auto">
          EM베스트와 함께한 다양한 브랜드의 만족 사례를 더 자세히 알아보세요.
          업종별, 목표별 다양한 사례를 통해 귀사에 맞는 마케팅 전략을 찾을 수 있습니다.
        </p>
        <a 
          href="#contact" 
          className="btn-primary inline-block"
        >
          상담 신청하기
        </a>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
