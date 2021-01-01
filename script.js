fetch('http://ddragon.leagueoflegends.com/cdn/10.25.1/data/en_US/champion.json')
    .then(res => res.json())
    .then(function(data){
        let champion = data.data;
        console.log(champion);

        var champlist = [];
        var content1 = "";
        var content2 = "";
        $.each(champion, function(key, obj) {
            const imagelink = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${key}_0.jpg`
            content1 = key + " , " + obj.title;
            content2 = obj.blurb;
            champlist.push([content1,content2,imagelink])
            });

        $.each(champlist, function(index, value){
            $('#champion').append(
                $('<div/>')
                .addClass("card")
                .append(
                $('<img/>')
                .addClass("champion-card-image")
                .attr("src", value[2])
                .attr("alt", value[0]),
                $('<div/>')
                .addClass("card-body")
                .append(
                $('<h5/>')
                .addClass("card-title")
                .text(value[0]),
                $('<p/>')
                .addClass("card-text")
                .text(value[1])
            )));
        });
    })


fetch('http://ddragon.leagueoflegends.com/cdn/10.25.1/data/en_US/item.json')
    .then(res => res.json())
    .then(function(data){
        let item = data.data;
        console.log(item);


 
        var itemlist = [];
        var value1 = "";
        var value2 = "";
        $.each(item, function(key, obj) {
            const imagelink = `https://ddragon.leagueoflegends.com/cdn/10.25.1/img/item/${key}.png`
            value1 = obj.name;
            value2 = obj.plaintext;
            itemlist.push([value1,value2,imagelink])
            });

        $.each(itemlist, function(index, value){
            $('#item').append(
                $('<div/>')
                .addClass("card")
                .append(
                $('<img/>')
                .addClass("item-card-image")
                .attr("src", value[2])
                .attr("alt", value[0]),
                $('<div/>')
                .addClass("card-body")
                .append(
                $('<h5/>')
                .addClass("card-title")
                .text(value[0]),
                $('<p/>')
                .addClass("card-text")
                .text(value[1])
            )));
        });

    })

