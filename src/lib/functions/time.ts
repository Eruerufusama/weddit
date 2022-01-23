interface RedditTime {
    time: number,
    format: string,
}

export function getTimeSincePosted(timestamp: number): RedditTime {
    const currentTimestamp = Date.now() / 1000;
    const timeSincePostedInSeconds = currentTimestamp - timestamp;

    if (timeSincePostedInSeconds >= 60) {
        const timeSincePostedInMinutes = timeSincePostedInSeconds / 60;

        if (timeSincePostedInMinutes >= 60) {
            const timeSincePostedInHours = timeSincePostedInMinutes / 60;

            if (timeSincePostedInHours >= 24) {
                const timeSincePostedInDays = timeSincePostedInHours / 24;

                if (timeSincePostedInDays >= 7) {
                    const timeSincePostedInWeeks = timeSincePostedInDays / 7;

                    if (timeSincePostedInDays >= 30) {
                        const timeSincePostedInMonths = timeSincePostedInDays / 30;

                        if (timeSincePostedInDays >= 365) {
                            return {time: Math.round(timeSincePostedInDays) / 365, format: 'year' };
                        }
                        return { time: Math.round(timeSincePostedInMonths), format: 'month' };
                    }
                    return { time: Math.round(timeSincePostedInWeeks), format: 'week' };
                }
                return { time: Math.round(timeSincePostedInDays), format: 'day' };
            }
            return { time: Math.round(timeSincePostedInHours), format: 'hour' };
        }
        return { time: Math.round(timeSincePostedInMinutes), format: 'minute' };
    }
    return { time: Math.round(timeSincePostedInSeconds), format: 'second' };
}