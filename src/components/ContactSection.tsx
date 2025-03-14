"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import ApplicationFormModal from './ApplicationFormModal';
import applicationForms from '../data/applicationForms.json';
import { toast } from 'react-hot-toast';

type FormPlan = 'basic' | 'standard' | 'premium';
type ContractDuration = 3 | 6 | 12;

const ContactSection = () => {
  const [selectedPlan, setSelectedPlan] = useState<FormPlan | null>(null);
  const [selectedDuration, setSelectedDuration] = useState<ContractDuration>(3);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handlePreview = (plan: FormPlan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };
  
  const handleCopy = (plan: FormPlan) => {
    const formContent = applicationForms[plan].content.replace('[3/6/12]', selectedDuration.toString());
    navigator.clipboard.writeText(formContent)
      .then(() => {
        toast.success('양식이 클립보드에 복사되었습니다!');
      })
      .catch((err) => {
        console.error('클립보드 복사 실패:', err);
        toast.error('클립보드 복사에 실패했습니다.');
      });
  };
  
  const openEmailClient = () => {
    window.location.href = 'mailto:qkrwodud30@naver.com?subject=EM베스트 입점 문의';
  };

  return (
    <section id="contact" className="container-custom">
      <h2 className="section-title">
        <span className="text-primary">입점 문의</span>하기
      </h2>
      <p className="section-subtitle">
        EM베스트와 함께 효과적인 마케팅을 시작해보세요.<br />
        아래 양식을 복사하여 이메일로 보내주시면 빠르게 연락드리겠습니다.
      </p>

      <div className="max-w-4xl mx-auto mt-12">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-2 bg-primary p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">입점 문의 안내</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>원하는 플랜의 양식을 복사하세요</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>이메일로 양식을 보내주세요</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>담당자가 확인 후 연락드립니다</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>최소 계약 기간은 3개월입니다</span>
                </li>
              </ul>
              
              <div className="mt-12">
                <h4 className="text-lg font-bold mb-4">문의 이메일</h4>
                <div className="space-y-3">
                  <p className="flex items-center">
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>qkrwodud30@naver.com</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3 p-8">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4">계약 기간 선택</h3>
                <div className="flex space-x-4 mb-6">
                  {[3, 6, 12].map((duration) => (
                    <button
                      key={duration}
                      onClick={() => setSelectedDuration(duration as ContractDuration)}
                      className={`px-4 py-2 rounded-lg border ${
                        selectedDuration === duration
                          ? 'bg-primary text-white border-primary'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {duration}개월
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="border rounded-lg p-6 transition-all hover:shadow-md">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">베이직 입점</h3>
                    <span className="text-lg font-semibold text-primary">{applicationForms.basic.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">최소 {applicationForms.basic.minMonths}개월부터 진행 가능</p>
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => handlePreview('basic')}
                      className="btn-secondary flex items-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      미리보기
                    </button>
                    <button 
                      onClick={() => handleCopy('basic')}
                      className="btn-primary flex items-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                      복사하기
                    </button>
                  </div>
                </div>
                
                <div className="border rounded-lg p-6 transition-all hover:shadow-md border-primary">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">스탠다드 입점</h3>
                    <span className="text-lg font-semibold text-primary">{applicationForms.standard.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">최소 {applicationForms.standard.minMonths}개월부터 진행 가능</p>
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => handlePreview('standard')}
                      className="btn-secondary flex items-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      미리보기
                    </button>
                    <button 
                      onClick={() => handleCopy('standard')}
                      className="btn-primary flex items-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                      복사하기
                    </button>
                  </div>
                </div>
                
                <div className="border rounded-lg p-6 transition-all hover:shadow-md">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">프리미엄 입점</h3>
                    <span className="text-lg font-semibold text-primary">{applicationForms.premium.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">최소 {applicationForms.premium.minMonths}개월부터 진행 가능</p>
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => handlePreview('premium')}
                      className="btn-secondary flex items-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      미리보기
                    </button>
                    <button 
                      onClick={() => handleCopy('premium')}
                      className="btn-primary flex items-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                      복사하기
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <button
                  onClick={openEmailClient}
                  className="btn-primary py-3 px-8 flex items-center mx-auto"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  이메일로 문의하기
                </button>
                <p className="text-gray-500 mt-3">
                  양식을 복사한 후 이메일로 보내주시면 빠르게 답변드리겠습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {selectedPlan && (
        <ApplicationFormModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={applicationForms[selectedPlan].title}
          content={applicationForms[selectedPlan].content.replace('[3/6/12]', selectedDuration.toString())}
        />
      )}
    </section>
  );
};

export default ContactSection;
