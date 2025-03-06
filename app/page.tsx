'use client';
import React, { useState } from 'react';
import { Button, Input, Typography, Row, Col, Card, message } from 'antd';

const { Title, Text } = Typography;

const Verifier: React.FC = () => {
  const [secretCode, setSecretCode] = useState<string>('');
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [verificationResult, setVerificationResult] = useState<string | null>(null);

  const handleSecretCodeChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSecretCode(e.target.value);
  };

  const handleVerify = (): void => {
    if (!secretCode && !qrCode) {
      message.error('Please either upload a QR code or enter a secret code to verify.');
      return;
    }

    // Simulate certificate verification by checking the secret code or QR code (you can replace this logic)
    if (secretCode === 'validSecretCode' || qrCode === 'validQRCodeData') {
      setVerificationResult('Certificate is valid.');
    } else {
      setVerificationResult('Invalid certificate.');
    }
  };

  const handleUploadQrCode = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      // Simulate QR code upload (you can use a library to decode QR codes)
      setQrCode('validQRCodeData');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <Title level={2}>Verifier - Validate Certificate</Title>

      <Row gutter={[16, 16]} style={{ marginBottom: '20px' }}>
        <Col span={12}>
          <Card>
            <Title level={4}>Enter Secret Code</Title>
            <Input
              value={secretCode}
              onChange={handleSecretCodeChange}
              placeholder="Enter secret code provided by the issuer"
              style={{ marginBottom: '10px' }}
            />
            <Button type="primary" onClick={handleVerify}>
              Verify Secret Code
            </Button>
          </Card>
        </Col>

        <Col span={12}>
          <Card>
            <Title level={4}>Upload QR Code</Title>
            <input type="file" accept="image/*" onChange={handleUploadQrCode} />
            <Button type="primary" onClick={handleVerify} style={{ marginTop: '10px' }}>
              Verify QR Code
            </Button>
          </Card>
        </Col>
      </Row>

      {/* Display the verification result */}
      {verificationResult && (
        <Card>
          <Text strong>{verificationResult}</Text>
        </Card>
      )}
    </div>
  );
};

export default Verifier;

