import { useQuery } from "@tanstack/react-query"
import axios, { AxiosError } from "axios"
import { useEffect, useState } from "react"

const apiKey = '6994f7b8682362c1a304e75ca02d4df6'

const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5'
})

interface Weather {
  weather: {
    id: number;
    main: string;
    description: string
  }[],
  main: {
    temp: number;
    feels_like: number
  }
}

export const useWeather = () => {
  const [data, setData] = useState<Weather | null>(null)
  const [error, setError] = useState<unknown>('')
  const [refetchState, setRefetchState] = useState(false)

  const refetch = () => {
    setRefetchState(!refetchState)
  }

  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await api.get(`/weather?lat=59.9&lon=30.2&appid=6994f7b8682362c1a304e75ca02d4df6&lang=ru&units=metric`)
      setData(response.data)
      setError('')
    } catch (err) {
      setError(err)
    }
    }

    fetchData()
  }, [refetchState])
  
  return {data, error, refetch}
}