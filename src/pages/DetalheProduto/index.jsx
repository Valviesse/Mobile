import React, { useState, useEffect } from "react";
import { Text, Image, TextInput} from "react-native";
import { styles } from "./styles";
import { TouchableOpacity, View } from "react-native-web";
import Api from "../../service/api"
import  {createItem} from  '../../repository/productRepository';
import ButtonC from "../../components/Buttoncar";
import { useNavigation } from '@react-navigation/native';


export default function DetalheProduto({ route }) {
  const [prod, setProd] = useState([]);
  const [quant, setQuant] = useState(null);
  const getDatabyId = async () => {
    await Api.get(`/produtos/${id}`).then((response) => {
      setProd(response.data);
      console.log(response.data);
    });
  };
  useEffect(() => {
    getDatabyId();
  }, []);

  const { id } = route.params;
  console.log("id");

  const onHandleClick = () => {
  };
  createItem( prod.name, prod.descricao, prod.vlUnitario);

  return (

        <TouchableOpacity style={styles.container1}>
        <Image
          style={styles.img}
          source={{ uri: prod.imagens }}
          resizeMode="cover"
          />
          <Text style={styles.nomeP}>{prod.nome}</Text>
          <Text style={styles.preco}>R$ {prod.vlUnitario}</Text>
         <View style={styles.textContainer}>
          <Text> descrição </Text>
          <Text>{prod.descricao}</Text>
         </View>
          <TextInput type={Number}
            style={styles.inserirQuantidade}
            placeholder={"Insira a quantidade"}
            value={quant}
            onChangeText={(value) => {
              setQuant(value)}}
            />
            <ButtonC onPress={onHandleClick}/>
          </TouchableOpacity>
          

  );
}
