import { useRoute } from "@react-navigation/native"
import { Text, TouchableOpacity, View } from "react-native"
import { ProblemDetailScreenRouteProps } from "./type"
import { useQuery } from "@tanstack/react-query"
import { getProblemDetail } from "../../apis/problem"
import LoadingScreen from "../../components/common/LoadingScreen"
import { ErrorScreen } from "../../components/common/ErrorScreen"
import { useState } from "react"

const ProblemDetailScreen = () => {
    const route = useRoute<ProblemDetailScreenRouteProps>()
    const {problemId} = route.params
    const {data, isLoading, isError} = useQuery({
        queryKey:['problemDetail'],
        queryFn: () => getProblemDetail({problemId})
    })
    const [selectedOption, setSelectedOption] = useState<string | null>(null)

    const handleSelectedOpion = (key: string) => {
        setSelectedOption(key);
    }

    return (
        <View className="py-12 w-full h-screen">
            <View className="flex-1 justify-center items-center">
                <Text className="font-bold text-2xl">{data?.problemData.title}</Text>
                <View className="w-[80%] h-[200px] flex justify-center items-center border rounded my-12">
                    <Text className="text-lg">{data?.problemData.description}</Text>
                </View>
                <View className="w-[80%] h-12 flex justify-center items-end mb-12">
                    <TouchableOpacity className="p-2 bg-gray-300 rounded">
                        <Text>힌트</Text>
                    </TouchableOpacity>
                </View>
                <View className="w-[80%] flex flex-row justify-between">
                    {data?.problemData.options?.map((item, index) => {
                        const [key, value] = Object.entries(item)[0];
                        return (
                            <TouchableOpacity key={key || index} className={`p-2 rounded ${selectedOption === key ? 'bg-blue-500': 'bg-gray-400'}`} onPress={() => setSelectedOption(key)}>
                                <Text>{index + 1}. {value}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
            {isLoading && <LoadingScreen/>}
            {isError && <ErrorScreen errorMessage="문제를 불러오는데 실패했습니다." />}
        </View>
    )
}
export default ProblemDetailScreen