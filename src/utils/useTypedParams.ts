import { useLocalSearchParams } from "expo-router" 

export function useStringParam(paramName: string): string {
    const params = useLocalSearchParams()
    const paramValue = params[paramName]
    return Array.isArray(paramValue) ? paramValue[0] : paramValue || ""
}