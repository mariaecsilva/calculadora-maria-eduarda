import React from "react";
import Title from "../../Title/Title";
import { View } from "react-native";
import style from "./styles";

type HeaderProps ={
    title:string;
}

export default function Header({title}:HeaderProps){
    return(
        <View style={style.container}>
            <Title>{title}</Title>
        </View>
    );
}