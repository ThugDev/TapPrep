import React from "react"
import { Text, View } from "react-native"
import { ProblemContentProps } from "./type"


const ProblemContent = ({title, description}: ProblemContentProps) => {
    return (
        <View className="w-[80%] my-12 flex flex-center items-center">
            <Text className="font-bold text-2xl">{title}</Text>
                <View className="min-h-[200px] flex justify-center items-center rounded my-12">
                    <Text className="text-lg">{description}</Text>
                </View>
        </View>
    )
}

export default ProblemContent