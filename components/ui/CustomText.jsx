// components/CustomText.js
import { Text } from 'react-native';

export function WhiteText({ className = '', ...props }) {
  return <Text className={`text-white ${className}`} {...props} />;
}
export function PrimaryText({ className = '', ...props }) {
  return <Text className={`text-primary ${className}`} {...props} />;
}
