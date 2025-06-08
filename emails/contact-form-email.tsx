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
  Link,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
  senderName?: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
  senderName,
}: Readonly<ContactFormEmailProps>) {
  return (
    <Html>
      <Head />
      <Preview>New contact message from your portfolio</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans">
          <Container>
            <Section className="my-10 rounded-lg border border-gray-200 bg-white px-8 py-6 shadow-md">
              <Heading className="mb-2 text-xl font-bold text-gray-900">
                📬 New message from your portfolio
              </Heading>
              <Text className="mb-4 text-gray-700">
                You have received a new message via your portfolio contact form.
              </Text>
              <Hr />
              <Section className="my-4">
                <Text className="font-semibold text-gray-800">Message:</Text>
                <Text className="whitespace-pre-line text-gray-700">
                  {message}
                </Text>
              </Section>
              <Hr />
              <Section className="mt-4">
                <Text className="font-semibold text-gray-800">
                  Sender details:
                </Text>
                {senderName && (
                  <Text className="text-gray-700">Name: {senderName}</Text>
                )}
                <Text className="text-gray-700">
                  Email:{" "}
                  <Link
                    href={`mailto:${senderEmail}`}
                    className="text-blue-600 underline"
                  >
                    {senderEmail}
                  </Link>
                </Text>
              </Section>
            </Section>
            <Text className="mt-8 text-center text-xs text-gray-400">
              This email was generated automatically from your portfolio contact
              form.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
