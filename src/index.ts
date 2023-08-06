import { EmailValidatorClassAdapter } from "./adapter/validation/email-validator-class-adapter";
import { emailValidatorFnAdapter } from "./adapter/validation/email-validator-fn-adapter";
import {
  EmailValidatorFnProtocol,
  EmailValidatorProtocol,
} from "./adapter/validation/email-validator-protocol";

function validaEmailClass(
  emailValidator: EmailValidatorProtocol,
  email: string
): void {
  if (emailValidator.isEmail(email)) {
    console.log("Valid email.");
  } else {
    console.log("Invalid email.");
  }
}

validaEmailClass(
  new EmailValidatorClassAdapter(),
  "leonardo.pottmayer@gmail.com"
);

// -------------------------

function validaEmailFn(
  emailValidator: EmailValidatorFnProtocol,
  email: string
): void {
  if (emailValidatorFnAdapter(email)) {
    console.log("Valid email.");
  } else {
    console.log("Invalid email.");
  }
}

validaEmailFn(emailValidatorFnAdapter, "leonardo.pottmayer@gmail.com");
