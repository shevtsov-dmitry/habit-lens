interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => (
  <div>
    {children}
  </div>
)

interface TitleProps {
  children: React.ReactNode;
}

export const Title: React.FC<TitleProps> = ({ children }) => (
  <div>
    <h2>{children}</h2>
  </div>
)

interface TextFieldProps {
  type?: 'text' | 'email';
  children?: React.ReactNode;
}

export const TextField: React.FC<TextFieldProps> = ({ type, children }) => (
  <div>
    <p>{children}</p>
  </div>
)

interface TextInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = ({ placeholder, value }: TextInputProps) => (
  <div>
    <input type="text" placeholder={placeholder} value={value} />
  </div>
)

// ! CURRENTLY USING ONLY EMAIL AUTHENTICATION

// interface PasswordFieldProps {
//   label: string;
//   placeholder?: string;
//   value?: string;
// }

// export const PasswordInput: React.FC<PasswordFieldProps> = ({ label, placeholder, value = '' }) => (
//   <div>
//     <input type="password" placeholder={placeholder} value={value} />
//   </div>
// )

interface ButtonProps {
  type: ButtonType
}

export enum ButtonType {
  SUBMIT,
  RESET
}

export const Button: React.FC<ButtonProps> = ({ type }) => {
  if (type === ButtonType.SUBMIT) {
    return <button type="submit">Submit</button>;
  } else if (type === ButtonType.RESET) {
    return <button type="reset">Reset</button>;
  }
}
