import React, { useState } from 'react';
import Signup from './Signup';
import Otp from './Otp';

const AuthFlow = () => {
  const [step, setStep] = useState('signup'); // 'signup' or 'otp'
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleOtpSent = (phone) => {
    setPhoneNumber(phone);
    setStep('otp');
  };

  return (
    <div>
      {step === 'signup' && <Signup onOtpSent={handleOtpSent} />}
      {step === 'otp' && <Otp phoneNumber={phoneNumber} />}
    </div>
  );
};

export default AuthFlow;
