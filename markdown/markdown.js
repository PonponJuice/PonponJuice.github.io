$(function(){
    const $preview = $(".preview");

    const renderer = new marked.Renderer();

    renderer.link = (href , title , text) => {
        return `<a href="${href}" target="_blank">${text}</a>`;
    };

    marked.setOptions({
        renderer: renderer,
        breaks: true,
        sanitize: true,
        highlight: (code) => {
            return hljs.highlightAuto(code).value;
        },
    });

    $(".textarea").on("input",(e)=>{
        const text = e.target.value;

        const html = marked(text);

        $preview.empty().append(html);
    });

    const defaultText = `ここに表示されるよ`;

    $("textarea").text(defaultText).trigger("input");
});


