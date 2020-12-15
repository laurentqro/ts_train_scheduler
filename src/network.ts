import { Operator } from "./operator";
import { OperatorUid } from "./operator-uid";
import { Station } from "./station"
import { StationUid } from "./station-uid";
import { Track } from "./track"

export class Network {
    readonly stations: Station[]
    readonly tracks: Track[]
    readonly operators: Operator[]

    private constructor(stations: Station[], tracks: Track[], operators: Operator[]) {
        this.stations = stations
        this.tracks = tracks
        this.operators = operators
    }

    static create(stations: Station[], tracks: Track[], operators: Operator[]): Network {
        let network = new Network([], [], [])

        for (let station of stations) {
            network.addStation(station)
        }

        for (let track of tracks) {
            network.addTrack(track)
        }

        for (let operator of operators) {
            network.addOperator(operator)
        }

        return network
    }

    getOperator(uid: OperatorUid): Operator | undefined {
        return this.operators.find((operator) => operator.uid == uid)
    }

    addOperator(operator: Operator): undefined {
        this.operators.push(operator)
        return undefined
    }

    getStation(uid: StationUid): Station | undefined {
        return this.stations.find((station) => station.uid == uid) || undefined
    }

    addStation(station: Station): string | undefined {
        this.stations.push(station)
        return undefined
    }

    addTrack(track: Track): string | undefined {
        this.tracks.push(track)

        let [uid1, uid2] = track.endpointUids
        let station1 = this.getStation(uid1)
        let station2 = this.getStation(uid2)

        if (station1 && station2) {
            Network.registerNeighbours(station1, station2)
            return undefined
        } else {
            return "Error"
        }
    }

    shortestPathsFromOrigin(origin: Station): Station[] {
        // Use Dijkstra's shortest path algorithm to build a list of stations and platforms
        // from origin to destination
        // TODO: Implement without mutating Station

        origin.shortest = 0

        let visited: Station[] = []
        let unvisited: Station[] = [origin].concat(origin.neighbours.filter((station) => !station.visited))

        while (unvisited.length > 0) {
            // Visit the unvisited station with the smallest known distance from the origin
            let selectStationToVisit = (acc: Station, current: Station) => current.shortest < acc.shortest ? current : acc

            let currentStation = unvisited.reduce(selectStationToVisit)

            let unvisitedNeighbours = currentStation.neighbours.filter((s) => !s.visited)

            // Examine the current station's unvisited neighbours
            for (let neighbour of unvisitedNeighbours) {
                let knownDistance = neighbour.shortest

                // calculate the distance between neighbour and the origin
                let newDistance = currentStation.shortest + Number(Network.distance([currentStation.uid, neighbour.uid]))

                // if the calculated distance of a vertex is less than the known distance,
                if (newDistance < knownDistance) {
                    // update the shortest distance
                    neighbour.shortest = Number(newDistance)

                    // update the previous vertex for each of the updated distances
                    neighbour.previous = currentStation
                }
            }

            // mark the currently visited station as visited
            currentStation.visited = true
            visited.push(currentStation)

            // update list of unvisited neighbours
            unvisited = currentStation.neighbours.filter((station) => !station.visited)
        }

        return visited
    }

    private static registerNeighbours(station1: Station, station2: Station) {
        station1.addNeighbour(station2)
        station2.addNeighbour(station1)
    }

    private static distance(stationUids: StationUid[]) {
        return Track.getByEndpointUids(stationUids).distance
    }
}