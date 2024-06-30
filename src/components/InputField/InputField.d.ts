import {ViewStyle} from 'react-native';

export type KeyboardTypeProp = {
  keyboardType?:
    | 'default'
    | 'numeric'
    | 'email-address'
    | 'number-pad'
    | 'phone-pad'
    | 'name-phone-pad'
    | 'decimal-pad'
    | 'visible-password';
};

export type AutoCompleteProp = {
  autoComplete?:
    | 'email'
    | 'family-name'
    | 'given-name'
    | 'email'
    | 'name'
    | 'url'
    | 'birthdate-full'
    | 'sms-otp'
    | 'password'
    | 'postal-code'
    | 'street-address'
    | 'tel'
    | 'username'
    | 'new-password'
    | 'one-time-code'
    | 'current-password';
};

export type AutoCapatalizeProp = {
  autoCapatalize?: 'none' | 'sentences' | 'words' | 'characters';
};

export type ReturnKeyTypeProp = {
  returnKeyType?:
    | 'default'
    | 'go'
    | 'google'
    | 'join'
    | 'next'
    | 'route'
    | 'search'
    | 'send'
    | 'yahoo'
    | 'done'
    | 'emergency-call';
};

export type InputFieldProp = {
  value: string;
  onChangeText?: (text: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  placeholder: string;
  ref?: Ref<TextInput>;
  secureTextEntry?: boolean;
  disable?: boolean;
  name?: string;
  multiline?: boolean;
  icon?: string;
  toggleVisible?: () => void;
  style?: TextStyle;
} & KeyboardTypeProp &
  AutoCapatalizeProp &
  AutoCompleteProp &
  ReturnKeyTypeProp;
