import { useQuery } from "@tanstack/react-query"
import { Text, View } from "react-native"
import { getProblemList } from "../apis/problem"
import LoadingScreen from "../components/common/LoadingScreen"
import { ErrorScreen } from "../components/common/ErrorScreen"
import { RouteProp, useRoute } from "@react-navigation/native"
import { RootStackParamList } from "../../type"

export type ProblemListScreenRouteProps = RouteProp<RootStackParamList, 'ProblemListScreen'>;

const ProblemListScreen = () => {
    const route = useRoute<ProblemListScreenRouteProps>()
    const {selectedSector} = route.params

    console.log("selectedSector", selectedSector)

    const {data: problemData, isError, isLoading} = useQuery({
        queryKey: ['problemData',selectedSector],
        queryFn: () => getProblemList({sector:selectedSector, difficulty:1, page: 1,limit: 10, type: "normal"})
    })
    
    console.log("problem data", problemData)
    

    if(isLoading){
        return <LoadingScreen/>
    }

    if(isError){
        return <ErrorScreen/>
    }

    return (
        <View>
            <Text></Text>
        </View>
    )
}
export default ProblemListScreen