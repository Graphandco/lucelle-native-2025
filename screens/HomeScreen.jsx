import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import { useProducts } from '../hooks/UseProducts';
import ProductItem from '../components/products/ProductItem';

export default function HomeScreen() {
  const { products, loading, error, refresh } = useProducts();

  if (loading) return <ActivityIndicator />;
  if (error) return <Text>Erreur : {error.message}</Text>;

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      numColumns={3} // <= 3 colonnes par ligne
      contentContainerStyle={{ padding: 10 }}
      columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 10 }}
      className="bg-background"
      renderItem={({ item }) => (
        <View style={{ width: '31%' }}>
          <ProductItem product={item} onDeleted={refresh} />
        </View>
      )}
    />
  );
}
