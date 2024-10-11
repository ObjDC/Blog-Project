const move = document.getElementById("follow-mouse");

document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    move.animate({
        left: clientX + "px",
        top: clientY + "px"
    }, {
        duration: 500,
        fill: "forwards",
    });

}
