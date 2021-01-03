fetch('http://ddragon.leagueoflegends.com/cdn/10.25.1/data/en_US/champion.json')
    .then(res => res.json())
    .then(function(data){
        let champion = data.data;
        console.log(champion);

        var champlist = [];
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
                .attr("type", "button")
                .addClass("btn btn-secondary")
                .attr("id", "champ-btn")
                .attr("data-bs-container", "body")
                .attr("data-bs-toggle", "popover")
                .attr("title", value[1])
                .attr("data-bs-trigger", "focus")
                .attr("data-bs-placement", "bottom")
                .attr("data-bs-content", value[2])
                .append(
                    $('<img/>')
                    .addClass("champ-image")
                    .attr("id", ("header" + index))
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
        console.log(item);

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

var popoverList = [];
$(document).ready(function(){
    $(document).one("click", function(){
        var popoverTriggerList = [].slice.call(document.querySelectorAll("[data-bs-toggle='popover']"))
        popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
        }) 
    });
});

setTimeout(function () {
    jQuery('#champ-container').trigger('click');
 }, 10);