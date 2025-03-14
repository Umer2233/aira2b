import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

const TestInput = () => {
    const [otp, setOtp] = useState('');
    return (
        <>
            <div className='my-otp-input-feilds'>
                <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    renderSeparator={<span>-</span>}
                    renderInput={(props) => <input {...props} />}
                />
            </div>
            <h1>{otp}</h1>
        </>
    )
}

export default TestInput