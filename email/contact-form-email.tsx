import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Body style={{ backgroundColor: '#f7fafc', color: '#1a202c' }}>
          <Container>
            <Section style={{ backgroundColor: '#ffffff', borderWidth: '1px', borderColor: '#000000', marginTop: '40px', paddingLeft: '40px', paddingRight: '40px', paddingTop: '20px', paddingBottom: '20px', borderRadius: '0.375rem' }}>
              <Heading style={{ marginTop: '0', marginBottom: '0.5rem', fontSize: '2.25rem', lineHeight: '2.5rem' }}>
                You received the following message from the contact form
              </Heading>
              <Text>{message}</Text>
              <Hr style={{ marginTop: '1rem', marginBottom: '1rem', borderWidth: '1px', borderColor: '#000000' }} />
              <Text>The sender's email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
    </Html>
  );
}
