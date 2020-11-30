module.exports = {

    'inside-full-top': {
        blockedSizes: {
            dfp: [[994, 500]],
            appnexus: [[994, 500]]
        }

    },

    'inside-full': {
        sizes: {
            dfp: [[300,50],[320,50],[320,64],[336,280],[720,145],[760,190],[890,107]],
            appnexus: [[300,50],[320,50],[320,64],[336,280],[720,145],[760,190],[890,107]]
        },

        blockedSizes: {
            dfp: [[994, 500], [980, 800]],
            appnexus: [[994, 500], [980, 800]]
        }

    },


    'outside-right-pos': {
        sizes: {
            dfp: [[235, 120]],
            appnexus: []
        }
    },

    'outside-right': {
        // remove 500x1000 ADT-865
        blockedSizes: {
            dfp: [[500, 1000]],
            appnexus: [[500, 1000]]
        }
    }
};
