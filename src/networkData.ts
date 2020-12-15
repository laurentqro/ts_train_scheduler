type NetworkData = {
    stations: StationData[]
    tracks: TrackData[]
    operators: OperatorData[]
}

type StationData = {
    uid: string,
    stopTime: number,
    platforms: PlatformData[]
}

type TrackData = {
    uid: string,
    endpointUids: string[]
    capacity: number
    maxSpeed: number
    distance: number
}

type OperatorData = {
    uid: string
    trains: TrainData[]
}

type TrainData = {
    uid: string
    length: number
}

type PlatformData = {
    uid: string
    length: number
}

export { NetworkData, OperatorData, TrainData, StationData, PlatformData, TrackData }