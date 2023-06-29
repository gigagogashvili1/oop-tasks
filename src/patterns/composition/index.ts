class Console {
    private joystick: Joystick;

    constructor() {
        this.joystick = new Joystick();
    }

    public readyJoysticks() {
        this.joystick.readyJoysticks();
    }
}

class Joystick {
    public readyJoysticks() {
        console.log('Joysticks are getting ready');
    }
}
