let title =  "Elzero" , Description = "Elzero Web School" , Date = "25/10";

let Contains = 
`
<div>
    <h3>${title}</h3>
    <p>${Description}</p>
    <span>${Date}</span>
</div>
`

document.write(Contains.repeat(4));