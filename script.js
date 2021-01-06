function changechamp(name){
    var changechamp = document.getElementById('champ')
    changechamp.innerHTML = "";
    var championlist = [];
    var statslist = [];
    champlist.forEach( char => {
        if (name === char[0]){
            fetch(`http://ddragon.leagueoflegends.com/cdn/10.25.1/data/en_US/champion/${char[0]}.json`)
                .then(res => res.json())
                .then(function(data){
                    let champ = data.data
                    var info_name = "";
                    var info_lore = "";
                    $.each(champ, function(key, obj) {
                        info_name = obj.name + ", " + obj.title;
                        info_lore = obj.lore;
                        console.log(obj.stats)
                        $.each(obj.stats, function(key,obj){
                            if (key !== "crit" && key !== "critperlevel"){
                                statslist.push(obj)
                            }
                        })
                        championlist.push(info_name, info_lore)
                        console.log(statslist)
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
                                        .attr("src", `https://ddragon.leagueoflegends.com/cdn/10.25.1/img/champion/${char[0]}.png`)
                                    ),
                                    $('<div/>')
                                    .addClass("champ-title")
                                    .append(
                                        $('<h5/>')
                                        .text(championlist[0])
                                    )
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
                        )  
                    )
                })
                        
            }            
                
        })
}

var champlist = [];
fetch('http://ddragon.leagueoflegends.com/cdn/10.25.1/data/en_US/champion.json')
    .then(res => res.json())
    .then(function(data){
        let champion = data.data;

        var content1 = "";
        var content2 = "";
        var content3 = "";
        $.each(champion, function(key, obj) {
            const imagelink = `https://ddragon.leagueoflegends.com/cdn/10.25.1/img/champion/${key}.png`
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


fetch('http://ddragon.leagueoflegends.com/cdn/10.25.1/data/en_US/item.json')
    .then(res => res.json())
    .then(function(data){
        let item = data.data;

        var itemlist = [];
        var value1 = "";
        var value2 = "";
        $.each(item, function(key, obj) {
            const imagelink = `https://ddragon.leagueoflegends.com/cdn/10.25.1/img/item/${key}.png`
            value1 = obj.name;
            itemlist.push([value1,imagelink])
            });

        $.each(itemlist, function(index, value){
            $('#item').append(
                $('<div/>')
                .addClass("card")
                .append(
                $('<img/>')
                .addClass("item-card-image")
                .attr("src", value[1])
                .attr("alt", value[0]),
                $('<div/>')
                .addClass("card-body")
                .append(
                $('<h5/>')
                .addClass("card-title")
                .text(value[0]),
            )));
        });

    })

String.prototype.format = function () {
    var args = arguments;
    return this.replace(/\{(\d+)\}/g, function (m, n) { return args[n]; });
    };