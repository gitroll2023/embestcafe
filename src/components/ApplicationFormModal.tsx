"use client";

import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

type ApplicationFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
};

const ApplicationFormModal: React.FC<ApplicationFormModalProps> = ({
  isOpen,
  onClose,
  title,
  content
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(content)
      .then(() => {
        setCopied(true);
        toast.success('양식이 클립보드에 복사되었습니다!');
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error('클립보드 복사 실패:', err);
        toast.error('클립보드 복사에 실패했습니다.');
      });
  };

  // 줄바꿈을 React 요소로 변환
  const formattedContent = content.split('\n').map((line, index) => {
    // 마크다운 헤더 스타일 적용
    if (line.startsWith('## ')) {
      return <h3 key={index} className="text-lg font-bold mt-4 mb-2">{line.substring(3)}</h3>;
    }
    // 마크다운 리스트 스타일 적용
    else if (line.startsWith('- ')) {
      return <li key={index} className="ml-5">{line.substring(2)}</li>;
    }
    // 빈 줄은 마진으로 처리
    else if (line.trim() === '') {
      return <div key={index} className="my-2"></div>;
    }
    // 일반 텍스트
    else {
      return <p key={index}>{line}</p>;
    }
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-8rem)]">
          <div className="prose max-w-none">
            {formattedContent}
          </div>
        </div>
        <div className="p-4 border-t flex justify-end space-x-3">
          <button
            onClick={copyToClipboard}
            className="btn-primary flex items-center"
          >
            {copied ? (
              <>
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                복사됨
              </>
            ) : (
              <>
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
                양식 복사하기
              </>
            )}
          </button>
          <button
            onClick={onClose}
            className="btn-secondary"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationFormModal;
