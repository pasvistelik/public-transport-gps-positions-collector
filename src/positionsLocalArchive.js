var archive = [];

class Position {
    constructor(vehicle){
        //this.previousPosition = vehicle.lastPositionObj;
        this.nextPosition = null;
        this.lat = vehicle.lat;
        this.lng = vehicle.lng;
        //this.timestamp = vehicle.timestamp;

        let tmpDate = vehicle.date;

        this.dateDDMMYY = tmpDate.toLocaleDateString();//example: "01.01.2017"
        this.dayOfWeek = tmpDate.getDay();// 0 -- 6
        this.timeSeconds = tmpDate.getSeconds() + 60 * tmpDate.getMinutes() + 3600 * tmpDate.getHours();//time in seconds from day begin

        this.routeId = vehicle.routeId;

        //vehicle.lastPositionObj.nextPosition = this;
        //vehicle.lastPositionObj = this;
    }
}
class PositionsLocalArchive {
    constructor(){
        throw new Error("PositionsLocalArchive is a static class!");
    }
    static getLatestPositions(){
        throw new Error("Not implemented!");
    }
    static push(vehicle){
        archive.push(new Position(vehicle));
    }
    static ejectAll(){
        var result = archive;
        archive = [];
        return result;
    }
}

export default PositionsLocalArchive;