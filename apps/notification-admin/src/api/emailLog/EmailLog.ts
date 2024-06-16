export type EmailLog = {
  body: string | null;
  createdAt: Date;
  email: string | null;
  htmlMessage: string | null;
  id: string;
  sentAt: Date | null;
  subject: string | null;
  textMessage: string | null;
  updatedAt: Date;
};
