export function formatVotes(votes: number): string {
    const votesStr = votes.toString();

    if (votes >= 1000) {

        if (votes >= 10000) {

            if (votes >= 100000) {
                return `${votesStr[0]}${votesStr[1]}${votesStr[2]}k`;
            }
            return `${votesStr[0]}${votesStr[1]}.${votesStr[2]}k`;
        }
        return `${votesStr[0]}.${votesStr[1]}k`;
    }
    return votesStr;
};