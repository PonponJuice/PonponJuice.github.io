function sidemenu(rootDir){
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