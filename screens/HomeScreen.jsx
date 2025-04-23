import { View, Text, ActivityIndicator, FlatList, ScrollView } from 'react-native';
import { useProducts } from '../hooks/UseProducts';
import ProductItem from '../components/products/ProductItem';

export default function HomeScreen() {
  const { products, loading, error, refresh } = useProducts();

  if (loading) return <ActivityIndicator />;
  if (error) return <Text>Erreur : {error.message}</Text>;

  // Group products by category
  const grouped = products.reduce((acc, product) => {
    const categoryName = product.category?.name || 'Autres';
    if (!acc[categoryName]) acc[categoryName] = [];
    acc[categoryName].push(product);
    return acc;
  }, {});

  return (
    <ScrollView className="bg-background px-3">
      {Object.entries(grouped).map(([category, items]) => (
        <View key={category} style={{ marginBottom: 25 }}>
          <Text className="text-primary text-xl font-bold" style={{ marginBottom: 15 }}>
            {category}
          </Text>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id.toString()}
            numColumns={3}
            scrollEnabled={false} // Important to allow ScrollView to scroll
            columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 12 }}
            className="mb-10"
            renderItem={({ item }) => (
              <View style={{ width: '31%' }}>
                <ProductItem product={item} onDeleted={refresh} />
              </View>
            )}
          />
        </View>
      ))}
    </ScrollView>
  );
}
