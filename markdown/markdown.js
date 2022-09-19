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

    const defaultText = `# markdown 練習場

ここで markdown を練習出来ます

---

\`\`\`cpp
#include<bits/stdc++.h>
using namespace std;
int main(){

}
\`\`\`

![ponjuice](https://github.com/ponjuice2020/ponjuice2020.github.io/blob/main/image/ponjuice.jpeg?raw=true)

    `;

    $("textarea").text(defaultText).trigger("input");
});


