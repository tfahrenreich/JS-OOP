/**
 * Created by Tim on 2/24/2016.
 */
var Freeway = Freeway || {};

(function(){
    function Vehicle(){
        this.name = undefined;
        this.type = undefined;
        this.wheels = undefined;
        this.seats = undefined;
    }
    Vehicle.prototype = {
        setName: function(name){
            this.name = name;
        },
        getName: function(){
            return this.name;
        },
        set class(string){
            var type = Vehicle.prototype.types[string];

            if(Vehicle.prototype.types[string]){
                this.type = string;
                this.wheels = type.wheels;
                this.seats = type.seats;
            }else{
                console.log('Class doesn\'t exist');
                return false;
            }
        },
        get intro(){
            return "I am "+this.getName()+ ", a "+this.type+" with "+this.wheels+" wheels, and "+this.seats+" seats!";
        },
        types : {
            "Motorcycle":{
                "wheels": 2,
                "seats": 1,
                create : function(name){
                    Freeway[name] = new Motorcycle(name);
                    console.log(name + " created")
                }
            },
            "Car": {
                "wheels": 4,
                "seats": 5,
                create : function(name){
                    Freeway[name] = new Car(name);
                    console.log(name + " created")
                }
            }
        }
    };

    /** MOTORCYCLE CLASS */
    function Motorcycle(name){
        Vehicle.call(this);
        this.setName(name);
        this.class = "Motorcycle";
    }
    Motorcycle.prototype = Object.create(Vehicle.prototype);
    Motorcycle.prototype.constructor = Motorcycle;

    /** CAR CLASS */
    function Car(name){
        Vehicle.call(this);
        this.setName(name);
        this.class = "Car";
    }
    Car.prototype = Object.create(Vehicle.prototype);
    Car.prototype.constructor = Car;

    /** BINDINGS */
    $("#submit").on('click', function(name, type){
        name = $('#name').val();
        type = $('#select').val();

        if(Freeway[name]){
            console.log('That vehicle already exists.')
        }else{
            Vehicle.prototype.types[type].create(name);
            var appendix = $("<li></li>").data('object', Freeway[name]).html(name).addClass('list-item');
            $("#list").append(appendix);
        }
    });
    $('#list').on('click','li', function(){
        var object = $(this).data('object');
        console.log(Freeway[object.name].intro);
    });

})(Freeway);

