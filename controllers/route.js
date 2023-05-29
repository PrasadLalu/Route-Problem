
const findDistance = (req, res) => {
    const { origin, destination } = req.query;

    // Checking empty
    if (!origin || !destination) {
        return res.status(422).send({ message: 'misssing route data' });
    }

    const distances = [
        { origin: 'Delhi', destination: 'Nagpur', distance: 500 },
        { origin: 'Nagpur', destination: 'Chennai', distance: 400 },
        { origin: 'Hyderabad', destination: 'Nagpur', distance: 250 },
        { origin: 'Bangalore', destination: 'Hyderabad', distance: 300 }
    ]

    const routes = [
        { origin: 'Delhi', destination: 'Chennai', routes: ['Delhi', 'Nagpur', 'Chennai'] },
        { origin: 'Bangalore', destination: 'Nagpur', routes: ['Bangalore', 'Hyderabad', 'Nagpur'] },
        { origin: 'Hyderabad', destination: 'Chennai', routes: ['Hyderabad', 'Nagpur', 'Chennai'] },
    ];

    // Filtering route
    const filteredRoute = routes.find(route => route.origin === origin && route.destination === destination);
    if (!filteredRoute) {
        return res.status(404).send({ message: 'No route found' });
    }

    // Calculating distance
    const filteredRoutes = filteredRoute.routes;
    let distance = 0;

    for (let i = 0; i < filteredRoutes.length; i++) {
        for (let j = 0; j < distances.length; j++) {
            if ((filteredRoutes[i] === distances[j].origin) && filteredRoutes[i + 1] === distances[j].destination) {
                distance += distances[j].distance;
            }
        }
    }

    return res.send({ data: { ...req.query, distance } });
}

module.exports = {
    findDistance,
};