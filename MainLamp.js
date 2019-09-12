Lamp1 = function (status, battery) {
    this.status = status;
    this.battery = battery;
    this.getBattery = function () {
        return this.battery;
    };
    this.checkStatus = function () {
        let powerLamp = document.getElementById('onLamp');
        if (this.battery > 0) {
            if (this.status === 'On power') {
                this.status = 'Off power';
            } else {
                this.status = 'On power';
            }this.battery--;
        } else {
            alert("No energy left");
        }
        if (this.status === 'On power') {
            powerLamp.innerHTML = 'On power';
        } else {
            powerLamp.innerHTML = 'Off power';
        }
    }
};
let status = 'Off power';
let battery = 10;
let Lamp = new Lamp1(status, battery);

function check(name) {
    let img= document.getElementById("myImage");
    name.checkStatus();
    if(name.status==='On power'){
        img.src="LampOn.jpg";
    }else {img.src="LampOff.jpg";}
}

