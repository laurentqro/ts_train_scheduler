type NetworkData = {
    stations: StationData[]
    tracks: TrackData[]
    operators: OperatorData[]
}

type OperatorData = {
    uid: string
    trains: TrainData[]
}

type TrainData = {
    uid: string
    length: number
}

type StationData = {
    uid: string,
    stopTime: number,
    platforms: PlatformData[]
}

type PlatformData = {
    uid: string
    length: number
}

type TrackData = {
    uid: string,
    endpointUids: string[]
    capacity: number
    maxSpeed: number
    distance: number
}

export { NetworkData, OperatorData, TrainData, StationData, PlatformData, TrackData }