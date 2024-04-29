import React, { useRef, useState } from "react";
import "./otpInput.scss";

interface OTPInputProps {
  length: number;
  onChange: (otp: string) => void;
}

const OtpInput: React.FC<OTPInputProps> = ({ length, onChange }) => {
  const [otp, setOTP] = useState<string[]>(new Array(length).fill(""));
  const inputs = useRef<HTMLInputElement[]>(Array.from({ length }));
  console.log(otp);
  const handleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newOTP = [...otp];
    newOTP[index] = event.target.value;
    setOTP(newOTP);

    onChange(newOTP.join(""));

    if (event.target.value !== "" && inputs.current[index + 1]) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Backspace" && index > 0 && !otp[index]) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <div className="otpInput">
      {otp.map((digit, index) => (
        <div className="itemOtp" key={index}>
          <input
            type="text"
            maxLength={1}
            value={digit}
            onChange={(event) => handleChange(index, event)}
            onKeyDown={(event) => handleKeyDown(index, event)}
            ref={(input) => (inputs.current[index] = input as HTMLInputElement)}
          />
        </div>
      ))}
    </div>
  );
};

export default OtpInput;
