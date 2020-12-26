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
            const imagelink = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${key}_0.jpg`
            console.log(key + " , " + obj.title);
            content1 = key + " , " + obj.title;
            content2 = obj.blurb;
            content3 = obj.image.full;
            champlist.push([content1,content2,imagelink])
            });

        console.log(champlist)


        });

