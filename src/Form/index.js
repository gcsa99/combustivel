import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Mensagens from "./Mensagens";
import styles from './style';


export default function Formulario() {

    const [vGasolina,setVGasolina] = useState(null)
    const [vAlcool, setVAlcool] = useState(null)
    const [cGasolina,setCGasolina] = useState(null)
    const [cAlcool, setCAlcool] = useState(null)
    const [vantagem, setVantagem] = useState(null)
    const [textoBotao, setTextoBotao] = useState("Qual combustível vale mais a pena?")

    
    
    function validacao(){      
        if(vAlcool>0 && vGasolina>0 && cAlcool>0 && cGasolina>0 ){
            calculo()
            return 
        }
        else{
        setVantagem("Digite um valor válido")
        }       
    }
    function calculo(){
        
        let alcoolPorKM =(cAlcool/vAlcool);
        let gasolinaPorKM = (cGasolina/vGasolina);
        

        if(alcoolPorKM>gasolinaPorKM){
            setVantagem("O álcool possui melhor relação preço/KM")
            
        }else if(alcoolPorKM<gasolinaPorKM){
            setVantagem("A gasolina possui melhor relação preço/KM")


        }else if(alcoolPorKM==gasolinaPorKM){
            setVantagem("Ambos possuem mesma relação preço/KM")

        }else{
            setVantagem("Caiu no else")
        }
        
            setTextoBotao("Realizar nova comparação");

            setCAlcool(null);
            setCGasolina(null);

            setVAlcool(null);
            setVGasolina(null);
            gasolinaPorKM=null;
            alcoolPorKM=null;

    }
        
    
return(
    <View style={styles.formContext}>
        <View style ={styles.form}>
            <Text style={styles.formLabel}> Valor do Alcool</Text>
            <TextInput style={styles.input}
                        onChangeText={setVAlcool}
                        value={vAlcool}
                        placeholder="Ex. 4.20"
                        keyboardType="numeric"
            ></TextInput>


            <Text style={styles.formLabel}> Valor da Gasolina</Text>
            <TextInput style={styles.input}
                        onChangeText={setVGasolina}
                        value={vGasolina}
                        placeholder="Ex. 5.59"
                        keyboardType="numeric"
            ></TextInput>
            
            <Text style={styles.formLabel}>Autonomia alcool</Text>
            <TextInput style={styles.input}
                        onChangeText={setCAlcool}
                        value={cAlcool}
                        placeholder="Ex. 10"
                        keyboardType="numeric"
            ></TextInput>

            <Text style={styles.formLabel}>Autonomia gasolina</Text>
            <TextInput style={styles.input}
                        onChangeText={setCGasolina}
                        value={cGasolina}
                        placeholder="Ex. 10"
                        keyboardType="numeric"
            ></TextInput>

            <TouchableOpacity
                        style={styles.buttonCalculator}     
                        onPress={() =>{validacao()}
                        }
                        >   
            <Text style={styles.textButtonCalculator}>{textoBotao}</Text>
            </TouchableOpacity>
        <Mensagens resultado={vantagem} />        
    </View>
    </View>
);
}
