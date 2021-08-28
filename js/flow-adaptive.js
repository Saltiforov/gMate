new FlowAdaptive({
    fontRatio: 1440 / 10, // the best practice is to set fontRatio to base layout width / 10
    maxWidth: 1440,
    minWidth: 650,
    breakPoints: [
        {
            minWidth: 650,
            maxWidth: 900,
            fontRatio: 768 / 10,
        },
        {
            maxWidth: 649,
            fontRatio: 414 / 10,
        },
    ],
})
