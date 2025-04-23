import { Text, View } from 'react-native';
import { Image } from 'react-native';
import { WhiteText, PrimaryText } from '../ui/CustomText';

export const Header = ({ session }) => {
  return (
    <View className="bg-background flex flex-row items-center justify-between px-3 py-3">
      <View className="flex flex-row items-center gap-3">
        <Image source={require('../../assets/images/logo.png')} style={{ width: 50, height: 50 }} />
        <WhiteText className="text-xl font-semibold">Lucelle'App</WhiteText>
      </View>
      <View>
        <WhiteText>{session?.user?.email}</WhiteText>
      </View>
    </View>
  );
};
