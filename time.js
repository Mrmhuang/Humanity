function timeUntilNextClaim() {
    const now = new Date();
    const targetTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 20, 30, 0);
    if (now > targetTime) {
        targetTime.setDate(targetTime.getDate() + 1);
    }
    return Math.max((targetTime - now) / 1000, 0);
}