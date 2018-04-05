var global_id = 1;
var global_count = 0;
var global_position = 0;
var global_turns = 0;
var actors = [];
var sorted = false;
var toggle_delete = true;
var toggle_clear = false;

$(function () {

    $("#create-actor").click(function () {
        var i_id = global_id;
        var i_name = $("#name").val();
        var i_init = $("#init").val();
        var i_ac = $("#ac").val();
        var i_str = $("#str").val();
        var i_dex = $("#dex").val();
        var i_con = $("#con").val();
        var i_int = $("#int").val();
        var i_wis = $("#wis").val();
        var i_cha = $("#cha").val();
        var i_hp = $("#hp").val();
        var i_notes = $("#notes").val();

        actors[i_id] = new Character(i_id, i_name, i_init, i_ac, i_str, i_dex, i_con, i_int, i_wis, i_cha, i_hp, i_notes);
        createTableRow(i_id, i_name, i_init, i_ac, i_str, i_dex, i_con, i_int, i_wis, i_cha, i_hp, i_notes);
        if (toggle_clear) {
            reset();
        }
    });

    $("#easy-enemy").click(function () {
        var i_id = global_id;
        var i_name = "Easy Enemy " + global_id;
        var i_init = getRandomInt(10) + 1;
        var i_ac = getRandomInt(8) + 3;
        var i_str = getRandomInt(8) + 4;
        var i_dex = getRandomInt(7) + getRandomInt(5) + 3;
        var i_con = getRandomInt(7) + getRandomInt(5) + 3;
        var i_int = getRandomInt(7) + getRandomInt(5) + 3;
        var i_wis = getRandomInt(7) + getRandomInt(5) + 3;
        var i_cha = getRandomInt(7) + getRandomInt(5) + 3;
        var i_hp = getRandomInt(15) + 15;
        var i_notes = $("#notes").val();

        actors[i_id] = new Character(i_id, i_name, i_init, i_ac, i_str, i_dex, i_con, i_int, i_wis, i_cha, i_hp, i_notes);
        createTableRow(i_id, i_name, i_init, i_ac, i_str, i_dex, i_con, i_int, i_wis, i_cha, i_hp, i_notes);
    });

    $("#medium-enemy").click(function () {
        var i_id = global_id;
        var i_name = "Medium Enemy " + global_id;
        var i_init = getRandomInt(18) + 1;
        var i_ac = getRandomInt(10) + 10;
        var i_str = getRandomInt(14) + getRandomInt(6) + 3;
        var i_dex = getRandomInt(12) + getRandomInt(5) + 3;
        var i_con = getRandomInt(12) + getRandomInt(5) + 3;
        var i_int = getRandomInt(12) + getRandomInt(5) + 3;
        var i_wis = getRandomInt(12) + getRandomInt(5) + 3;
        var i_cha = getRandomInt(12) + getRandomInt(5) + 3;
        var i_hp = getRandomInt(60) + 80;
        var i_notes = $("#notes").val();

        actors[i_id] = new Character(i_id, i_name, i_init, i_ac, i_str, i_dex, i_con, i_int, i_wis, i_cha, i_hp, i_notes);
        createTableRow(i_id, i_name, i_init, i_ac, i_str, i_dex, i_con, i_int, i_wis, i_cha, i_hp, i_notes);
    });

    $("#hard-enemy").click(function () {
        var i_id = global_id;
        var i_name = "Hard Enemy " + global_id;
        var i_init = getRandomInt(20) + 1;
        var i_ac = getRandomInt(7) + 17;
        var i_str = getRandomInt(15) + getRandomInt(7) + 5;
        var i_dex = getRandomInt(13) + getRandomInt(5) + 4;
        var i_con = getRandomInt(13) + 9;
        var i_int = getRandomInt(13) + getRandomInt(5) + 4;
        var i_wis = getRandomInt(13) + getRandomInt(5) + 4;
        var i_cha = getRandomInt(13) + getRandomInt(5) + 4;
        var i_hp = getRandomInt(80) + 295;
        var i_notes = $("#notes").val();

        actors[i_id] = new Character(i_id, i_name, i_init, i_ac, i_str, i_dex, i_con, i_int, i_wis, i_cha, i_hp, i_notes);
        createTableRow(i_id, i_name, i_init, i_ac, i_str, i_dex, i_con, i_int, i_wis, i_cha, i_hp, i_notes);
    });

    $("#legendary-enemy").click(function () {
        var i_id = global_id;
        var i_name = "Legendary Enemy " + global_id;
        var i_init = getRandomInt(20) + 1;
        var i_ac = getRandomInt(10) + 18;
        var i_str = getRandomInt(15) + 15;
        var i_dex = getRandomInt(13) + 11;
        var i_con = getRandomInt(15) + 15;
        var i_int = getRandomInt(13) + 11;
        var i_wis = getRandomInt(13) + 11;
        var i_cha = getRandomInt(13) + 11;
        var i_hp = getRandomInt(200) + 396;
        var i_notes = $("#notes").val();

        actors[i_id] = new Character(i_id, i_name, i_init, i_ac, i_str, i_dex, i_con, i_int, i_wis, i_cha, i_hp, i_notes);
        createTableRow(i_id, i_name, i_init, i_ac, i_str, i_dex, i_con, i_int, i_wis, i_cha, i_hp, i_notes);
    });

    $("#collapse").click(function () {
        if ($(this).hasClass("open")) {
            $(this).text("EXPAND CREATOR");
        } else {
            $(this).text("COLLAPSE CREATOR");
        }
        $(".creator").slideToggle();
        $(this).toggleClass("open");

    });


    $("#sort-actors").click(function () {
        sortTable();
    });

    $("#toggle-delete").click(function () {

        if ($(this).hasClass("active")) {
            $(this).text("CONFIRM DELETE: OFF");
            toggle_delete = false;
        } else {
            $(this).text("CONFIRM DELETE: ON");
            toggle_delete = true;
        }

        $(this).toggleClass("active");

    });

    $("#toggle-clear").click(function () {

        if ($(this).hasClass("active")) {
            $(this).text("CLEAR AFTER ADD: OFF");
            toggle_clear = false;
        } else {
            $(this).text("CLEAR AFTER ADD: ON");
            toggle_clear = true;
        }

        $(this).toggleClass("active");

    });



    $(document).on('click', 'button.dmg-actor', function () {

        var id = $(this).parent().parent().attr("data-actor");
        var hitvalue = getDamage(id);

        $(this).parent().parent().find(".hp").text(hitvalue);
        if (parseInt(hitvalue) <= 0) {
            $(this).parent().parent().css('background', "#ffdddd");
            $(this).parent().parent().addClass("dead");
        }

    });

    $(document).on('click', 'button.heal-actor', function () {

        var id = $(this).parent().parent().attr("data-actor");
        var healvalue = healDamage(id);
        $(this).parent().parent().find(".hp").val(healvalue);
        if (parseInt(healvalue) > 0) {
            $(this).parent().parent().css('background', "#fff");
            $(this).parent().parent().removeClass("dead");
        }

    });

    $(document).on('click', 'button.delete-actor', function () {
        if (toggle_delete) {


            if (confirm('Are you sure you want to delete this actor?')) {
                $(this).parent().parent().remove();
                var myindex = $(this).parent().parent().attr("data-actor");
                actors.splice(myindex, 1);
                sortTable();
            } else {
                // Do nothing!
            }
        } else {
            $(this).parent().parent().remove();
            var myindex = $(this).parent().parent().attr("data-actor");
            actors.splice(myindex, 1);
            sortTable();
        }

    });

    $(document).on('click', 'button#wipe-actors', function () {

        if (confirm('Are you sure you want to delete ALL actors?')) {
            $(".actor-live").remove();
            global_turns = 0;
            global_position = 0;
            $("#turns").text(global_turns);
            actors = [];
        } else {
            // Do nothing!
        }

    });

    $(document).on('click', 'button#clear-input', function () {
        reset();
    });

    $(document).on('click', 'button#next-turn', function () {
        trackPosition(1);
    });

});


function Character(cid, name, init, ac, str, dex, con, int, wis, cha, hp, notes) {
    this.cid = cid;
    this.name = name;
    this.init = init;
    this.ac = ac;
    this.str = str;
    this.dex = dex;
    this.con = con;
    this.int = int;
    this.wis = wis;
    this.cha = cha;
    this.hp = hp;
    this.notes = notes;
}

function createTableRow(cid, name, init, ac, str, dex, con, int, wis, cha, hp, notes) {
    sorted = false;
    $("#next-turn").prop('disabled', true);
    $("#sort-msg").show();
    if (init == "roll") {
        init = getRandomInt(20) + 1;
    }
    $("#view-actors tbody").append("<tr data-actor='" + cid + "' data-init='" + init + "'id=actor-" + cid + " class='actor-live'><td>" + name + "</td><td class='init'>" + init + "</td><td>" + ac + "</td><td>" + str + "</td><td>" + dex + "</td><td>" + con + "</td><td>" + int + "</td><td>" + wis + "</td><td>" + cha + " </td><td class='hp'>" + hp + "</td><td><textarea>" + notes + "</textarea></td><td class='button-holder'><button class='dmg-actor'>Damage</button><button class='heal-actor'>Heal</button></td><td><button class='delete-actor'>Delete</button></td></tr>");

    global_id += 1;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function sortTable() {
    count = 0;
    var $table = $('table#view-actors');

    var rows = $table.find('tr').get();
    rows.sort(function (a, b) {
        var keyA = $(a).attr('data-init');
        var safeA = $(a).attr('data-actor');
        var keyB = $(b).attr('data-init');
        var safeB = $(b).attr('data-actor');
        keyA = parseInt(keyA);
        keyB = parseInt(keyB);
        safeA = parseInt(safeA);
        safeB = parseInt(safeB);
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        if (keyA == keyB) {
            if (safeA < safeB) {
                return -1;
            } else {
                return 1;
            }
        }
        return 0;
    });
    $.each(rows, function (index, row) {
        count += 1;
        $(this).attr("data-position", index);
        $table.children('tbody').append(row);
    });
    count -= 1;
    sorted = true;
    $("#next-turn").prop('disabled', false);
    $("#sort-msg").hide();
}

function getDamage(id) {
    var damage = prompt("How much damage?");
    if (isNaN(damage)) {
        return actors[id].hp;
    } else {
        var final_hp = actors[id].hp -= parseInt(damage);
        return final_hp;
    }

}

function healDamage(id) {
    var heal = prompt("How much to heal?");
    if (isNaN(heal)) {
        return actors[id].hp;
    } else {
        var final_hp = actors[id].hp += parseInt(heal);
        return final_hp;
    }
}

function reset() {
    $("#name").val("");
    $("#init").val("roll");
    $("#ac").val("");
    $("#str").val("");
    $("#dex").val("");
    $("#con").val("");
    $("#int").val("");
    $("#wis").val("");
    $("#cha").val("");
    $("#hp").val("");
    $("#notes").val("");
}

function trackPosition(change) {
    if ((global_position + change) > count) {
        global_position = 1;
        global_turns += 1;
    } else {
        global_position += 1;
    }

    $("#turns").text(global_turns);
    $("#view-actors tr").css("background", "white");
    $("#view-actors tr.dead").css("background", "#ffdddd");
    $("#view-actors tr").each(function () {
        var this_pos = $(this).attr("data-position");
        if (parseInt(this_pos) == global_position) {
            if ($(this).hasClass("dead")) {
                $(this).css("background", "#d1d1d1");
            } else {
                $(this).css("background", "#d2ffd2");
            }
        }
    });
}
