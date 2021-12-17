function change_material() {
    let material    = document.getElementById("material")
    let resistivity = document.getElementById("resistivity")
    resistivity.value = material.value;
}

function change_resistivity() {
    let material = document.getElementById("material");
    material.value = "";
}

function change() {
    let resistivity = document.getElementById("resistivity")
    let length      = document.getElementById("length");
    let area        = document.getElementById("area");
    let resistance  = document.getElementById("resistance")

    let resistivity_unit = document.getElementById("resistivity_unit");
    let length_unit      = document.getElementById("length_unit");
    let area_unit        = document.getElementById("area_unit");
    let resistance_unit  = document.getElementById("resistance_unit");

    let v1 = validate(resistivity)
    let v2 = validate(length);
    let v3 = validate(area);

    if (v1 === 1 && v2 === 1 && v3 === 1) {
        let resistivity_value = resistivity.value * resistivity_unit.value;
        let length_value = length.value * length_unit.value;
        let area_value = area.value * area_unit.value;
        resistance.innerText = (length_value * resistivity_value) / area_value / resistance_unit.value;
    } else {
        resistance.innerText = "";
    }
}

function validate(o) {
    if (o.value === "") {
        o.style.borderColor = "";
        return 0;
    } else if (/^[0-9]+([.][0-9]+)?(e[-]?[0-9]+)?$/.test(o.value) && o.value >= 1e-10 && o.value <= 1e20) {
        o.style.borderColor = "";
        return 1;
    } else {
        o.style.borderColor = "red";
        return 2;
    }
}

//function change_unit(e, s) {
//    var prev = previous_select_value(e);
//    let ratio = e.value / prev;
//    let o = document.getElementById(s);
//    o.value /= ratio;
//}

//function previous_select_value(e) {
//    if (e.prev) {
//        return e.prev;
//    }
//
//    let a = Array.from(e.options);
//    for (let i = 0; i < a.length; i++) {
//        if (a[i].defaultSelected) {
//            return a[i].value;
//        }
//    }
//}
