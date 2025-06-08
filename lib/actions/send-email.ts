"use server";

import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/emails/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  const senderName = formData.get("senderName");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid senderEmail",
    };
  }

  if (!validateString(senderName, 100)) {
    return {
      error: "Invalid senderName",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;

  try {
    const response = await resend.emails.send({
      from: "Contact Form <contact@arthurkameni.com>",
      to: "arthur.kamenitchualeu@gmail.com",
      subject: "New message from contact form of your portfolio",
      replyTo: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
        senderName: senderName as string,
      }),
    });

    if (!response.data?.id) {
      return {
        error: "Failed to send email",
      };
    }
  } catch (error: unknown) {
    console.log(error);
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
