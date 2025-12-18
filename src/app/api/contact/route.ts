import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // 필수 필드 검증
    const { companyName, name, email, phone, message, agreeToTerms } = data;
    
    if (!companyName || !name || !email || !phone || !agreeToTerms) {
      return NextResponse.json(
        { success: false, message: '필수 정보가 누락되었습니다.' },
        { status: 400 }
      );
    }
    
    // 이메일 형식 검증
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: '유효한 이메일 주소를 입력해주세요.' },
        { status: 400 }
      );
    }
    
    // 전화번호 형식 검증
    const phoneRegex = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { success: false, message: '올바른 전화번호 형식을 입력해주세요 (예: 010-1234-5678).' },
        { status: 400 }
      );
    }
    
    // 실제 구현에서는 여기에 데이터베이스 저장 또는 이메일 발송 로직이 들어갑니다.
    // 예: await saveToDatabase(data) 또는 await sendEmail(data)
    
    // 개발 단계에서는 콘솔에 로그만 출력
    console.log('문의 접수:', {
      companyName,
      name,
      email,
      phone,
      message: message || '(내용 없음)',
      timestamp: new Date().toISOString(),
    });
    
    // 성공 응답
    return NextResponse.json(
      { 
        success: true, 
        message: '문의가 성공적으로 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.' 
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('문의 처리 중 오류 발생:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: '문의 처리 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' 
      },
      { status: 500 }
    );
  }
}
