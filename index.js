function findMatching(drivers, string) {
    return drivers.filter( driver => 
      driver.toLowerCase() === string.toLowerCase()
    )
}

function fuzzyMatch(drivers, string) {
    return drivers.filter (driver => 
      driver.toLowerCase().charAt(0) === string.toLowerCase().charAt(0)
    )
}

function matchName(drivers, string) {
    return drivers.filter (driver => 
      driver.name === string
    )
}