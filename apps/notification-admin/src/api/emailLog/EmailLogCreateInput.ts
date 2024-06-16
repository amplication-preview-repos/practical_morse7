export type EmailLogCreateInput = {
  body?: string | null;
  email?: string | null;
  htmlMessage?: string | null;
  sentAt?: Date | null;
  subject?: string | null;
  textMessage?: string | null;
};
