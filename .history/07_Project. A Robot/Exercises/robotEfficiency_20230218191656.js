/*
The "Robot efficiency" exercise in Chapter 7 of "Eloquent JavaScript" asks the reader to modify the goalOrientedRobot function so that it uses the findRoute function to compute the shortest route to the nearest delivery location, rather than always going to the first available location in its memory.
*/

function goalOrientedRobot({ place, parcels }, route) {
  if (route.length == 0) {
    // If the robot doesn't have a route, choose the nearest parcel as the destination
    let parcelDistances = parcels.map(parcel => {
      return {
        distance: findRoute(roadGraph, place, parcel.place).length,
        parcel,
      }
    })
    parcelDistances.sort((a, b) => a.distance - b.distance)

    // Choose the nearest parcel that needs to be picked up, or the nearest parcel that needs to be delivered if none are available for pickup
    let targetParcel = parcelDistances.find(
      ({ parcel }) => parcel.place == place && parcel.address != place
    )
    if (!targetParcel) {
      targetParcel = parcelDistances[0]
    }

    // Set the robot's route to the chosen destination
    route = findRoute(roadGraph, place, targetParcel.parcel.place)
  }

  // Move the robot to the next step in its route
  return { direction: route[0], memory: route.slice(1) }
}

/*
This modified goalOrientedRobot function first checks if the robot has a route to follow. If it doesn't, the function computes the distances from the robot's current location to all parcels, sorts them in ascending order by distance, and chooses the nearest parcel that needs to be picked up, or the nearest parcel that needs to be delivered if none are available for pickup.

Once the destination parcel has been chosen, the function uses the findRoute function to compute the shortest route from the robot's current location to the destination. The robot then follows this route until it reaches its destination.

Note that this solution assumes that the findRoute function and the roadGraph object have already been defined as described in the previous sections of the chapter. If you need to use this function in the context of the previous exercises in the chapter, you can copy the implementation of findRoute and roadGraph from those sections.
*/
