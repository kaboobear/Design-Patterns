var AutoPipeline = /** @class */ (function () {
    function AutoPipeline() {
    }
    AutoPipeline.prototype.setWheel = function () { console.log("- Wheel was set"); };
    AutoPipeline.prototype.setTire = function () { console.log("- Tires was set"); };
    AutoPipeline.prototype.setBody = function () { console.log("- Body was set"); };
    AutoPipeline.prototype.setColor = function () { console.log("- Color was set"); };
    AutoPipeline.prototype.setAudio = function () { console.log("- Audio was set"); };
    AutoPipeline.prototype.setSeats = function () { console.log("- Seats was set"); };
    return AutoPipeline;
}());
var AutoPipelineFacade = /** @class */ (function () {
    function AutoPipelineFacade() {
    }
    AutoPipelineFacade.prototype.assembleCar = function () {
        var pipe = new AutoPipeline();
        console.log("PIPE WAS STARTED");
        pipe.setAudio();
        pipe.setBody();
        pipe.setColor();
        pipe.setSeats();
        pipe.setTire();
        pipe.setWheel();
        console.log("CAR IS READY");
    };
    return AutoPipelineFacade;
}());
//--------Start---------
var facade = new AutoPipelineFacade();
facade.assembleCar();
