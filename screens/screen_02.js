import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, FlatList } from "react-native";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function App({ navigation }) {
    const [category, setCategory] = useState("Smartphone");
    const [viewModel, setViewModel] = useState("Best Sales");
    const [showAll, setShowAll] = useState(false);
    const [products, setProducts] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get('https://6711db604eca2acdb5f5f664.mockapi.io/products');
                setProducts(response.data[0]);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        fetchProduct();
    }, []);

    if (loading) {
        return <Text>Loading...</Text>;
    }

    const displayProduct = products[category]?.filter((product) =>
        viewModel === "Best Sales" ? true : product.price > 800
    );

    const handlerProduct = (newCategory) => {
        setCategory(newCategory);
        setViewModel("Best Sales");
        setShowAll(false);
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={{ width: 30, height: 30 }}>
                    <Image source={require("../assets/Data/thoat.png")} style={{ width: 30, height: 30 }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: "bold", marginRight: 190 }}>Electronics</Text>
                <Image source={require("../assets/Data/codicon_account.png")} style={{ width: 30, height: 30 }} />
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                <View
                    style={{
                        marginTop: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 10,
                        backgroundColor: "#ccc",
                        width: "80%",
                        height: 40,
                        flexDirection: "row",
                        paddingHorizontal: 15,
                        marginRight: 28,
                    }}
                >
                    <Image
                        source={require("../assets/Data/search.png")}
                        style={{ width: 20, height: 20, resizeMode: "contain", marginRight: 10, marginLeft: 10 }}
                    />
                    <TextInput style={{ width: "80%", height: 40 }} placeholder="Search" />
                </View>
                <View
                    style={{
                        marginTop: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 10,
                        backgroundColor: "#ccc",
                        width: 40,
                        height: 40,
                        marginRight: 50,
                    }}
                >
                    <Image style={{ width: 40, height: 40, backgroundColor: "red" }} />
                </View>
            </View>

            <View>
                <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}>Category</Text>
            </View>

            <View style={{ flexDirection: "row", marginTop: 10 }}>
                <TouchableOpacity
                    style={{
                        width: 100,
                        height: 100,
                        backgroundColor: "red",
                        borderRadius: 10,
                        marginRight: 10,
                    }}
                    onPress={() => handlerProduct("Smartphone")}
                >
                    <Image source={require("../assets/Data/smart.png")} style={{ width: 100, height: 100, resizeMode: "contain" }} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        width: 100,
                        height: 100,
                        backgroundColor: "violet",
                        borderRadius: 10,
                        marginRight: 10,
                    }}
                    onPress={() => handlerProduct("Ipad")}
                >
                    <Image source={require("../assets/Data/smart.png")} style={{ width: 100, height: 100, resizeMode: "contain" }} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        width: 100,
                        height: 100,
                        backgroundColor: "blue",
                        borderRadius: 10,
                    }}
                    onPress={() => handlerProduct("Macbook")}
                >
                    <Image source={require("../assets/Data/smart.png")} style={{ width: 100, height: 100, resizeMode: "contain" }} />
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <TouchableOpacity
                    style={{
                        width: 100,
                        height: 30,
                        borderRadius: 10,
                        backgroundColor: "#ccc",
                        marginTop: 10,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: 10,
                    }}
                    onPress={() => setViewModel("Best Sales")}
                >
                    <Text style={{ fontSize: 10, color: "#fff" }}>Best Sale</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        width: 100,
                        height: 30,
                        borderRadius: 10,
                        backgroundColor: "#ccc",
                        marginTop: 10,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: 10,
                    }}
                    onPress={() => setViewModel("Best Matched")}
                >
                    <Text style={{ fontSize: 10, color: "#fff" }}>Best Matched</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        width: 100,
                        height: 30,
                        borderRadius: 10,
                        backgroundColor: "#ccc",
                        marginTop: 10,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    onPress={() => setViewModel("Popular")}
                >
                    <Text style={{ fontSize: 10, color: "#fff" }}>Popular</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={showAll ? displayProduct : displayProduct.slice(0, 4)}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View
                        style={{
                            flexDirection: "row",
                            marginTop: 10,
                            justifyContent: "center",
                            alignItems: "center",
                            borderWidth: 1,
                            borderColor: "#ccc",
                            width: "100%",
                        }}
                    >
                        <Image
                            source={item.image}
                            style={{ width: 60, height: 60, resizeMode: "contain", marginRight: 20, marginLeft: 20 }}
                        />
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.name}</Text>
                            <Image source={require("../assets/Data/Rating 5.png")} />
                        </View>
                        <Text style={{ fontSize: 20, fontWeight: "bold", marginRight: 20, marginLeft: 20 }}>${item.price}</Text>
                    </View>
                )}
            />

            <TouchableOpacity
                style={{
                    width: "100%",
                    height: 40,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#ccc",
                    marginBottom: 10,
                }}
                onPress={() => setShowAll(!showAll)}
            >
                <Text>See all</Text>
            </TouchableOpacity>

            <View style={{ width: "100%", height: 40 }}>
                <Image source={require("../assets/Data/banner.png")} style={{ width: "100%", height: 40 }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
});
