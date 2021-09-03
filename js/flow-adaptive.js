new FlowAdaptive({
    fontRatio: 1170 / 10, // the best practice is to set fontRatio to base layout width / 10
    maxWidth: 1171,
    minWidth: 650,
    breakPoints: [
        {
            maxWidth: 649,
            fontRatio: 414 / 10,
        },
    ],
})
