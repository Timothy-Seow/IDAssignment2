// To change page into Specific Champion Info when Champion is clicked
function changechamp(name){
    var changechamp = document.getElementById('champ')
    changechamp.innerHTML = "";
    var championlist = [];
    var statslist = [];
    var abilitylist = [];
    $.each(champlist, function(index, value){
        if (name === value[0]){
            fetch(`http://ddragon.leagueoflegends.com/cdn/11.1.1/data/en_US/champion/${value[0]}.json`)
                .then(res => res.json())
                .then(function(data){
                    let champ = data.data
                    console.log(champ)
                    var info_name = "";
                    var info_lore = "";
                    var info_tags = "";
                    $.each(champ, function(key, obj) {
                        info_name = obj.name + ", " + obj.title;
                        info_lore = obj.lore;
                        info_tags = obj.tags;
                        $.each(obj.stats, function(key,obj){
                            if (key !== "crit" && key !== "critperlevel"){
                                statslist.push(obj)
                            }
                        })
                        abilitylist.push([obj.passive.image.full,obj.passive.name,obj.passive.description])
                        $.each(obj.spells, function(key,obj){
                            if (obj.costBurn === "0" && obj.costType !== "No Cost"){
                                var x = obj.resource;
                                var cost = x.replace(/\{.*\}/, obj.effectBurn[2]);
                            }
                            else{
                                var x = obj.costType;
                                var cost = x.replace("{{ abilityresourcename }}", obj.costBurn + " Mana")
                            }
                            abilitylist.push([obj.id,obj.name,obj.description,cost,obj.rangeBurn])
                        })
                        championlist.push(info_name, info_lore, info_tags)
                        console.log(abilitylist)
                    })
                    $('#champ').append(
                        $('<div/>')
                        .addClass("champ-info")
                        .append(
                            $('<div/>')
                            .addClass("champ-header")
                            .append(
                                $('<div/>')
                                .addClass("champ-details")
                                .append(
                                    $('<div/>')
                                    .addClass("champ-icon")
                                    .append(
                                        $('<img/>')
                                        .attr("src", `https://ddragon.leagueoflegends.com/cdn/11.1.1/img/champion/${value[0]}.png`)
                                    ),
                                    $('<div/>')
                                    .addClass("champ-title")
                                    .append(
                                        $('<h4/>')
                                        .text(championlist[0]),
                                        $('<h5/>')
                                        .text("Tags: " + championlist[2])
                                    ),
                                )
                            )
                            .append(
                                $('<div/>')
                                .addClass("champ-desc")
                                .append(
                                    $('<h5/>')
                                    .text(championlist[1])
                                )
                            ),
                            $('<div/>')
                            .addClass("champ-stats-holder")
                            .append(
                                $('<div/>')
                                .addClass("champ-stats")
                                .append(
                                    $('<h5/>')
                                    .text("Health: {0} (+{1} Per Level)".format(statslist[0],statslist[1])),
                                    $('<h5/>')
                                    .text("Health Regen: {0} (+{1} Per Level)".format(statslist[10],statslist[11])),
                                    $('<h5/>')
                                    .text("Mana: {0} (+{1} Per Level)".format(statslist[2],statslist[3])),
                                    $('<h5/>')
                                    .text("Mana Regen: {0} (+{1} Per Level)".format(statslist[12],statslist[13])),
                                    $('<h5/>')
                                    .text("Attack Damage: {0} (+{1} Per Level)".format(statslist[14],statslist[15])),
                                    $('<h5/>')
                                    .text("Attack Speed: {0} (+{1} Per Level)".format(statslist[17],statslist[16])),
                                    $('<h5/>')
                                    .text("Attack Range: {0}".format(statslist[9])),
                                    $('<h5/>')
                                    .text("Armor: {0} (+{1} Per Level)".format(statslist[5],statslist[6])),
                                    $('<h5/>')
                                    .text("Magic Resist: {0} (+{1} Per Level)".format(statslist[7],statslist[8])),
                                    $('<h5/>')
                                    .text("Movement Speed: {0}".format(statslist[4]))
                                )
                            ),
                            $('<div/>')
                            .addClass("champ-ability")
                            .append(
                                $('<div/>')
                                .addClass("champ-spell")
                                .append(
                                    $('<div/>')
                                    .addClass("ability-header")
                                    .append(
                                        $('<div/>')
                                        .append(
                                            $('<img/>')
                                            .attr("src", `https://ddragon.leagueoflegends.com/cdn/11.1.1/img/passive/${abilitylist[0][0]}`)
                                            .attr("alt", abilitylist[0][1])
                                        ),
                                        $('<div/>')
                                        .addClass("ability-info")
                                        .append(
                                            $('<h5/>')
                                            .text(abilitylist[0][1] + " (Passive)")
                                        )
                                    ),
                                    $('<div/>')
                                    .append(abilitylist[0][2])
                                ),
                                $('<div/>')
                                .addClass("champ-spell")
                                .append(
                                    $('<div/>')
                                    .addClass("ability-header")
                                    .append(
                                        $('<div/>')
                                        .append(
                                            $('<img/>')
                                            .attr("src", `https://ddragon.leagueoflegends.com/cdn/10.25.1/img/spell/${abilitylist[1][0]}.png`)
                                            .attr("alt", abilitylist[1][0])
                                        ),
                                        $('<div/>')
                                        .addClass("ability-info")
                                        .append(
                                            $('<h5/>')
                                            .text(abilitylist[1][1]),
                                            $('<p/>')
                                            .text("Cost: {0}".format(abilitylist[1][3])),
                                            $('<p/>')
                                            .text("Range: " + abilitylist[1][4])
                                        )
                                    ),
                                    $('<div/>')
                                    .append(abilitylist[1][2])
                                ),
                                $('<div/>')
                                .addClass("champ-spell")
                                .append(
                                    $('<div/>')
                                    .addClass("ability-header")
                                    .append(
                                        $('<div/>')
                                        .append(
                                            $('<img/>')
                                            .attr("src", `https://ddragon.leagueoflegends.com/cdn/10.25.1/img/spell/${abilitylist[2][0]}.png`)
                                            .attr("alt", abilitylist[2][0])
                                        ),
                                        $('<div/>')
                                        .addClass("ability-info")
                                        .append(
                                            $('<h5/>')
                                            .text(abilitylist[2][1]),
                                            $('<p/>')
                                            .text("Cost: {0}".format(abilitylist[2][3])),
                                            $('<p/>')
                                            .text("Range: " + abilitylist[2][4])
                                        )
                                    ),
                                    $('<div/>')
                                    .append(abilitylist[2][2])
                                ),
                                $('<div/>')
                                .addClass("champ-spell")
                                .append(
                                    $('<div/>')
                                    .addClass("ability-header")
                                    .append(
                                        $('<div/>')
                                        .append(
                                            $('<img/>')
                                            .attr("src", `https://ddragon.leagueoflegends.com/cdn/10.25.1/img/spell/${abilitylist[3][0]}.png`)
                                            .attr("alt", abilitylist[3][0])
                                        ),
                                        $('<div/>')
                                        .addClass("ability-info")
                                        .append(
                                            $('<h5/>')
                                            .text(abilitylist[3][1]),
                                            $('<p/>')
                                            .text("Cost: {0}".format(abilitylist[3][3])),
                                            $('<p/>')
                                            .text("Range: " + abilitylist[3][4])
                                        )
                                    ),
                                    $('<div/>')
                                    .append(abilitylist[3][2])
                                ),
                                $('<div/>')
                                .addClass("champ-spell")
                                .append(
                                    $('<div/>')
                                    .addClass("ability-header")
                                    .append(
                                        $('<div/>')
                                        .append(
                                            $('<img/>')
                                            .attr("src", `https://ddragon.leagueoflegends.com/cdn/10.25.1/img/spell/${abilitylist[4][0]}.png`)
                                            .attr("alt", abilitylist[4][0])
                                        ),
                                        $('<div/>')
                                        .addClass("ability-info")
                                        .append(
                                            $('<h5/>')
                                            .text(abilitylist[4][1]),
                                            $('<p/>')
                                            .text("Cost: {0}".format(abilitylist[4][3])),
                                            $('<p/>')
                                            .text("Range: " + abilitylist[4][4])
                                        )
                                    ),
                                    $('<div/>')
                                    .append(abilitylist[4][2])
                                )
                            )
                        )  
                    )
                })
                        
            }            
                
        }
    )
}

// Appending Champion Page Content
var champlist = [];
fetch('http://ddragon.leagueoflegends.com/cdn/11.1.1/data/en_US/champion.json')
.then(res => res.json())
.then(function(data){
    let champion = data.data;

    var content1 = "";
    var content2 = "";
    var content3 = "";
    $.each(champion, function(key, obj) {
        const imagelink = `https://ddragon.leagueoflegends.com/cdn/11.1.1/img/champion/${key}.png`
        content1 = key;
        content2 = key + ", " + obj.title;
        content3 = obj.blurb;
        champlist.push([content1,content2,content3,imagelink])
        });

    $.each(champlist, function(index, value){
        $('.champion').append(
            $('<button/>')
            .attr("id", value[0])
            .attr("onclick", "changechamp(this.id)")
            .addClass("indiv-champ")
            .append(
                $('<img/>')
                .addClass("champ-image")
                .attr("src", value[3])
                .attr("alt", value[0])
                
            )
            .append(
                $('<h5/>')
                .addClass("champ-name")
                .text(value[0])
            )
        )

    });

})

// Appending Item Page Content
fetch('http://ddragon.leagueoflegends.com/cdn/11.1.1/data/en_US/item.json')
.then(res => res.json())
.then(function(data){
    let item = data.data;
    console.log(item)
    var itemlist = [];
    var itemname = [];
    $.each(item, function(key, obj) {
        const imagelink = `https://ddragon.leagueoflegends.com/cdn/11.1.1/img/item/${key}.png`
        if (itemname.includes(obj.name)){
        }
        else{
            itemname.push(obj.name)
            itemlist.push([key,obj.name,imagelink,obj.plaintext,obj.description,obj.gold.total,obj.gold.base,obj.gold.sell])
        }
        });
        console.log(itemlist)
    $.each(itemlist, function(index, value){
        $('#item').append(
            $('<div/>')
            .append(
                $('<button/>')
                .addClass("card")
                .attr("data-bs-toggle","modal")
                .attr("data-bs-target", ("#item" + index))
                .append(
                    $('<img/>')
                    .addClass("item-card-image")
                    .attr("src", value[2])
                    .attr("alt", value[1]),
                    $('<div/>')
                    .addClass("card-body")
                    .append(
                    $('<h6/>')
                    .addClass("card-title")
                    .text(value[1])
                )
            ),
            $('<div/>')
            .addClass("modal fade")
            .attr("id", ("item" + index))
            .attr("tabindex","-1")
            .attr("arialabelledby","exampleModalLabel")
            .attr("aria-hidden", "true")
            .append(
                $('<div/>')
                .addClass("modal-dialog modal-dialog-centered")
                .append(
                    $('<div/>')
                    .addClass("modal-content")
                    .append(
                        $('<div/>')
                        .addClass("modal-header")
                        .append(
                            $('<img/>')
                            .attr("src", value[2])
                            .attr("alt", value[1]),
                            $('<h5/>')
                            .addClass("modal-title")
                            .attr("id", "exampleModalLabel")
                            .text(value[1])
                        ),
                        $('<div/>')
                        .addClass("modal-body")
                        .append(value[3], $('<br>'))
                        .append(value[4], $('<br>'))
                        .append("Cost: {0} ({1})".format(value[5],value[6]))
                        .append($('<br>'), "Selling Price: " + value[7])
                    )
                )
            )
        ));
    });
})



// To Allow Text Formatting Function
String.prototype.format = function () {
    var args = arguments;
    return this.replace(/\{(\d+)\}/g, function (m, n) { return args[n]; });
    };
