interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <div>
    {children}
  </div>
}

interface TitleProps {
  title: string;
}

export const Title: React.FC<TitleProps> =
  ({ title }) => {
    return <>
      <h1>{title}</h1>
    </>
  }

interface TextFieldProps {
  label: string;
  type?: 'text' | 'email';
  placeholder?: string;
  value?: string;
}

export const TextField: React.FC<TextFieldProps> = ({ label, type = 'text', placeholder = '', value = '' }) => {
  return <div>
    <p placeholder={placeholder}>{value}</p>
  </div>
}

interface PasswordFieldProps {
  label: string;
  placeholder?: string;
  value?: string;
}

export const PasswordField: React.FC<PasswordFieldProps> = ({ label, placeholder, value = '' }) => {
  return <div>
    <input type="password" placeholder={placeholder} value={value} />
  </div>
}


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
