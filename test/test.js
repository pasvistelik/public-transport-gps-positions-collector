import GrodnoPositionsScraper from 'grodno-transport-gps-positions-scraper';
import PositionsCollector from '../lib/collector';

PositionsCollector.startCollect();

let simpleRoutesForTest = [{type: "bus", number: "1"},{type: "bus", number: "2"}];
(async function() {    

    await PositionsCollector.use(GrodnoPositionsScraper, simpleRoutesForTest);

    setInterval(function(){
        let allVehicles = PositionsCollector.vehicles;
        for(let i = 0, n = allVehicles.length, vehicle = allVehicles[0]; i < n; vehicle = allVehicles[++i]){
            console.log("Vehicle "+vehicle.globalId+": "+vehicle.route.type+" "+vehicle.route.number+", coords: lat= "+vehicle.lat+", lng="+vehicle.lng);
        }
        console.log();
    }, 2000);
    
})();
