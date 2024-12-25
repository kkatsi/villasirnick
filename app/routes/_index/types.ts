export interface IContactForm {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  phone?: string;
  dialCode: string;
  captcha: string;
}
