function max(values, F, L) {
    if (F == L) return values[F];
    return Math.max(
        values[F] + min(values, F + 1, L),
        values[L] + min(values, F, L - 1)
    );
}

function min(values, F, L) {
    if (F == L) return -values[F];
    return Math.min(
            - values[F] + max(values, F + 1, L),
            - values[L] + max(values, F, L - 1)
    );
}
