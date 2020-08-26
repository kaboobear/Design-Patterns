class AutoPipeline{
    setWheel(){console.log("- Wheel was set")}
    setTire(){console.log("- Tires was set")}
    setBody(){console.log("- Body was set")}
    setColor(){console.log("- Color was set")}
    setAudio(){console.log("- Audio was set")}
    setSeats(){console.log("- Seats was set")}
}

class AutoPipelineFacade{
    assembleCar(){
        const pipe = new AutoPipeline();
        console.log("PIPE WAS STARTED");
        pipe.setAudio();
        pipe.setBody();
        pipe.setColor();
        pipe.setSeats();
        pipe.setTire();
        pipe.setWheel();
        console.log("CAR IS READY")
    }
}


//--------Start---------

const facade = new AutoPipelineFacade();
facade.assembleCar();