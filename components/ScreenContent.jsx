import { Text, View } from 'react-native';

import { EditScreenInfo } from './EditScreenInfo';

export const ScreenContent = ({ title, path, children }) => {
  return (
    <View className={styles.container}>
      <Text className={styles.title}>{title}</Text>
      <Text className="text-red-500">This is a screen content !</Text>
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
