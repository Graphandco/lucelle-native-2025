import { View, Image, Alert, Pressable } from 'react-native';
import { WhiteText } from '../ui/CustomText';
import { deleteProduct } from '../../lib/api/products'; // Importation de la fonction deleteProduct
import * as Haptics from 'expo-haptics'; // Importation du module Haptic

export default function ProductItem({ product, onDeleted }) {
  const handleLongPress = () => {
    // Retour haptique lors de l'appui long
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

    Alert.alert('Supprimer le produit', `Voulez-vous supprimer "${product.title}" ?`, [
      { text: 'Annuler', style: 'cancel' },
      {
        text: 'Supprimer',
        style: 'destructive',
        onPress: async () => {
          try {
            await deleteProduct(product.id);
            onDeleted(); // Rafraîchir les produits après suppression
          } catch (error) {
            Alert.alert('Erreur', error.message);
          }
        },
      },
    ]);
  };

  return (
    <Pressable onLongPress={handleLongPress}>
      <View className="flex flex-col items-center gap-3 rounded-lg border border-gray-700 bg-gray-800 px-2 py-4">
        <Image
          source={{ uri: product.image_url }}
          style={{ width: '100%', height: 40, borderRadius: 8 }}
          resizeMode="contain"
        />
        <WhiteText className="mb-2 text-sm">{product.title}</WhiteText>
      </View>
    </Pressable>
  );
}
