function sidemenu(rootDir){
    console.log("aaa");
    $.ajax({
        url: rootDir + "sidemenu.html",
        cache: false,
        async: false,
        dataType: 'html',
        success: function(html){
            html = html.replace(/\{\$root\}/g, rootDir);
            document.write(html);
        }
    });
}