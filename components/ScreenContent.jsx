import { Text, View } from 'react-native';

import { EditScreenInfo } from './EditScreenInfo';
import { WhiteText, PrimaryText } from './ui/CustomText';

export const ScreenContent = ({ title, path, children }) => {
  return (
    <View className="bg-background flex-1 items-center justify-center">
      <Text className="text-xl font-bold">{title}</Text>
      <PrimaryText>Test</PrimaryText>
      <WhiteText>{title}</WhiteText>
      <WhiteText>This is a screen content !!</WhiteText>
      <View className={styles.separator} />
      <EditScreenInfo path={path} />
      {children}
    </View>
  );
};
const styles = {
  container: `items-center flex-1 justify-center`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-xl font-bold`,
};
