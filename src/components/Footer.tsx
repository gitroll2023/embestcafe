"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Modal from './Modal';
import legalInfo from '../data/legalInfo.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [modalContent, setModalContent] = useState<{
    title: string;
    content: Array<{ subtitle: string; text: string }>;
  } | null>(null);

  const openModal = (type: 'termsOfService' | 'privacyPolicy' | 'emailCollection') => {
    setModalContent(legalInfo[type]);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="mb-4">
              {/* 로고 이미지를 사용하고 흰색으로 강제 변경 */}
              <div className="relative w-[150px] h-[50px]">
                <Image 
                  src="/images/embest-logo.png" 
                  alt="EM베스트 로고" 
                  width={150} 
                  height={50}
                  style={{ filter: 'brightness(0) invert(1)' }} // 이미지를 흰색으로 강제 변경
                />
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              네이버 대표 FPS 장비 카페<br />
              게이머들을 위한 최고의 커뮤니티
            </p>
            <div className="flex space-x-4">
              <a href="https://www.youtube.com/@embestcafe4226" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
              <a href="https://instagram.com/embestsns" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://blog.naver.com/embestcafe" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                {/* 네이버 블로그 아이콘 */}
                <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z"/>
                </svg>
              </a>
              <a href="https://cafe.naver.com/embestc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                {/* 네이버 카페 아이콘 (커피 아이콘으로 대체) */}
                <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M20 8h-2V5h2v3m0-5H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">서비스</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#intro" className="text-gray-400 hover:text-white transition-colors">
                  카페 소개
                </Link>
              </li>
              <li>
                <Link href="#benefits" className="text-gray-400 hover:text-white transition-colors">
                  입점 혜택
                </Link>
              </li>
              <li>
                <Link href="#cases" className="text-gray-400 hover:text-white transition-colors">
                  성공 사례
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                  요금제 안내
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-400 hover:text-white transition-colors">
                  자주 묻는 질문
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">고객지원</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  문의하기
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => openModal('termsOfService')} 
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  이용약관
                </button>
              </li>
              <li>
                <button 
                  onClick={() => openModal('privacyPolicy')} 
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  개인정보처리방침
                </button>
              </li>
        
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">연락처</h3>
            <ul className="space-y-2 text-gray-400">
          
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>qkrwodud30@naver.com</span>
              </li>
           
    
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} EM베스트. All rights reserved. 사업자등록번호: 612-14-92940<br />
              웹사이트 제작: <a href="https://trickcontents.co.kr/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">트릭콘텐츠</a>
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => openModal('termsOfService')} 
                className="text-gray-500 hover:text-white text-sm"
              >
                이용약관
              </button>
              <button 
                onClick={() => openModal('privacyPolicy')} 
                className="text-gray-500 hover:text-white text-sm"
              >
                개인정보처리방침
              </button>
              <button 
                onClick={() => openModal('emailCollection')} 
                className="text-gray-500 hover:text-white text-sm"
              >
                이메일 무단수집 거부
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 모달 */}
      {modalContent && (
        <Modal 
          isOpen={!!modalContent} 
          onClose={closeModal} 
          title={modalContent.title}
        >
          <div className="space-y-6">
            {modalContent.content.map((item, index) => (
              <div key={index} className="mb-4">
                {item.subtitle && (
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.subtitle}</h3>
                )}
                <p className="text-gray-700 whitespace-pre-line">{item.text}</p>
              </div>
            ))}
          </div>
        </Modal>
      )}
    </footer>
  );
};

export default Footer;
